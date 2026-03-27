import { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ChallengePage from "./pages/ChallengePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ProfilePage from "./pages/ProfilePage";
import PracticePage from "./pages/PracticePage";
import ApiKeyModal from "./components/ApiKeyModal";
import GenerateChallengeModal from "./components/GenerateChallengeModal";
import defaultChallenges from "./data/challenges";
import { initGemini, isGeminiReady } from "./services/gemini";

function App() {
  const [challenges, setChallenges] = useState(defaultChallenges);
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem("completed_ids");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("gemini_api_key") || "");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize Gemini on mount if key exists
  useEffect(() => {
    if (apiKey) initGemini(apiKey);
  }, [apiKey]);

  // Splash loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Persist completed IDs
  useEffect(() => {
    localStorage.setItem("completed_ids", JSON.stringify([...completedIds]));
  }, [completedIds]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSaveApiKey = (key) => {
    localStorage.setItem("gemini_api_key", key);
    setApiKey(key);
    initGemini(key);
    setShowApiKeyModal(false);
    showToast("API key saved! AI features are now enabled.");
  };

  const handleGenerate = (newChallenge) => {
    newChallenge.id = challenges.length + 1;
    setChallenges((prev) => [...prev, newChallenge]);
    setShowGenerateModal(false);
    showToast(`AI Challenge "${newChallenge.title}" added!`);
  };

  const handleMarkCompleted = useCallback((id) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const openGenerateModal = () => {
    if (!isGeminiReady()) {
      setShowApiKeyModal(true);
      return;
    }
    setShowGenerateModal(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-slate-50 gap-4">
        <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center animate-pulse">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <p className="text-slate-400 text-sm font-medium">Loading Frontend Lab...</p>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          element={
            <AppLayout
              completedCount={completedIds.size}
              totalCount={challenges.length}
              apiKey={apiKey}
              onOpenApiKeyModal={() => setShowApiKeyModal(true)}
            />
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                challenges={challenges}
                completedIds={completedIds}
                onOpenGenerateModal={openGenerateModal}
              />
            }
          />
          <Route
            path="/challenge/:id"
            element={
              <ChallengePage
                challenges={challenges}
                onMarkCompleted={handleMarkCompleted}
                onOpenGenerateModal={openGenerateModal}
              />
            }
          />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route
            path="/profile"
            element={<ProfilePage challenges={challenges} completedIds={completedIds} />}
          />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practice/:moduleId" element={<PracticePage />} />
          <Route path="/practice/:moduleId/:qIndex" element={<PracticePage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-100 animate-slide-up">
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-medium ${
              toast.type === "error" ? "bg-red-600 text-white" : "bg-slate-800 text-white"
            }`}
          >
            {toast.type === "error" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {toast.message}
          </div>
        </div>
      )}

      {/* Modals */}
      {showApiKeyModal && (
        <ApiKeyModal
          currentKey={apiKey}
          onSave={handleSaveApiKey}
          onClose={() => setShowApiKeyModal(false)}
        />
      )}
      {showGenerateModal && (
        <GenerateChallengeModal
          onGenerate={handleGenerate}
          onClose={() => setShowGenerateModal(false)}
        />
      )}
    </>
  );
}

export default App;
