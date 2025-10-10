import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">The Science Explained</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Your Gut is the Real Source of Body Odor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the digestive connection to body odor changes everything about how you approach freshness.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Problem Card */}
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6 text-destructive" />
                <CardTitle className="text-destructive">The Problem: Toxic Overload</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Processed foods create toxic buildup in your digestive system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Your liver and kidneys become overwhelmed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Toxins enter your bloodstream seeking alternative exit routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Your skin becomes a backup elimination system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Result: Persistent body odor that external products can't fix</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-primary">The Solution: Internal Cleansing</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Chlorophyll acts as a natural internal deodorizer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Binds to odor-causing compounds in your digestive tract</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Supports your body's natural detoxification processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Prevents toxins from reaching your skin and breath</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Result: True freshness that lasts all day, naturally</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto border-muted bg-muted/30">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-foreground">
                💡 This is why external deodorants are just temporary band-aids
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
