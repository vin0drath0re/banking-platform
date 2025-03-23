import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-purple-500 animate-spin" />
        <p className="mt-4 text-purple-300 animate-pulse">Loading admin dashboard...</p>
      </div>
    </div>
  )
}

