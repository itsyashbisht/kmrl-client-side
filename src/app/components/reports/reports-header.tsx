import { Button } from "@/app/components/ui/button"
import { FileText, Calendar, Settings } from "lucide-react"

export function ReportsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
        <p className="text-slate-600 mt-1">Generate and export operational reports</p>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Report
        </Button>
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4 mr-2" />
          Report Settings
        </Button>
        <Button size="sm">
          <FileText className="w-4 h-4 mr-2" />
          New Report
        </Button>
      </div>
    </div>
  )
}
