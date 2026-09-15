import { jsPDF } from 'jspdf';
import { PROJECT_CONFIG } from '../config';

/**
 * CODE BLUE 학술 정책 제안서 PDF 다운로드 생성기
 */
export function generatePolicyPDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Title Block
  doc.setFillColor(15, 23, 42); // Navy
  doc.rect(0, 0, 210, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("CODE BLUE POLICY PROPOSAL", 15, 20);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("2026 Hanyang Academic Town LION Project", 15, 28);

  // Subheader
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Proposals for Improving Emergency Medical Transport Delays", 15, 50);

  doc.setLineWidth(0.5);
  doc.setDrawColor(30, 100, 212);
  doc.line(15, 54, 195, 54);

  // Team info
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Team: ${PROJECT_CONFIG.teamName} (${PROJECT_CONFIG.fullAcademicTitle})`, 15, 61);
  doc.text(`Members: Da-eun Kim, Yena Kim, Chae-yoon Lim, Jae-eun No`, 15, 66);
  doc.text(`Date: 2026. 09 | Hanyang Academic Town LION Project`, 15, 71);

  // Policy Items
  const proposals = [
    {
      num: "01",
      title: "Capacity-Reflecting Real-Time Acceptance Information System",
      issue: "Lack of surgeon and ICU availability info leads to ping-pong transfers.",
      proposal: "Integrate disease-specific surgeon duty, operating room, and ICU real-time status.",
      effect: "Reduces hospital search time and ensures golden hour arrival for severe cases."
    },
    {
      num: "02",
      title: "Mandatory Timestamping & Reason Standardisation for Non-Acceptance",
      issue: "Information update latency and ambiguous rejection reasons delay dispatch decisions.",
      proposal: "Mandate timestamping and standard refusal reason codes (e.g. surgeon in surgery).",
      effect: "Ensures data reliability and provides evidence for regional resource allocation."
    },
    {
      num: "03",
      title: "IMIST-AMBO Standard Handover Protocol Between 119 & ER",
      issue: "Inconsistent verbal handover causes omission of onset time and vital sign trends.",
      proposal: "Adopt IMIST-AMBO pre-arrival digital transmission and 30-60 second verbal handover.",
      effect: "Eliminates info gaps and enables immediate treatment preparation prior to arrival."
    },
    {
      num: "04",
      title: "Triage & Definitive Care-Based Transport Protocol",
      issue: "Favoring tertiary centers exclusively causes ER overcrowding for non-severe cases.",
      proposal: "Implement strict triage-matched transport guidelines to regional definitive care centers.",
      effect: "Protects regional trauma center capacity and optimizes emergency medical resources."
    },
    {
      num: "05",
      title: "Regional Responsibility Initial Stabilization & Transfer Network",
      issue: "Local ERs struggle with initial stabilization and manual transfer hospital matching.",
      proposal: "Establish 24/7 transfer coordination hubs and legal burden mitigation guidelines.",
      effect: "Allows local ERs to focus on resuscitation while hubs secure definitive transfer."
    }
  ];

  let yPos = 80;

  proposals.forEach((p) => {
    // Card Box
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, yPos, 180, 35, 2, 2, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, yPos, 180, 35, 2, 2, 'D');

    // Title
    doc.setTextColor(30, 100, 212);
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "bold");
    doc.text(`[Policy ${p.num}] ${p.title}`, 20, yPos + 7);

    // Details
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    
    doc.text(`- Issue: ${p.issue}`, 22, yPos + 14);
    doc.text(`- Proposal: ${p.proposal}`, 22, yPos + 21);
    doc.text(`- Effect: ${p.effect}`, 22, yPos + 28);

    yPos += 39;
  });

  // Footer Disclaimer
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text("CODE BLUE | Academic Policy Brief 2026 - Hanyang Academic Town LION", 105, 285, { align: 'center' });

  // Save PDF
  doc.save(PROJECT_CONFIG.pdfFileName);
}
