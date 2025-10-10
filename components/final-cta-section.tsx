import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-primary/20 shadow-2xl bg-card">
          <CardContent className="p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Ready to Experience True Freshness From Within?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join over 15,000 Nigerians who have discovered the secret to lasting body freshness. Stop masking the
                problem and start treating it at the source.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-7 shadow-xl"
                asChild
              >
                <a href="#order-form">Order Body Magic Now - ₦45,000</a>
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Free delivery in Lagos • ✓ Pay on delivery available • ✓ 30-day money-back guarantee
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="grid gap-4 md:grid-cols-3 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">97%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">15,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Nigerians</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">2-3 Weeks</p>
                  <p className="text-sm text-muted-foreground">To See Results</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
