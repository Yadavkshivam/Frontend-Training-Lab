import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import Preview from "../components/Preview";
import InstructionPanel from "../components/InstructionPanel";
import { isGeminiReady, validateWithAI } from "../services/gemini";

export default function ChallengePage({ challenges, onMarkCompleted, onOpenGenerateModal }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const challengeIndex = challenges.findIndex((c) => c.id === Number(id));
  const challenge = challenges[challengeIndex];
  
  // Redirect if challenge not found
  if (!challenge) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-slate-500">Challenge not found.</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <ChallengeView
      key={challenge.id}
      challenge={challenge}
      challengeIndex={challengeIndex}
      totalChallenges={challenges.length}
      onNext={() => {
        if (challengeIndex < challenges.length - 1) {
          navigate(`/challenge/${challenges[challengeIndex + 1].id}`);
        }
      }}
      onPrev={() => {
        if (challengeIndex > 0) {
          navigate(`/challenge/${challenges[challengeIndex - 1].id}`);
        }
      }}
      isFirst={challengeIndex === 0}
      isLast={challengeIndex === challenges.length - 1}
      onMarkCompleted={onMarkCompleted}
      onOpenGenerateModal={onOpenGenerateModal}
    />
  );
}

// ─── Inner component that holds all original Challenge logic ───
function ChallengeView({
  challenge,
  challengeIndex,
  totalChallenges,
  onNext,
  onPrev,
  isFirst,
  isLast,
  onMarkCompleted,
  onOpenGenerateModal,
}) {
  const [code, setCode] = useState(challenge.initialCode);
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [isValidating, setIsValidating] = useState(false);

  const normalize = (str) =>
    str.replace(/\s+/g, " ").replace(/\s*=\s*/g, "=").trim().toLowerCase();

  const handleValidate = useCallback(async () => {
    // ── Try AI validation first ──
    if (isGeminiReady()) {
      setIsValidating(true);
      setResult(null);
      try {
        const aiResult = await validateWithAI(challenge, code);
        const status = aiResult.correct ? "correct" : "wrong";
        setResult({ status, feedback: aiResult.feedback, score: aiResult.score });
        if (aiResult.correct) onMarkCompleted(challenge.id);
        return;
      } catch (err) {
        console.error("AI validation failed, falling back to local:", err);
      } finally {
        setIsValidating(false);
      }
    }

    // ── Local fallback ──
    const userNorm = normalize(code);
    const solNorm = normalize(challenge.solutionCode);

    if (userNorm === solNorm) {
      setResult({ status: "correct", feedback: "Perfect match!", score: 100 });
      onMarkCompleted(challenge.id);
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
        : "Some classes don't match. Check your Tailwind utilities.",
      score: isCorrect ? 100 : 0,
    });
    if (isCorrect) onMarkCompleted(challenge.id);
  }, [code, challenge, onMarkCompleted]);

  const handleReset = () => {
    setCode(challenge.initialCode);
    setResult(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Challenge header */}
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Challenge {challengeIndex + 1} of {totalChallenges}</span>
            <span>•</span>
            <span className={`font-semibold ${
              challenge.difficulty.toLowerCase() === "easy" ? "text-emerald-500" : "text-amber-500"
            }`}>{challenge.difficulty}</span>
          </div>
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
        </div>

        <InstructionPanel
          challenge={challenge}
          showHint={showHint}
          hintIndex={hintIndex}
          onToggleHint={() => setShowHint(!showHint)}
          onNextHint={() => {
            if (hintIndex < challenge.hints.length - 1) setHintIndex(hintIndex + 1);
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
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
