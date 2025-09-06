"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ArrowLeft,
  Train,
  Activity,
  Brain,
  MapPin,
  Clock,
  X,
  CheckCircle,
  BarChart3,
  Users,
} from "lucide-react"
import { useRouter } from "next/navigation"

const onboardingSteps = [
  {
    id: 1,
    title: "Welcome to Kochi Metro AI Dashboard",
    subtitle: "Intelligent Metro Operations Management",
    icon: Train,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-center">
          Manage 25 trainsets across the Blue Line with AI-driven insights and real-time monitoring.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Train className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium">25 Trainsets</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm font-medium">25 Stations</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium">55-56 Min Journey</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Dashboard Overview",
    subtitle: "Your Command Center",
    icon: BarChart3,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">
          Get a comprehensive view of your metro operations with real-time statistics, system alerts, and train
          utilization patterns.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">Live system statistics</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">Train utilization heatmap</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">Priority alerts & notifications</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Train Schedule Management",
    subtitle: "Real-time Operations Control",
    icon: Train,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">
          Monitor and manage train schedules with detailed information about induction times, depot assignments, and
          operational status.
        </p>
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Peak Hours Management</h4>
          <p className="text-sm text-blue-700">
            • Morning Peak (8-11 AM): ~16 trains active
            <br />• Evening Peak (5-8 PM): ~16 trains active
            <br />• Non-Peak Hours: ~5-6 trains active
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Health Monitoring",
    subtitle: "Predictive Maintenance",
    icon: Activity,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">
          Track train health with visual indicators, fitness percentages, and maintenance alerts using our traffic-light
          system.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-green-700 font-medium">Ready</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-yellow-700 font-medium">Needs Cleaning</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-red-700 font-medium">Maintenance</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "AI-Powered Insights",
    subtitle: "Intelligent Recommendations",
    icon: Brain,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">
          Leverage AI for predictive analytics, capacity planning, and operational optimization with actionable
          insights.
        </p>
        <div className="bg-purple-50 rounded-lg p-4 space-y-2">
          <div className="text-sm">
            <span className="font-medium text-purple-900">Example Insights:</span>
          </div>
          <div className="text-sm text-purple-700">
            • "Deploy 2 extra trains in evening peak"
            <br />• "Train 208 may fail within 3 days"
            <br />• "Optimize cleaning schedule for Depot A"
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Ready to Begin!",
    subtitle: "Start Managing Your Metro Operations",
    icon: CheckCircle,
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">
          You're all set! Click "Launch Dashboard" to start managing your metro operations with AI-powered insights.
        </p>
        <div className="bg-gradient-to-r from-primary/10 to-teal-500/10 rounded-lg p-6">
          <Users className="w-12 h-12 text-primary mx-auto mb-3" />
          <h4 className="font-semibold text-slate-900 mb-2">Need Help?</h4>
          <p className="text-sm text-slate-600">
            Access the user guide anytime from the dashboard sidebar for detailed instructions.
          </p>
        </div>
      </div>
    ),
  },
]

export function OnboardingModal() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    setIsOpen(false)
    router.push("/dashboard")
  }

  const handleSkip = () => {
    setIsOpen(false)
    router.push("/dashboard")
  }

  if (!isOpen) return null

  const step = onboardingSteps[currentStep]
  const IconComponent = step.icon

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl border-0">
        <CardHeader className="relative bg-gradient-to-r from-primary/5 to-teal-500/5 border-b border-slate-200/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-900">{step.title}</CardTitle>
                <p className="text-sm text-slate-600 mt-1">{step.subtitle}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSkip} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="flex space-x-2 mt-4">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  index <= currentStep ? "bg-primary" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <div className="min-h-[300px] flex flex-col justify-center">{step.content}</div>
        </CardContent>

        <div className="p-6 border-t border-slate-200/60 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                Step {currentStep + 1} of {onboardingSteps.length}
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleSkip} className="text-slate-500 hover:text-slate-700">
                Skip Tour
              </Button>
            </div>

            <div className="flex space-x-2">
              {currentStep > 0 && (
                <Button variant="outline" onClick={handlePrevious} className="border-slate-300 bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
              <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white">
                {currentStep === onboardingSteps.length - 1 ? (
                  <>
                    Launch Dashboard
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
