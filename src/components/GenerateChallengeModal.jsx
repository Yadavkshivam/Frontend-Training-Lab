import { useState } from "react";
import { generateChallenge } from "../services/gemini";

export default function GenerateChallengeModal({ onGenerate, onClose }) {
  const [difficulty, setDifficulty] = useState("Easy");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null); // generated challenge preview

  const topics = [
    "Flexbox centering", "CSS Grid layout", "Navbar alignment",
    "Card component", "Form styling", "Hero section",
    "Sidebar layout", "Button styling", "Responsive design", "Typography",
  ];

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPreview(null);
    try {
      const challenge = await generateChallenge(difficulty, topic);
      setPreview(challenge);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    if (preview) onGenerate(preview);
  };

  const handleRegenerate = () => {
    setPreview(null);
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800">Generate AI Challenge</h2>
              <p className="text-xs text-slate-400">Powered by Gemini — auto-selects available model</p>
            </div>
          </div>
        </div>

        {/* ── PREVIEW STATE ── */}
        {preview ? (
          <div className="px-6 py-5">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Generated Challenge Preview</p>

            {/* Challenge card — same format as InstructionPanel */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-5">
                {/* Title row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm flex items-center justify-center">
                      AI
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm">{preview.title}</h3>
                  </div>
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                    preview.difficulty?.toLowerCase() === "easy"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {preview.difficulty}
                  </span>
                </div>

                {/* Instructions */}
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{preview.instructions}</p>

                {/* Hints */}
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Hints</p>
                  {preview.hints.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                      <span className="shrink-0">💡</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code preview */}
              <div className="border-t border-slate-100 bg-slate-900 rounded-b-xl overflow-hidden">
                <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-slate-400 text-xs ml-1">Starting code (broken)</span>
                </div>
                <pre className="text-xs text-slate-300 font-mono p-4 overflow-x-auto leading-5 max-h-40 whitespace-pre-wrap">
                  {preview.initialCode}
                </pre>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleRegenerate}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium
                           text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Regenerate
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium
                           text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Challenge
              </button>
            </div>

            <button onClick={onClose} className="w-full mt-2 text-xs text-slate-400 hover:text-slate-600 py-1 cursor-pointer">
              Cancel
            </button>
          </div>

        ) : (
          /* ── FORM STATE ── */
          <form onSubmit={handleGenerate} className="px-6 py-5">
            {/* Error banner */}
            {error && (
              <div className="flex items-start gap-2 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Difficulty */}
            <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
            <div className="flex gap-2 mb-4">
              {["Easy", "Medium"].map((d) => (
                <button key={d} type="button" onClick={() => setDifficulty(d)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    difficulty === d
                      ? d === "Easy" ? "bg-emerald-100 text-emerald-700 ring-2 ring-emerald-300"
                                     : "bg-amber-100 text-amber-700 ring-2 ring-amber-300"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >{d}</button>
              ))}
            </div>

            {/* Topic */}
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Topic <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="text" value={topic} onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Flexbox centering, Card layout..."
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         placeholder-slate-400 bg-slate-50 mb-3"
            />

            {/* Quick topics */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {topics.map((t) => (
                <button key={t} type="button" onClick={() => setTopic(t)}
                  className={`px-2.5 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                    topic === t ? "bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300"
                                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >{t}</button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button type="button" onClick={onClose} disabled={isLoading}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-600 bg-slate-100
                           hover:bg-slate-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >Cancel</button>
              <button type="submit" disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium
                           text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    Generate Challenge
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
