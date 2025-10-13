import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About Beta Market</h1>
            <div className="h-1 w-20 bg-foreground mb-8" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Welcome to <span className="font-semibold text-foreground">Beta Market</span> — your one-stop destination
              for all your purchasing needs. We believe shopping should be simple, seamless, and satisfying.
            </p>

            <p>
              At Beta Market, we've carefully curated a collection of innovative products designed to enhance your daily
              life. From wellness solutions to smart home technology, every item in our store is selected with purpose
              and quality in mind.
            </p>

            <p>
              Our mission is to provide you with a minimalist shopping experience that focuses on what truly matters:
              exceptional products, transparent pricing, and outstanding service. No clutter, no confusion — just the
              essentials you need, delivered with care.
            </p>

            <p>
              Whether you're looking for the latest in wellness technology or smart home innovations, Beta Market is
              here to make your shopping journey effortless. We're more than just a marketplace; we're your trusted
              partner in discovering products that make a difference.
            </p>
          </div>

          <div className="pt-8">
            <Link href="/products">
              <Button size="lg" className="text-base">
                Explore Our Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
