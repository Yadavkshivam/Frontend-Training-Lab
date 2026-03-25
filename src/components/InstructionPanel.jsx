export default function InstructionPanel({ challenge, showHint, hintIndex, onToggleHint, onNextHint }) {
  const diffLower = challenge.difficulty.toLowerCase();

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="p-5">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
              {challenge.id}
            </div>
            <h2 className="text-lg font-semibold text-slate-800">{challenge.title}</h2>
          </div>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              diffLower === "easy"
                ? "bg-emerald-100 text-emerald-700"
                : diffLower === "medium"
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {challenge.difficulty}
          </span>
        </div>

        {/* Instructions */}
        <p className="text-sm text-slate-600 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatMarkdownBold(challenge.instructions) }} />
        </p>

        {/* Hint Section */}
        <div className="mt-4 flex items-start gap-2">
          <button
            onClick={onToggleHint}
            className="flex items-center gap-1.5 text-xs font-medium text-amber-600 hover:text-amber-700
                       bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            {showHint ? "Hide Hints" : "Show Hint"}
          </button>
          {showHint && (
            <div className="flex-1 flex flex-col gap-2">
              {challenge.hints.slice(0, hintIndex + 1).map((h, i) => (
                <div key={i} className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  💡 Hint {i + 1}: {h}
                </div>
              ))}
              {hintIndex < challenge.hints.length - 1 && (
                <button
                  onClick={onNextHint}
                  className="text-xs text-amber-600 hover:text-amber-700 font-medium self-start cursor-pointer"
                >
                  Show next hint →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function formatMarkdownBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>')
             .replace(/`(.*?)`/g, '<code class="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>');
}
