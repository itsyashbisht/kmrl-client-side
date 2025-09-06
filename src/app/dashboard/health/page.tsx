import { TrainHealthCards } from "@/app/components/health/train-health-cards"
import { HealthFilters } from "@/app/components/health/health-filters"
import { HealthSummary } from "@/app/components/health/health-summary"

export default function HealthPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Train Health</h1>
          <p className="text-slate-600 mt-1">Monitor train health and maintenance status</p>
        </div>
      </div>

      <HealthSummary />
      <HealthFilters />
      <TrainHealthCards />
    </div>
  )
}
