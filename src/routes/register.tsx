import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ExternalLink,
  ShieldCheck,
  Video,
  Send,
  FileText,
  FileCode,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SubmissionPortalHero } from "@/components/SubmissionPortalHero";
import { SubmissionGuidelinesSection } from "@/components/SubmissionGuidelinesSection";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register and Paper Submission Portal — ICAITETM'26" },
      {
        name: "description",
        content:
          "Submit your paper and register for ICAITETM'26 — International Conference on AI-Driven Transformation in Engineering, Technology and Management. Hosted by Muthayammal Engineering College (Autonomous). Published Partner: Wiley, Indexed in Scopus.",
      },
    ],
  }),
  component: Register,
});

const FEES = [
  { category: "UG/PG/Research Scholars", cost: "₹ 1,000" },
  { category: "Publication Fee", cost: "₹ 10,450" },
  { category: "Faculty/Industry Delegates", cost: "₹ 1,250" },
  { category: "Foreign", cost: "$ 400" },
];

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      {/* 1. Header with Muthayammal Logo and Blue-White Theme */}
      <Navbar activeSection="register" />

      {/* 2. Welcome Banner and 4 Action Buttons in Blue-White Theme */}
      <SubmissionPortalHero />

      {/* 3. Detailed Author Portal and Resources Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            Official Submission Channels and Guidelines
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
            Author Resource Center
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Everything you need to format, check originality and submit your research manuscript for
            ICAITETM'26.
          </p>
        </div>

        {/* 3 Prominent Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {/* Item 1: Acadera Paper Submission */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Send className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-200">
                  Primary Portal
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-950">
                1. Internal Submissions (MEC)
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Submit your original research through the official Muthayammal Engineering College
                submission route. Fast-track peer-review process and status tracking.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://www.acadera.co.in/submit/mec-icaitetm26-6d36d146"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
              >
                Internal Submissions
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Item 2: Submission Guidelines (YouTube) */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Video className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700 border border-red-200">
                  Video Guide
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-950">
                2. Submission Guidelines
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Watch the complete step-by-step video guide explaining manuscript formatting,
                citation style and how to upload via the portal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://youtu.be/zy2JHdf3ahs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-900 transition-all hover:bg-blue-50"
              >
                Watch on YouTube
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Item 3: NovelCheckr Plagiarism Checker */}
          <div className="rounded-2xl border-2 border-[#9aef9a] bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#16A34A]/10 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16A34A] text-white">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-[#16A34A] px-3 py-1 text-xs font-extrabold text-white animate-pulse">
                  Only ₹99
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">3. Plagiarism Checker</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Verify similarity score prior to submission via NovelCheckr. Conference guidelines
                strictly require similarity under 15% with a valid report.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://www.novelcheckr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#15803D]"
              >
                Check at NovelCheckr (₹99)
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded YouTube Guidelines Player in Blue and Dark Frame */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-blue-900/30 bg-slate-900 text-white shadow-xl">
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/30 px-3 py-1 text-xs font-bold text-red-400">
                <Video className="h-3.5 w-3.5" /> Video Tutorial
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-white">
                How to Format and Submit Your Manuscript
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ensure your manuscript meets Wiley publishing requirements and passes editorial
                screening on first submission. Watch our walkthrough on YouTube.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/Conference_paper_Template.docx"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-200" /> Download Word Template
                </a>
                <a
                  href="/Wiley_LaTeX_Template.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors"
                >
                  <FileCode className="h-4 w-4 text-blue-300" /> Download LaTeX Template
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black border border-slate-800 shadow-2xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/zy2JHdf3ahs"
                  title="ICAITETM'26 Submission Guidelines Video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Author Submission Guidelines, Manuscript Prep and Strict AI Policy */}
        <div className="mb-16">
          <SubmissionGuidelinesSection />
        </div>

        {/* 4. Registration Fees */}
        <div className="mx-auto mb-16 max-w-3xl">
          {/* Fee Structure */}
          <div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-blue-950">Registration Fees</h2>
              <p className="mt-1 text-xs text-slate-500">Early bird closes 22nd Oct 2026</p>

              <div className="mt-5 space-y-2.5">
                {FEES.map((f) => (
                  <div
                    key={f.category}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm shadow-xs"
                  >
                    <p className="font-semibold text-slate-800 text-xs">{f.category}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Amount</span>
                      <span className="font-bold text-blue-700">{f.cost}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-950">
                <p className="font-bold flex items-center gap-1.5 text-blue-900">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Scopus Indexed Proceedings
                </p>
                <p className="mt-1 leading-relaxed text-blue-900/80">
                  All accepted and presented papers published with ISBN and DOI as per publisher
                  norms.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-[#9aef9a] bg-[#f0fff0] p-4 text-xs text-green-950">
                <p className="font-bold flex items-center gap-1.5 text-green-900">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" /> Plagiarism Requirement
                </p>
                <p className="mt-1 leading-relaxed text-green-900/80">
                  Similarity must be under 15%. Use{" "}
                  <a
                    href="https://www.novelcheckr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-green-800"
                  >
                    NovelCheckr (₹99)
                  </a>{" "}
                  to generate a valid Turnitin plagiarism report.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Key Highlights / Dates */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-950 font-serif font-bold text-lg">
              <Calendar className="h-5 w-5 text-blue-600" /> Tentative Date
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">18th December 2026</p>
            <p className="text-xs text-slate-500 mt-1">Presentation tracks and keynotes</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-950 font-serif font-bold text-lg">
              <Clock className="h-5 w-5 text-blue-600" /> Mode of Conduct
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Hybrid Mode (Online and On-Campus)
            </p>
            <p className="text-xs text-slate-500 mt-1">Global digital streams and live sessions</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-950 font-serif font-bold text-lg">
              <MapPin className="h-5 w-5 text-blue-600" /> Venue
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Muthayammal Engineering College (Autonomous)
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Muthayammal Engineering College (Autonomous), Rasipuram, Tamil Nadu-637408
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <p className="font-serif text-xl font-bold text-white">
            ICAITETM<span className="text-blue-400">'26</span>
          </p>
          <p className="max-w-xl text-xs sm:text-sm text-slate-400">
            International Conference on AI-Driven Transformation in Engineering, Technology and
            Management. Hosted by Muthayammal Engineering College (Autonomous). Published Partner:
            Wiley. Indexed in Scopus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 pt-2">
            <a
              href="https://www.acadera.co.in/submit/mec-icaitetm26-6d36d146"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Internal Submissions (MEC)
            </a>
            <span>•</span>
            <a
              href="https://youtu.be/zy2JHdf3ahs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Submission Guidelines
            </a>
            <span>•</span>
            <a
              href="https://www.novelcheckr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8bff8b]"
            >
              NovelCheckr (₹99)
            </a>
            <span>•</span>
            <a
              href="/MEC-Conference.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Brochure
            </a>
            <span>•</span>
            <a
              href="https://mec.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              MEC Website
            </a>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            © 2026 ICAITETM'26, Muthayammal Engineering College (Autonomous). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
