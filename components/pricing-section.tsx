import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Only <span className="text-primary">₦45,000</span>
            </h2>
            <Badge
              variant="secondary"
              className="bg-accent/20 text-accent-foreground border-accent/30 text-base px-4 py-2"
            >
              Limited bottles available
            </Badge>
          </div>

          <Card className="border-primary/20 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xl font-semibold text-foreground">Get 2 for ₦85,000</p>
                <p className="text-accent font-medium">+ FREE delivery in across Nigeria </p>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                asChild
              >
                <a href="#order-form">Order Now - Fix the Root Cause</a>
              </Button>

              <p className="text-sm text-muted-foreground">✓ No subscriptions or hidden charges</p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="#order-form">Fix the Root Cause Now</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-primary hover:bg-primary/10">
              Learn the Science
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
