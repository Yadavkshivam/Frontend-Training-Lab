import ChallengeCard from "../components/ChallengeCard";

export default function DashboardPage({ challenges, completedIds, onOpenGenerateModal }) {
  const easyCount = challenges.filter((c) => c.difficulty.toLowerCase() === "easy").length;
  const mediumCount = challenges.filter((c) => c.difficulty.toLowerCase() === "medium").length;
  const completed = completedIds.size;
  const total = challenges.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Welcome back, Learner! 👋</h1>
        <p className="text-slate-500 text-sm mt-1">Continue where you left off or start a new challenge.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Challenges" value={total} icon="📚" bg="bg-blue-50" text="text-blue-600" />
        <StatCard label="Completed" value={completed} icon="✅" bg="bg-emerald-50" text="text-emerald-600" />
        <StatCard label="Easy" value={easyCount} icon="🟢" bg="bg-emerald-50" text="text-emerald-600" />
        <StatCard label="Medium" value={mediumCount} icon="🟡" bg="bg-amber-50" text="text-amber-600" />
      </div>

      {/* Overall progress */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Overall Progress</h3>
            <p className="text-xs text-slate-400 mt-0.5">{completed} of {total} challenges completed</p>
          </div>
          <span className="text-2xl font-bold text-blue-600">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Challenge grid */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-slate-800">All Challenges</h2>
        <button
          onClick={onOpenGenerateModal}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-indigo-600
                     bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          Generate with AI
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((c) => (
          <ChallengeCard
            key={c.id}
            challenge={c}
            status={completedIds.has(c.id) ? "completed" : "pending"}
          />
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, bg, text }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center text-lg`}>
          {icon}
        </span>
        <span className={`text-2xl font-bold ${text}`}>{value}</span>
      </div>
      <p className="text-xs text-slate-500 font-medium">{label}</p>
    </div>
  );
}
