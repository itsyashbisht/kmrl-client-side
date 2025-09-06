import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Train, MapPin, Wrench, CheckCircle } from "lucide-react"

const depotStats = [
  {
    title: "Total Capacity",
    value: "150",
    subtitle: "train slots",
    icon: MapPin,
    color: "text-blue-600",
  },
  {
    title: "Trains in Depot",
    value: "89",
    subtitle: "currently parked",
    icon: Train,
    color: "text-green-600",
  },
  {
    title: "Available Slots",
    value: "61",
    subtitle: "ready for use",
    icon: CheckCircle,
    color: "text-slate-600",
  },
  {
    title: "Maintenance Bays",
    value: "12",
    subtitle: "active repairs",
    icon: Wrench,
    color: "text-orange-600",
  },
]

export function DepotStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {depotStats.map((stat) => (
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
