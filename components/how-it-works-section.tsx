import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Leaf, Droplet, Heart, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Internal Odor Neutralization",
    description: "Chlorophyll binds to odor-causing compounds in your digestive tract before they reach your skin",
    color: "text-primary",
  },
  {
    icon: Droplet,
    title: "Gut-Level Cleansing",
    description: "Works at the source by supporting your body's natural detoxification processes",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Digestive System Support",
    description: "Promotes healthy digestion and reduces the burden on your liver and kidneys",
    color: "text-chart-3",
  },
  {
    icon: Sparkles,
    title: "Whole-Body Wellness",
    description: "Clearer digestion means better breath, clearer skin, and overall improved freshness",
    color: "text-chart-4",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Finally: A Solution That Treats Body Odor at Its Source
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Body Magic works where the problem actually starts - in your digestive system. Our chlorophyll formula
            neutralizes odor-causing compounds before they can escape through your skin, giving you true freshness from
            within.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-center mb-16">
          {/* Product Image */}
          <div className="relative">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/images/design-mode/how-does-body-magic-work.png.jpeg"
                  alt="How Body Magic Works - Benefits Infographic"
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${benefit.color}`}
                    >
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
