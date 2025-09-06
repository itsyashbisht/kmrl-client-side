"use client"

import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Search, Filter, Download } from "lucide-react"

export function HealthFilters() {
  return (
    <Card className="bg-white border border-slate-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input placeholder="Search by Train ID..." className="pl-10" />
          </div>

          <div className="flex gap-3">
            <Select defaultValue="all-health">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Health Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-health">All Status</SelectItem>
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="cleaning">Needs Cleaning</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-depots">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Depot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-depots">All Depots</SelectItem>
                <SelectItem value="depot-a">Depot A</SelectItem>
                <SelectItem value="depot-b">Depot B</SelectItem>
                <SelectItem value="depot-c">Depot C</SelectItem>
                <SelectItem value="depot-d">Depot D</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>

            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
