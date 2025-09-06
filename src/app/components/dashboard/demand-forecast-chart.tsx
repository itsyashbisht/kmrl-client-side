"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

// Kochi Metro operational profile (simplified):
// Peaks: 8–11 AM and 5–8 PM ~16 trains needed
// Non-peak: 11 AM–5 PM ~5–6 trains needed
// Service: ~06:00–22:30
const demandData = [
  { time: "06:00", demand: 6, predicted: 6 },
  { time: "07:00", demand: 10, predicted: 9 },
  { time: "08:00", demand: 16, predicted: 16 },
  { time: "09:00", demand: 16, predicted: 16 },
  { time: "10:00", demand: 16, predicted: 15 },
  { time: "11:00", demand: 6, predicted: 6 },
  { time: "12:00", demand: 6, predicted: 6 },
  { time: "13:00", demand: 6, predicted: 6 },
  { time: "14:00", demand: 6, predicted: 5 },
  { time: "15:00", demand: 6, predicted: 6 },
  { time: "16:00", demand: 8, predicted: 9 },
  { time: "17:00", demand: 16, predicted: 16 },
  { time: "18:00", demand: 16, predicted: 16 },
  { time: "19:00", demand: 16, predicted: 15 },
  { time: "20:00", demand: 12, predicted: 11 },
  { time: "21:00", demand: 8, predicted: 7 },
  { time: "22:00", demand: 4, predicted: 4 },
]

// Map series keys to labels/colors used by our chart utilities
const chartConfig = {
  demand: {
    label: "Trains Required (Actual)",
    color: "var(--chart-1)",
  },
  predicted: {
    label: "Trains Required (AI)",
    color: "var(--chart-5)",
  },
}

export function DemandForecastChart() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Demand Forecast</CardTitle>
        <CardDescription className="text-muted-foreground">
          Trains required by time of day (Actual vs AI)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demandData}>
              <XAxis
                dataKey="time"
                tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                axisLine={{ stroke: "var(--border)" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                axisLine={{ stroke: "var(--border)" }}
                allowDecimals={false}
                domain={[0, 18]}
              />
              <ChartTooltip content={<ChartTooltipContent nameKey="dataKey" labelKey="dataKey" />} />
              <Line
                type="monotone"
                dataKey="demand"
                stroke={chartConfig.demand.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.demand.color, strokeWidth: 2, r: 3 }}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke={chartConfig.predicted.color}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: chartConfig.predicted.color, strokeWidth: 2, r: 3 }}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
