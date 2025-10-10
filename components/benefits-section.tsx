import { Card, CardContent } from "@/components/ui/card"
import { Users, FlaskConical, TrendingUp } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Users,
    title: "Real Nigerian Stories",
    description: "Thousands of Nigerians have tried this and permanently eliminated their body odor",
    color: "text-primary",
  },
  {
    icon: FlaskConical,
    title: "Science Explanation",
    description: "Discover how chlorophyll works to naturally eliminate odor at its source",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Before & After",
    description: "See the transformation in just 2-3 weeks of consistent use",
    color: "text-chart-3",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 ${benefit.color}`}
                >
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/images/design-mode/results-consistent-use.png.jpeg"
                  alt="Results With Consistent Use - Progress Chart"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
