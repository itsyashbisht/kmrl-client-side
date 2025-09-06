"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Train, Activity, Brain, MapPin, FileText, Clock, CheckCircle, Play } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Train,
    title: "Train Schedule Management",
    description: "Monitor and manage 25 trainsets across the Blue Line with real-time scheduling",
    color: "bg-blue-500",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Track train fitness, maintenance needs, and operational status with visual indicators",
    color: "bg-green-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get predictive analytics and intelligent recommendations for optimal operations",
    color: "bg-purple-500",
  },
  {
    icon: MapPin,
    title: "Depot Visualization",
    description: "Interactive depot map showing train positions and availability in real-time",
    color: "bg-orange-500",
  },
  {
    icon: FileText,
    title: "Comprehensive Reports",
    description: "Generate detailed operational reports with CSV/PDF export capabilities",
    color: "bg-teal-500",
  },
]

const steps = [
  {
    step: 1,
    title: "Dashboard Overview",
    description: "Start with the main dashboard to see system statistics, alerts, and train utilization",
  },
  {
    step: 2,
    title: "Monitor Schedules",
    description: "Check train schedules, induction times, and override operations as needed",
  },
  {
    step: 3,
    title: "Track Health",
    description: "Review train health status with traffic-light indicators and maintenance alerts",
  },
  {
    step: 4,
    title: "AI Insights",
    description: "Leverage AI recommendations for capacity planning and predictive maintenance",
  },
  {
    step: 5,
    title: "Visualize Operations",
    description: "Use depot visualization to see train positions and plan movements",
  },
]

export function AppGuide() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Train className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Kochi Metro AI Dashboard</h1>
                <p className="text-sm text-slate-600">Intelligent Metro Operations Management</p>
              </div>
            </div>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Play className="w-4 h-4 mr-2" />
                Launch Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">AI-Powered Metro Management</Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-balance">
            Welcome to Kochi Metro's
            <span className="text-primary"> Intelligent Operations Center</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            Manage 25 trainsets across the Blue Line with AI-driven insights, real-time monitoring, and predictive
            analytics for optimal metro operations.
          </p>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">25 Trainsets</h3>
              <p className="text-sm text-slate-600">Operating on Blue Line</p>
            </CardContent>
          </Card>
          <Card className="text-center border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">25 Stations</h3>
              <p className="text-sm text-slate-600">Aluva to Tripunithura</p>
            </CardContent>
          </Card>
          <Card className="text-center border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">55-56 Minutes</h3>
              <p className="text-sm text-slate-600">End-to-end journey time</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    currentStep === index ? "border-primary bg-primary/5" : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        currentStep === index ? "bg-primary text-white" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{step.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-100 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Step {steps[currentStep].step}</h4>
                <p className="text-slate-600">{steps[currentStep].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-teal-500/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-6">
                Launch the dashboard to begin managing your metro operations with AI-powered insights.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Launch Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
