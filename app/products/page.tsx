import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: "9",
    name: "Body Magic",
    price: 199.99,
    image: "/body-magic-bundle.webp",
    category: "Wellness",
    href: "/body-magic", // Added custom href for dedicated page
  },
  {
    id: "10",
    name: "Smart Sweeper",
    price: 249.99,
    image: "/smart-sweeper-product.jpg",
    category: "Home",
    href: "/smart-sweeper", // Added custom href for dedicated page
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Products</h1>
          <p className="text-lg text-muted-foreground">Discover our curated collection of innovative products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
