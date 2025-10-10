import { Card, CardContent } from "@/components/ui/card"

export function ScienceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
              The Science Behind Body Odor:
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                When your digestive system is overloaded with toxins,{" "}
                <span className="font-semibold text-foreground">
                  your body finds alternative ways to eliminate them
                </span>{" "}
                - through your breath, sweat, and skin. This is why deodorants only mask the smell temporarily.
              </p>
              <p className="text-lg">
                <span className="font-semibold text-primary">Body Magic works from within</span>, using natural
                chlorophyll to bind with odor-causing compounds in your digestive tract before they can escape through
                your skin, giving you true freshness that lasts all day, naturally.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
