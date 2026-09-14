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

  const primaryNavy = '#0F172A';
  const brandBlue = '#1E64D4';
  const textDark = '#1E293B';
  const textGray = '#475569';

  // Title Block
  doc.setFillColor(15, 23, 42); // Navy
  doc.rect(0, 0, 210, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("CODE BLUE POLICY PROPOSAL", 15, 22);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("2026 Hanyang Academic Town LION Project", 15, 30);

  // Subheader
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Emergency Medical Transport Improvement Proposals", 15, 52);

  doc.setLineWidth(0.5);
  doc.setDrawColor(30, 100, 212);
  doc.line(15, 56, 195, 56);

  // Team info
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(`Team: ${PROJECT_CONFIG.teamName} (${PROJECT_CONFIG.majors})`, 15, 63);
  doc.text(`Members: Da-eun Kim, Yena Kim, Chae-yoon Lim, Jae-eun No`, 15, 68);
  doc.text(`Date: 2026. 09 | Project: Hanyang Academic Town LION`, 15, 73);

  // Policy Items
  const proposals = [
    {
      num: "01",
      title: "Capacity-Reflecting Real-Time Acceptance Information System",
      issue: "Current system shows simple bed count without reflecting actual operating surgeons or ICUs.",
      proposal: "Integrate real-time surgeon duty and operating room availability into 119 dispatch view.",
      effect: "Prevents secondary transfer (ping-ponging) and preserves golden time for severe patients."
    },
    {
      num: "02",
      title: "Timestamp and Non-Acceptance Reason Display",
      issue: "Information update latency causes 119 dispatches to rely on unverified bed data.",
      proposal: "Mandate real-time update timestamping and explicit refusal reason tagging.",
      effect: "Enhances system transparency and enables accurate hospital matching by 119."
    },
    {
      num: "03",
      title: "Standardized Handover Framework (119 to ER)",
      issue: "Discrepancies in verbal handover format lead to missing critical patient symptom timelines.",
      proposal: "Establish standardized SBAR digital handover protocol between 119 and ER medical staff.",
      effect: "Ensures seamless continuity of emergency care upon hospital arrival."
    },
    {
      num: "04",
      title: "Severity & Definitive Care-Based Transport Protocol",
      issue: "Tendency to favor largest hospitals creates congestion for non-severe cases.",
      proposal: "Implement strict triage-based transport matching tailored to local definitive care capability.",
      effect: "Protects tertiary ER capacity for life-threatening emergencies."
    },
    {
      num: "05",
      title: "Enhancement of Local Emergency Initial Resuscitation & Transfer",
      issue: "Long-distance transport without initial stabilization increases mortality risk.",
      proposal: "Strengthen initial resuscitation capacity of regional ERs prior to definitive transfer.",
      effect: "Stabilizes vital signs locally before long-distance specialized transport."
    }
  ];

  let yPos = 85;

  proposals.forEach((p) => {
    // Card Box
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, yPos, 180, 34, 2, 2, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, yPos, 180, 34, 2, 2, 'D');

    // Title
    doc.setTextColor(30, 100, 212);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`[Policy ${p.num}] ${p.title}`, 20, yPos + 7);

    // Details
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    
    doc.text(`- Current Issue: ${p.issue}`, 22, yPos + 14);
    doc.text(`- Proposal: ${p.proposal}`, 22, yPos + 21);
    doc.text(`- Expected Effect: ${p.effect}`, 22, yPos + 28);

    yPos += 39;
  });

  // Footer Disclaimer
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text("CODE BLUE | Academic Research Output - Not intended for real-time medical triage or advice.", 105, 285, { align: 'center' });

  // Save PDF
  doc.save(PROJECT_CONFIG.pdfFileName);
}
