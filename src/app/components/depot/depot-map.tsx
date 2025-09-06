"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Progress } from "@/app/components/ui/progress"
import { X, MapPin, Gauge, Calendar, Sparkles } from "lucide-react"

// Generate depot layout data
const generateDepotData = () => {
  const trains = []
  const totalSlots = 30 // 30 slots with 25 trains (83% occupancy)
  const trainIds = Array.from({ length: 25 }, (_, i) => `KM-${String(i + 1).padStart(3, "0")}`)

  for (let i = 0; i < totalSlots; i++) {
    const slotId = `M-${String(i + 1).padStart(2, "0")}`
    const hasTrain = i < 25

    if (hasTrain) {
      const trainId = trainIds[i]
      const statuses = ["ready", "maintenance", "cleaning"]
      const status = statuses[Math.floor(Math.random() * statuses.length)]
      const fitness = Math.floor(Math.random() * 40) + 60 // 60-100%
      const mileage = Math.floor(Math.random() * 30000) + 30000 // 30k-60k

      trains.push({
        slotId,
        trainId,
        depot: "Muttom Depot",
        status,
        fitness,
        mileage,
        lastMaintenance: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        inductionPriority: Math.floor(Math.random() * 10) + 1,
        cleaningStatus: status === "cleaning" ? "in-progress" : Math.random() > 0.7 ? "needed" : "clean",
        brandingStatus: ["excellent", "good", "fair", "poor"][Math.floor(Math.random() * 4)],
      })
    } else {
      trains.push({
        slotId,
        trainId: null,
        depot: "Muttom Depot",
        status: "empty",
        fitness: null,
        mileage: null,
        lastMaintenance: null,
        inductionPriority: null,
        cleaningStatus: null,
        brandingStatus: null,
      })
    }
  }

  return trains
}

function getSlotColor(status: string) {
  switch (status) {
    case "ready":
      return "bg-green-500 hover:bg-green-600"
    case "maintenance":
      return "bg-red-500 hover:bg-red-600"
    case "cleaning":
      return "bg-yellow-500 hover:bg-yellow-600"
    case "empty":
      return "bg-slate-200 border-2 border-slate-400 hover:bg-slate-300"
    default:
      return "bg-gray-500 hover:bg-gray-600"
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "ready":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ready</Badge>
    case "maintenance":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Maintenance</Badge>
    case "cleaning":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Cleaning</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Unknown</Badge>
  }
}

function getPriorityColor(priority: number) {
  if (priority >= 8) return "text-red-600"
  if (priority >= 5) return "text-yellow-600"
  return "text-green-600"
}

export function DepotMap() {
  const [selectedTrain, setSelectedTrain] = useState<any>(null)
  const depotData = generateDepotData()

  const handleSlotClick = (train: any) => {
    if (train.trainId) {
      setSelectedTrain(train)
    }
  }

  return (
    <div className="space-y-6">
      {/* Depot Grid */}
      <Card className="bg-white border border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Muttom Depot Layout - Blue Line Fleet</CardTitle>
          <p className="text-sm text-slate-600">25 trainsets serving Aluva to Tripunithura route</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-10 gap-2 p-4 bg-slate-50 rounded-lg">
            {depotData.map((train) => (
              <div
                key={train.slotId}
                className={`
                  relative w-16 h-12 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-center
                  ${getSlotColor(train.status)}
                  ${train.trainId ? "shadow-sm hover:shadow-md" : ""}
                `}
                onClick={() => handleSlotClick(train)}
                title={
                  train.trainId
                    ? `${train.trainId} - ${train.status} (Slot ${train.slotId})`
                    : `Empty Slot ${train.slotId}`
                }
              >
                {train.trainId ? (
                  <div className="text-white text-xs font-bold text-center">
                    <div>{train.trainId.split("-")[1]}</div>
                  </div>
                ) : (
                  <div className="text-slate-500 text-xs">{train.slotId.split("-")[1]}</div>
                )}

                {/* Priority indicator */}
                {train.inductionPriority && train.inductionPriority >= 8 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border border-white"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Click on any train to view detailed health information and induction priority.
          </div>
        </CardContent>
      </Card>

      {/* Train Detail Modal */}
      <Dialog open={!!selectedTrain} onOpenChange={() => setSelectedTrain(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Train {selectedTrain?.trainId}</span>
              <Button variant="ghost" size="sm" onClick={() => setSelectedTrain(null)}>
                <X className="w-4 h-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          {selectedTrain && (
            <div className="space-y-4">
              {/* Basic Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-600">Location</span>
                </div>
                <span className="font-medium text-slate-900">
                  {selectedTrain.depot} - Slot {selectedTrain.slotId}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Status</span>
                {getStatusBadge(selectedTrain.status)}
              </div>

              {/* Induction Priority */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Induction Priority</span>
                <span className={`font-bold text-lg ${getPriorityColor(selectedTrain.inductionPriority)}`}>
                  {selectedTrain.inductionPriority}/10
                </span>
              </div>

              {/* Health Metrics */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <h4 className="font-medium text-slate-900">Health Metrics</h4>

                {/* Fitness */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">Fitness</span>
                    </div>
                    <span className="font-medium text-slate-900">{selectedTrain.fitness}%</span>
                  </div>
                  <Progress value={selectedTrain.fitness} className="h-2" />
                </div>

                {/* Mileage */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Mileage</span>
                  <span className="font-medium text-slate-900">{selectedTrain.mileage?.toLocaleString()} km</span>
                </div>

                {/* Cleaning Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Cleaning</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      selectedTrain.cleaningStatus === "clean"
                        ? "text-green-700 border-green-300"
                        : selectedTrain.cleaningStatus === "needed"
                          ? "text-yellow-700 border-yellow-300"
                          : "text-blue-700 border-blue-300"
                    }
                  >
                    {selectedTrain.cleaningStatus === "clean"
                      ? "Clean"
                      : selectedTrain.cleaningStatus === "needed"
                        ? "Needs Cleaning"
                        : "In Progress"}
                  </Badge>
                </div>

                {/* Last Maintenance */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Last Service</span>
                  </div>
                  <span className="text-sm text-slate-700">{selectedTrain.lastMaintenance}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-4 border-t border-slate-200">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Schedule Service
                </Button>
                <Button size="sm" className="flex-1">
                  Update Priority
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
