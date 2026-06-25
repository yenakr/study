import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdFilename = 'education.md';
const mdPath = path.join(__dirname, '..', mdFilename);
const jsonPath = path.join(__dirname, '../src/data/education/parsedData.json');

function deparse() {
  console.log(`역변환 시작: src/data/education/parsedData.json -> ${mdFilename}`);
  if (!fs.existsSync(jsonPath)) {
    console.error('Error: JSON 데이터 파일이 존재하지 않습니다.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  let mdContent = '';
  mdContent += '# 돌봄로봇 교육자료 학습자료 정리본\n\n';
  mdContent += '- 구성: 파일별 / 챕터별\n';
  mdContent += '- 포함: 학습목표, 학습내용, 학습하기, 정리하기\n';
  mdContent += '- 제외: 사전퀴즈, 평가퀴즈, 참고문헌/인터넷자료\n';
  mdContent += '- 원문 PDF 텍스트 추출 기반으로 정리함\n';
  mdContent += '- 편집: 불필요한 줄바꿈 제거, 참고문헌/출처 정리, 목록 기호 정리, 학습하기 소제목 분리\n\n';

  // 전체 목차 생성
  mdContent += '## 전체 목차\n\n';
  data.forEach(file => {
    mdContent += `- ${file.title}\n`;
    file.parts.forEach(part => {
      mdContent += `  - ${part.title}\n`;
    });
  });
  mdContent += '\n';

  // 각 파일/파트/섹션 데이터 작성
  data.forEach(file => {
    mdContent += `## ${file.title}\n\n`;
    file.parts.forEach(part => {
      mdContent += `### ${part.title}\n\n`;
      part.sections.forEach(section => {
        mdContent += `#### ${section.title}\n\n`;
        
        // content 처리
        const contentLines = section.content.split('\n');
        const processedLines = contentLines.map(line => {
          const trimmed = line.trim();
          // JSON 내의 '### ' 제목들을 마크다운의 알맞은 깊이(#####, ######)로 역변환합니다.
          if (trimmed.startsWith('### ')) {
            const afterHeader = trimmed.substring(4);
            if (/^\d+\.\d+/.test(afterHeader)) {
              return '###### ' + afterHeader;
            } else {
              return '##### ' + afterHeader;
            }
          }
          return line;
        });
        
        mdContent += processedLines.join('\n') + '\n\n';
      });
    });
  });

  fs.writeFileSync(mdPath, mdContent, 'utf8');
  console.log('마크다운 파일로 역변환 및 업데이트가 완료되었습니다!');
}

deparse();
