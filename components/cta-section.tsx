import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4 text-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 shadow-xl"
          asChild
        >
          <a href="#order-form">I Want This Internal Solution Now</a>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">⚡ Over 15,000 Nigerians watched this video last month</p>
      </div>
    </section>
  )
}
