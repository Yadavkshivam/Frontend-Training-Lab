const leaderboardData = [
  { rank: 1, name: "Aarav Sharma", score: 980, challenges: 10, avatar: "AS" },
  { rank: 2, name: "Priya Patel", score: 920, challenges: 9, avatar: "PP" },
  { rank: 3, name: "Rahul Gupta", score: 870, challenges: 9, avatar: "RG" },
  { rank: 4, name: "Sneha Reddy", score: 840, challenges: 8, avatar: "SR" },
  { rank: 5, name: "Vikram Singh", score: 780, challenges: 8, avatar: "VS" },
  { rank: 6, name: "Anita Desai", score: 720, challenges: 7, avatar: "AD" },
  { rank: 7, name: "Karthik Iyer", score: 650, challenges: 7, avatar: "KI" },
  { rank: 8, name: "Meera Joshi", score: 600, challenges: 6, avatar: "MJ" },
  { rank: 9, name: "Arjun Nair", score: 540, challenges: 5, avatar: "AN" },
  { rank: 10, name: "Divya Kumar", score: 480, challenges: 5, avatar: "DK" },
];

const rankColors = {
  1: "from-yellow-400 to-amber-500",
  2: "from-slate-300 to-slate-400",
  3: "from-amber-600 to-amber-700",
};

export default function LeaderboardPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Leaderboard 🏆</h1>
        <p className="text-slate-500 text-sm mt-1">Top performers across all challenges.</p>
      </div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[1, 0, 2].map((idx) => {
          const user = leaderboardData[idx];
          const isFirst = user.rank === 1;
          return (
            <div
              key={user.rank}
              className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-center ${
                isFirst ? "ring-2 ring-amber-200 shadow-amber-100" : ""
              }`}
            >
              <div className={`w-14 h-14 mx-auto rounded-full bg-linear-to-br ${
                rankColors[user.rank] || "from-blue-400 to-indigo-500"
              } flex items-center justify-center text-white font-bold text-lg mb-3`}>
                {user.avatar}
              </div>
              <p className="font-semibold text-slate-800 text-sm">{user.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">{user.challenges} challenges</p>
              <p className="text-lg font-bold text-blue-600 mt-2">{user.score}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wide">points</p>
              {isFirst && <span className="text-lg mt-1 block">👑</span>}
            </div>
          );
        })}
      </div>

      {/* Full table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Rank</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Developer</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Challenges</th>
              <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user) => (
              <tr key={user.rank} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3.5">
                  <span className={`w-7 h-7 inline-flex items-center justify-center rounded-lg text-xs font-bold ${
                    user.rank <= 3
                      ? "bg-amber-100 text-amber-600"
                      : "bg-slate-100 text-slate-500"
                  }`}>
                    {user.rank}
                  </span>
                </td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                      {user.avatar}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-sm text-slate-500">{user.challenges} completed</td>
                <td className="px-6 py-3.5 text-right">
                  <span className="text-sm font-bold text-blue-600">{user.score}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
