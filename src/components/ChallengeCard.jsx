import { useNavigate } from "react-router-dom";

export default function ChallengeCard({ challenge, status }) {
  const navigate = useNavigate();
  const diffLower = challenge.difficulty.toLowerCase();
  const isCompleted = status === "completed";

  return (
    <div
      onClick={() => navigate(`/challenge/${challenge.id}`)}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg
                 shadow-sm transition-all duration-200 cursor-pointer overflow-hidden"
    >
      {/* Top accent bar */}
      <div className={`h-1 ${
        diffLower === "easy"
          ? "bg-emerald-400"
          : diffLower === "medium"
          ? "bg-amber-400"
          : "bg-red-400"
      }`} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
              isCompleted
                ? "bg-emerald-100 text-emerald-600"
                : "bg-blue-100 text-blue-600"
            }`}>
              {isCompleted ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <span>{challenge.id}</span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                {challenge.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {challenge.hints?.length || 0} hints available
              </p>
            </div>
          </div>
          <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full ${
            diffLower === "easy"
              ? "bg-emerald-50 text-emerald-600"
              : diffLower === "medium"
              ? "bg-amber-50 text-amber-600"
              : "bg-red-50 text-red-600"
          }`}>
            {challenge.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {challenge.instructions}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
            isCompleted
              ? "bg-emerald-50 text-emerald-600"
              : "bg-slate-100 text-slate-500"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-emerald-400" : "bg-slate-300"}`} />
            {isCompleted ? "Completed" : "Pending"}
          </span>
          <span className="text-xs text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Start →
          </span>
        </div>
      </div>
    </div>
  );
}
