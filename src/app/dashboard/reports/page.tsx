import { ReportsHeader } from "@/app/components/reports/reports-header"
import { ReportFilters } from "@/app/components/reports/report-filters"
import { ReportsTable } from "@/app/components/reports/reports-table"
import { ReportSummary } from "@/app/components/reports/report-summary"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <ReportsHeader />
      <ReportSummary />
      <ReportFilters />
      <ReportsTable />
    </div>
  )
}
