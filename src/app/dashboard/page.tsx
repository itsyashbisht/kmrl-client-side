import { StatsCards } from "@/app/components/dashboard/stats-cards"
import { TrainUtilizationHeatmap } from "@/app/components/dashboard/train-utilization-heatmap"
import { AlertsSection } from "@/app/components/dashboard/alerts-section"
import { GuideCards } from "@/app/components/dashboard/guide-cards"

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Real-time insights for Kochi Metro operations</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="mb-8">
        <StatsCards />
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Getting Started</h2>
          <p className="text-muted-foreground">Learn how to use the system and navigate the dashboard</p>
        </div>
        <GuideCards />
      </div>

      <div className="space-y-8">
        <div className="bg-card rounded-xl border shadow-sm p-6">
          <TrainUtilizationHeatmap />
        </div>

        <div className="bg-card rounded-xl border shadow-sm p-6">
          <AlertsSection />
        </div>
      </div>
    </div>
  )
}
