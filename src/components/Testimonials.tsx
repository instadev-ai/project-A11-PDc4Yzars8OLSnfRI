import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "This platform has completely transformed how we handle our analytics. The insights we've gained have been invaluable for our growth.",
    image: "/avatars/sarah.jpg",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "The ease of use and powerful features make this the perfect solution for our team. We've seen a 40% increase in productivity.",
    image: "/avatars/michael.jpg",
    initials: "MC"
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    content: "I can't imagine running our campaigns without this tool now. The data visualization features are exactly what we needed.",
    image: "/avatars/emma.jpg",
    initials: "ED"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Loved by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say
            about their experience with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <footer>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}