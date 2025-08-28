"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Area,
  AreaChart,
} from "recharts"
import {
  Moon,
  Sun,
  Bell,
  Search,
  Settings,
  TrendingUp,
  TrendingDown,
  Users,
  Activity,
  DollarSign,
  ShoppingCart,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const barData = [
  { name: "Jan", value: 20, target: 25, revenue: 12000 },
  { name: "Feb", value: 35, target: 30, revenue: 18000 },
  { name: "Mar", value: 80, target: 70, revenue: 45000 },
  { name: "Apr", value: 45, target: 50, revenue: 28000 },
  { name: "May", value: 25, target: 40, revenue: 15000 },
  { name: "Jun", value: 65, target: 60, revenue: 38000 },
]

const lineData = [
  { name: "Jan", users: 30, sessions: 45, revenue: 12000 },
  { name: "Feb", users: 45, sessions: 52, revenue: 18000 },
  { name: "Mar", users: 35, sessions: 48, revenue: 15000 },
  { name: "Apr", users: 60, sessions: 75, revenue: 28000 },
  { name: "May", users: 40, sessions: 55, revenue: 22000 },
  { name: "Jun", users: 55, sessions: 68, revenue: 35000 },
  { name: "Jul", users: 70, sessions: 85, revenue: 42000 },
]

const pieData = [
  { name: "Desktop", value: 45, color: "#00a656" },
  { name: "Mobile", value: 35, color: "#2a85ff" },
  { name: "Tablet", value: 20, color: "#ff6a55" },
]

const users = [
  { name: "John Smith", avatar: "/abstract-geometric-shapes.png", status: "online", role: "Admin" },
  { name: "Sarah Wilson", avatar: "/abstract-geometric-shapes.png", status: "away", role: "Manager" },
  { name: "Mike Johnson", avatar: "/diverse-group-collaborating.png", status: "online", role: "Developer" },
  { name: "Emma Davis", avatar: "/abstract-geometric-shapes.png", status: "offline", role: "Designer" },
  { name: "Alex Brown", avatar: "/abstract-geometric-shapes.png", status: "online", role: "Analyst" },
  { name: "Lisa Garcia", avatar: "/abstract-geometric-shapes.png", status: "busy", role: "Marketing" },
]

const activities = [
  {
    user: "John Smith",
    action: "completed task",
    detail: "User authentication module",
    time: "2 min ago",
    color: "#00a656",
    icon: CheckCircle,
  },
  {
    user: "Sarah Wilson",
    action: "updated project",
    detail: "Dashboard redesign phase 2",
    time: "5 min ago",
    color: "#2a85ff",
    icon: Activity,
  },
  {
    user: "Mike Johnson",
    action: "added comment",
    detail: "Code review for API endpoints",
    time: "12 min ago",
    color: "#ff6a55",
    icon: Eye,
  },
  {
    user: "Emma Davis",
    action: "shared file",
    detail: "UI mockups v3.2",
    time: "18 min ago",
    color: "#f45c09",
    icon: Users,
  },
  {
    user: "Alex Brown",
    action: "created report",
    detail: "Monthly analytics summary",
    time: "25 min ago",
    color: "#00b512",
    icon: TrendingUp,
  },
  {
    user: "Lisa Garcia",
    action: "joined meeting",
    detail: "Product strategy discussion",
    time: "32 min ago",
    color: "#2a85ff",
    icon: Clock,
  },
  {
    user: "John Smith",
    action: "deployed update",
    detail: "Version 2.1.3 to production",
    time: "45 min ago",
    color: "#00a656",
    icon: CheckCircle,
  },
  {
    user: "Sarah Wilson",
    action: "resolved issue",
    detail: "Critical bug in payment flow",
    time: "1 hour ago",
    color: "#ff6a55",
    icon: AlertCircle,
  },
]

const systemMetrics = [
  { name: "API Response Time", value: 245, unit: "ms", status: "good", target: 300 },
  { name: "Server Uptime", value: 99.9, unit: "%", status: "excellent", target: 99.5 },
  { name: "Error Rate", value: 0.02, unit: "%", status: "good", target: 0.1 },
  { name: "Active Connections", value: 1847, unit: "", status: "normal", target: 2000 },
]

export function Dashboard() {
  const [isDark, setIsDark] = useState(false)
  const [timeRange, setTimeRange] = useState("7d")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "#00a656"
      case "away":
        return "#f45c09"
      case "busy":
        return "#ff6a55"
      case "offline":
        return "#727272"
      default:
        return "#727272"
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#1e1e1e] text-[#ffffff]" : "bg-[#f9f9f9] text-[#000000]"
      }`}
    >
      {/* Header */}
      <header
        className={`border-b transition-colors duration-300 ${
          isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex gap-2">
              {["24h", "7d", "30d", "90d"].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className="text-xs"
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff6a55] rounded-full"></div>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Avatar>
              <AvatarImage src="/abstract-profile.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-[#2a85ff]" />
                <div className="flex items-center gap-1 text-[#00a656]">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+12%</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">1,293</div>
              <div className={`text-sm ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>Total Users</div>
              <div className="mt-2">
                <Progress value={78} className="h-2" />
              </div>
            </Card>

            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Activity className="h-5 w-5 text-[#00a656]" />
                <div className="flex items-center gap-1 text-[#00a656]">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+8%</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">2,548</div>
              <div className={`text-sm ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>Active Sessions</div>
              <div className="mt-2">
                <Progress value={65} className="h-2" />
              </div>
            </Card>

            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-5 w-5 text-[#f45c09]" />
                <div className="flex items-center gap-1 text-[#ff6a55]">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">-3%</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">$42.5k</div>
              <div className={`text-sm ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>Revenue</div>
              <div className="mt-2">
                <Progress value={42} className="h-2" />
              </div>
            </Card>

            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <ShoppingCart className="h-5 w-5 text-[#2a85ff]" />
                <div className="flex items-center gap-1 text-[#00a656]">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+15%</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">847</div>
              <div className={`text-sm ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>Conversions</div>
              <div className="mt-2">
                <Progress value={84} className="h-2" />
              </div>
            </Card>
          </div>

          <Card
            className={`p-6 mb-6 transition-colors duration-300 ${
              isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Team Members</h3>
              <Badge variant="secondary">{users.filter((u) => u.status === "online").length} online</Badge>
            </div>
            <div className="flex gap-3">
              {users.map((user, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                      style={{ backgroundColor: getStatusColor(user.status) }}
                    ></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium">{user.name.split(" ")[0]}</div>
                    <div className={`text-xs ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>{user.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Enhanced Bar Chart */}
            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">Performance vs Target</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: isDark ? "#b3b3b3" : "#727272", fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#363636" : "#ffffff",
                        border: `1px solid ${isDark ? "#444444" : "#e2e2e2"}`,
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="target" fill={isDark ? "#363636" : "#e2e2e2"} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="value" fill="#00a656" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Enhanced Line Chart */}
            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">Growth Trends</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={lineData}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: isDark ? "#b3b3b3" : "#727272", fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#363636" : "#ffffff",
                        border: `1px solid ${isDark ? "#444444" : "#e2e2e2"}`,
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#00a656"
                      fill="#00a656"
                      fillOpacity={0.2}
                      strokeWidth={3}
                    />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stroke="#2a85ff"
                      fill="#2a85ff"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card
              className={`p-6 transition-colors duration-300 ${
                isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">Device Usage</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                    <span className={`text-xs ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>
                      {entry.name} ({entry.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card
            className={`p-6 transition-colors duration-300 ${
              isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">System Performance</h3>
            <div className="grid grid-cols-4 gap-6">
              {systemMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>{metric.name}</span>
                    <Badge
                      variant={
                        metric.status === "excellent"
                          ? "default"
                          : metric.status === "good"
                            ? "secondary"
                            : "destructive"
                      }
                      className="text-xs"
                    >
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">
                    {metric.value}
                    {metric.unit}
                  </div>
                  <Progress
                    value={
                      metric.name === "Error Rate"
                        ? (1 - metric.value / metric.target) * 100
                        : (metric.value / metric.target) * 100
                    }
                    className="h-2"
                  />
                  <div className={`text-xs ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>
                    Target: {metric.target}
                    {metric.unit}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div
          className={`w-80 border-l p-6 transition-colors duration-300 ${
            isDark ? "bg-[#282828] border-[#363636]" : "bg-[#ffffff] border-[#e2e2e2]"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <Badge variant="outline">{activities.length} events</Badge>
          </div>
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${activity.color}20` }}
                    >
                      <IconComponent className="w-4 h-4" style={{ color: activity.color }} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${isDark ? "text-[#ffffff]" : "text-[#000000]"}`}>
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className={`text-xs mt-1 ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>{activity.detail}</p>
                    <p className={`text-xs mt-1 ${isDark ? "text-[#b3b3b3]" : "text-[#727272]"}`}>{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
