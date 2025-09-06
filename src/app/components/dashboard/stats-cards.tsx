import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Train, Clock, AlertTriangle, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Trains Available",
    value: "25", // Updated to reflect Kochi Metro's 25 trainsets
    icon: Train,
    change: "All operational",
    changeType: "positive" as const,
    bgColor: "bg-gradient-to-r from-emerald-50 to-emerald-100/50",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-900",
    borderColor: "border-emerald-200",
  },
  {
    title: "Trains Scheduled Today",
    value: "16", // Updated to reflect peak hour requirement
    icon: Clock,
    change: "Peak hours active",
    changeType: "neutral" as const,
    bgColor: "bg-gradient-to-r from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600",
    valueColor: "text-blue-900",
    borderColor: "border-blue-200",
  },
  {
    title: "Trains Needing Maintenance",
    value: "3",
    icon: AlertTriangle,
    change: "Scheduled tonight",
    changeType: "positive" as const,
    bgColor: "bg-gradient-to-r from-amber-50 to-amber-100/50",
    iconColor: "text-amber-600",
    valueColor: "text-amber-900",
    borderColor: "border-amber-200",
  },
  {
    title: "Line Efficiency",
    value: "96.8%", // Changed from branding to line efficiency for metro context
    icon: TrendingUp,
    change: "+2.1% this week",
    changeType: "positive" as const,
    bgColor: "bg-gradient-to-r from-purple-50 to-purple-100/50",
    iconColor: "text-purple-600",
    valueColor: "text-purple-900",
    borderColor: "border-purple-200",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className={`${stat.bgColor} border ${stat.borderColor} shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-3 px-4">
            <CardTitle className="text-sm font-semibold text-slate-700 leading-tight">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className={`text-3xl font-bold ${stat.valueColor} leading-none mb-1`}>{stat.value}</div>
            <p
              className={`text-xs font-medium ${
                stat.changeType === "positive"
                  ? "text-emerald-600"
                  : stat.changeType === "negative"
                    ? "text-red-600"
                    : "text-slate-600"
              }`}
            >
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
