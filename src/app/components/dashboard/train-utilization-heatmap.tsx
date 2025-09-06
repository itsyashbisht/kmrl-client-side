"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

// Using 12 time buckets to keep the existing layout (grid-cols-13: 1 label + 12 buckets)
const timeLabels = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "2PM", "4PM", "5PM", "6PM", "8PM"]

// Approximate capacity utilization trend for Blue Line (higher during 8–10 AM and 5–8 PM)
const utilizationData = [
  {
    route: "Blue Line",
    hours: [
      60, // 6AM
      70, // 7AM (ramp-up)
      90, // 8AM peak
      92, // 9AM peak
      88, // 10AM peak shoulder
      70, // 11AM non-peak start
      65, // 12PM
      62, // 2PM
      65, // 4PM shoulder
      90, // 5PM peak
      92, // 6PM peak
      85, // 8PM taper
    ],
  },
]

// Keep color thresholds as-is
function getUtilizationStyle(value: number): React.CSSProperties {
  if (value >= 90) return { backgroundColor: "var(--destructive)" } // critical
  if (value >= 80) return { backgroundColor: "var(--chart-4)" } // high (amber)
  if (value >= 70) return { backgroundColor: "var(--chart-5)" } // optimal (emerald)
  return { backgroundColor: "var(--chart-1)" } // low (indigo)
}

export function TrainUtilizationHeatmap() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Train Utilization Heatmap</CardTitle>
        <CardDescription className="text-muted-foreground">
          Capacity utilization across the Blue Line (sampled time buckets)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Time labels */}
          <div className="grid grid-cols-13 gap-1 text-xs text-slate-500">
            <div></div>
            {timeLabels.map((time) => (
              <div key={time} className="text-center">
                {time}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          {utilizationData.map((line) => (
            <div key={line.route} className="grid grid-cols-13 gap-1 items-center">
              <div className="text-sm font-medium text-foreground/90 w-20">{line.route}</div>
              {line.hours.map((utilization, index) => (
                <div
                  key={`${line.route}-${index}`}
                  className="h-8 rounded-md flex items-center justify-center text-white text-xs font-medium"
                  style={getUtilizationStyle(utilization)}
                  title={`${line.route} at ${timeLabels[index]}: ${utilization}% utilization`}
                >
                  {utilization}%
                </div>
              ))}
            </div>
          ))}

          {/* Legend */}
          <div
            className="flex items-center justify-center gap-6 pt-4 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--chart-1)" }} />
              <span className="text-xs text-muted-foreground">Low (60-69%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--chart-5)" }} />
              <span className="text-xs text-muted-foreground">Optimal (70-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--chart-4)" }} />
              <span className="text-xs text-muted-foreground">High (80-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--destructive)" }} />
              <span className="text-xs text-muted-foreground">Critical (90%+)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
