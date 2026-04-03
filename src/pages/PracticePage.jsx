import { useState, useCallback, useRef } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import Preview from "../components/Preview";
import InstructionPanel from "../components/InstructionPanel";
import { isGeminiReady, validateWithAI, generateModuleQuestions } from "../services/gemini";
import { namingModule } from "../modules/namingModule";
import { bemModule } from "../modules/bemModule";
import { flexboxModule } from "../modules/flexboxModule";
import { gridModule } from "../modules/gridModule";
import { responsiveModule } from "../modules/responsiveModule";
import { specificityModule } from "../modules/specificityModule";
import { semanticsModule } from "../modules/semanticsModule";
import { animationsModule } from "../modules/animationsModule";
import { typographyModule } from "../modules/typographyModule";
import { boxModelModule } from "../modules/boxModelModule";
import { cssVariablesModule } from "../modules/cssVariablesModule";
import { pseudoModule } from "../modules/pseudoModule";
import { filtersModule } from "../modules/filtersModule";
import { accessibilityModule } from "../modules/accessibilityModule";
import { logicalPropertiesModule } from "../modules/logicalPropertiesModule";
import ExpectedPreview from "../components/ExpectedPreview";

// ── Static registry ───────────────────────────────────────────────────────────
const STATIC_MODULES = [
  namingModule, bemModule, flexboxModule, gridModule,
  responsiveModule, specificityModule, semanticsModule,
  animationsModule, typographyModule, boxModelModule,
  cssVariablesModule, pseudoModule, filtersModule,
  accessibilityModule, logicalPropertiesModule,
];

// ── Persist AI modules across route navigations via sessionStorage ────────────
const SS_KEY = "ai_practice_modules";
function loadAiModules() {
  try { return JSON.parse(sessionStorage.getItem(SS_KEY) || "[]"); } catch { return []; }
}
function saveAiModules(modules) {
  try { sessionStorage.setItem(SS_KEY, JSON.stringify(modules)); } catch {}
}

// ── Persist per-module scores across route navigations ───────────────────────
// Shape: { [moduleId]: { [questionIndex]: { score, status, feedback } } }
const SCORES_KEY = "module_scores";
function loadAllScores() {
  try { return JSON.parse(sessionStorage.getItem(SCORES_KEY) || "{}"); } catch { return {}; }
}
function loadModuleScores(moduleId) {
  return loadAllScores()[moduleId] || {};
}
function saveQuestionScore(moduleId, qIndex, entry) {
  const all = loadAllScores();
  all[moduleId] = { ...(all[moduleId] || {}), [qIndex]: entry };
  try { sessionStorage.setItem(SCORES_KEY, JSON.stringify(all)); } catch {}
}
function clearModuleScores(moduleId) {
  const all = loadAllScores();
  delete all[moduleId];
  try { sessionStorage.setItem(SCORES_KEY, JSON.stringify(all)); } catch {}
}

// All modules combined (static + AI-generated)
export function getAllModules() {
  return [...STATIC_MODULES, ...loadAiModules()];
}


export const MODULE_REGISTRY = STATIC_MODULES;

// ── Helper: colour palette per module colour key ─────────────────────────────
const palette = {
  blue: {
    accent: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700", border: "border-blue-200",
    btn: "bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-blue-200",
    bar: "from-blue-500 to-indigo-500",
  },
  purple: {
    accent: "bg-purple-500", text: "text-purple-600", bg: "bg-purple-50",
    badge: "bg-purple-100 text-purple-700", border: "border-purple-200",
    btn: "bg-linear-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-purple-200",
    bar: "from-purple-500 to-violet-500",
  },
  emerald: {
    accent: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200",
    btn: "bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-emerald-200",
    bar: "from-emerald-500 to-teal-500",
  },
  amber: {
    accent: "bg-amber-500", text: "text-amber-600", bg: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700", border: "border-amber-200",
    btn: "bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-200",
    bar: "from-amber-500 to-orange-400",
  },
  rose: {
    accent: "bg-rose-500", text: "text-rose-600", bg: "bg-rose-50",
    badge: "bg-rose-100 text-rose-700", border: "border-rose-200",
    btn: "bg-linear-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-rose-200",
    bar: "from-rose-500 to-pink-500",
  },
  teal: {
    accent: "bg-teal-500", text: "text-teal-600", bg: "bg-teal-50",
    badge: "bg-teal-100 text-teal-700", border: "border-teal-200",
    btn: "bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 shadow-teal-200",
    bar: "from-teal-500 to-cyan-500",
  },
  indigo: {
    accent: "bg-indigo-500", text: "text-indigo-600", bg: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700", border: "border-indigo-200",
    btn: "bg-linear-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 shadow-indigo-200",
    bar: "from-indigo-500 to-blue-500",
  },
  orange: {
    accent: "bg-orange-500", text: "text-orange-600", bg: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700", border: "border-orange-200",
    btn: "bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-200",
    bar: "from-orange-500 to-red-400",
  },
  sky: {
    accent: "bg-sky-500", text: "text-sky-600", bg: "bg-sky-50",
    badge: "bg-sky-100 text-sky-700", border: "border-sky-200",
    btn: "bg-linear-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 shadow-sky-200",
    bar: "from-sky-500 to-blue-400",
  },
  fuchsia: {
    accent: "bg-fuchsia-500", text: "text-fuchsia-600", bg: "bg-fuchsia-50",
    badge: "bg-fuchsia-100 text-fuchsia-700", border: "border-fuchsia-200",
    btn: "bg-linear-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 shadow-fuchsia-200",
    bar: "from-fuchsia-500 to-purple-500",
  },
  violet: {
    accent: "bg-violet-500", text: "text-violet-600", bg: "bg-violet-50",
    badge: "bg-violet-100 text-violet-700", border: "border-violet-200",
    btn: "bg-linear-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 shadow-violet-200",
    bar: "from-violet-500 to-purple-500",
  },
  cyan: {
    accent: "bg-cyan-500", text: "text-cyan-600", bg: "bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700", border: "border-cyan-200",
    btn: "bg-linear-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 shadow-cyan-200",
    bar: "from-cyan-500 to-sky-500",
  },
  lime: {
    accent: "bg-lime-500", text: "text-lime-600", bg: "bg-lime-50",
    badge: "bg-lime-100 text-lime-700", border: "border-lime-200",
    btn: "bg-linear-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 shadow-lime-200",
    bar: "from-lime-500 to-green-400",
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// Route: /practice  →  module list
// Route: /practice/:moduleId  →  question grid for that module
// Route: /practice/:moduleId/:qIndex  →  full editor view for one question
// ═══════════════════════════════════════════════════════════════════════════════

export default function PracticePage() {
  const { moduleId, qIndex } = useParams();

  // AI modules live here so they survive sub-route navigation within the tree
  const [aiModules, setAiModules] = useState(loadAiModules);

  const addAiModule = (mod) => {
    const next = [...aiModules, mod];
    setAiModules(next);
    saveAiModules(next);
  };

  const allModules = [...STATIC_MODULES, ...aiModules];

  // ── /practice — list all modules ──────────────────────────────────────────
  if (!moduleId) {
    return <ModuleListPage allModules={allModules} onAddModule={addAiModule} />;
  }

  const mod = allModules.find((m) => m.id === moduleId);
  if (!mod) return <Navigate to="/practice" replace />;

  // ── /practice/:moduleId — question grid ───────────────────────────────────
  if (qIndex === undefined) {
    return <ModuleQuestionsPage module={mod} />;
  }

  // ── /practice/:moduleId/results — score summary ───────────────────────────
  if (qIndex === "results") {
    return <ModuleResultsPage module={mod} />;
  }

  // ── /practice/:moduleId/:qIndex — editor ──────────────────────────────────
  const idx = Number(qIndex);
  if (isNaN(idx) || idx < 0 || idx >= mod.questions.length) {
    return <Navigate to={`/practice/${moduleId}`} replace />;
  }

  return (
    <ModuleQuestionEditor
      key={`${moduleId}-${idx}`}
      module={mod}
      questionIndex={idx}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ModuleListPage — cards for every module + "Create with AI" card
// ─────────────────────────────────────────────────────────────────────────────
function ModuleListPage({ allModules, onAddModule }) {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Practice Modules</h1>
          <p className="text-slate-500 text-sm mt-1">
            Sharpen your knowledge of frontend best practices — naming, BEM, and more.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white
                     bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
                     rounded-xl shadow-sm shadow-indigo-200 transition-all cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create Module
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Existing module cards */}
        {allModules.map((mod) => {
          const c = palette[mod.color] || palette.blue;
          return (
            <div
              key={mod.id}
              onClick={() => navigate(`/practice/${mod.id}`)}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md
                         transition-all duration-200 overflow-hidden cursor-pointer"
            >
              <div className={`h-1 w-full ${c.accent}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center text-2xl`}>
                    {mod.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                    {mod.difficulty}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1.5 group-hover:text-indigo-600 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                  {mod.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    📝 {mod.questions.length} questions
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/practice/${mod.id}`); }}
                    className={`px-3 py-1.5 text-xs font-semibold text-white rounded-lg ${c.btn} transition-all shadow-sm cursor-pointer`}
                  >
                    View Module →
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* + Create with AI card */}
        <div
          onClick={() => setShowCreateModal(true)}
          className="group relative bg-white rounded-2xl border-2 border-dashed border-slate-200
                     hover:border-indigo-300 hover:shadow-md transition-all duration-200
                     overflow-hidden cursor-pointer flex flex-col items-center justify-center
                     min-h-52 gap-3 p-6 text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
              Create Custom Module
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Enter any topic and AI generates<br />10 practice questions for you
            </p>
          </div>
          {isGeminiReady() ? (
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              ✨ AI Ready
            </span>
          ) : (
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              🔑 API Key Required
            </span>
          )}
        </div>
      </div>

      {/* Create Module Modal */}
      {showCreateModal && (
        <CreateModuleModal
          onClose={() => setShowCreateModal(false)}
          onCreated={(mod) => {
            onAddModule(mod);
            setShowCreateModal(false);
            navigate(`/practice/${mod.id}`);
          }}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CreateModuleModal — topic input → AI generates 10 questions → module added
// ─────────────────────────────────────────────────────────────────────────────
const QUICK_TOPICS = [
  { label: "CSS Flexbox", icon: "📐" },
  { label: "CSS Grid", icon: "🔲" },
  { label: "Tailwind CSS", icon: "🌊" },
  { label: "Accessibility (a11y)", icon: "♿" },
  { label: "Responsive Design", icon: "📱" },
  { label: "CSS Variables", icon: "🎨" },
  { label: "HTML Semantics", icon: "🏗️" },
  { label: "CSS Specificity", icon: "🎯" },
];

const AI_COLORS = ["emerald", "amber", "rose", "blue", "purple"];
const AI_ICONS  = ["✨", "🚀", "🔥", "💡", "🎓", "⚡", "🧩", "🌟"];

function CreateModuleModal({ onClose, onCreated }) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Mixed");
  const [stage, setStage] = useState("form"); // "form" | "generating" | "error"
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const canGenerate = topic.trim().length >= 3;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    if (!isGeminiReady()) {
      setError("Please set your Gemini API key first (click the key icon in the top bar).");
      return;
    }
    setStage("generating");
    setError("");
    try {
      const promptTopic = difficulty === "Mixed"
        ? topic.trim()
        : `${topic.trim()} (${difficulty} difficulty)`;

      const rawQuestions = await generateModuleQuestions(promptTopic);

      // Shape questions to match challenge format
      const questions = rawQuestions.map((q, i) => ({
        id: i + 1,
        title: q.title || `Question ${i + 1}`,
        difficulty: q.difficulty || difficulty === "Mixed" ? (i < 5 ? "Easy" : "Medium") : difficulty,
        instructions: q.instructions || q.question || "",
        initialCode: q.initialCode || q.incorrectCode || "",
        solutionCode: q.solutionCode || q.correctCode || "",
        hints: Array.isArray(q.hints) ? q.hints : [q.hint || "Think carefully about the best practice."],
      }));

      const slug = topic.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      const uid = `ai-${slug}-${Date.now()}`;
      const color = AI_COLORS[Math.floor(Math.random() * AI_COLORS.length)];
      const icon  = AI_ICONS[Math.floor(Math.random() * AI_ICONS.length)];

      const newModule = {
        id: uid,
        title: topic.trim(),
        description: `AI-generated module covering ${topic.trim()}. 10 hands-on questions to practise best practices.`,
        difficulty: difficulty === "Mixed" ? "Mixed" : difficulty,
        icon,
        color,
        questions,
        isAiGenerated: true,
      };

      onCreated(newModule);
    } catch (err) {
      setError(err.message || "Generation failed. Please try again.");
      setStage("form");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800">Create Practice Module</h2>
              <p className="text-xs text-slate-400">AI generates 10 coding questions on your topic</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={stage === "generating"}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400
                       hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-40"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {stage === "generating" ? (
            /* ── Generating state ── */
            <div className="flex flex-col items-center justify-center py-10 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600
                              flex items-center justify-center animate-pulse">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-800">Generating your module…</p>
                <p className="text-xs text-slate-400 mt-1">
                  AI is crafting 10 questions on <strong>{topic}</strong>
                </p>
              </div>
              <div className="flex gap-1.5 mt-2">
                {[0,1,2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              {/* Topic input */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                  Topic / Subject
                </label>
                <input
                  ref={inputRef}
                  autoFocus
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  placeholder="e.g. CSS Flexbox, BEM Naming, Tailwind Grid…"
                  className="w-full px-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200
                             rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                             placeholder:text-slate-400 transition"
                />
                <p className="text-xs text-slate-400 mt-1.5">Min. 3 characters. Press Enter to generate.</p>
              </div>

              {/* Quick topic chips */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Quick Topics</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_TOPICS.map(({ label, icon }) => (
                    <button
                      key={label}
                      onClick={() => setTopic(label)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border
                                  transition-all cursor-pointer ${
                        topic === label
                          ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                      }`}
                    >
                      {icon} {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty picker */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Difficulty</p>
                <div className="flex gap-2">
                  {["Mixed", "Easy", "Medium", "Hard"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        difficulty === d
                          ? d === "Easy"   ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                          : d === "Medium" ? "border-amber-400 bg-amber-50 text-amber-700"
                          : d === "Hard"   ? "border-red-400 bg-red-50 text-red-700"
                          : "border-indigo-400 bg-indigo-50 text-indigo-700"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-4 flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  {error}
                </div>
              )}

              {/* API key hint if not ready */}
              {!isGeminiReady() && (
                <div className="mb-4 flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
                  <span>🔑</span>
                  <span>Set your Gemini API key via the key button in the top navbar to enable AI generation.</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {stage !== "generating" && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200
                         hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleGenerate}
              disabled={!canGenerate || !isGeminiReady()}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white
                         bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
                         rounded-xl shadow-sm shadow-indigo-200 transition-all cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Generate 10 Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ModuleQuestionsPage — grid of question cards (mirrors dashboard challenge grid)
// ─────────────────────────────────────────────────────────────────────────────
function ModuleQuestionsPage({ module: mod }) {
  const navigate = useNavigate();
  const c = palette[mod.color] || palette.blue;
  const scores = loadModuleScores(mod.id);
  const attempted = Object.keys(scores).length;
  const correct = Object.values(scores).filter((s) => s.status === "correct").length;
  const avgScore = attempted > 0
    ? Math.round(Object.values(scores).reduce((sum, s) => sum + (s.score || 0), 0) / attempted)
    : null;
  const allDone = attempted >= mod.questions.length;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <button
        onClick={() => navigate("/practice")}
        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 mb-6 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        All Modules
      </button>

      {/* Module header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center text-3xl shrink-0`}>
            {mod.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-slate-800">{mod.title}</h1>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                {mod.difficulty}
              </span>
            </div>
            <p className="text-slate-500 text-sm">{mod.description}</p>
          </div>
        </div>
        {/* View Results button — visible once any question is attempted */}
        {attempted > 0 && (
          <button
            onClick={() => navigate(`/practice/${mod.id}/results`)}
            className={`shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl
                        bg-linear-to-r ${c.btn} shadow-sm transition-all cursor-pointer`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {allDone ? "See Final Score" : `Score (${attempted}/${mod.questions.length})`}
          </button>
        )}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-800">{mod.questions.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Total Questions</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-2xl font-bold text-emerald-600">
            {mod.questions.filter((q) => q.difficulty?.toLowerCase() === "easy").length}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Easy</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-2xl font-bold text-amber-600">
            {mod.questions.filter((q) => q.difficulty?.toLowerCase() === "medium").length}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Medium</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          {avgScore !== null ? (
            <>
              <p className={`text-2xl font-bold ${avgScore >= 70 ? "text-emerald-600" : avgScore >= 40 ? "text-amber-600" : "text-red-500"}`}>
                {avgScore}%
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{correct}/{attempted} Correct</p>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-slate-300">—</p>
              <p className="text-xs text-slate-500 mt-0.5">Not started</p>
            </>
          )}
        </div>
      </div>

      {/* Questions grid */}
      <h2 className="text-lg font-semibold text-slate-800 mb-4">All Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mod.questions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={idx}
            color={mod.color}
            scoreEntry={scores[idx]}
            onClick={() => navigate(`/practice/${mod.id}/${idx}`)}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// QuestionCard — mirrors ChallengeCard style + score indicator
// ─────────────────────────────────────────────────────────────────────────────
function QuestionCard({ question, index, color, scoreEntry, onClick }) {
  const c = palette[color] || palette.blue;
  const diffLower = question.difficulty?.toLowerCase();
  const isCorrect  = scoreEntry?.status === "correct";
  const isAttempted = !!scoreEntry;

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md
                 transition-all duration-200 overflow-hidden cursor-pointer"
    >
      <div className={`h-1 w-full ${isCorrect ? "bg-emerald-500" : isAttempted ? "bg-red-400" : c.accent}`} />
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm
            ${isCorrect ? "bg-emerald-50 text-emerald-600" : isAttempted ? "bg-red-50 text-red-500" : `${c.bg} ${c.text}`}`}>
            {isCorrect ? "✓" : isAttempted ? "✗" : index + 1}
          </div>
          <div className="flex items-center gap-1.5">
            {isAttempted && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"
              }`}>
                {scoreEntry.score ?? (isCorrect ? 100 : 0)}/100
              </span>
            )}
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              diffLower === "easy"
                ? "bg-emerald-100 text-emerald-700"
                : diffLower === "medium"
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-700"
            }`}>
              {question.difficulty}
            </span>
          </div>
        </div>
        <h3 className={`text-sm font-semibold text-slate-800 mb-1.5 group-hover:${c.text} transition-colors line-clamp-2`}>
          {question.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {question.instructions}
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          className={`w-full py-2 text-xs font-semibold text-white rounded-xl ${
            isCorrect ? "bg-linear-to-r from-emerald-500 to-teal-500" :
            isAttempted ? "bg-linear-to-r from-red-400 to-rose-500" : c.btn
          } transition-all shadow-sm cursor-pointer`}
        >
          {isCorrect ? "✓ Solved — Retry" : isAttempted ? "✗ Try Again" : "Start Challenge →"}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ModuleQuestionEditor — the full split editor, identical to ChallengeView
// ─────────────────────────────────────────────────────────────────────────────
function ModuleQuestionEditor({ module: mod, questionIndex }) {
  const navigate = useNavigate();
  const c = palette[mod.color] || palette.blue;
  const question = mod.questions[questionIndex];
  const isFirst = questionIndex === 0;
  const isLast = questionIndex === mod.questions.length - 1;

  // Restore previous score if re-attempting
  const prevScore = loadModuleScores(mod.id)[questionIndex];
  const [code, setCode] = useState(question.initialCode);
  const [result, setResult] = useState(prevScore || null);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [isValidating, setIsValidating] = useState(false);

  const normalize = (str) =>
    str.replace(/\s+/g, " ").replace(/\s*=\s*/g, "=").trim().toLowerCase();

  const handleValidate = useCallback(async () => {
    if (isGeminiReady()) {
      setIsValidating(true);
      setResult(null);
      try {
        const aiResult = await validateWithAI(question, code);
        const entry = {
          status: aiResult.correct ? "correct" : "wrong",
          feedback: aiResult.feedback,
          score: aiResult.score,
        };
        setResult(entry);
        saveQuestionScore(mod.id, questionIndex, entry);
        return;
      } catch (err) {
        console.error("AI validation failed, falling back to local:", err);
      } finally {
        setIsValidating(false);
      }
    }

    // Local fallback
    const userNorm = normalize(code);
    const solNorm = normalize(question.solutionCode);
    if (userNorm === solNorm) {
      const entry = { status: "correct", feedback: "Perfect match!", score: 100 };
      setResult(entry);
      saveQuestionScore(mod.id, questionIndex, entry);
      return;
    }
    const extractClasses = (html) => {
      const matches = [...html.matchAll(/class="([^"]*)"/g)];
      return matches.map((m) => m[1].split(/\s+/).sort().join(" ")).sort();
    };
    const userClasses = extractClasses(userNorm);
    const solClasses = extractClasses(solNorm);
    const isCorrect = JSON.stringify(userClasses) === JSON.stringify(solClasses);
    const entry = {
      status: isCorrect ? "correct" : "wrong",
      feedback: isCorrect
        ? "All classes match the expected solution!"
        : "Some classes don't match. Check your class names carefully.",
      score: isCorrect ? 100 : 0,
    };
    setResult(entry);
    saveQuestionScore(mod.id, questionIndex, entry);
  }, [code, question, mod.id, questionIndex]);

  const handleReset = () => {
    setCode(question.initialCode);
    setResult(null);
  };

  const goTo = (idx) => navigate(`/practice/${mod.id}/${idx}`);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Back to module */}
            <button
              onClick={() => navigate(`/practice/${mod.id}`)}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {mod.icon} {mod.title}
            </button>
            <span className="text-slate-200">·</span>
            <span className="text-xs text-slate-400">
              Question {questionIndex + 1} of {mod.questions.length}
            </span>
            <span className={`text-xs font-semibold ${
              question.difficulty?.toLowerCase() === "easy" ? "text-emerald-500" : "text-amber-500"
            }`}>
              {question.difficulty}
            </span>
          </div>
          {/* Mini progress bar */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Progress</span>
            <div className="w-28 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-linear-to-r ${c.bar} rounded-full transition-all duration-500`}
                style={{ width: `${((questionIndex + 1) / mod.questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <InstructionPanel
          challenge={question}
          showHint={showHint}
          hintIndex={hintIndex}
          onToggleHint={() => setShowHint(!showHint)}
          onNextHint={() => {
            if (hintIndex < question.hints.length - 1) setHintIndex(hintIndex + 1);
          }}
        />
      </div>

      {/* Split Editor / Preview */}
      <div className="flex-1 flex gap-4 px-6 pb-3 min-h-0">
        <div className="flex-1 flex flex-col min-w-0">
          <CodeEditor code={code} onChange={setCode} />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <Preview code={code} />
        </div>
       <div className="flex-1 flex flex-col min-w-0">
          <ExpectedPreview code={question.solutionCode} />
        </div>
      </div>

      

      {/* Bottom action bar */}
      <div className="bg-white border-t border-slate-200 px-6 py-3 shrink-0">
        <div className="flex items-center justify-between">
          {/* Left actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600
                         bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset
            </button>

            <button
              onClick={handleValidate}
              disabled={isValidating}
              className={`flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white
                         bg-linear-to-r ${c.btn} rounded-lg transition-all shadow-sm cursor-pointer
                         disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isValidating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Checking...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {isGeminiReady() ? "AI Check" : "Check Solution"}
                </>
              )}
            </button>

            {/* Result badge */}
            {result && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                result.status === "correct"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {result.status === "correct" ? (
                  <>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {result.score != null && <strong className="mr-1">{result.score}/100</strong>}
                      {result.feedback || "Correct! 🎉"}
                    </span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{result.feedback || "Not quite — Try again!"}</span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo(questionIndex - 1)}
              disabled={isFirst}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isFirst
                  ? "text-slate-300 bg-slate-50 cursor-not-allowed"
                  : "text-slate-600 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button
              onClick={() => {
                if (isLast) {
                  navigate(`/practice/${mod.id}/results`);
                } else {
                  goTo(questionIndex + 1);
                }
              }}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer
                text-white bg-linear-to-r ${c.btn} shadow-sm`}
            >
              {isLast ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Finish & See Results
                </>
              ) : (
                <>
                  Next Question
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ModuleResultsPage — full score summary after completing all questions
// ─────────────────────────────────────────────────────────────────────────────
function ModuleResultsPage({ module: mod }) {
  const navigate = useNavigate();
  const c = palette[mod.color] || palette.blue;
  const scores = loadModuleScores(mod.id);
  const attempted = Object.keys(scores).length;
  const correct = Object.values(scores).filter((s) => s.status === "correct").length;
  const totalScore = attempted > 0
    ? Math.round(Object.values(scores).reduce((sum, s) => sum + (s.score || 0), 0) / mod.questions.length)
    : 0;

  const grade =
    totalScore >= 90 ? { label: "Excellent!", emoji: "🏆", color: "text-yellow-500" } :
    totalScore >= 70 ? { label: "Great Job!", emoji: "🎉", color: "text-emerald-500" } :
    totalScore >= 50 ? { label: "Good Effort", emoji: "👍", color: "text-blue-500" } :
    { label: "Keep Practicing", emoji: "💪", color: "text-amber-500" };

  const handleRetry = () => {
    clearModuleScores(mod.id);
    navigate(`/practice/${mod.id}/0`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate(`/practice/${mod.id}`)}
        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 mb-6 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to {mod.title}
      </button>

      {/* Hero score card */}
      <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6`}>
        <div className={`h-2 w-full bg-linear-to-r ${c.bar}`} />
        <div className="p-8 text-center">
          <div className="text-6xl mb-3">{grade.emoji}</div>
          <h1 className={`text-2xl font-extrabold ${grade.color} mb-1`}>{grade.label}</h1>
          <p className="text-slate-500 text-sm mb-6">
            You completed <strong className="text-slate-700">{mod.title}</strong>
          </p>

          {/* Big score ring */}
          <div className="flex items-center justify-center gap-10 mb-6">
            <div className="text-center">
              <p className={`text-5xl font-extrabold ${totalScore >= 70 ? "text-emerald-500" : totalScore >= 40 ? "text-amber-500" : "text-red-500"}`}>
                {totalScore}%
              </p>
              <p className="text-xs text-slate-400 mt-1">Overall Score</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <p className="text-5xl font-extrabold text-emerald-500">{correct}</p>
              <p className="text-xs text-slate-400 mt-1">Correct</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <p className="text-5xl font-extrabold text-red-400">{attempted - correct}</p>
              <p className="text-xs text-slate-400 mt-1">Incorrect</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <p className="text-5xl font-extrabold text-slate-300">{mod.questions.length - attempted}</p>
              <p className="text-xs text-slate-400 mt-1">Skipped</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-6">
            <div
              className={`h-full bg-linear-to-r ${c.bar} rounded-full transition-all duration-700`}
              style={{ width: `${totalScore}%` }}
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-600
                         bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry Module
            </button>
            <button
              onClick={() => navigate("/practice")}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white
                          bg-linear-to-r ${c.btn} rounded-xl shadow-sm transition-all cursor-pointer`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              All Modules
            </button>
          </div>
        </div>
      </div>

      {/* Per-question breakdown */}
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Question Breakdown</h2>
      <div className="space-y-3">
        {mod.questions.map((q, idx) => {
          const entry = scores[idx];
          const qCorrect = entry?.status === "correct";
          const qSkipped = !entry;
          return (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4"
            >
              {/* Status icon */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                qCorrect ? "bg-emerald-50 text-emerald-600" :
                qSkipped ? "bg-slate-100 text-slate-400" : "bg-red-50 text-red-500"
              }`}>
                {qCorrect ? "✓" : qSkipped ? idx + 1 : "✗"}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{q.title}</p>
                {entry && (
                  <p className="text-xs text-slate-400 mt-0.5 truncate">{entry.feedback}</p>
                )}
                {qSkipped && <p className="text-xs text-slate-400 mt-0.5">Not attempted</p>}
              </div>

              {/* Score badge + retry */}
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  qCorrect ? "bg-emerald-100 text-emerald-700" :
                  qSkipped ? "bg-slate-100 text-slate-500" : "bg-red-100 text-red-600"
                }`}>
                  {qSkipped ? "—" : `${entry.score ?? (qCorrect ? 100 : 0)}/100`}
                </span>
                <button
                  onClick={() => navigate(`/practice/${mod.id}/${idx}`)}
                  className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer px-2 py-1 rounded-lg hover:bg-slate-100"
                >
                  {qSkipped ? "Try" : "Retry"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}