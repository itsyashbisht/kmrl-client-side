import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { FileText, Download, Clock, TrendingUp } from "lucide-react"

const summaryStats = [
  {
    title: "Total Reports",
    value: "247",
    subtitle: "this month",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "Downloads",
    value: "1,834",
    subtitle: "last 30 days",
    icon: Download,
    color: "text-green-600",
  },
  {
    title: "Scheduled Reports",
    value: "12",
    subtitle: "active",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Report Usage",
    value: "+23%",
    subtitle: "vs last month",
    icon: TrendingUp,
    color: "text-purple-600",
  },
]

export function ReportSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryStats.map((stat) => (
        <Card key={stat.title} className="bg-white border border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <p className="text-xs text-slate-500 mt-1">{stat.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
