import { DepotMap } from "@/app/components/depot/depot-map"
import { DepotControls } from "@/app/components/depot/depot-controls"
import { DepotStats } from "@/app/components/depot/depot-stats"

export default function DepotPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Depot Visualization</h1>
          <p className="text-slate-600 mt-1">Interactive depot map and train positioning</p>
        </div>
      </div>

      <DepotStats />
      <DepotControls />
      <DepotMap />
    </div>
  )
}
