import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function AppLayout({ completedCount, totalCount, apiKey, onOpenApiKeyModal }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main area — shifts right based on sidebar width */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300
                     ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        <TopNavbar
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          completedCount={completedCount}
          totalCount={totalCount}
          apiKey={apiKey}
          onOpenApiKeyModal={onOpenApiKeyModal}
        />

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
