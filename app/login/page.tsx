"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LockKeyhole, Smartphone, User } from "lucide-react"
import { useRouter, redirect } from "next/navigation"

export default function LoginPage() {
  if (typeof window === 'undefined') return <></>;
  const router = useRouter();

  if (localStorage.getItem("token") !== null) {
    redirect("/dashboard");
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    const final = {};
    for (const p of formdata) {
      final[p[0]] = p[1];
    }
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(final)
    }).then(resp => resp.json()).then(data => {
      if ("error" in data) {
        alert(data.error);
      } else {
        localStorage.setItem("username", event.target.username.value);
        localStorage.setItem("token", data.token);
        router.replace("/dashboard");
      }
    });
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    const final = {};
    for (const p of formdata) {
      final[p[0]] = p[1];
    }
    console.log(JSON.stringify(final));
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(final)
    }).then(resp => resp.json()).then(data => {
      if ("error" in data) {
        alert(data.error);
      } else {
        localStorage.setItem("username", event.target.username.value);
        localStorage.setItem("token", data.token);
        router.replace("/admin_dashboard");
      }
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl"></div>
      </div>

      <header className="container mx-auto py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 purple-glow"></div>
          <span className="text-xl font-bold">BankEase</span>
        </Link>
        <div>
          <Link href="/register">
            <Button
              variant="outline"
              className="glass border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300"
            >
              Register
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 purple-glow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <LockKeyhole className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-gray-400 mt-2">Login to access your dashboard</p>
            </div>

            <Tabs defaultValue="online" className="mb-6">
              <TabsList className="grid grid-cols-2 glass">
                <TabsTrigger value="online">Online Banking</TabsTrigger>
                <TabsTrigger value="offline">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="online" className="mt-6">
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="username" name="username" placeholder="Enter your username" className="glass-input pl-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <LockKeyhole
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="glass-input pl-10 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-gray-400">
                      Remember me
                    </Label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                    Login
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="offline" className="mt-6">
                <form className="space-y-6" onSubmit={handleAdminLogin}>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="username" name="username" placeholder="Enter your username" className="glass-input pl-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <div className="relative">
                      <LockKeyhole
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="glass-input pl-10 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-gray-400">
                      Remember me
                    </Label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 purple-glow hover:purple-glow-lg transition-all duration-300">
                    Login
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-purple-400 hover:text-purple-300 transition-colors">
                Register
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
              <div className="flex justify-center space-x-4">
                <Link href="/security-center" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Security Center
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  Privacy
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
