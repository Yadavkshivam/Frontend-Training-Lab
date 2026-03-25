import { useState, useCallback } from "react";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import InstructionPanel from "./InstructionPanel";
import { isGeminiReady, validateWithAI } from "../services/gemini";

export default function Challenge({
  challenge,
  onNext,
  onPrev,
  isFirst,
  isLast,
  currentIndex,
  totalChallenges,
  apiKey,
  onOpenApiKeyModal,
  onOpenGenerateModal,
}) {
  const [code, setCode] = useState(challenge.initialCode);
  const [result, setResult] = useState(null); // null | { status, feedback, score }
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [isValidating, setIsValidating] = useState(false);

  // Reset state when challenge changes
  const [prevId, setPrevId] = useState(challenge.id);
  if (challenge.id !== prevId) {
    setPrevId(challenge.id);
    setCode(challenge.initialCode);
    setResult(null);
    setShowHint(false);
    setHintIndex(0);
  }

  const normalize = (str) =>
    str.replace(/\s+/g, " ").replace(/\s*=\s*/g, "=").trim().toLowerCase();

  const handleValidate = useCallback(async () => {
    // ── Try AI validation first ──
    if (isGeminiReady()) {
      setIsValidating(true);
      setResult(null);
      try {
        const aiResult = await validateWithAI(challenge, code);
        setResult({
          status: aiResult.correct ? "correct" : "wrong",
          feedback: aiResult.feedback,
          score: aiResult.score,
        });
        return;
      } catch (err) {
        console.error("AI validation failed, falling back to local:", err);
        // fall through to local validation
      } finally {
        setIsValidating(false);
      }
    }

    // ── Local fallback: class-based comparison ──
    const userNorm = normalize(code);
    const solNorm = normalize(challenge.solutionCode);

    if (userNorm === solNorm) {
      setResult({ status: "correct", feedback: "Perfect match!", score: 100 });
      return;
    }

    const extractClasses = (html) => {
      const matches = [...html.matchAll(/class="([^"]*)"/g)];
      return matches.map((m) => m[1].split(/\s+/).sort().join(" ")).sort();
    };

    const userClasses = extractClasses(userNorm);
    const solClasses = extractClasses(solNorm);
    const isCorrect = JSON.stringify(userClasses) === JSON.stringify(solClasses);

    setResult({
      status: isCorrect ? "correct" : "wrong",
      feedback: isCorrect
        ? "All classes match the expected solution!"
        : "Some classes don't match the expected solution. Check your Tailwind utilities.",
      score: isCorrect ? 100 : 0,
    });
  }, [code, challenge]);

  const handleReset = () => {
    setCode(challenge.initialCode);
    setResult(null);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-800">Training Platform</span>
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <span className="text-sm text-slate-500">
              Challenge {currentIndex + 1} of {totalChallenges}
            </span>
          </div>

          {/* Progress bar + AI buttons */}
          <div className="flex items-center gap-3">
            {/* Generate AI Challenge button */}
            <button
              onClick={onOpenGenerateModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600
                         bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              AI Challenge
            </button>

            {/* API Key button */}
            <button
              onClick={onOpenApiKeyModal}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                apiKey
                  ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100"
                  : "text-purple-600 bg-purple-50 hover:bg-purple-100"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              {apiKey ? "Key ✓" : "Set API Key"}
            </button>

            <div className="h-6 w-px bg-slate-200"></div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Progress</span>
              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / totalChallenges) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Instructions */}
      <div className="px-6 pt-4 pb-2">
        <InstructionPanel
          challenge={challenge}
          showHint={showHint}
          hintIndex={hintIndex}
          onToggleHint={() => setShowHint(!showHint)}
          onNextHint={() => {
            if (hintIndex < challenge.hints.length - 1) {
              setHintIndex(hintIndex + 1);
            }
          }}
        />
      </div>

      {/* Split Editor/Preview */}
      <div className="flex-1 flex gap-4 px-6 pb-4 min-h-0">
        {/* Left — Code Editor */}
        <div className="flex-1 flex flex-col min-w-0">
          <CodeEditor code={code} onChange={setCode} />
        </div>

        {/* Right — Live Preview */}
        <div className="flex-1 flex flex-col min-w-0">
          <Preview code={code} />
        </div>
      </div>

      {/* Bottom Action Bar */}
      <footer className="bg-white border-t border-slate-200 px-6 py-3">
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
              Reset Code
            </button>

            <button
              onClick={handleValidate}
              disabled={isValidating}
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white
                         bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
                         rounded-lg transition-all shadow-sm shadow-blue-200 cursor-pointer
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isValidating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  AI Checking...
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

            {/* Validation Result */}
            {result && (
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                  result.status === "correct"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {result.status === "correct" ? (
                  <>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {result.score != null && <strong className="mr-1">{result.score}/100</strong>}
                      {result.feedback || "Correct! Great job! 🎉"}
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
              onClick={onPrev}
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
              onClick={onNext}
              disabled={isLast}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isLast
                  ? "text-slate-300 bg-slate-50 cursor-not-allowed"
                  : "text-white bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-sm shadow-blue-200"
              }`}
            >
              Next Challenge
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
