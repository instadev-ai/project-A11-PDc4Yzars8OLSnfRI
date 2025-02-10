import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"

const features = [
  "Advanced Analytics",
  "Real-time Insights",
  "AI-Powered Predictions",
]

const stats = [
  { value: "10k+", label: "Active Users" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support" },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-30 bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
        <div
          className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
          style={{
            animation: "pulse 8s infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Announcement Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">
                New Feature: AI Analytics Dashboard
              </span>
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Powerful Analytics
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Get actionable insights and make data-driven decisions with our
              cutting-edge SaaS platform. Start your journey to success today.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 h-12 px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 hover:bg-primary/5 transition-colors group"
              >
                Watch Demo
                <Play
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                />
              </Button>
            </div>

            {/* Feature List */}
            <div
              className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                  {index < features.length - 1 && (
                    <span className="ml-2 text-gray-300">•</span>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className={`mt-16 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-gray-500 text-center mb-6">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {/* Replace these divs with actual company logos */}
              <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
      `}</style>
    </section>
  )
}