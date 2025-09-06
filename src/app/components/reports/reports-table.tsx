"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { Download, MoreHorizontal, FileText, Calendar, User, Eye } from "lucide-react"

const reportsData = [
  {
    id: "KM-RPT-001",
    name: "Blue Line Daily Operations Summary",
    type: "Operational",
    status: "completed",
    createdBy: "Rajesh Kumar",
    createdDate: "2024-01-20",
    lastRun: "2024-01-20 08:30",
    size: "2.4 MB",
    downloads: 45,
    format: "PDF",
  },
  {
    id: "KM-RPT-002",
    name: "Muttom Depot Weekly Maintenance Report",
    type: "Maintenance",
    status: "completed",
    createdBy: "Priya Nair",
    createdDate: "2024-01-19",
    lastRun: "2024-01-19 18:00",
    size: "1.8 MB",
    downloads: 23,
    format: "CSV",
  },
  {
    id: "KM-RPT-003",
    name: "Aluva-Tripunithura Route Performance",
    type: "Performance",
    status: "processing",
    createdBy: "Suresh Menon",
    createdDate: "2024-01-18",
    lastRun: "2024-01-20 09:15",
    size: "3.2 MB",
    downloads: 67,
    format: "PDF",
  },
  {
    id: "KM-RPT-004",
    name: "25 Trainset Health Assessment",
    type: "Maintenance",
    status: "completed",
    createdBy: "Deepa Krishnan",
    createdDate: "2024-01-17",
    lastRun: "2024-01-17 14:20",
    size: "4.1 MB",
    downloads: 89,
    format: "Excel",
  },
  {
    id: "KM-RPT-005",
    name: "Blue Line Revenue Analysis Q1",
    type: "Financial",
    status: "scheduled",
    createdBy: "Arun Pillai",
    createdDate: "2024-01-16",
    lastRun: "2024-01-16 16:45",
    size: "1.5 MB",
    downloads: 12,
    format: "PDF",
  },
  {
    id: "KM-RPT-006",
    name: "Peak Hour Passenger Flow Analysis",
    type: "Operational",
    status: "completed",
    createdBy: "Lakshmi Devi",
    createdDate: "2024-01-15",
    lastRun: "2024-01-15 11:30",
    size: "2.9 MB",
    downloads: 34,
    format: "CSV",
  },
  {
    id: "KM-RPT-007",
    name: "Blue Line Energy Consumption Report",
    type: "Performance",
    status: "failed",
    createdBy: "Vinod Thomas",
    createdDate: "2024-01-14",
    lastRun: "2024-01-14 13:15",
    size: "0 MB",
    downloads: 0,
    format: "PDF",
  },
  {
    id: "KM-RPT-008",
    name: "Station Safety Incident Summary",
    type: "Operational",
    status: "completed",
    createdBy: "Anitha Varma",
    createdDate: "2024-01-13",
    lastRun: "2024-01-13 10:00",
    size: "856 KB",
    downloads: 78,
    format: "PDF",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
    case "processing":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Processing</Badge>
    case "scheduled":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Scheduled</Badge>
    case "failed":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Unknown</Badge>
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "Operational":
      return "text-blue-700"
    case "Maintenance":
      return "text-orange-700"
    case "Performance":
      return "text-green-700"
    case "Financial":
      return "text-purple-700"
    default:
      return "text-gray-700"
  }
}

export function ReportsTable() {
  const [selectedReports, setSelectedReports] = useState<string[]>([])

  const handleDownload = (reportId: string, format: string) => {
    console.log(`Downloading report ${reportId} as ${format}`)
    // Handle download logic here
  }

  const handleBulkExport = (format: string) => {
    console.log(`Bulk exporting ${selectedReports.length} reports as ${format}`)
    // Handle bulk export logic here
  }

  return (
    <Card className="bg-white border border-slate-200 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900">Blue Line Operations Reports</CardTitle>
          <div className="flex items-center space-x-2">
            {selectedReports.length > 0 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkExport("CSV")}
                  className="text-green-600 border-green-200 hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkExport("PDF")}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-slate-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedReports(reportsData.map((r) => r.id))
                      } else {
                        setSelectedReports([])
                      }
                    }}
                  />
                </TableHead>
                <TableHead className="font-semibold text-slate-700">Report Name</TableHead>
                <TableHead className="font-semibold text-slate-700">Type</TableHead>
                <TableHead className="font-semibold text-slate-700">Status</TableHead>
                <TableHead className="font-semibold text-slate-700">Created By</TableHead>
                <TableHead className="font-semibold text-slate-700">Last Run</TableHead>
                <TableHead className="font-semibold text-slate-700">Size</TableHead>
                <TableHead className="font-semibold text-slate-700">Downloads</TableHead>
                <TableHead className="font-semibold text-slate-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportsData.map((report) => (
                <TableRow key={report.id} className="hover:bg-slate-50">
                  <TableCell>
                    <input
                      type="checkbox"
                      className="rounded border-slate-300"
                      checked={selectedReports.includes(report.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedReports([...selectedReports, report.id])
                        } else {
                          setSelectedReports(selectedReports.filter((id) => id !== report.id))
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="font-medium text-slate-900">{report.name}</div>
                        <div className="text-xs text-slate-500">{report.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getTypeColor(report.type)}`}>{report.type}</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(report.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{report.createdBy}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{report.lastRun}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-700">{report.size}</TableCell>
                  <TableCell className="text-slate-700">{report.downloads}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {report.status === "completed" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(report.id, "CSV")}
                            className="text-green-600 border-green-200 hover:bg-green-50"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            CSV
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(report.id, "PDF")}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            PDF
                          </Button>
                        </>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download Excel
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="w-4 h-4 mr-2" />
                            Duplicate
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

        <div className="flex items-center justify-between mt-4 text-sm text-slate-600">
          <div>Showing {reportsData.length} reports</div>
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
      </CardContent>
    </Card>
  )
}
