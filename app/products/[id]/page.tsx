"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

const productData: Record<string, any> = {
  "1": {
    name: "Minimalist Leather Sneaker",
    price: 129.99,
    image: "/white-minimalist-leather-sneaker.jpg",
    category: "Footwear",
    description:
      "Crafted from premium Italian leather, this minimalist sneaker combines timeless design with modern comfort. Perfect for everyday wear.",
    features: [
      "Premium Italian leather upper",
      "Cushioned insole for all-day comfort",
      "Durable rubber outsole",
      "Minimalist design aesthetic",
    ],
  },
  "2": {
    name: "Classic Canvas High-Top",
    price: 89.99,
    image: "/black-canvas-high-top-sneaker.jpg",
    category: "Footwear",
    description: "A timeless high-top silhouette in durable canvas. This versatile sneaker pairs with any outfit.",
    features: [
      "Durable canvas construction",
      "Classic high-top design",
      "Padded collar and tongue",
      "Vulcanized rubber sole",
    ],
  },
  "3": {
    name: "Premium Running Shoe",
    price: 159.99,
    image: "/gray-premium-running-shoe.jpg",
    category: "Performance",
    description: "Engineered for performance with responsive cushioning and breathable materials.",
    features: [
      "Responsive foam cushioning",
      "Breathable mesh upper",
      "Lightweight construction",
      "Enhanced traction outsole",
    ],
  },
  "4": {
    name: "Urban Slip-On",
    price: 99.99,
    image: "/minimalist-slip-on-shoe.jpg",
    category: "Casual",
    description: "Effortless style meets comfort in this modern slip-on design.",
    features: ["Easy slip-on design", "Elastic side panels", "Cushioned footbed", "Flexible rubber sole"],
  },
  "9": {
    name: "Body Magic",
    prices: [
      { quantity: 1, price: 45000, label: "1 Bottle" },
      { quantity: 2, price: 80000, label: "2 Bottles" },
      { quantity: 3, price: 110000, label: "3 Bottles" },
    ],
    images: [
      "/body-magic-bundle.webp",
      "/body-magic-single.webp",
      "/body-magic-benefits.webp",
      "/body-magic-lifestyle.webp",
    ],
    category: "Wellness",
    description:
      "Remove body odor naturally with Body Magic. Fresh underarms, fresher smelling breath, and fresh smelling private area. Advanced formula for complete body freshness.",
    features: [
      "Fresh Underarms",
      "Fresher Smelling Breath",
      "Fresh Smelling Private Area",
      "1 Capsule Per Day",
      "30 Dietary Supplements",
    ],
  },
  "10": {
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
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productData[params.id] || productData["1"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedPriceOption, setSelectedPriceOption] = useState(0)

  const hasMultipleImages = product.images && product.images.length > 1
  const hasPriceOptions = product.prices && product.prices.length > 0
  const currentImage = hasMultipleImages ? product.images[currentImageIndex] : product.image

  const scrollToOrderForm = () => {
    const formSection = document.getElementById("order-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Script
        src="https://www.cognitoforms.com/f/seamless.js"
        data-key="bAVL0a-DFkq_zsNtVLumlg"
        data-form="16"
        strategy="lazyOnload"
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square bg-accent">
              <Image
                src={currentImage || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {hasMultipleImages && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-24 h-24 flex-shrink-0 bg-accent border-2 transition-colors ${
                      currentImageIndex === index ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{product.name}</h1>
              {hasPriceOptions ? (
                <div className="space-y-2">
                  <p className="text-3xl font-bold">₦{product.prices[selectedPriceOption].price.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{product.prices[selectedPriceOption].label}</p>
                </div>
              ) : (
                <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
              )}
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {hasPriceOptions && (
              <div className="mb-8">
                <h3 className="font-bold mb-4">Select Quantity</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.prices.map((option: any, index: number) => (
                    <Button
                      key={index}
                      variant={selectedPriceOption === index ? "default" : "outline"}
                      className="h-auto py-4 px-6 justify-between text-left"
                      onClick={() => setSelectedPriceOption(index)}
                    >
                      <span className="font-semibold">{option.label}</span>
                      <span className="font-bold">₦{option.price.toLocaleString()}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {!hasPriceOptions && params.id !== "9" && (
              <div className="mb-8">
                <h3 className="font-bold mb-4">Select Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {["7", "8", "9", "10", "11"].map((size) => (
                    <Button key={size} variant="outline" className="h-12 bg-transparent">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button size="lg" className="w-full mb-8 text-base" onClick={scrollToOrderForm}>
              Order Now
            </Button>

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

        <div id="order-form" className="mt-24 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Place Your Order</h2>
              <p className="text-lg text-muted-foreground">Fill out the form below to complete your purchase</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
