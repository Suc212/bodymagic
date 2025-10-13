"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function BodyMagicPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedPriceOption, setSelectedPriceOption] = useState(0)
  const [isFormLoading, setIsFormLoading] = useState(true)

  const product = {
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
  }

  const scrollToOrderForm = () => {
    const formSection = document.getElementById("order-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
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
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-accent">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
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
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{product.name}</h1>
              <div className="space-y-2">
                <p className="text-3xl font-bold">₦{product.prices[selectedPriceOption].price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{product.prices[selectedPriceOption].label}</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Quantity Selection */}
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

        {/* Order Form Section */}
        <div id="order-form" className="mt-24 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Place Your Order</h2>
              <p className="text-lg text-muted-foreground">Fill out the form below to complete your purchase</p>
            </div>
            <div className="relative">
              {isFormLoading && <Skeleton className="absolute inset-0 w-full" style={{ height: 900 }} />}
              <iframe
                src="https://www.cognitoforms.com/f/bAVL0a-DFkq_zsNtVLumlg?id=16"
                style={{ border: 0, width: "100%" }}
                height="900"
                title="Body Magic Order Form"
                loading="lazy"
                onLoad={() => setIsFormLoading(false)}
                className="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
