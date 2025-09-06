"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { ChevronDown, Settings, LogOut, User, Bell, Search } from "lucide-react"
import { useState, useEffect } from "react"

export function TopNavbar() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/90 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-slate-50 font-bold text-sm">K</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Kochi Metro AI</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Transit Management</p>
          </div>
        </div>

        {/* Center - Simplified Date & Time */}
        <div className="flex items-center space-x-2 bg-slate-50/80 rounded-lg px-4 py-2 border border-slate-200/40">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-700">{formatDateTime(currentTime)}</span>
        </div>

        {/* Right Side - Streamlined Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-slate-100 rounded-lg">
            <Search className="w-4 h-4 text-slate-600" />
          </Button>

          <Button variant="ghost" size="sm" className="w-8 h-8 p-0 relative hover:bg-slate-100 rounded-lg">
            <Bell className="w-4 h-4 text-slate-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 hover:bg-slate-100 rounded-lg px-3 py-2 h-auto"
              >
                <Avatar className="w-7 h-7">
                  <AvatarImage src="/placeholder-user.png" />
                  <AvatarFallback className="bg-primary text-white text-xs font-medium">AD</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-slate-700">Admin</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-lg border-slate-200/60 shadow-lg">
              <DropdownMenuLabel className="text-sm">Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
