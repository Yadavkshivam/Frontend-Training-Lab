import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isGeminiReady, generateModuleQuestions } from "../services/gemini";

const colorMap = {
  blue: {
    accent: "from-blue-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-700",
    btn: "from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-blue-200",
    hintBg: "bg-blue-50 border-blue-200 text-blue-800",
    progressBar: "from-blue-500 to-indigo-500",
  },
  purple: {
    accent: "from-purple-500 to-violet-600",
    badge: "bg-purple-100 text-purple-700",
    btn: "from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-purple-200",
    hintBg: "bg-purple-50 border-purple-200 text-purple-800",
    progressBar: "from-purple-500 to-violet-500",
  },
  emerald: {
    accent: "from-emerald-500 to-teal-600",
    badge: "bg-emerald-100 text-emerald-700",
    btn: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-emerald-200",
    hintBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
    progressBar: "from-emerald-500 to-teal-500",
  },
  amber: {
    accent: "from-amber-500 to-orange-500",
    badge: "bg-amber-100 text-amber-700",
    btn: "from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-200",
    hintBg: "bg-amber-50 border-amber-200 text-amber-800",
    progressBar: "from-amber-500 to-orange-400",
  },
  rose: {
    accent: "from-rose-500 to-pink-600",
    badge: "bg-rose-100 text-rose-700",
    btn: "from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-rose-200",
    hintBg: "bg-rose-50 border-rose-200 text-rose-800",
    progressBar: "from-rose-500 to-pink-500",
  },
};

export default function PracticeScreen({ module }) {
  const navigate = useNavigate();
  const c = colorMap[module.color] || colorMap.blue;

  const [questions, setQuestions] = useState(module.questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(new Set());
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState(null);

  const question = questions[currentIndex];
  const total = questions.length;
  const progress = Math.round(((completed.size) / total) * 100);
  const isLastQuestion = currentIndex === total - 1;

  const markAndAdvance = () => {
    setCompleted((prev) => new Set([...prev, currentIndex]));
    setShowHint(false);
    setShowAnswer(false);
    if (!isLastQuestion) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const goTo = (idx) => {
    setShowHint(false);
    setShowAnswer(false);
    setCurrentIndex(idx);
  };

  const handleGenerateWithAI = async () => {
    if (!isGeminiReady()) return;
    setIsGenerating(true);
    setGenError(null);
    try {
      const aiQuestions = await generateModuleQuestions(module.title);
      const numbered = aiQuestions.map((q, i) => ({ ...q, id: i + 1 }));
      setQuestions(numbered);
      setCurrentIndex(0);
      setCompleted(new Set());
      setShowHint(false);
      setShowAnswer(false);
    } catch (err) {
      setGenError(err.message || "Failed to generate questions. Try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`bg-linear-to-r ${c.accent} text-white`}>
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Dashboard
              </button>
              <span className="text-white/40">·</span>
              <div className="text-xl">{module.icon}</div>
              <div>
                <h1 className="text-lg font-bold leading-tight">{module.title}</h1>
                <p className="text-white/70 text-xs">{module.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isGeminiReady() && (
                <button
                  onClick={handleGenerateWithAI}
                  disabled={isGenerating}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-medium transition-colors cursor-pointer disabled:opacity-60"
                >
                  {isGenerating ? (
                    <>
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      AI Regenerate
                    </>
                  )}
                </button>
              )}
              <div className="text-right">
                <p className="text-xs text-white/60">Progress</p>
                <p className="text-sm font-bold">{completed.size}/{total}</p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI error banner */}
      {genError && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3">
          <p className="text-sm text-red-700 text-center">{genError}</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 py-8 flex gap-6">
        {/* Left: Question navigator */}
        <div className="hidden lg:block w-52 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm sticky top-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Questions</p>
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    i === currentIndex
                      ? "bg-slate-800 text-white shadow-sm"
                      : completed.has(i)
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 rounded-sm bg-emerald-100 inline-block border border-emerald-200" />
                Answered
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 rounded-sm bg-slate-800 inline-block" />
                Current
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 rounded-sm bg-slate-100 inline-block border border-slate-200" />
                Not visited
              </div>
            </div>
          </div>
        </div>

        {/* Main question panel */}
        <div className="flex-1 min-w-0">
          {completed.size === total ? (
            /* Completion screen */
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Module Complete!</h2>
              <p className="text-slate-500 mb-6">
                You've answered all {total} questions in the <strong>{module.title}</strong> module.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => { setCompleted(new Set()); setCurrentIndex(0); setShowHint(false); setShowAnswer(false); }}
                  className="px-5 py-2.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Restart Module
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`px-5 py-2.5 text-sm font-medium text-white bg-linear-to-r ${c.btn} rounded-xl transition-all shadow-sm cursor-pointer`}
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Question card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-4">
                {/* Card header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Question {currentIndex + 1} of {total}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                      {module.difficulty}
                    </span>
                  </div>
                  {completed.has(currentIndex) && (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Answered
                    </span>
                  )}
                </div>

                <div className="p-6">
                  {/* Problem statement */}
                  <div className="mb-6">
                    <h2 className="text-base font-semibold text-slate-800 leading-relaxed">
                      {question.question}
                    </h2>
                  </div>

                  {/* Code panels */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    {/* Bad code */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Bad Practice
                        </span>
                      </div>
                      <div className="bg-red-950 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-red-900/50 border-b border-red-800/40">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="ml-2 text-xs text-red-300/70 font-mono">incorrect.html</span>
                        </div>
                        <pre className="p-4 text-xs text-red-200 font-mono overflow-x-auto leading-relaxed">
                          <code>{question.incorrectCode}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Answer (conditionally shown) */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {showAnswer ? "Correct Practice" : "Your Answer"}
                        </span>
                      </div>
                      {showAnswer ? (
                        <div className="bg-emerald-950 rounded-xl overflow-hidden">
                          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-900/50 border-b border-emerald-800/40">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="ml-2 text-xs text-emerald-300/70 font-mono">correct.html</span>
                          </div>
                          <pre className="p-4 text-xs text-emerald-200 font-mono overflow-x-auto leading-relaxed">
                            <code>{question.correctCode}</code>
                          </pre>
                        </div>
                      ) : (
                        <div className="h-full min-h-35 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400">
                          <svg className="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-xs font-medium">Click "Show Answer" to reveal</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Explanation (shown with answer) */}
                  {showAnswer && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">Explanation</p>
                          <p className="text-sm text-slate-700 leading-relaxed">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hint */}
                  {showHint && (
                    <div className={`border rounded-xl p-4 mb-4 ${c.hintBg}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-lg shrink-0">💡</span>
                        <div>
                          <p className="text-xs font-semibold mb-1 uppercase tracking-wide opacity-70">Hint</p>
                          <p className="text-sm leading-relaxed">{question.hint}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action bar */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                {/* Left actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl border transition-colors cursor-pointer ${
                      showHint
                        ? "bg-amber-50 border-amber-200 text-amber-700"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>💡</span>
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </button>
                  <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl border transition-colors cursor-pointer ${
                      showAnswer
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={showAnswer ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"} />
                    </svg>
                    {showAnswer ? "Hide Answer" : "Show Answer"}
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  {currentIndex > 0 && (
                    <button
                      onClick={() => goTo(currentIndex - 1)}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                  )}
                  <button
                    onClick={markAndAdvance}
                    className={`flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-linear-to-r ${c.btn} rounded-xl transition-all shadow-sm cursor-pointer`}
                  >
                    {isLastQuestion ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Finish Module
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

              {/* Mobile question dots */}
              <div className="flex lg:hidden items-center justify-center gap-1.5 mt-4 flex-wrap">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      i === currentIndex
                        ? "bg-slate-800 scale-125"
                        : completed.has(i)
                        ? "bg-emerald-400"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
