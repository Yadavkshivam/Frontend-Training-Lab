export default function ProfilePage({ challenges, completedIds }) {
  const total = challenges.length;
  const completed = completedIds.size;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  const easyDone = challenges.filter(
    (c) => c.difficulty.toLowerCase() === "easy" && completedIds.has(c.id)
  ).length;
  const easyTotal = challenges.filter((c) => c.difficulty.toLowerCase() === "easy").length;

  const mediumDone = challenges.filter(
    (c) => c.difficulty.toLowerCase() === "medium" && completedIds.has(c.id)
  ).length;
  const mediumTotal = challenges.filter((c) => c.difficulty.toLowerCase() === "medium").length;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Profile</h1>
        <p className="text-slate-500 text-sm mt-1">Track your learning journey.</p>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shrink-0">
            JD
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Junior Developer</h2>
            <p className="text-sm text-slate-400">Frontend Trainee • Started March 2026</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-blue-50 text-blue-600">
                HTML
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-cyan-50 text-cyan-600">
                CSS
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-indigo-50 text-indigo-600">
                Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* Overall progress */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Overall Progress</span>
          <span className="text-sm font-bold text-blue-600">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-4">
          <ProgressCard label="Easy Challenges" done={easyDone} total={easyTotal} color="emerald" />
          <ProgressCard label="Medium Challenges" done={mediumDone} total={mediumTotal} color="amber" />
        </div>
      </div>

      {/* Completed list */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-800">Completed Challenges</h3>
        </div>
        {completed === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-slate-400">
            No challenges completed yet. Go solve some! 🚀
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {challenges
              .filter((c) => completedIds.has(c.id))
              .map((c) => (
                <li key={c.id} className="flex items-center gap-3 px-6 py-3.5">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700 truncate">{c.title}</p>
                    <p className="text-xs text-slate-400">{c.difficulty}</p>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ProgressCard({ label, done, total, color }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const colorMap = {
    emerald: { bg: "bg-emerald-100", fill: "bg-emerald-500", text: "text-emerald-600" },
    amber: { bg: "bg-amber-100", fill: "bg-amber-500", text: "text-amber-600" },
  };
  const c = colorMap[color] || colorMap.emerald;

  return (
    <div className="bg-slate-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-slate-600">{label}</span>
        <span className={`text-xs font-bold ${c.text}`}>{done}/{total}</span>
      </div>
      <div className={`w-full h-2 ${c.bg} rounded-full overflow-hidden`}>
        <div className={`h-full ${c.fill} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
