import Link from "next/link"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "10",
    name: "Smart Sweeper",
    price: 249.99,
    image: "/smart-sweeper-product.jpg",
    category: "Home",
    href: "/smart-sweeper", // Added custom href for dedicated page
  },
  {
    id: "9",
    name: "Body Magic",
    price: 199.99,
    image: "/body-magic-bundle.webp",
    category: "Wellness",
    href: "/body-magic", // Added custom href for dedicated page
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">Step Into Minimalism</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Discover our curated collection of innovative products designed for modern living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked essentials for your lifestyle</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link href="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Join the Beta Market Community
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-balance">
            Get exclusive access to new releases, special offers, and lifestyle inspiration
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/products" className="hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/body-magic" className="hover:text-foreground transition-colors">
                    Body Magic
                  </Link>
                </li>
                <li>
                  <Link href="/smart-sweeper" className="hover:text-foreground transition-colors">
                    Smart Sweeper
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Customer Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Beta Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
