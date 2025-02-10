import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Transform Your Business with{" "}
            <span className="text-primary">Powerful Analytics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get actionable insights and make data-driven decisions with our
            cutting-edge SaaS platform. Start your journey to success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {/* Replace these divs with actual company logos */}
              <div className="h-8 w-24 bg-gray-400 rounded"></div>
              <div className="h-8 w-24 bg-gray-400 rounded"></div>
              <div className="h-8 w-24 bg-gray-400 rounded"></div>
              <div className="h-8 w-24 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}