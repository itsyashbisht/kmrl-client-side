"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { MoreHorizontal, Clock, MapPin, Settings } from "lucide-react"

const scheduleData = [
  {
    id: "KM-001",
    inductionTime: "05:30",
    depot: "Muttom Depot",
    status: "scheduled",
    route: "Blue Line",
    nextService: "06:00",
    direction: "Aluva → Tripunithura",
  },
  {
    id: "KM-002",
    inductionTime: "05:45",
    depot: "Muttom Depot",
    status: "in-service",
    route: "Blue Line",
    nextService: "06:15",
    direction: "Tripunithura → Aluva",
  },
  {
    id: "KM-003",
    inductionTime: "06:00",
    depot: "Muttom Depot",
    status: "scheduled",
    route: "Blue Line",
    nextService: "06:30",
    direction: "Aluva → Tripunithura",
  },
  {
    id: "KM-004",
    inductionTime: "06:15",
    depot: "Muttom Depot",
    status: "maintenance",
    route: "Blue Line",
    nextService: "07:00",
    direction: "Out of Service",
  },
  {
    id: "KM-005",
    inductionTime: "06:30",
    depot: "Muttom Depot",
    status: "scheduled",
    route: "Blue Line",
    nextService: "07:00",
    direction: "Tripunithura → Aluva",
  },
  {
    id: "KM-006",
    inductionTime: "06:45",
    depot: "Muttom Depot",
    status: "in-service",
    route: "Blue Line",
    nextService: "07:15",
    direction: "Aluva → Tripunithura",
  },
  {
    id: "KM-007",
    inductionTime: "07:00",
    depot: "Muttom Depot",
    status: "scheduled",
    route: "Blue Line",
    nextService: "07:30",
    direction: "Tripunithura → Aluva",
  },
  {
    id: "KM-008",
    inductionTime: "07:15",
    depot: "Muttom Depot",
    status: "delayed",
    route: "Blue Line",
    nextService: "07:45",
    direction: "Aluva → Tripunithura",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "scheduled":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Scheduled</Badge>
    case "in-service":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Service</Badge>
    case "delayed":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Delayed</Badge>
    case "maintenance":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Maintenance</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Unknown</Badge>
  }
}

export function TrainScheduleTable() {
  const [selectedTrains, setSelectedTrains] = useState<string[]>([])

  const handleOverride = (trainId: string, action: string) => {
    console.log(`Override action: ${action} for train ${trainId}`)
    // Handle override logic here
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-semibold text-slate-700">Train ID</TableHead>
              <TableHead className="font-semibold text-slate-700">Induction Time</TableHead>
              <TableHead className="font-semibold text-slate-700">Depot</TableHead>
              <TableHead className="font-semibold text-slate-700">Route</TableHead>
              <TableHead className="font-semibold text-slate-700">Status</TableHead>
              <TableHead className="font-semibold text-slate-700">Next Service</TableHead>
              <TableHead className="font-semibold text-slate-700">Direction</TableHead>
              <TableHead className="font-semibold text-slate-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleData.map((train) => (
              <TableRow key={train.id} className="hover:bg-slate-50">
                <TableCell className="font-medium text-slate-900">{train.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-700">{train.inductionTime}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-700">{train.depot}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-slate-700 font-medium">{train.route}</span>
                </TableCell>
                <TableCell>{getStatusBadge(train.status)}</TableCell>
                <TableCell className="text-slate-700">{train.nextService}</TableCell>
                <TableCell className="text-slate-700">{train.direction}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOverride(train.id, "override")}
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      <Settings className="w-4 h-4 mr-1" />
                      Override
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleOverride(train.id, "reschedule")}>
                          Reschedule
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleOverride(train.id, "cancel")}>
                          Cancel Service
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleOverride(train.id, "maintenance")}>
                          Send to Maintenance
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleOverride(train.id, "details")}>
                          View Details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600">
        <div>Showing {scheduleData.length} trains scheduled for today</div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">1</span>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
