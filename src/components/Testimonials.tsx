import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    companyLogo: "/logos/techstart.svg",
    content: "This platform has completely transformed how we handle our analytics. The insights we've gained have been invaluable for our growth strategy and decision-making process.",
    image: "/avatars/sarah.jpg",
    initials: "SJ",
    rating: 5,
    metrics: "127% increase in ROI",
    companySize: "50+ employees",
    industry: "SaaS",
    duration: "1 year",
    useCase: "Business Analytics"
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    company: "InnovateX",
    companyLogo: "/logos/innovatex.svg",
    content: "The ease of use and powerful features make this the perfect solution for our team. We've seen a 40% increase in productivity since implementing the platform. The AI-powered insights are game-changing.",
    image: "/avatars/michael.jpg",
    initials: "MC",
    rating: 5,
    metrics: "40% productivity boost",
    companySize: "200+ employees",
    industry: "Technology",
    duration: "2 years",
    useCase: "Product Analytics"
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
    companySize: "100+ employees",
    industry: "Marketing",
    duration: "1.5 years",
    useCase: "Marketing Analytics"
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that are already leveraging our platform
            to drive growth and achieve remarkable results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`relative bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Quote Icon */}
              <Quote
                className="absolute top-4 right-4 h-8 w-8 text-primary/10"
                strokeWidth={1}
              />

              <div className="p-8">
                {/* Rating */}
                <div className="mb-6">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 relative">
                  <p className="text-lg leading-relaxed">{testimonial.content}</p>
                </blockquote>

                {/* Metrics Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex-1 h-px bg-primary/10" />
                  <div className="px-4 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium">
                    {testimonial.metrics}
                  </div>
                  <div className="flex-1 h-px bg-primary/10" />
                </div>

                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/5 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {testimonial.industry} • {testimonial.duration} • {testimonial.companySize}
                    </div>
                  </div>
                </div>

                {/* Use Case Tag */}
                <div className="absolute top-4 left-4 text-xs font-medium text-primary/60">
                  {testimonial.useCase}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <Star className="h-6 w-6 fill-primary" />
              <span className="text-2xl font-bold">4.9/5</span>
              <span className="text-sm text-gray-500">
                from 1,000+ reviews
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
              {/* Replace with actual logos */}
              <div className="h-12 w-32 bg-gray-200 rounded-lg" />
              <div className="h-12 w-32 bg-gray-200 rounded-lg" />
              <div className="h-12 w-32 bg-gray-200 rounded-lg" />
              <div className="h-12 w-32 bg-gray-200 rounded-lg" />
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View all customer stories</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}