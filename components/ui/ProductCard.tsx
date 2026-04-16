'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/lib/store/cart'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

const tierColorMap: Record<string, string> = {
  'juicy ipa':            'badge-style',
  'double american ipa':  'badge-style',
  'double ipa':           'badge-style',
  'imperial sour':        'badge-style',
  'light juicy ipa':      'badge-hop',
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const badgeClass = tierColorMap[product.style.toLowerCase()] ?? 'badge-style'

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    addItem({
      productId: product.id,
      name:      product.name,
      price:     product.priceClient,
      priceEvc:  product.priceClub,
      imageUrl:  product.imageUrl,
    })
  }

  return (
    <motion.article
      className="product-card group"
      whileHover={{ y: -4 }}
      transition={{ type: 'tween', duration: 0.25 }}
    >
      <Link href={`/produto/${product.slug}`} className="flex flex-col h-full">
        {/* Badges top */}
        <div className="flex items-center justify-between gap-2 p-4 pb-0">
          <span className={badgeClass}>{product.style}</span>
          <div className="flex gap-2">
            {product.isNew && (
              <span className="badge-new">Novo Lote</span>
            )}
            {product.badges?.includes('gold') && (
              <span className="badge-gold">Destaque</span>
            )}
            {product.badges?.includes('hop') && (
              <span className="badge-hop">Tropical</span>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[220px] flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
              priority={priority}
              className={clsx(
                'h-[180px] w-auto object-contain',
                'drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]',
                'transition-transform duration-400 ease-smooth',
                'group-hover:scale-105'
              )}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="h-[180px] w-[90px] bg-iron border border-smoke rounded flex items-center justify-center">
              <span className="font-display text-ash text-sm tracking-wider text-center px-2">
                {product.name}
              </span>
            </div>
          )}

          {/* Quick add overlay */}
          <div
            className={clsx(
              'absolute inset-0 bg-void/70',
              'flex items-center justify-center',
              'opacity-0 group-hover:opacity-100',
              'transition-opacity duration-300'
            )}
          >
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
            >
              ADICIONAR
            </Button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          {/* Stats */}
          <div className="flex gap-4">
            <span className="font-mono text-[0.65rem] text-ash">
              <strong className="text-mist">ABV</strong> {product.abv}%
            </span>
            <span className="font-mono text-[0.65rem] text-ash">
              <strong className="text-mist">IBU</strong> {product.ibu}
            </span>
            <span className="font-mono text-[0.65rem] text-ash">
              {product.volume}ml
            </span>
          </div>

          {/* Name */}
          <h3 className="font-display text-[1.7rem] tracking-[0.04em] text-bone leading-none">
            {product.name.toUpperCase()}
          </h3>

          {/* Pricing */}
          <div className="mt-auto">
            {/* Club price */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-gold-light bg-gold/10 border border-gold/20 px-1.5 py-0.5">
                ◆ Club
              </span>
              <span className="font-mono text-[0.9rem] font-bold text-gold-light">
                EVC$ {product.priceClub.toFixed(2).replace('.', ',')}
              </span>
              <span className="font-mono text-[0.6rem] text-ash ml-auto">
                até {product.discountPct}% Off
              </span>
            </div>
            {/* Regular price */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.6rem] text-ash">Cliente</span>
              <span className="font-mono text-[0.85rem] text-mist">
                R$ {product.priceClient.toFixed(2).replace('.', ',')}
              </span>
              <span className="font-mono text-[0.6rem] text-hop ml-auto">
                +{product.cashbackPct}% cashback
              </span>
            </div>
          </div>

          {/* CTA */}
          <Button
            variant="primary"
            size="sm"
            full
            onClick={handleAddToCart}
            className="mt-3"
          >
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </Link>
    </motion.article>
  )
}
