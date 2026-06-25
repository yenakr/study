import { useState, useMemo } from 'react';
import { Search, ChevronRight, BookOpen, Compass, ChevronLeft, Heart } from 'lucide-react';
import { careEducationData } from './data/education/parsedData';

export default function App() {
  const [selectedFileIdx, setSelectedFileIdx] = useState<number | null>(null);
  const [selectedPartIdx, setSelectedPartIdx] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Search logic across all files, parts, and sections
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const results: { fileIdx: number; partIdx: number; fileTitle: string; partTitle: string; sectionTitle: string; matchedContent: string }[] = [];

    careEducationData.forEach((file, fileIdx) => {
      file.parts.forEach((part, partIdx) => {
        part.sections.forEach((section) => {
          if (
            section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            part.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            file.title.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            const idx = section.content.toLowerCase().indexOf(searchQuery.toLowerCase());
            let snippet = '';
            if (idx !== -1) {
              const start = Math.max(0, idx - 40);
              const end = Math.min(section.content.length, idx + searchQuery.length + 60);
              snippet = (start > 0 ? '...' : '') + section.content.substring(start, end).replace(/\n/g, ' ') + (end < section.content.length ? '...' : '');
            } else {
              snippet = section.content.substring(0, 100).replace(/\n/g, ' ') + '...';
            }

            results.push({
              fileIdx,
              partIdx,
              fileTitle: file.title,
              partTitle: part.title,
              sectionTitle: section.title,
              matchedContent: snippet,
            });
          }
        });
      });
    });

    return results;
  }, [searchQuery]);

  const selectPart = (fileIdx: number, partIdx: number) => {
    setSelectedFileIdx(fileIdx);
    setSelectedPartIdx(partIdx);
    setSearchQuery('');
  };

  const currentFile = selectedFileIdx !== null ? careEducationData[selectedFileIdx] : null;
  const currentPart = (selectedFileIdx !== null && selectedPartIdx !== null) ? careEducationData[selectedFileIdx].parts[selectedPartIdx] : null;

  const handlePrevPart = () => {
    if (selectedFileIdx === null || selectedPartIdx === null) return;
    if (selectedPartIdx > 0) {
      setSelectedPartIdx(selectedPartIdx - 1);
    } else if (selectedFileIdx > 0) {
      const prevFileIdx = selectedFileIdx - 1;
      setSelectedFileIdx(prevFileIdx);
      setSelectedPartIdx(careEducationData[prevFileIdx].parts.length - 1);
    }
  };

  const handleNextPart = () => {
    if (selectedFileIdx === null || selectedPartIdx === null) return;
    const filePartsCount = careEducationData[selectedFileIdx].parts.length;
    if (selectedPartIdx < filePartsCount - 1) {
      setSelectedPartIdx(selectedPartIdx + 1);
    } else if (selectedFileIdx < careEducationData.length - 1) {
      setSelectedFileIdx(selectedFileIdx + 1);
      setSelectedPartIdx(0);
    }
  };

  const hasPrev = selectedFileIdx !== null && selectedPartIdx !== null && (selectedFileIdx > 0 || selectedPartIdx > 0);
  const hasNext = selectedFileIdx !== null && selectedPartIdx !== null && (selectedFileIdx < careEducationData.length - 1 || selectedPartIdx < careEducationData[selectedFileIdx].parts.length - 1);

  const getShortTitle = (title: string) => {
    return title.split('을 사용하는')[0] || title;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc', width: '100%' }}>
      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => { setSelectedFileIdx(null); setSelectedPartIdx(null); }}>
          <div style={{ backgroundColor: '#0e4a84', padding: '8px', borderRadius: '8px', color: '#ffffff', display: 'flex', alignItems: 'center' }}>
            <Heart size={20} fill="currentColor" />
          </div>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>돌봄로봇 온라인 학습관</span>
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>교육학습 자료실</div>
      </nav>

      {/* Top Header / Breadcrumbs & Search */}
      <header style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '14px 24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
          <button 
            onClick={() => { setSelectedFileIdx(null); setSelectedPartIdx(null); }} 
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', fontWeight: 'bold', outline: 'none' }}
          >
            돌봄로봇 학습 목록
          </button>
          {currentFile && (
            <>
              <ChevronRight size={16} color="#94a3b8" />
              <button 
                onClick={() => setSelectedPartIdx(null)} 
                style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', outline: 'none', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              >
                {getShortTitle(currentFile.title)}
              </button>
            </>
          )}
          {currentPart && (
            <>
              <ChevronRight size={16} color="#94a3b8" />
              <span style={{ color: '#38bdf8', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentPart.title.split(' (')[0]}
              </span>
            </>
          )}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
          <input
            type="text"
            placeholder="본문 내용 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px 8px 36px', fontSize: '13px', color: '#f8fafc', outline: 'none' }}
          />
          <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '10px' }} />
        </div>
      </header>

      {/* Search Results */}
      {searchQuery.trim() && (
        <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={20} color="#64748b" />
            검색 결과 ({searchResults.length}건)
          </h2>
          {searchResults.length === 0 ? (
            <p style={{ color: '#64748b', fontSize: '14px' }}>일치하는 본문 텍스트가 없습니다.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', maxHeight: '350px', overflowY: 'auto' }}>
              {searchResults.map((res, index) => (
                <button
                  key={index}
                  onClick={() => selectPart(res.fileIdx, res.partIdx)}
                  style={{ textAlign: 'left', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#ffffff', cursor: 'pointer', outline: 'none', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0284c7'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                >
                  <div style={{ fontSize: '11px', color: '#0284c7', fontWeight: 'bold', marginBottom: '4px' }}>
                    {getShortTitle(res.fileTitle)} &gt; {res.partTitle}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>{res.sectionTitle}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.6' }}>
                    {res.matchedContent}
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Content Layout */}
      <div style={{ flex: 1, display: 'flex', flexDirection: selectedFileIdx !== null ? 'row' : 'column', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '24px', flexWrap: 'wrap' }}>
        
        {/* Left Sidebar for chapter select */}
        {selectedFileIdx !== null && (
          <aside style={{ width: '280px', paddingRight: '24px', borderRight: '1px solid #e2e8f0', flexShrink: 0, marginBottom: '24px' }}>
            <button 
              onClick={() => { setSelectedFileIdx(null); setSelectedPartIdx(null); }}
              style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              ← 파일 목록으로 이동
            </button>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '24px', lineHeight: '1.4' }}>
              {getShortTitle(careEducationData[selectedFileIdx].title)}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>챕터 목록</div>
              {careEducationData[selectedFileIdx].parts.map((part, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setSelectedPartIdx(pIdx)}
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: selectedPartIdx === pIdx ? 'bold' : '600',
                    color: selectedPartIdx === pIdx ? '#0369a1' : '#475569',
                    backgroundColor: selectedPartIdx === pIdx ? '#f0f9ff' : 'transparent',
                    border: 'none',
                    borderLeft: selectedPartIdx === pIdx ? '4px solid #0284c7' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}
                >
                  <BookOpen size={16} style={{ marginTop: '2px', flexShrink: 0, color: selectedPartIdx === pIdx ? '#0284c7' : '#94a3b8' }} />
                  <span>{part.title}</span>
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* Content detail area */}
        <main style={{ flex: 1, paddingLeft: selectedFileIdx !== null ? '24px' : '0', minWidth: '320px' }}>
          
          {selectedFileIdx === null ? (
            /* File List Cards */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '24px 0' }}>
              <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ backgroundColor: '#f0f9ff', color: '#0369a1', fontSize: '12px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '9999px', alignSelf: 'center' }}>
                  Education Material
                </span>
                <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>돌봄로봇 교육자료 학습관</h1>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                  돌봄로봇 도입 배경부터 상세 관리 요령까지 원문 그대로 학습하실 수 있습니다. 원하시는 돌봄 주제를 선택하여 시작하세요.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                {careEducationData.map((file, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedFileIdx(idx); setSelectedPartIdx(null); }}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '24px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'between',
                      height: '200px',
                      transition: 'all 0.2s',
                      boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0284c7';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                      <div style={{ width: '40px', height: '40px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                        <Compass size={20} style={{ margin: 'auto' }} />
                      </div>
                      <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', lineHeight: '1.4' }}>
                        {getShortTitle(file.title)}
                      </h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '12px', color: '#94a3b8', width: '100%' }}>
                      <span>총 {file.parts.length}개 Part 구성</span>
                      <span style={{ color: '#0284c7', fontWeight: 'bold' }}>학습하기 →</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : selectedPartIdx === null ? (
            /* Chapters List view inside a file */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <button
                  onClick={() => setSelectedFileIdx(null)}
                  style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', marginBottom: '8px' }}
                >
                  ← 파일 목록으로 돌아가기
                </button>
                <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3' }}>
                  {careEducationData[selectedFileIdx].title}
                </h1>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '16px' }}>학습할 파트를 고르세요</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {careEducationData[selectedFileIdx].parts.map((part, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setSelectedPartIdx(pIdx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px',
                        border: '1px solid #f1f5f9',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0284c7'; e.currentTarget.style.backgroundColor = '#f8fafc'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.backgroundColor = '#ffffff'; }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <BookOpen size={18} color="#94a3b8" />
                        <span style={{ fontWeight: 'bold', color: '#334155', fontSize: '15px' }}>{part.title}</span>
                      </div>
                      <ChevronRight size={18} color="#cbd5e1" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Part Detailed View with Sections */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#0284c7', fontWeight: 'bold', marginBottom: '4px' }}>
                  {getShortTitle(currentFile!.title)}
                </div>
                <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3' }}>
                  {currentPart!.title}
                </h1>
              </div>

              {/* Sections: 학습목표 -> 학습내용 -> 학습하기 -> 정리하기 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {currentPart!.sections.map((section, sIdx) => {
                  let sectionBorder = '4px solid #cbd5e1';
                  let sectionBg = '#ffffff';
                  if (section.title === '학습목표') {
                    sectionBorder = '4px solid #0284c7';
                    sectionBg = 'rgba(2, 132, 199, 0.02)';
                  } else if (section.title === '학습내용') {
                    sectionBorder = '4px solid #4f46e5';
                    sectionBg = 'rgba(79, 70, 229, 0.02)';
                  }

                  return (
                    <div 
                      key={sIdx} 
                      style={{
                        borderLeft: sectionBorder,
                        backgroundColor: sectionBg,
                        borderRadius: '0 12px 12px 0',
                        padding: '24px',
                        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                      }}
                    >
                      <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#475569' }} />
                        {section.title}
                      </h2>
                      <div style={{ color: '#334155', fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-wrap', fontWeight: '500' }}>
                        {section.content}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Pagination Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '24px', marginTop: '24px' }}>
                <button
                  onClick={handlePrevPart}
                  disabled={!hasPrev}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    backgroundColor: '#ffffff',
                    color: hasPrev ? '#334155' : '#94a3b8',
                    cursor: hasPrev ? 'pointer' : 'not-allowed',
                    opacity: hasPrev ? 1 : 0.5
                  }}
                >
                  <ChevronLeft size={16} />
                  이전 챕터
                </button>
                <button
                  onClick={handleNextPart}
                  disabled={!hasNext}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    backgroundColor: '#ffffff',
                    color: hasNext ? '#334155' : '#94a3b8',
                    cursor: hasNext ? 'pointer' : 'not-allowed',
                    opacity: hasNext ? 1 : 0.5
                  }}
                >
                  다음 챕터
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
