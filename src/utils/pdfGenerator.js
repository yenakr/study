import { jsPDF } from 'jspdf';
import { PROJECT_CONFIG } from '../config';
import { CORE_3_POLICIES } from '../data/policyData';

/**
 * CODE BLUE 학술 정책 제안서 PDF 다운로드 생성기
 * 2026 한양학술타운 LION 최종 결과물
 */
export function generatePolicyPDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Top Navy Bar
  doc.setFillColor(15, 23, 42); // Navy
  doc.rect(0, 0, 210, 36, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("CODE BLUE POLICY PROPOSAL", 15, 18);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("2026 Hanyang Academic Town LION Project | Final Report", 15, 26);

  // Subheader
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Emergency Medical Transport Delays: Core 3 Policy Proposals", 15, 46);

  doc.setLineWidth(0.5);
  doc.setDrawColor(30, 100, 212);
  doc.line(15, 50, 195, 50);

  // Project Info
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.setFont("helvetica", "normal");
  doc.text(`Team: ${PROJECT_CONFIG.teamName} (Nursing x Policy Studies)`, 15, 56);
  doc.text(`Members: Da-eun Kim, Yena Kim, Chae-yoon Lim, Jae-eun No`, 15, 61);
  doc.text(`Core Focus: Securing Essential Medical Specialists & Regional Duty Coordination`, 15, 66);

  // 3 Core Policies Content
  const pdfPolicies = [
    {
      num: "01",
      title: "Regional Rotational On-Duty Hospital System",
      goal: "Rapid identification of hospitals with on-duty specialists within the emergency care region.",
      summary: "Rotational designation of regional hospitals to secure in-hospital specialist response for severe emergencies."
    },
    {
      num: "02",
      title: "Mandatory Service Track for Essential Healthcare Admissions",
      goal: "Recruit students willing to enter essential fields from admission and link education, training, and service.",
      summary: "Undergraduate track for emergency medicine & critical surgery, comparing 10-year basic vs 15-year enhanced service."
    },
    {
      num: "03",
      title: "Legal & Dispute Support for Severe Emergency Care",
      goal: "Establish support systems to prevent disproportionate individual liability on medical staff accepting severe patients.",
      summary: "Compensation for unavoidable accidents without gross negligence, legal counseling, and liability insurance support."
    }
  ];

  let yPos = 76;

  pdfPolicies.forEach((p) => {
    // Card Box
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, yPos, 180, 36, 2, 2, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, yPos, 180, 36, 2, 2, 'D');

    // Title
    doc.setTextColor(30, 100, 212);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`[Policy ${p.num}] ${p.title}`, 20, yPos + 8);

    // Goal & Summary
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    doc.text(`- Target: ${p.goal}`, 22, yPos + 16);
    doc.text(`- Operations: ${p.summary}`, 22, yPos + 23);
    doc.setTextColor(100, 116, 139);
    doc.text(`- Key Principle: Ensuring continuous care capability rather than mere bed availability.`, 22, yPos + 30);

    yPos += 42;
  });

  // Shift Notice
  doc.setFillColor(239, 246, 255);
  doc.roundedRect(15, yPos, 180, 26, 2, 2, 'F');
  doc.setTextColor(30, 64, 175);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("Academic Evolution & Shift in Focus:", 20, yPos + 7);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text("Initial research examined bed info & IMIST-AMBO handover protocols (Initial 5 Tasks).", 20, yPos + 13);
  doc.text("Final policies strategically prioritize securing essential medical specialists, identifying this", 20, yPos + 18);
  doc.text("as the root cause preventing definitive care even after hospital arrival.", 20, yPos + 23);

  // Footer Disclaimer
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text("CODE BLUE | 2026 Hanyang Academic Town LION Project Final Deliverable", 105, 285, { align: 'center' });

  doc.save(PROJECT_CONFIG.pdfFileName);
}
