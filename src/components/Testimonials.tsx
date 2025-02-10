import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    companyLogo: "/logos/techstart.svg",
    content: "This platform has completely transformed how we handle our analytics. The insights we've gained have been invaluable for our growth.",
    image: "/avatars/sarah.jpg",
    initials: "SJ",
    rating: 5,
    metrics: "127% increase in ROI",
    companySize: "50+ employees"
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    company: "InnovateX",
    companyLogo: "/logos/innovatex.svg",
    content: "The ease of use and powerful features make this the perfect solution for our team. We've seen a 40% increase in productivity since implementing the platform.",
    image: "/avatars/michael.jpg",
    initials: "MC",
    rating: 5,
    metrics: "40% productivity boost",
    companySize: "200+ employees"
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    company: "GrowthLabs",
    companyLogo: "/logos/growthlabs.svg",
    content: "I can't imagine running our campaigns without this tool now. The data visualization features are exactly what we needed. Our marketing efficiency has improved dramatically.",
    image: "/avatars/emma.jpg",
    initials: "ED",
    rating: 5,
    metrics: "3x marketing ROI",
    companySize: "100+ employees"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that are already leveraging our platform
            to drive growth and achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <Avatar className="h-20 w-20 mb-4 ring-4 ring-primary/10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/5 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 mb-6 relative">
                    <span className="absolute -top-4 -left-2 text-5xl text-primary/20">"</span>
                    <p className="relative z-10 text-lg">
                      {testimonial.content}
                    </p>
                  </blockquote>

                  {/* Metrics Badge */}
                  <div className="bg-primary/5 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
                    {testimonial.metrics}
                  </div>

                  {/* Author Info */}
                  <footer className="mt-auto">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.companySize}
                    </div>
                  </footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-gray-500 mb-8">
            Trusted by 10,000+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {/* Replace with actual company logos */}
            <div className="h-8 w-32 bg-gray-400 rounded"></div>
            <div className="h-8 w-32 bg-gray-400 rounded"></div>
            <div className="h-8 w-32 bg-gray-400 rounded"></div>
            <div className="h-8 w-32 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}