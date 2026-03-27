import { useNavigate } from "react-router-dom";

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    btn: "bg-blue-600 hover:bg-blue-700",
    accent: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
    btn: "bg-purple-600 hover:bg-purple-700",
    accent: "bg-purple-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    accent: "bg-emerald-500",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    btn: "bg-amber-600 hover:bg-amber-700",
    accent: "bg-amber-500",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
    btn: "bg-rose-600 hover:bg-rose-700",
    accent: "bg-rose-500",
  },
};

export default function ModuleCard({ module }) {
  const navigate = useNavigate();
  const c = colorMap[module.color] || colorMap.blue;
  const questionCount = module.questions?.length ?? 10;

  return (
    <div
      className={`relative bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer`}
      onClick={() => navigate(`/practice/${module.id}`)}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full ${c.accent}`} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center text-2xl shrink-0`}>
            {module.icon}
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}
          >
            {module.difficulty}
          </span>
        </div>

        {/* Title & description */}
        <h3 className="text-sm font-bold text-slate-800 mb-1.5 group-hover:text-blue-600 transition-colors">
          {module.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {module.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">
            📝 {questionCount} questions
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/practice/${module.id}`);
            }}
            className={`px-3 py-1.5 text-xs font-semibold text-white rounded-lg ${c.btn} transition-colors cursor-pointer`}
          >
            Start Practice →
          </button>
        </div>
      </div>
    </div>
  );
}
