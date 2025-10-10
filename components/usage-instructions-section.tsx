import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function UsageInstructionsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Easy to Use, Even If You Can't Swallow Pills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Body Magic is designed for everyone. Simply mix with your favorite drink if you prefer not to swallow
              capsules.
            </p>
          </div>

          <Card className="border-primary/20 bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square max-w-lg mx-auto">
                <Image
                  src="/images/design-mode/cant-swallow-pills.png.jpeg"
                  alt="Can't Swallow Pills? Easy Instructions"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-lg">
              Take 1 capsule daily with water, or open and mix the contents into your favorite drink. Results typically
              appear within 2-3 weeks of consistent use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
