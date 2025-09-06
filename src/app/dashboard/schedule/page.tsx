import { TrainScheduleTable } from "@/app/components/schedule/train-schedule-table"
import { ScheduleFilters } from "@/app/components/schedule/schedule-filters"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Plus, Download } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Train Schedule</h1>
          <p className="text-slate-600 mt-1">Manage train schedules and timing</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Schedule
          </Button>
        </div>
      </div>

      <ScheduleFilters />

      <Card className="bg-white border border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Blue Line Schedule - Aluva to Tripunithura
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TrainScheduleTable />
        </CardContent>
      </Card>
    </div>
  )
}
