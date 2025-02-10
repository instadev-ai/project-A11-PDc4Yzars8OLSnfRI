import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App