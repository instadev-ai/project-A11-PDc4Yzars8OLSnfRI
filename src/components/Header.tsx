import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const solutions = [
  {
    title: "Analytics",
    description: "Get a bird's eye view of your business metrics",
    icon: "📊",
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and workflows",
    icon: "⚡",
  },
  {
    title: "Reports",
    description: "Generate detailed insights and reports",
    icon: "📈",
  },
]

const resources = [
  {
    title: "Documentation",
    description: "Learn how to integrate our tools",
    icon: "📚",
  },
  {
    title: "API Reference",
    description: "Detailed API documentation",
    icon: "🔧",
  },
  {
    title: "Guides",
    description: "Step-by-step integration guides",
    icon: "🎯",
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [animateSparkle, setAnimateSparkle] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sparkle animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateSparkle(true)
      setTimeout(() => setAnimateSparkle(false), 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent flex items-center gap-2"
            >
              SaaSify
              <Sparkles
                className={`h-5 w-5 text-primary transition-all duration-300 ${
                  animateSparkle ? "scale-125 rotate-180 opacity-100" : "opacity-50"
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="h-9 px-4 py-2 hover:bg-primary/5 rounded-md transition-colors"
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5"
                          >
                            <div className="text-xl mb-1">{item.icon}</div>
                            <div className="text-sm font-medium leading-none mb-1">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="h-9 px-4 py-2 hover:bg-primary/5 rounded-md transition-colors"
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5"
                          >
                            <div className="text-xl mb-1">{item.icon}</div>
                            <div className="text-sm font-medium leading-none mb-1">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#pricing"
                  className="h-9 px-4 py-2 hover:bg-primary/5 rounded-md transition-colors inline-flex items-center"
                >
                  Pricing
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
              <ChevronDown className="ml-2 h-4 w-4 rotate-0 transition-transform duration-300 group-hover:rotate-180" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/5 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 px-2">
            <div className="space-y-4">
              {/* Solutions Dropdown */}
              <div className="space-y-2">
                <div className="font-medium text-sm text-gray-600 px-3">Solutions</div>
                {solutions.map((item) => (
                  <a
                    key={item.title}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 rounded-md transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.title}
                  </a>
                ))}
              </div>

              {/* Resources Dropdown */}
              <div className="space-y-2">
                <div className="font-medium text-sm text-gray-600 px-3">Resources</div>
                {resources.map((item) => (
                  <a
                    key={item.title}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 rounded-md transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.title}
                  </a>
                ))}
              </div>

              <a
                href="#pricing"
                className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 rounded-md transition-colors"
              >
                Pricing
              </a>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-center hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Log in
                </Button>
                <Button
                  className="w-full justify-center bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}