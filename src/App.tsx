import { useState, useMemo } from 'react';
import { 
  Search, ChevronRight, BookOpen, Compass, ChevronLeft, Heart, 
  CheckCircle, ArrowRight, UserCheck, Flame, RotateCcw,
  Smile, Activity, ClipboardList, Info, Sparkles, Check, ChevronDown, List
} from 'lucide-react';
import { careEducationData } from './data/education/parsedData';

const fileIcons = [
  <Activity size={24} style={{ color: '#0E4A84' }} />,   // 이승
  <Flame size={24} style={{ color: '#ef4444' }} />,      // 배설
  <Info size={24} style={{ color: '#10b981' }} />,       // 식사
  <RotateCcw size={24} style={{ color: '#f59e0b' }} />,  // 자세변경
  <Smile size={24} style={{ color: '#8b5cf6' }} />       // 커뮤니케이션
];

export default function App() {
  const [selectedFileIdx, setSelectedFileIdx] = useState<number | null>(null);
  const [selectedPartIdx, setSelectedPartIdx] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search logic
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
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasPrev = selectedFileIdx !== null && selectedPartIdx !== null && (selectedFileIdx > 0 || selectedPartIdx > 0);
  const hasNext = selectedFileIdx !== null && selectedPartIdx !== null && (selectedFileIdx < careEducationData.length - 1 || selectedPartIdx < careEducationData[selectedFileIdx].parts.length - 1);

  const getShortTitle = (title: string) => {
    return title.split('을 사용하는')[0] || title;
  };

  // Helper to parse line prefix bullet and format list
  const renderFormattedLine = (line: string, index: number) => {
    const trimmed = line.trim();
    if (!trimmed) return null;

    // Headings like ### Heading
    if (trimmed.startsWith('### ')) {
      const headingText = trimmed.replace(/^###\s+/, '');
      return (
        <h3 key={index} style={{ fontSize: '20px', fontWeight: '800', color: '#0E4A84', marginTop: '28px', marginBottom: '14px', borderBottom: '2px solid #0E4A84', paddingBottom: '6px' }}>
          {headingText}
        </h3>
      );
    }

    // Bold standalone phrases (often headers in original raw md)
    const isBoldHeader = trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 100;
    if (isBoldHeader) {
      const cleanBold = trimmed.replace(/\*\*/g, '');
      return (
        <h4 key={index} style={{ fontSize: '17px', fontWeight: 'bold', color: '#334155', marginTop: '20px', marginBottom: '10px' }}>
          {cleanBold}
        </h4>
      );
    }

    // Table Row detection (columns separated by multiple spaces or tabs or |)
    const isTableLine = trimmed.includes('|') || trimmed.split(/\s{2,}/).length > 2;
    if (isTableLine && trimmed.startsWith('§') === false && trimmed.startsWith('구분') === false && trimmed.startsWith('위험') === false) {
      const cols = trimmed.split(/\||\s{2,}/).map(c => c.trim()).filter(Boolean);
      if (cols.length >= 2) {
        return (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderBottom: '1px solid #f1f5f9', padding: '10px 0', gap: '16px' }}>
            <span style={{ fontWeight: 'bold', color: '#0E4A84', fontSize: '15px' }}>{cols[0]}</span>
            <span style={{ color: '#334155', fontSize: '15px', lineHeight: '1.65' }}>{cols.slice(1).join(' - ')}</span>
          </div>
        );
      }
    }

    // List elements matching specific indicators
    const listMatch = trimmed.match(/^([§Ÿ❍•\-\*])\s*(.*)$/);
    if (listMatch) {
      const marker = listMatch[1];
      const rest = listMatch[2];
      
      let markerStyle = {};
      if (marker === '§') {
        markerStyle = { backgroundColor: '#e0f2fe', color: '#0E4A84', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', marginRight: '8px' };
      } else {
        markerStyle = { color: '#0E4A84', marginRight: '8px', fontWeight: 'bold' };
      }

      return (
        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '8px', marginBottom: '8px' }}>
          <span style={markerStyle}>{marker === '§' ? '주요항목' : '•'}</span>
          <span style={{ fontSize: '16px', lineHeight: '1.65', color: '#334155', fontWeight: '500' }}>{rest}</span>
        </div>
      );
    }

    // Paragraph Titles like 1. 1.1 1.2
    const sectionHeadingMatch = trimmed.match(/^([0-9]+\.[0-9]+|[0-9]+\s|[0-9]+\.[0-9]+\.[0-9]+)\s*(.*)$/);
    if (sectionHeadingMatch) {
      const num = sectionHeadingMatch[1];
      const titleText = sectionHeadingMatch[2];
      return (
        <h4 key={index} style={{ fontSize: '18px', fontWeight: '800', color: '#0E4A84', marginTop: '24px', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px' }}>
          <span style={{ marginRight: '8px', color: '#64748b' }}>{num}</span>
          {titleText}
        </h4>
      );
    }

    return (
      <p key={index} style={{ fontSize: '16px', lineHeight: '1.7', color: '#334155', marginBottom: '16px', fontWeight: '500', textIndent: '4px' }}>
        {trimmed}
      </p>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc', width: '100%', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Primary Sticky Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => { setSelectedFileIdx(null); setSelectedPartIdx(null); }}>
          <div style={{ backgroundColor: '#0E4A84', padding: '8px', borderRadius: '8px', color: '#ffffff', display: 'flex', alignItems: 'center' }}>
            <Heart size={20} fill="currentColor" />
          </div>
          <span style={{ fontSize: '18px', fontWeight: '800', color: '#0E4A84', letterSpacing: '-0.5px' }}>돌봄로봇 온라인 학습관</span>
        </div>
        
        {/* Navigation Dropdown on Mobile */}
        {selectedFileIdx !== null && (
          <div style={{ position: 'relative' }} className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#ffffff', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', color: '#334155' }}
            >
              <List size={16} /> 목차선택 <ChevronDown size={14} />
            </button>
            {mobileMenuOpen && (
              <div style={{ position: 'absolute', right: 0, top: '40px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', width: '260px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 110 }}>
                {careEducationData[selectedFileIdx].parts.map((part, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => selectPart(selectedFileIdx, pIdx)}
                    style={{ textAlign: 'left', padding: '8px 12px', border: 'none', borderRadius: '8px', backgroundColor: selectedPartIdx === pIdx ? '#f0f9ff' : 'transparent', color: selectedPartIdx === pIdx ? '#0E4A84' : '#475569', fontSize: '13px', fontWeight: selectedPartIdx === pIdx ? 'bold' : '600', cursor: 'pointer' }}
                  >
                    {part.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Global breadcrumb & Search box */}
      <header style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '14px 24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
          <button 
            onClick={() => { setSelectedFileIdx(null); setSelectedPartIdx(null); }} 
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 'bold', outline: 'none' }}
          >
            돌봄로봇 학습자료
          </button>
          {currentFile && (
            <>
              <ChevronRight size={16} color="#475569" />
              <button 
                onClick={() => setSelectedPartIdx(null)} 
                style={{ background: 'none', border: 'none', color: '#f8fafc', cursor: 'pointer', outline: 'none' }}
              >
                {getShortTitle(currentFile.title)}
              </button>
            </>
          )}
          {currentPart && (
            <>
              <ChevronRight size={16} color="#475569" />
              <span style={{ color: '#38bdf8' }}>{currentPart.title}</span>
            </>
          )}
        </div>

        {/* Global Search Bar */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
          <input
            type="text"
            placeholder="본문 키워드 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px 8px 36px', fontSize: '13px', color: '#f8fafc', outline: 'none' }}
          />
          <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '10px' }} />
        </div>
      </header>

      {/* Search results drawer */}
      {searchQuery.trim() && (
        <section style={{ backgroundColor: '#ffffff', borderBottom: '2px solid #e2e8f0', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
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
                  style={{ textAlign: 'left', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#ffffff', cursor: 'pointer', outline: 'none' }}
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

      {/* Main Workspace Area */}
      <div style={{ flex: 1, display: 'flex', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '24px', position: 'relative' }}>
        
        {/* Left sticky Sidebar (desktop only) */}
        {selectedFileIdx !== null && (
          <aside style={{ width: '280px', paddingRight: '24px', borderRight: '1px solid #e2e8f0', flexShrink: 0, display: 'none' }} className="lg:block">
            <div style={{ position: 'sticky', top: '100px' }}>
              <button 
                onClick={() => { setSelectedFileIdx(null); setSelectedPartIdx(null); }}
                style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                ← 파일 목록으로 이동
              </button>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0E4A84', marginBottom: '20px', lineHeight: '1.4' }}>
                {getShortTitle(careEducationData[selectedFileIdx].title)}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Part 구성 목차</div>
                {careEducationData[selectedFileIdx].parts.map((part, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => selectPart(selectedFileIdx, pIdx)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: selectedPartIdx === pIdx ? 'bold' : '600',
                      color: selectedPartIdx === pIdx ? '#0E4A84' : '#475569',
                      backgroundColor: selectedPartIdx === pIdx ? '#e0f2fe' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.15s'
                    }}
                  >
                    <BookOpen size={15} style={{ flexShrink: 0, color: selectedPartIdx === pIdx ? '#0E4A84' : '#94a3b8' }} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{part.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Content detail rendering */}
        <main style={{ flex: 1, paddingLeft: (selectedFileIdx !== null ? '24px' : '0'), minWidth: 0 }}>
          
          {selectedFileIdx === null ? (
            /* 1. Main Dashboard (File Cards & Table of Contents) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px 0' }}>
              
              {/* Main Headline */}
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ backgroundColor: '#e0f2fe', color: '#0E4A84', fontSize: '13px', fontWeight: 'bold', padding: '6px 16px', borderRadius: '9999px', alignSelf: 'center', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} /> 돌봄 교육자료 공식 배포관
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#0E4A84', letterSpacing: '-0.75px' }}>돌봄로봇 학습자료 센터</h1>
                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.65', fontWeight: '500' }}>
                  고령자 및 돌봄자를 위한 온라인 학습 사이트입니다.<br />
                  각 영역을 선택하여 깔끔하게 정리된 핵심 본문과 챕터별 정리 요약을 편하게 공부해보세요.
                </p>
              </div>

              {/* Grid cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                {careEducationData.map((file, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedFileIdx(idx); setSelectedPartIdx(null); }}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '28px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '200px',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0E4A84';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', backgroundColor: '#f0f9ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {fileIcons[idx] || <Compass size={24} />}
                      </div>
                      <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', lineHeight: '1.4' }}>
                        {getShortTitle(file.title)}
                      </h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '13px', color: '#94a3b8', width: '100%', marginTop: '16px' }}>
                      <span>총 {file.parts.length}개 Part 구성</span>
                      <span style={{ color: '#0E4A84', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '2px' }}>
                        학습하기 <ArrowRight size={14} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : selectedPartIdx === null ? (
            /* 2. File Index (Chapters menu inside file) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <button
                  onClick={() => setSelectedFileIdx(null)}
                  style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', marginBottom: '8px' }}
                >
                  ← 파일 목록으로 돌아가기
                </button>
                <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0E4A84', lineHeight: '1.3' }}>
                  {careEducationData[selectedFileIdx].title}
                </h1>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px' }}>
                <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>학습할 파트를 고르세요</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {careEducationData[selectedFileIdx].parts.map((part, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => selectPart(selectedFileIdx, pIdx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 24px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0E4A84'; e.currentTarget.style.backgroundColor = '#f8fafc'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#ffffff'; }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <BookOpen size={18} color="#0E4A84" />
                        <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '16px' }}>{part.title}</span>
                      </div>
                      <ChevronRight size={18} color="#cbd5e1" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* 3. Detailed study view structured as requested */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                <div style={{ fontSize: '13px', color: '#0E4A84', fontWeight: 'bold', marginBottom: '4px' }}>
                  {getShortTitle(currentFile!.title)}
                </div>
                <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3' }}>
                  {currentPart!.title}
                </h1>
              </div>

              {/* Renders Goal, Contents, Core learning, Summary in sequence */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {currentPart!.sections.map((section, sIdx) => {
                  
                  if (section.title === '학습목표') {
                    return (
                      <div 
                        key={sIdx}
                        style={{
                          backgroundColor: '#f0f9ff',
                          borderLeft: '5px solid #0E4A84',
                          borderRadius: '0 12px 12px 0',
                          padding: '24px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}
                      >
                        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0E4A84', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <UserCheck size={20} />
                          {section.title}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {section.content.split('\n').map((line, idx) => {
                            const clean = line.replace(/^[§Ÿ❍•\-\*]\s*/, '').trim();
                            if (!clean) return null;
                            return (
                              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <Check size={16} style={{ color: '#0E4A84', marginTop: '4px', flexShrink: 0 }} />
                                <span style={{ fontSize: '16px', lineHeight: '1.65', color: '#1e293b', fontWeight: '600' }}>{clean}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  if (section.title === '학습내용') {
                    return (
                      <div 
                        key={sIdx}
                        style={{
                          backgroundColor: '#f8fafc',
                          border: '1px dashed #cbd5e1',
                          borderLeft: '5px solid #64748b',
                          borderRadius: '0 12px 12px 0',
                          padding: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}
                      >
                        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          <ClipboardList size={18} />
                          이번 Part에서 배우는 내용
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {section.content.split('\n').map((line, idx) => {
                            const clean = line.replace(/^[§Ÿ❍•\-\*]\s*/, '').trim();
                            if (!clean) return null;
                            return (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '6px', height: '6px', backgroundColor: '#64748b', borderRadius: '50%' }} />
                                <span style={{ fontSize: '15px', color: '#475569', fontWeight: '600' }}>{clean}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  if (section.title === '학습하기') {
                    return (
                      <div 
                        key={sIdx}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '16px',
                          padding: '32px',
                          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '24px'
                        }}
                      >
                        <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0E4A84', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid #0E4A84', paddingBottom: '12px' }}>
                          <BookOpen size={22} />
                          {section.title}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {section.content.split('\n').map((line, idx) => renderFormattedLine(line, idx))}
                        </div>
                      </div>
                    );
                  }

                  if (section.title === '정리하기') {
                    return (
                      <div 
                        key={sIdx}
                        style={{
                          backgroundColor: '#e6fffa',
                          borderLeft: '5px solid #10b981',
                          borderRadius: '0 12px 12px 0',
                          padding: '28px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}
                      >
                        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f766e', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle size={20} />
                          핵심 정리
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {section.content.split('\n').map((line, idx) => renderFormattedLine(line, idx))}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Prev / Next Pagination Control */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '24px', marginTop: '24px' }}>
                <button
                  onClick={handlePrevPart}
                  disabled={!hasPrev}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    backgroundColor: '#ffffff',
                    color: hasPrev ? '#334155' : '#94a3b8',
                    cursor: hasPrev ? 'pointer' : 'not-allowed',
                    opacity: hasPrev ? 1 : 0.5
                  }}
                >
                  <ChevronLeft size={16} />
                  이전 Part
                </button>
                <button
                  onClick={handleNextPart}
                  disabled={!hasNext}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    backgroundColor: '#ffffff',
                    color: hasNext ? '#334155' : '#94a3b8',
                    cursor: hasNext ? 'pointer' : 'not-allowed',
                    opacity: hasNext ? 1 : 0.5
                  }}
                >
                  다음 Part
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
