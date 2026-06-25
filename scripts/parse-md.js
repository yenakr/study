import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdFilename = 'education.md';
const mdPath = path.join(__dirname, '..', mdFilename);
const outputPath = path.join(__dirname, '../src/data/education/parsedData.json');

function parseMarkdown() {
  console.log(`파싱 시작: ${mdFilename} -> src/data/education/parsedData.json`);
  const content = fs.readFileSync(mdPath, 'utf8');
  const lines = content.split(/\r?\n/);

  const files = [];
  let currentFile = null;
  let currentPart = null;
  let currentSection = null;
  let sectionLines = [];

  function commitSection() {
    if (currentSection) {
      const processedLines = sectionLines.map(line => {
        if (line.startsWith('##### ')) {
          return '### ' + line.substring(6);
        }
        if (line.startsWith('###### ')) {
          return '### ' + line.substring(7);
        }
        return line;
      });

      let blocks = [];
      let currentBlock = [];
      
      for (let i = 0; i < processedLines.length; i++) {
        const line = processedLines[i];
        const trimmed = line.trim();
        
        if (trimmed === '') {
          if (currentBlock.length > 0) {
            blocks.push(currentBlock.join('\n'));
            currentBlock = [];
          }
        } else {
          // 리스트 아이템이나 헤더, 굵은 텍스트 시작 지점은 단락을 구분해주어 가독성을 높입니다.
          if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('### ') || trimmed.startsWith('**') || /^\d+\.\s/.test(trimmed)) {
            if (currentBlock.length > 0) {
              blocks.push(currentBlock.join('\n'));
              currentBlock = [];
            }
            currentBlock.push(line);
          } else {
            currentBlock.push(line);
          }
        }
      }
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
      }
      
      const cleanBlocks = blocks.map(b => b.trim()).filter(Boolean);
      
      currentSection.content = cleanBlocks.join('\n\n');
      currentPart.sections.push(currentSection);
      currentSection = null;
      sectionLines = [];
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // ## 파일명 파싱 (## 이승돌봄로봇...)
    if (line.startsWith('## ') && !line.startsWith('###')) {
      commitSection();
      const title = line.substring(3).trim();
      if (title === '전체 목차') continue;
      
      currentFile = {
        title: title,
        parts: []
      };
      files.push(currentFile);
      currentPart = null;
    }
    // ### Part 파싱 (### Part Ⅰ. 개발 배경 (원문 p.3-22))
    else if (line.startsWith('### ') && !line.startsWith('####')) {
      commitSection();
      if (!currentFile) continue;
      let title = line.substring(4).trim();
      title = title.replace(/\s*\(원문.*$/, ''); // 페이지 정보 제거
      
      currentPart = {
        title: title,
        sections: []
      };
      currentFile.parts.push(currentPart);
    }
    // #### Section 파싱 (#### 학습목표)
    else if (line.startsWith('#### ') && !line.startsWith('#####')) {
      commitSection();
      if (!currentPart) continue;
      const title = line.substring(5).trim();
      currentSection = {
        title: title,
        content: ''
      };
      sectionLines = [];
    }
    // 일반 내용 추가
    else {
      if (currentSection) {
        sectionLines.push(line);
      }
    }
  }
  commitSection();

  fs.writeFileSync(outputPath, JSON.stringify(files, null, 2), 'utf8');
  console.log('JSON 변환이 성공적으로 완료되었습니다!');
}

parseMarkdown();
