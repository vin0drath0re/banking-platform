"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, BarChart2, Shield, Zap } from "lucide-react"
import { redirect } from "next/navigation"

export default function LandingPage() {
  if (typeof window === 'undefined') return <></>;
  if (localStorage.getItem("token") !== null) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <header className="container mx-auto py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 purple-glow"></div>
          <span className="text-xl font-bold">BankEase</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-purple-300 transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm hover:text-purple-300 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm hover:text-purple-300 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm hover:text-purple-300 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm hover:text-purple-300 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm hover:text-purple-300 transition-colors">
            Login
          </Link>
          <Link href="/register">
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800 glass">
              Register
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="container mx-auto py-20 md:py-32 px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <svg
                  className="w-24 h-24 mx-auto animate-float"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10H21"
                    stroke="url(#paint1_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9333EA" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="3"
                      y1="10.5"
                      x2="21"
                      y2="10.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9333EA" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-glow">
              Banking made{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                simple
              </span>{" "}
              for everyone
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Manage your finances with ease. Track spending, send money, and grow your wealth all in one place with our
              next-generation banking platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-full sm:w-auto purple-glow transition-all duration-300 hover:purple-glow-lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="glass border-purple-500/20 hover:bg-purple-900/20 w-full sm:w-auto transition-all duration-300"
                >
                  Login to Dashboard
                </Button>
              </Link>
            </div>

            {/* Animated SVG elements */}
            <div className="mt-20 relative w-full max-w-3xl mx-auto h-64">
              <div className="absolute left-0 top-0 glass-card rounded-2xl p-6 w-64 purple-glow-sm animate-float-slow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Card Balance</span>
                </div>
                <p className="text-2xl font-bold mb-2">$24,156.00</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>**** 8458</span>
                  <span>06/25</span>
                </div>
              </div>

              <div className="absolute right-0 top-10 glass-card rounded-2xl p-6 w-64 purple-glow-sm animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Analytics</span>
                </div>
                <div className="flex justify-between items-end h-16 mb-2">
                  {[40, 65, 45, 80, 60, 75, 50].map((height, i) => (
                    <div
                      key={i}
                      className="w-4 bg-gradient-to-t from-purple-600 to-indigo-500 rounded-sm animate-pulse-slow"
                      style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-gray-400 text-center">Weekly Activity</div>
              </div>

              <div className="absolute left-1/4 bottom-0 glass-card rounded-2xl p-6 w-64 purple-glow-sm animate-float-fast">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Security</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm">All systems secure</span>
                </div>
                <div className="text-sm text-gray-400">Last scan: 2 minutes ago</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
              Everything you need to manage your finances
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Analytics",
                  description: "Get insights into your spending habits with detailed charts and reports.",
                  icon: <BarChart2 className="h-8 w-8 text-purple-400" />,
                },
                {
                  title: "Instant Transfers",
                  description: "Send and receive money instantly, with no hidden fees.",
                  icon: <Zap className="h-8 w-8 text-purple-400" />,
                },
                {
                  title: "Card Management",
                  description: "Manage all your cards in one place, track spending and set limits.",
                  icon: <CreditCard className="h-8 w-8 text-purple-400" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-xl purple-glow-sm hover:purple-glow transition-all duration-300 group"
                >
                  <div className="mb-6 p-4 bg-purple-500/10 rounded-lg inline-block group-hover:bg-purple-500/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20 px-4 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Ready to take control of your finances?</h2>
            <p className="text-gray-400 text-lg">Join thousands of users who trust BankEase for their banking needs.</p>
          </div>
          <div className="flex justify-center relative z-10">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl purple-glow hover:purple-glow-lg transition-all duration-300">
                Create your account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">BankEase</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                <span className="font-bold">BankEase</span>
              </div>
              <p className="text-gray-400 text-sm">Banking made simple for everyone.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-purple-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-purple-300 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-purple-300 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-purple-300 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@bankease.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Banking Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} BankEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
/* vi: set et sw=2: */
