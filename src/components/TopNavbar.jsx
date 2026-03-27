import { useLocation } from "react-router-dom";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/challenge": "Challenge",
  "/leaderboard": "Leaderboard",
  "/profile": "Profile",
};

export default function Navbar({ onToggleSidebar, completedCount, totalCount, apiKey, onOpenApiKeyModal }) {
  const location = useLocation();

  const currentTitle = Object.entries(pageTitles).find(([path]) =>
    location.pathname.startsWith(path)
  )?.[1] || "Dashboard";

  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Hamburger — mobile only */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div>
          <h2 className="text-lg font-semibold text-slate-800">{currentTitle}</h2>
          <p className="text-xs text-slate-400 -mt-0.5">
            {completedCount} of {totalCount} challenges completed
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Progress */}
        <div className="hidden sm:flex items-center gap-2.5">
          <span className="text-xs text-slate-400 font-medium">{progress}%</span>
          <div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* API Key indicator */}
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
          {apiKey ? "Key ✓" : "API Key"}
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          SY
        </div>
      </div>
    </header>
  );
}
