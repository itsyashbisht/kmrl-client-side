"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { BookOpen, Play, ArrowRight, Clock, Users, BarChart3, Settings, AlertTriangle, CheckCircle } from "lucide-react"

export function GuideCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* How This Works Card */}
      <Card className="relative overflow-hidden border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
        <CardHeader className="relative">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <Badge variant="secondary" className="bg-slate-100 text-slate-800 border-slate-300">
              System Overview
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-slate-900">How This Works</CardTitle>
          <CardDescription className="text-slate-600">
            Understand the AI-powered metro scheduling system and its key components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <BarChart3 className="w-3 h-3 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Real-time Analytics</h4>
                <p className="text-xs text-slate-600">Monitor train performance, passenger demand, and system health</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                <Clock className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Smart Scheduling</h4>
                <p className="text-xs text-slate-600">AI optimizes train schedules based on peak and non-peak hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                <AlertTriangle className="w-3 h-3 text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Predictive Maintenance</h4>
                <p className="text-xs text-slate-600">Anticipate maintenance needs before issues occur</p>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-4 rounded-xl border-primary/20 hover:bg-primary/5 bg-transparent"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* User Guide Card */}
      <Card className="relative overflow-hidden border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"></div>
        <CardHeader className="relative">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <Badge variant="secondary" className="bg-slate-100 text-slate-800 border-slate-300">
              Quick Start
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-slate-900">User Guide</CardTitle>
          <CardDescription className="text-slate-600">
            Complete guide to navigate and use all features of the metro scheduling application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-3 h-3 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Application Navigation</h4>
                <p className="text-xs text-slate-600">
                  Navigate between Dashboard, Schedule, Health, AI Insights, Depot, and Reports sections
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                <Users className="w-3 h-3 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Train Operations</h4>
                <p className="text-xs text-slate-600">
                  Monitor schedules, health status, depot positions, and access AI-powered insights
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5">
                <Settings className="w-3 h-3 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Reports & Analytics</h4>
                <p className="text-xs text-slate-600">
                  Generate reports, export data, and analyze system performance metrics
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-4 rounded-xl border-accent/20 hover:bg-accent/5 bg-transparent"
          >
            View Full Guide
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
