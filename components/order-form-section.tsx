"use client"

import { useEffect } from "react"

export function OrderFormSection() {
  useEffect(() => {
    // Load Cognito Forms iframe script
    const script = document.createElement("script")
    script.src = "https://www.cognitoforms.com/f/iframe.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      id="order-form"
      className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary to-background scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Place Your Order Now</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to get your Body Magic delivered to your doorstep
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-primary/10 overflow-hidden">
            <iframe
              src="https://www.cognitoforms.com/f/bAVL0a-DFkq_zsNtVLumlg/16"
              allow="payment"
              style={{ border: 0, width: "100%" }}
              height="887"
              title="Order Form"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
