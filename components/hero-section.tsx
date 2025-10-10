import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm">
              🇳🇬 Over 15,000+ Nigerians trust this solution
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Smell Fresh{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                From The Inside Out
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The truth? That embarrassing body odor isn't coming from your skin, it's coming from your digestive
              system. When your gut can't properly process toxins, they escape through your pores. No amount of external
              deodorant can fix an internal problem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                asChild
              >
                <a href="#order-form">▶Try Body Magic Now</a>
              </Button>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2 text-foreground">See Why Deodorants Never Worked For You</h3>
              <p className="text-muted-foreground">Quick video showing the real cause of body odor</p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 p-8 backdrop-blur-sm border border-primary/10">
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-0 text-sm font-semibold px-4 py-2">
                97% Success Rate
              </Badge>

              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/images/design-mode/body-magic-flowers.png.jpeg"
                  alt="Body Magic Nigeria - Internal Body Freshness Solution"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
