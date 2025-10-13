import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  id?: string
  name: string
  price: number
  image: string
  category?: string
  href?: string // Added optional href prop for custom links
}

export function ProductCard({ id, name, price, image, category, href }: ProductCardProps) {
  const linkHref = href || `/products/${id}`

  return (
    <Link href={linkHref} className="group">
      <div className="relative aspect-square overflow-hidden bg-accent">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        {category && <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{category}</p>}
        <h3 className="text-sm font-medium text-balance">{name}</h3>
        <p className="text-sm font-bold">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
