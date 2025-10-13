import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

export default function SmartSweeperPage() {
  const product = {
    name: "Smart Sweeper",
    price: 249.99,
    image: "/smart-sweeper-product.jpg",
    category: "Home",
    description:
      "Experience effortless cleaning with the Smart Sweeper. Intelligent navigation and powerful suction keep your home spotless.",
    features: [
      "Intelligent navigation system",
      "Powerful suction technology",
      "App-controlled scheduling",
      "Auto-charging dock included",
    ],
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-accent">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{product.name}</h1>
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <p className="text-center py-8 text-muted-foreground">Order form coming soon</p>
            </div>

            {/* Features */}
            <div className="border-t border-border pt-8">
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
