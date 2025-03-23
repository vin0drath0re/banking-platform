"use client"

import { useState } from "react"
import {
  Search,
  Bell,
  Home,
  Users,
  FileText,
  BarChart3,
  Shield,
  Settings,
  LogOut,
  AlertTriangle,
  Activity,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Sidebar */}
      <aside className="w-16 md:w-64 glass border-r border-gray-800/30 flex flex-col relative z-10">
        <div className="p-4 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 purple-glow-sm"></div>
          <span className="text-xl font-bold hidden md:block">BankEase Admin</span>
        </div>

        <nav className="flex-1 py-8">
          <ul className="space-y-2">
            {[
              { icon: <Home size={20} />, label: "Overview", id: "overview" },
              { icon: <Users size={20} />, label: "Users", id: "users" },
              { icon: <FileText size={20} />, label: "Loans", id: "loans" },
              { icon: <BarChart3 size={20} />, label: "Reports", id: "reports" },
              { icon: <Shield size={20} />, label: "Security", id: "security" },
              { icon: <Settings size={20} />, label: "Settings", id: "settings" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-3 md:px-4 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-purple-500/20 text-white purple-glow-sm"
                      : "text-gray-400 hover:text-white hover:bg-purple-500/10"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="hidden md:block">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="ml-auto w-1 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full hidden md:block"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800/30">
          <button className="flex items-center w-full p-3 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300">
            <LogOut size={20} className="mr-3" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <header className="h-16 glass border-b border-gray-800/30 flex items-center justify-between px-4">
          <h1 className="text-xl font-bold">
            {activeTab === "overview" && "Admin Dashboard"}
            {activeTab === "users" && "User Management"}
            {activeTab === "loans" && "Loan Applications"}
            {activeTab === "reports" && "Reports"}
            {activeTab === "security" && "Security Center"}
            {activeTab === "settings" && "System Settings"}
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Search..." className="glass-input pl-10 text-white w-64" />
            </div>

            <button className="relative p-2 rounded-full hover:bg-purple-500/10 transition-all duration-300">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            </button>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 overflow-hidden purple-glow-sm">
                <User className="h-5 w-5 text-white m-1.5" />
              </div>
              <span className="hidden md:block">Admin User</span>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="glass-card purple-glow-sm hover:purple-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Total Users</p>
                        <p className="text-3xl font-bold mt-1">2,543</p>
                      </div>
                      <div className="h-12 w-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <p className="text-xs text-green-500 mt-2">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card className="glass-card purple-glow-sm hover:purple-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Active Loans</p>
                        <p className="text-3xl font-bold mt-1">187</p>
                      </div>
                      <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-green-400" />
                      </div>
                    </div>
                    <p className="text-xs text-green-500 mt-2">+5% from last month</p>
                  </CardContent>
                </Card>

                <Card className="glass-card purple-glow-sm hover:purple-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Pending Approvals</p>
                        <p className="text-3xl font-bold mt-1">24</p>
                      </div>
                      <div className="h-12 w-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-xs text-yellow-500 mt-2">8 new since yesterday</p>
                  </CardContent>
                </Card>

                <Card className="glass-card purple-glow-sm hover:purple-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Security Alerts</p>
                        <p className="text-3xl font-bold mt-1">3</p>
                      </div>
                      <div className="h-12 w-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      </div>
                    </div>
                    <p className="text-xs text-red-500 mt-2">Requires attention</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">System Status</h3>
                    <div className="space-y-4">
                      {[
                        { name: "API Services", status: "Operational", color: "green" },
                        { name: "Database", status: "Operational", color: "green" },
                        { name: "Payment Processing", status: "Operational", color: "green" },
                        { name: "Authentication", status: "Degraded", color: "yellow" },
                        { name: "Reporting", status: "Operational", color: "green" },
                      ].map((service, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span>{service.name}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              service.color === "green"
                                ? "bg-green-500/20 text-green-400"
                                : service.color === "yellow"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {service.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {[
                        { action: "User account created", time: "10 minutes ago", user: "admin" },
                        { action: "Loan application approved", time: "25 minutes ago", user: "admin" },
                        { action: "Security settings updated", time: "1 hour ago", user: "system" },
                        { action: "Database backup completed", time: "3 hours ago", user: "system" },
                        { action: "New admin user added", time: "Yesterday", user: "admin" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Activity className="h-5 w-5 text-purple-400 mt-0.5" />
                          <div>
                            <p className="text-sm">{activity.action}</p>
                            <p className="text-xs text-gray-400">
                              {activity.time} by {activity.user}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Recent Loan Applications</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800/30">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">ID</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">User</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Amount</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Date</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: "L-7829", user: "John Doe", amount: "$5,000", date: "2023-10-15", status: "Pending" },
                          {
                            id: "L-7830",
                            user: "Jane Smith",
                            amount: "$12,000",
                            date: "2023-10-14",
                            status: "Approved",
                          },
                          {
                            id: "L-7831",
                            user: "Robert Johnson",
                            amount: "$8,500",
                            date: "2023-10-14",
                            status: "Pending",
                          },
                          { id: "L-7832", user: "Emily Davis", amount: "$3,200", date: "2023-10-13", status: "Denied" },
                          {
                            id: "L-7833",
                            user: "Michael Wilson",
                            amount: "$15,000",
                            date: "2023-10-12",
                            status: "Pending",
                          },
                        ].map((loan, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300"
                          >
                            <td className="py-3 px-4">{loan.id}</td>
                            <td className="py-3 px-4">{loan.user}</td>
                            <td className="py-3 px-4">{loan.amount}</td>
                            <td className="py-3 px-4">{loan.date}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  loan.status === "Approved"
                                    ? "bg-green-500/20 text-green-400"
                                    : loan.status === "Pending"
                                      ? "bg-yellow-500/20 text-yellow-400"
                                      : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {loan.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 px-2 glass border-gray-700 hover:bg-purple-500/10"
                                >
                                  View
                                </Button>
                                {loan.status === "Pending" && (
                                  <>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-2 border-green-700/30 text-green-400 hover:bg-green-900/20"
                                    >
                                      <CheckCircle className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-2 border-red-700/30 text-red-400 hover:bg-red-900/20"
                                    >
                                      <XCircle className="h-4 w-4" />
                                    </Button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">User Management</h2>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                  Add New User
                </Button>
              </div>

              <Card className="glass-card">
                <CardContent className="p-0">
                  <div className="p-4 border-b border-gray-800/30">
                    <div className="flex items-center gap-4">
                      <Input placeholder="Search users..." className="glass-input text-white" />
                      <Button variant="outline" className="glass border-gray-700 hover:bg-purple-500/10">
                        Search
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800/30">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">ID</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Name</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Email</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Account Number</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: "U-1001",
                            name: "John Doe",
                            email: "john.doe@example.com",
                            account: "1234567890",
                            status: "Active",
                          },
                          {
                            id: "U-1002",
                            name: "Jane Smith",
                            email: "jane.smith@example.com",
                            account: "2345678901",
                            status: "Active",
                          },
                          {
                            id: "U-1003",
                            name: "Robert Johnson",
                            email: "robert.j@example.com",
                            account: "3456789012",
                            status: "Active",
                          },
                          {
                            id: "U-1004",
                            name: "Emily Davis",
                            email: "emily.d@example.com",
                            account: "4567890123",
                            status: "Inactive",
                          },
                          {
                            id: "U-1005",
                            name: "Michael Wilson",
                            email: "michael.w@example.com",
                            account: "5678901234",
                            status: "Active",
                          },
                          {
                            id: "U-1006",
                            name: "Sarah Brown",
                            email: "sarah.b@example.com",
                            account: "6789012345",
                            status: "Locked",
                          },
                          {
                            id: "U-1007",
                            name: "David Miller",
                            email: "david.m@example.com",
                            account: "7890123456",
                            status: "Active",
                          },
                          {
                            id: "U-1008",
                            name: "Lisa Taylor",
                            email: "lisa.t@example.com",
                            account: "8901234567",
                            status: "Active",
                          },
                        ].map((user, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300"
                          >
                            <td className="py-3 px-4">{user.id}</td>
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">{user.account}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  user.status === "Active"
                                    ? "bg-green-500/20 text-green-400"
                                    : user.status === "Inactive"
                                      ? "bg-yellow-500/20 text-yellow-400"
                                      : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 px-2 glass border-gray-700 hover:bg-purple-500/10"
                                >
                                  View
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 px-2 glass border-gray-700 hover:bg-purple-500/10"
                                >
                                  Edit
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 border-t border-gray-800/30 flex items-center justify-between">
                    <Button variant="outline" size="sm" className="glass border-gray-700 hover:bg-purple-500/10">
                      Previous
                    </Button>
                    <div className="text-sm text-gray-400">Page 1 of 10</div>
                    <Button variant="outline" size="sm" className="glass border-gray-700 hover:bg-purple-500/10">
                      Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "loans" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Loan Applications</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="glass border-gray-700 hover:bg-purple-500/10">
                    Export Data
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                    Create Loan
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="pending">
                <TabsList className="glass">
                  <TabsTrigger value="all">All Loans</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                  <TabsTrigger value="denied">Denied</TabsTrigger>
                </TabsList>
              </Tabs>

              <Card className="glass-card">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800/30">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Loan ID</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Applicant</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Amount</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Application Date</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: "L-7829", user: "John Doe", amount: "$5,000", date: "2023-10-15", status: "Pending" },
                          {
                            id: "L-7830",
                            user: "Jane Smith",
                            amount: "$12,000",
                            date: "2023-10-14",
                            status: "Approved",
                          },
                          {
                            id: "L-7831",
                            user: "Robert Johnson",
                            amount: "$8,500",
                            date: "2023-10-14",
                            status: "Pending",
                          },
                          { id: "L-7832", user: "Emily Davis", amount: "$3,200", date: "2023-10-13", status: "Denied" },
                          {
                            id: "L-7833",
                            user: "Michael Wilson",
                            amount: "$15,000",
                            date: "2023-10-12",
                            status: "Pending",
                          },
                          {
                            id: "L-7834",
                            user: "Sarah Brown",
                            amount: "$7,500",
                            date: "2023-10-11",
                            status: "Approved",
                          },
                          {
                            id: "L-7835",
                            user: "David Miller",
                            amount: "$10,000",
                            date: "2023-10-10",
                            status: "Defaulted",
                          },
                          {
                            id: "L-7836",
                            user: "Lisa Taylor",
                            amount: "$6,200",
                            date: "2023-10-09",
                            status: "PaidOff",
                          },
                        ].map((loan, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300"
                          >
                            <td className="py-3 px-4">{loan.id}</td>
                            <td className="py-3 px-4">{loan.user}</td>
                            <td className="py-3 px-4">{loan.amount}</td>
                            <td className="py-3 px-4">{loan.date}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  loan.status === "Approved"
                                    ? "bg-green-500/20 text-green-400"
                                    : loan.status === "Pending"
                                      ? "bg-yellow-500/20 text-yellow-400"
                                      : loan.status === "PaidOff"
                                        ? "bg-blue-500/20 text-blue-400"
                                        : loan.status === "Defaulted"
                                          ? "bg-purple-500/20 text-purple-400"
                                          : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {loan.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 px-2 glass border-gray-700 hover:bg-purple-500/10"
                                >
                                  View
                                </Button>
                                {loan.status === "Pending" && (
                                  <>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-2 border-green-700/30 text-green-400 hover:bg-green-900/20"
                                    >
                                      Approve
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-2 border-red-700/30 text-red-400 hover:bg-red-900/20"
                                    >
                                      Deny
                                    </Button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 border-t border-gray-800/30 flex items-center justify-between">
                    <Button variant="outline" size="sm" className="glass border-gray-700 hover:bg-purple-500/10">
                      Previous
                    </Button>
                    <div className="text-sm text-gray-400">Page 1 of 5</div>
                    <Button variant="outline" size="sm" className="glass border-gray-700 hover:bg-purple-500/10">
                      Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>

        <footer className="border-t border-gray-800/30 p-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BankEase Admin Portal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

