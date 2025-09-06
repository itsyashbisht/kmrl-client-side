import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, Wrench } from "lucide-react"

const summaryStats = [
  {
    title: "Ready for Service",
    count: 128,
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "Needs Cleaning",
    count: 12,
    icon: AlertTriangle,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    title: "Maintenance Required",
    count: 7,
    icon: XCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    title: "Under Maintenance",
    count: 3,
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
]

export function HealthSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryStats.map((stat) => (
        <Card key={stat.title} className={`${stat.bgColor} ${stat.borderColor} border shadow-sm`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
            <p className="text-xs text-slate-600 mt-1">trains</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
