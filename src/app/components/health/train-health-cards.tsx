"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Progress } from "@/app/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { MoreHorizontal, MapPin, Calendar, Gauge, Sparkles, Palette } from "lucide-react"

const trainHealthData = [
  {
    id: "KM-001",
    mileage: 45230,
    fitness: 92,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-15",
    nextMaintenance: "2024-02-15",
    overallStatus: "ready",
  },
  {
    id: "KM-002",
    mileage: 38750,
    fitness: 88,
    cleaningStatus: "needs-cleaning",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-10",
    nextMaintenance: "2024-02-10",
    overallStatus: "cleaning",
  },
  {
    id: "KM-003",
    mileage: 52100,
    fitness: 65,
    cleaningStatus: "clean",
    brandingStatus: "poor",
    depot: "Muttom Depot",
    lastMaintenance: "2023-12-20",
    nextMaintenance: "2024-01-20",
    overallStatus: "maintenance",
  },
  {
    id: "KM-004",
    mileage: 41200,
    fitness: 95,
    cleaningStatus: "clean",
    brandingStatus: "excellent",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-18",
    nextMaintenance: "2024-02-18",
    overallStatus: "ready",
  },
  {
    id: "KM-005",
    mileage: 47800,
    fitness: 78,
    cleaningStatus: "needs-cleaning",
    brandingStatus: "fair",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-05",
    nextMaintenance: "2024-02-05",
    overallStatus: "cleaning",
  },
  {
    id: "KM-006",
    mileage: 55600,
    fitness: 58,
    cleaningStatus: "dirty",
    brandingStatus: "poor",
    depot: "Muttom Depot",
    lastMaintenance: "2023-12-15",
    nextMaintenance: "2024-01-15",
    overallStatus: "maintenance",
  },
  {
    id: "KM-007",
    mileage: 39400,
    fitness: 91,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-20",
    nextMaintenance: "2024-02-20",
    overallStatus: "ready",
  },
  {
    id: "KM-008",
    mileage: 43900,
    fitness: 85,
    cleaningStatus: "clean",
    brandingStatus: "excellent",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-12",
    nextMaintenance: "2024-02-12",
    overallStatus: "ready",
  },
  {
    id: "KM-009",
    mileage: 36200,
    fitness: 89,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-14",
    nextMaintenance: "2024-02-14",
    overallStatus: "ready",
  },
  {
    id: "KM-010",
    mileage: 49300,
    fitness: 72,
    cleaningStatus: "needs-cleaning",
    brandingStatus: "fair",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-08",
    nextMaintenance: "2024-02-08",
    overallStatus: "cleaning",
  },
  {
    id: "KM-011",
    mileage: 44700,
    fitness: 94,
    cleaningStatus: "clean",
    brandingStatus: "excellent",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-19",
    nextMaintenance: "2024-02-19",
    overallStatus: "ready",
  },
  {
    id: "KM-012",
    mileage: 51800,
    fitness: 67,
    cleaningStatus: "dirty",
    brandingStatus: "poor",
    depot: "Muttom Depot",
    lastMaintenance: "2023-12-28",
    nextMaintenance: "2024-01-28",
    overallStatus: "maintenance",
  },
  {
    id: "KM-013",
    mileage: 37900,
    fitness: 90,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-16",
    nextMaintenance: "2024-02-16",
    overallStatus: "ready",
  },
  {
    id: "KM-014",
    mileage: 42500,
    fitness: 86,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-11",
    nextMaintenance: "2024-02-11",
    overallStatus: "ready",
  },
  {
    id: "KM-015",
    mileage: 48600,
    fitness: 75,
    cleaningStatus: "needs-cleaning",
    brandingStatus: "fair",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-06",
    nextMaintenance: "2024-02-06",
    overallStatus: "cleaning",
  },
  {
    id: "KM-016",
    mileage: 40100,
    fitness: 93,
    cleaningStatus: "clean",
    brandingStatus: "excellent",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-17",
    nextMaintenance: "2024-02-17",
    overallStatus: "ready",
  },
  {
    id: "KM-017",
    mileage: 53200,
    fitness: 61,
    cleaningStatus: "dirty",
    brandingStatus: "poor",
    depot: "Muttom Depot",
    lastMaintenance: "2023-12-22",
    nextMaintenance: "2024-01-22",
    overallStatus: "maintenance",
  },
  {
    id: "KM-018",
    mileage: 35800,
    fitness: 91,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-21",
    nextMaintenance: "2024-02-21",
    overallStatus: "ready",
  },
  {
    id: "KM-019",
    mileage: 46400,
    fitness: 83,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-13",
    nextMaintenance: "2024-02-13",
    overallStatus: "ready",
  },
  {
    id: "KM-020",
    mileage: 50700,
    fitness: 69,
    cleaningStatus: "needs-cleaning",
    brandingStatus: "fair",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-04",
    nextMaintenance: "2024-02-04",
    overallStatus: "cleaning",
  },
  {
    id: "KM-021",
    mileage: 38300,
    fitness: 95,
    cleaningStatus: "clean",
    brandingStatus: "excellent",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-22",
    nextMaintenance: "2024-02-22",
    overallStatus: "ready",
  },
  {
    id: "KM-022",
    mileage: 45900,
    fitness: 77,
    cleaningStatus: "needs-cleaning",
    brandingStatus: "fair",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-07",
    nextMaintenance: "2024-02-07",
    overallStatus: "cleaning",
  },
  {
    id: "KM-023",
    mileage: 41800,
    fitness: 88,
    cleaningStatus: "clean",
    brandingStatus: "good",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-15",
    nextMaintenance: "2024-02-15",
    overallStatus: "ready",
  },
  {
    id: "KM-024",
    mileage: 52900,
    fitness: 63,
    cleaningStatus: "dirty",
    brandingStatus: "poor",
    depot: "Muttom Depot",
    lastMaintenance: "2023-12-25",
    nextMaintenance: "2024-01-25",
    overallStatus: "maintenance",
  },
  {
    id: "KM-025",
    mileage: 39700,
    fitness: 92,
    cleaningStatus: "clean",
    brandingStatus: "excellent",
    depot: "Muttom Depot",
    lastMaintenance: "2024-01-18",
    nextMaintenance: "2024-02-18",
    overallStatus: "ready",
  },
]

function getOverallStatusIndicator(status: string) {
  switch (status) {
    case "ready":
      return <div className="w-4 h-4 rounded-full bg-green-500" title="Ready for Service" />
    case "cleaning":
      return <div className="w-4 h-4 rounded-full bg-yellow-500" title="Needs Cleaning" />
    case "maintenance":
      return <div className="w-4 h-4 rounded-full bg-red-500" title="Maintenance Required" />
    default:
      return <div className="w-4 h-4 rounded-full bg-gray-500" title="Unknown Status" />
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "ready":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ready</Badge>
    case "cleaning":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Needs Cleaning</Badge>
    case "maintenance":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Maintenance</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Unknown</Badge>
  }
}

function getCleaningStatusBadge(status: string) {
  switch (status) {
    case "clean":
      return (
        <Badge variant="outline" className="text-green-700 border-green-300">
          Clean
        </Badge>
      )
    case "needs-cleaning":
      return (
        <Badge variant="outline" className="text-yellow-700 border-yellow-300">
          Needs Cleaning
        </Badge>
      )
    case "dirty":
      return (
        <Badge variant="outline" className="text-red-700 border-red-300">
          Dirty
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

function getBrandingStatusBadge(status: string) {
  switch (status) {
    case "excellent":
      return (
        <Badge variant="outline" className="text-green-700 border-green-300">
          Excellent
        </Badge>
      )
    case "good":
      return (
        <Badge variant="outline" className="text-blue-700 border-blue-300">
          Good
        </Badge>
      )
    case "fair":
      return (
        <Badge variant="outline" className="text-yellow-700 border-yellow-300">
          Fair
        </Badge>
      )
    case "poor":
      return (
        <Badge variant="outline" className="text-red-700 border-red-300">
          Poor
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

function getFitnessColor(fitness: number) {
  if (fitness >= 90) return "text-green-600"
  if (fitness >= 75) return "text-yellow-600"
  return "text-red-600"
}

export function TrainHealthCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {trainHealthData.map((train) => (
        <Card key={train.id} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold text-slate-900">{train.id}</CardTitle>
              <div className="flex items-center space-x-2">
                {getOverallStatusIndicator(train.overallStatus)}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Cleaning</DropdownMenuItem>
                    <DropdownMenuItem>Update Branding</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>{train.depot}</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Mileage */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Gauge className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-600">Mileage</span>
              </div>
              <span className="font-medium text-slate-900">{train.mileage.toLocaleString()} km</span>
            </div>

            {/* Fitness Percentage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Fitness</span>
                <span className={`font-bold ${getFitnessColor(train.fitness)}`}>{train.fitness}%</span>
              </div>
              <Progress value={train.fitness} className="h-2" />
            </div>

            {/* Cleaning Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-600">Cleaning</span>
              </div>
              {getCleaningStatusBadge(train.cleaningStatus)}
            </div>

            {/* Branding Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-600">Branding</span>
              </div>
              {getBrandingStatusBadge(train.brandingStatus)}
            </div>

            {/* Overall Status */}
            <div className="pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Status</span>
                {getStatusBadge(train.overallStatus)}
              </div>
            </div>

            {/* Last Maintenance */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Last service:</span>
              </div>
              <span>{train.lastMaintenance}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
