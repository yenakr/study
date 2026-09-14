// CODE BLUE 프로젝트 글로벌 설정 파일

export const PROJECT_CONFIG = {
  teamName: "CODE BLUE",
  projectTitle: "중증응급환자 이송 지연 문제 개선을 위한 응급의료체계 분석과 정책 제안",
  academicTitle: "2026 한양학술타운 LION 프로젝트",
  majors: "간호학 × 정책학",
  teamMembers: [
    { name: "김다은", role: "연구원" },
    { name: "김예나", role: "연구원" },
    { name: "임채윤", role: "연구원" },
    { name: "노재은", role: "연구원" }
  ],
  
  // 외부 Google Forms 연결용 URL (필요 시 수정)
  googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf_example/viewform",
  enableExternalGoogleForms: false, // true로 설정 시 외부 Google Forms로 직접 이동 버튼 활성화

  // PDF 제안서 다운로드 파일명
  pdfFileName: "CODE_BLUE_중증응급환자_이송지연_개선_정책제안서.pdf"
};
