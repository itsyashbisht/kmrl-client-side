import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { AlertTriangle, Clock, Wrench, TrendingDown, X, Eye, MoreHorizontal } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "critical",
    icon: AlertTriangle,
    title: "Train 208 Maintenance Required",
    description: "Brake system showing irregular patterns. Schedule maintenance within 24 hours.",
    time: "2 minutes ago",
    priority: "High",
  },
  {
    id: 2,
    type: "warning",
    icon: Clock,
    title: "Peak Hour Capacity Alert",
    description: "Line B approaching 95% capacity. Consider deploying additional trains.",
    time: "15 minutes ago",
    priority: "Medium",
  },
  {
    id: 3,
    type: "maintenance",
    icon: Wrench,
    title: "Scheduled Maintenance Complete",
    description: "Train 156 maintenance completed successfully. Ready for service.",
    time: "1 hour ago",
    priority: "Low",
  },
  {
    id: 4,
    type: "performance",
    icon: TrendingDown,
    title: "Route Efficiency Drop",
    description: "Line C showing 12% decrease in on-time performance this week.",
    time: "3 hours ago",
    priority: "Medium",
  },
]

function getAlertStyles(type: string) {
  switch (type) {
    case "critical":
      return "border-l-red-500 bg-red-50"
    case "warning":
      return "border-l-yellow-500 bg-yellow-50"
    case "maintenance":
      return "border-l-blue-500 bg-blue-50"
    case "performance":
      return "border-l-orange-500 bg-orange-50"
    default:
      return "border-l-gray-500 bg-gray-50"
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "Low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getIconBackground(type: string) {
  switch (type) {
    case "critical":
      return "bg-red-100 text-red-600"
    case "warning":
      return "bg-yellow-100 text-yellow-600"
    case "maintenance":
      return "bg-blue-100 text-blue-600"
    case "performance":
      return "bg-orange-100 text-orange-600"
    default:
      return "bg-gray-100 text-gray-600"
  }
}

export function AlertsSection() {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-slate-900">System Alerts</CardTitle>
              <p className="text-sm text-slate-500">4 active alerts requiring attention</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <Eye className="w-3 h-3 mr-1" />
              View All
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 border-l-4 rounded-r-xl border border-l-0 ${getAlertStyles(alert.type)} hover:shadow-sm transition-all duration-200 group`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className={`p-2 rounded-lg ${getIconBackground(alert.type)}`}>
                    <alert.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-slate-900 text-sm">{alert.title}</h4>
                      <Badge className={`${getPriorityColor(alert.priority)} text-xs px-2 py-0.5`}>
                        {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{alert.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-slate-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {alert.time}
                      </p>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-slate-200/60">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Last updated: 2 minutes ago</span>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              Refresh Alerts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
