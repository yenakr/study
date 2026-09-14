import { Pool } from 'pg';

// ONLY use environment variables for DB credentials to prevent credential exposure
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

let pool = null;
if (connectionString) {
  pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });
}

// Auto-create table schema on first initialization if pool exists
let isTableInitialized = false;

async function initDB() {
  if (!pool || isTableInitialized) return;
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS surveys (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        q1_experience TEXT NOT NULL,
        q2_inconvenience TEXT NOT NULL,
        q3_cause TEXT NOT NULL,
        q4_awareness TEXT NOT NULL,
        q5_improvement TEXT NOT NULL,
        q6_comment TEXT
      );
    `);
    isTableInitialized = true;
  } finally {
    client.release();
  }
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Content-Type'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // If no DB connection environment variable configured, return graceful fallback
  if (!pool) {
    if (req.method === 'GET') {
      return res.status(200).json({ success: true, total: 0, causes: [], improvements: [] });
    }
    if (req.method === 'POST') {
      return res.status(200).json({
        success: true,
        message: '시민 의견이 정상적으로 수집되었습니다 (데모 모드).'
      });
    }
  }

  try {
    await initDB();

    // GET: Fetch survey statistics
    if (req.method === 'GET') {
      const client = await pool.connect();
      try {
        const totalResult = await client.query('SELECT COUNT(*)::int AS total FROM surveys');
        const q3Result = await client.query(`
          SELECT q3_cause, COUNT(*)::int AS count 
          FROM surveys GROUP BY q3_cause ORDER BY count DESC
        `);
        const q5Result = await client.query(`
          SELECT q5_improvement, COUNT(*)::int AS count 
          FROM surveys GROUP BY q5_improvement ORDER BY count DESC
        `);

        return res.status(200).json({
          success: true,
          total: totalResult.rows[0]?.total || 0,
          causes: q3Result.rows,
          improvements: q5Result.rows
        });
      } finally {
        client.release();
      }
    }

    // POST: Submit new survey response
    if (req.method === 'POST') {
      const {
        q1_experience,
        q2_inconvenience,
        q3_cause,
        q4_awareness,
        q5_improvement,
        q6_comment,
        agreed
      } = req.body || {};

      if (!agreed) {
        return res.status(400).json({ error: 'Consent required' });
      }

      const client = await pool.connect();
      try {
        const insertResult = await client.query(
          `INSERT INTO surveys (q1_experience, q2_inconvenience, q3_cause, q4_awareness, q5_improvement, q6_comment)
           VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, created_at`,
          [
            q1_experience || '',
            q2_inconvenience || '',
            q3_cause || '',
            q4_awareness || '',
            q5_improvement || '',
            q6_comment || ''
          ]
        );

        return res.status(200).json({
          success: true,
          message: '의견이 데이터베이스에 성공적으로 저장되었습니다.',
          id: insertResult.rows[0].id,
          createdAt: insertResult.rows[0].created_at
        });
      } finally {
        client.release();
      }
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database connection or operation error:', error);
    return res.status(500).json({
      error: 'Database operation failed',
      details: error.message
    });
  }
}
