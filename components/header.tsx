import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
          BETA MARKET

        {/* Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Shop
          </Link>
          <Link href="/body-magic" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Body Magic
          </Link>
          <Link href="/smart-sweeper" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Smart Sweeper
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            About
          </Link>
        </nav> */}

        {/* Actions */}
      </div>
    </header>
  )
}
