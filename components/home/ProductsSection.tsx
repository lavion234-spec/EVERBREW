import Link from 'next/link'
import { ProductCard } from '@/components/ui/ProductCard'
import { FEATURED_PRODUCTS } from '@/lib/data'

export function ProductsSection() {
  return (
    <section id="products" className="section-padding border-b border-smoke">
      <div className="container-main">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h2 className="font-display leading-[0.92] text-bone" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              RÓTULOS<br />EXTREMOS
            </h2>
          </div>
          <Link
            href="/cervejas"
            className="font-mono text-[0.75rem] tracking-[0.15em] uppercase text-ash border-b border-smoke pb-1 hover:text-bone hover:border-bone transition-all duration-200"
          >
            VER COLEÇÃO COMPLETA →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
          {FEATURED_PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
