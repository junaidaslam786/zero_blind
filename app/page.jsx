import AttackSurfaceTable from "../components/AttackSurfaceTable";
import AutomationRules from "../components/AutomationRules";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import TopNav from "../components/TopNav";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full text-white font-montserrat">
      {/* Top Navigation */}
      <TopNav />

      {/* Main content area: Sidebar + Dashboard Sections */}
      <div className="flex flex-1 gap-6 flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Sections */}
        <main className="flex-1 flex flex-col gap-8">
          <StatsCards />
          <AttackSurfaceTable />
          <AutomationRules />
        </main>
      </div>
    </div>
  );
}
