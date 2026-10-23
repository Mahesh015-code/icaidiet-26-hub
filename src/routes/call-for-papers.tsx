import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { Navbar } from "@/components/Navbar";
import { SubmissionGuidelinesSection } from "@/components/SubmissionGuidelinesSection";
import {
  BrainCircuit,
  LineChart,
  Database,
  Cpu,
  Network,
  ShieldCheck,
  Bot,
  Sprout,
  CalendarDays,
  ExternalLink,
  Download,
  Video,
  FileText,
  FileCode,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/call-for-papers")({
  head: () => ({
    meta: [
      { title: "Call For Papers and Tracks — ICAITETM'26" },
      {
        name: "description",
        content:
          "Call For Papers for ICAITETM'26 — Eight conference tracks covering AI, Machine Learning, Data Science, IoT, Robotics and Emerging Technologies.",
      },
    ],
  }),
  component: CallForPapersPage,
});

const TRACKS = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Smart Systems",
    topics: [
      "Generative AI & Foundation Models",
      "Deep Learning & Neural Network Architectures",
      "Reinforcement Learning & Autonomous Agents",
      "AI Transparency, Ethics & Reliability",
      "Knowledge Engineering & Automated Reasoning",
    ],
  },
  {
    icon: LineChart,
    title: "Machine Learning & Data Analytics",
    topics: [
      "Machine Learning Methods & Learning Strategies",
      "Transfer Learning & Cross-Domain Applications",
      "Automated Model Development & Optimization",
      "Time-Series Forecasting & Trend Analysis",
      "Feature Selection & High-Dimensional Data Analysis",
    ],
  },
  {
    icon: Database,
    title: "Data Science & Decision Making",
    topics: [
      "Big Data Processing & Real-Time Analytics",
      "Business Intelligence & Decision Support",
      "Visual Analytics & Data Interpretation",
      "Data Governance, Privacy & Ethical Practices",
      "Cloud-Based Data Processing & Scalable Pipelines",
    ],
  },
  {
    icon: Cpu,
    title: "IoT, Edge Computing & Embedded Systems",
    topics: [
      "TinyML & Energy-Efficient Edge AI",
      "Smart Sensors & Wearable Technologies",
      "AI Hardware Acceleration & Embedded Systems",
      "Distributed Computing & Fog-Cloud Integration",
      "Smart Cities & Industrial IoT Systems",
    ],
  },
  {
    icon: Network,
    title: "Communication Systems & Networking",
    topics: [
      "5G / 6G Networks & Wireless Technologies",
      "AI-Based Networking & Software-Defined Networks",
      "Optical Networks & Photonic Technologies",
      "RF Engineering, Microwave & Satellite Systems",
      "Cognitive Radio & Wireless Spectrum Management",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Information Security",
    topics: [
      "AI-Driven Threat Intelligence & Intrusion Detection",
      "Zero-Trust Architecture & Identity Management",
      "Cloud Security & Secure Multiparty Computation",
      "Digital Forensics & Incident Response",
      "Post-Quantum Cryptography & Blockchain Security",
    ],
  },
  {
    icon: Bot,
    title: "Robotics, Automation & Smart Manufacturing",
    topics: [
      "Autonomous Robots & Computer Vision",
      "Collaborative Robots & Smart Manufacturing",
      "Digital Twins & Industrial Automation",
      "Robot Motion Planning & Intelligent Control",
      "3D Printing, AI Diagnostics & Predictive Maintenance",
    ],
  },
  {
    icon: Sprout,
    title: "Emerging Technologies, Sustainability & AI Management",
    topics: [
      "AI for Clean Energy & Climate Prediction",
      "Quantum Technologies & Advanced Computing",
      "Healthcare AI & Personalized Medicine",
      "Extended Reality (AR/VR) & Spatial Computing",
      "Green Technologies & Circular Economy",
    ],
  },
];

const DATES = [
  { label: "Paper Submission Deadline", date: "14th October 2026" },
  { label: "Acceptance Notification", date: "20th October 2026" },
  { label: "Early Bird Registration", date: "22nd October 2026" },
  { label: "Late Registration Period", date: "23rd – 28th October 2026" },
  { label: "Final Manuscript Notification", date: "20th November 2026" },
  { label: "Conference Date", date: "18th December 2026", highlight: true },
];

const SUBMISSION_OPTIONS = [
  {
    label: "Internal Submissions (MEC)",
    href: "https://www.acadera.co.in/submit/mec-icaitetm26-6d36d146",
  },
  {
    label: "External Submissions (Other Colleges)",
    href: "https://www.acadera.co.in/submit/mec-icaitetm26-da7f0cd3",
  },
  {
    label: "Foreign Submissions",
    href: "https://www.acadera.co.in/submit/mec-icaitetm26-7b1d2699",
  },
];

function CallForPapersPage() {
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      <Navbar activeSection="tracks" />

      {submissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-blue-200 bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-blue-600 uppercase">
                  Choose Submission Type
                </p>
                <h3 className="mt-1 font-serif text-2xl font-bold text-blue-950">Acadera Portal</h3>
              </div>
              <button
                type="button"
                onClick={() => setSubmissionModalOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                aria-label="Close submission options"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              {SUBMISSION_OPTIONS.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl bg-blue-600 px-5 py-4 text-left text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                  onClick={() => setSubmissionModalOpen(false)}
                >
                  <span>{option.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <section className="relative w-full py-16 sm:py-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            Technical Research Areas
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
            Call For Papers — Eight Core Tracks
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Submit original, unpublished research papers across foundational AI, intelligent
            cybernetics and engineering breakthroughs.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-3">
            <button
              type="button"
              onClick={() => setSubmissionModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700"
            >
              Submit via Acadera Portal
              <ExternalLink className="h-4 w-4" />
            </button>
            <a
              href="https://youtu.be/zy2JHdf3ahs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-xs transition-all hover:bg-blue-50"
            >
              Watch Guidelines Video
              <Video className="h-4 w-4 text-red-600" />
            </a>
            <a
              href="https://www.novelcheckr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#16A34A]/20 transition-all hover:bg-[#15803D]"
            >
              Check Plagiarism (₹99)
              <ShieldCheck className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Tracks Grid */}
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blue-950">
              Select Your Presentation Track
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Peer-reviewed and published in Wiley Scopus-indexed conference proceedings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {TRACKS.map((t, idx) => (
              <div
                key={t.title}
                className="rounded-2xl border border-blue-100 bg-white p-7 shadow-xs hover:shadow-md transition-all hover:border-blue-300"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <t.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Track 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-blue-950 leading-snug">
                      {t.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc marker:text-blue-500">
                  {t.topics.map((tp) => (
                    <li key={tp} className="leading-relaxed">
                      {tp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates Timeline */}
        <div className="rounded-2xl border border-blue-100 bg-white p-8 sm:p-10 shadow-sm">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Important Milestones
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-blue-950">
              Submission and Registration Schedule
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATES.map((d) => (
              <div
                key={d.label}
                className={`rounded-xl p-5 border ${
                  d.highlight
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-slate-50 border-slate-200/80 text-slate-900"
                }`}
              >
                <p
                  className={`text-xs font-semibold ${d.highlight ? "text-blue-100" : "text-slate-500"}`}
                >
                  {d.label}
                </p>
                <p
                  className={`mt-1 font-serif text-lg font-bold ${d.highlight ? "text-white" : "text-blue-950"}`}
                >
                  {d.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Author Submission Guidelines, Prep Rules, Strict AI Policy, and Templates */}
      <SubmissionGuidelinesSection />

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400 text-center text-xs">
        <p className="text-white font-serif font-bold text-base mb-2">
          ICAITETM'26 — Muthayammal Engineering College (Autonomous)
        </p>
        <p>© 2026 ICAITETM'26. All rights reserved.</p>
      </footer>
    </div>
  );
}
