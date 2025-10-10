import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Internal vs External Approach</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* External Products */}
          <Card className="border-border bg-card">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mx-auto mb-4">
                <X className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl">External Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Only mask the smell temporarily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Contain harsh chemicals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Need constant reapplication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Don't address the root cause</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Can irritate sensitive skin</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Internal Cleansing */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Internal Cleansing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Treats the actual source of odor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Uses natural plant compounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provides 24/7 protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improves overall gut health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gentle and chemical-free</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6">
            Order Your Body Magic Now
          </Button>
        </div>
      </div>
    </section>
  )
}
