"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus, Mail, User, Lock, CheckCircle } from "lucide-react"
import { useRouter, redirect } from "next/navigation"

export default function RegisterPage() {
  if (typeof window === 'undefined') return <></>;
  const router = useRouter();

  if (localStorage.getItem("token") !== null) {
    redirect("/dashboard");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    if (event.target.password.value !== event.target.confirmPassword.value) alert("Passwords do not match");
    const form = event.target;
    const formdata = new FormData(form);
    const final = {};
    for (const p of formdata) {
      final[p[0]] = p[1];
    }
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(final)
    }).then(resp => resp.json()).then(data => {
      if ("error" in data) {
        alert(data.error);
      } else {
        alert("Your account has been created successfully. Please login");
        router.push("/login");
      }
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
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
              Login
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 purple-glow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse-slow">
                <UserPlus className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold">Create your account</h1>
              <p className="text-gray-400 mt-2">Join BankEase and take control of your finances</p>
            </div>

            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input id="name" name="name" placeholder="John Doe" className="glass-input pl-10 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="glass-input pl-10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input id="username" name="username" placeholder="johndoe" className="glass-input pl-10 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="glass-input pl-10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <CheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="glass-input pl-10 text-white"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                  Create Account
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
                Login
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
              <p className="text-xs text-gray-500 mb-4">
                By creating an account, you agree to our Terms of Service and Privacy Policy
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/terms" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Privacy
                </Link>
                <Link href="/security" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Security
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
/* vi: set et sw=2: */
