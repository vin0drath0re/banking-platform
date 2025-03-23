"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Bell,
  Home,
  CreditCard,
  BarChart3,
  ArrowRightLeft,
  Settings,
  LogOut,
  Plus,
  HelpCircle,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter, redirect } from "next/navigation"

export default function Dashboard() {
  if (typeof window === 'undefined') return <></>;
  const router = useRouter();
  if (localStorage.getItem("token") === null) {
    redirect("/");
  }
  const [activeTab, setActiveTab] = useState("overview")
  const handleLogout = (event) => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    router.replace("/");
  };

  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/users", {
         headers: {
          "X-BankEase-JWT": localStorage.getItem("token")
         }
    }).then(resp => resp.json()).then(data => setUsers(data));
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/transactions", {
         headers: {
          "X-BankEase-JWT": localStorage.getItem("token")
         }
    }).then(resp => resp.json()).then(data => setTransactions(data));
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/loans", {
         headers: {
          "X-BankEase-JWT": localStorage.getItem("token")
         }
    }).then(resp => resp.json()).then(data => setLoans(data));
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
      </div>

      {/* Sidebar */}
      <aside className="w-16 md:w-64 glass border-r border-gray-800/30 flex flex-col relative z-10">
        <div className="p-4 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 purple-glow-sm"></div>
          <span className="text-xl font-bold hidden md:block">BankEase</span>
        </div>

        <nav className="flex-1 py-8">
          <ul className="space-y-2">
            {[
              { icon: <Home size={20} />, label: "Overview", id: "overview" },
              { icon: <ArrowRightLeft size={20} />, label: "Transactions", id: "transactions" },
              { icon: <CreditCard size={20} />, label: "Loans", id: "loans" },
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
          <button className="flex items-center w-full p-3 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300" onClick={handleLogout}>
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
            {activeTab === "overview" && "Overview"}
            {activeTab === "transactions" && "Transactions"}
            {activeTab === "loans" && "Loans"}
            {activeTab === "settings" && "Settings"}
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
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  className="h-full w-full object-cover mix-blend-overlay"
                />
              </div>
              <span className="hidden md:block">{localStorage.getItem("username")}</span>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Users</h3>
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {users.map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300 rounded-lg px-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                              {transaction.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.name}</p>
                              <p className="text-xs text-gray-400">
                                {transaction.email} • {transaction.accountNumber}
                              </p>
                            </div>
                          </div>
                          <span className="text-red-500">{transaction.accountBalance}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "loans" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Recent Loans</h3>
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {loans.map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300 rounded-lg px-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                              {transaction.loanID.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.loanID}</p>
                              <p className="text-xs text-gray-400">
                                {transaction.accountNumber} • {transaction.loanStatus}
                              </p>
                            </div>
                          </div>
                          <span className="text-red-500">{transaction.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          {activeTab === "transactions" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {transactions.map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300 rounded-lg px-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                              {transaction.transactionID.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.transactionID}</p>
                              <p className="text-xs text-gray-400">
                                {transaction.payerAccountNumber} • {transaction.payeeAccountNumber}
                              </p>
                            </div>
                          </div>
                          <span className="text-red-500">{transaction.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Your Cards</h2>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                  <Plus className="mr-2 h-4 w-4" /> Add New Card
                </Button>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="glass">
                  <TabsTrigger value="all">All Cards</TabsTrigger>
                  <TabsTrigger value="physical">Physical</TabsTrigger>
                  <TabsTrigger value="virtual">Virtual</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((card) => (
                  <Card
                    key={card}
                    className="glass-card purple-glow-sm overflow-hidden group hover:purple-glow transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                            <span className="font-medium">BankEase</span>
                          </div>
                          <span className="text-sm">**** {4000 + card}</span>
                        </div>

                        <div className="mb-6">
                          <span className="text-2xl font-bold">{(Math.random() * 10000).toFixed(2)} €</span>
                        </div>

                        <div className="text-sm text-gray-400">Expires: 05/25</div>
                      </div>

                      <div className="p-4 flex justify-between">
                        <Button variant="outline" size="sm" className="glass border-gray-700 hover:bg-purple-500/10">
                          <Download className="mr-2 h-4 w-4" /> Statement
                        </Button>
                        <Button variant="outline" size="sm" className="glass border-gray-700 hover:bg-purple-500/10">
                          <Settings className="mr-2 h-4 w-4" /> Manage
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Recent Card Activity</h3>
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {[
                        { name: "Amazon", amount: "-$129.99", date: "Today, 14:30", category: "Shopping" },
                        { name: "Netflix", amount: "-$14.99", date: "Yesterday, 00:01", category: "Entertainment" },
                        { name: "Uber", amount: "-$24.50", date: "Oct 10, 19:24", category: "Transport" },
                        { name: "Starbucks", amount: "-$5.75", date: "Oct 9, 08:30", category: "Food" },
                        { name: "Apple", amount: "-$0.99", date: "Oct 8, 12:13", category: "Services" },
                      ].map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-800/30 last:border-0 hover:bg-purple-500/5 transition-all duration-300 rounded-lg px-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                              {transaction.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.name}</p>
                              <p className="text-xs text-gray-400">
                                {transaction.date} • {transaction.category}
                              </p>
                            </div>
                          </div>
                          <span className="text-red-500">{transaction.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>

        <footer className="border-t border-gray-800/30 p-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BankEase. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
/* vi: set et sw=2: */
