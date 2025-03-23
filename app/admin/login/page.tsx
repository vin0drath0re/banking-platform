import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, ShieldAlert, User, Lock, KeySquare } from "lucide-react"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <header className="container mx-auto py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 purple-glow"></div>
          <span className="text-xl font-bold">BankEase</span>
        </Link>
        <div>
          <Link href="/login">
            <Button
              variant="outline"
              className="glass border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300"
            >
              Customer Login
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 purple-glow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse-slow">
                <ShieldAlert className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Admin Portal</h1>
              <p className="text-gray-400 mt-2">Secure access for authorized personnel only</p>
            </div>

            <div className="glass p-4 rounded-lg mb-6 border border-red-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  This portal is restricted to bank administrators. Unauthorized access attempts will be logged and
                  reported.
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="employeeId"
                    placeholder="Enter your employee ID"
                    className="glass-input pl-10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="glass-input pl-10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twoFactorCode">Two-Factor Authentication Code</Label>
                <div className="relative">
                  <KeySquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input id="twoFactorCode" placeholder="Enter 6-digit code" className="glass-input pl-10 text-white" />
                  <p className="text-xs text-gray-400 mt-1">Enter the code from your authenticator app</p>
                </div>
              </div>

              <Link href="/admin/dashboard">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                  Secure Login
                </Button>
              </Link>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Need help? Contact IT Support at <span className="text-purple-400">it-support@bankease.com</span>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
              <div className="flex justify-center space-x-4">
                <Link href="/security-policy" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Security Policy
                </Link>
                <Link href="/admin-terms" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Admin Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t border-gray-800/50 relative z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BankEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

