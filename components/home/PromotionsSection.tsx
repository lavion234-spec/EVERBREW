'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'
import { BOX_PROMOTIONS } from '@/lib/data'
import type { BoxPromotion } from '@/lib/data'

// Card width + gap-px (1px) = 281px
const CARD_W = 281
const SET_SIZE = BOX_PROMOTIONS.length
// Triplicar itens para loop infinito
const ITEMS = [...BOX_PROMOTIONS, ...BOX_PROMOTIONS, ...BOX_PROMOTIONS]

function PromoCard({ promo, idx }: { promo: BoxPromotion; idx: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="flex-none w-[260px] sm:w-[280px] bg-iron border border-smoke flex flex-col hover:border-hop/40 transition-colors duration-300">
      {/* Image area */}
      <div className="relative bg-carbon flex items-center justify-center h-[220px] overflow-hidden">
        {promo.abv !== undefined && (
          <div className="absolute top-3 right-3 z-10 text-right">
            <div className="font-mono text-[0.6rem] tracking-[0.12em] text-ash leading-[1.6]">
              ABV: {promo.abv}%
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.12em] text-ash">
              IBU: {promo.ibu}
            </div>
          </div>
        )}

        {!imgError ? (
          <Image
            src={promo.imageUrl}
            alt={promo.name}
            width={180}
            height={200}
            className="h-[190px] w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 opacity-30">
            <span className="font-display text-[3rem] text-bone leading-none">13</span>
            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-ash uppercase">Evertreze</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4">
        <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-hop mb-1">
          {promo.subtitle}
        </p>
        <h3 className="font-display text-[1.15rem] leading-[1.1] text-bone mb-4 flex-1">
          {promo.name}
        </h3>

        {promo.isSpecial ? (
          <div className="grid grid-cols-2 gap-px mt-auto">
            <Link
              href={promo.ctaHref}
              className="bg-smoke px-3 py-3 text-center hover:bg-steel transition-colors"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.08em] text-bone leading-[1.4] block font-bold">
                {promo.ctaPrimaryLabel}
              </span>
            </Link>
            <Link
              href={promo.ctaHref}
              className="bg-hop px-3 py-3 text-center hover:brightness-110 transition-all"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.08em] text-void leading-[1.4] block font-bold">
                {promo.ctaSecondaryLabel}
              </span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px mt-auto">
            <div className="bg-smoke px-3 py-2.5">
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-ash mb-0.5">Evercluber</p>
              <p className="font-display text-[1.1rem] leading-none text-bone">EVC$ {promo.priceClub}</p>
              <p className="font-mono text-[0.55rem] tracking-[0.08em] text-hop mt-0.5">{promo.discountLabel}</p>
            </div>
            <div className="bg-hop px-3 py-2.5">
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-void/70 mb-0.5">Cliente</p>
              <p className="font-display text-[1.1rem] leading-none text-void">R$ {promo.priceClient}</p>
              <p className="font-mono text-[0.55rem] tracking-[0.08em] text-void/80 mt-0.5">{promo.cashbackLabel}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export function PromotionsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  // Inicia no segundo conjunto (meio), para ter espaço nos dois sentidos
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollLeft = SET_SIZE * CARD_W
  }, [])

  // Loop infinito: salto silencioso quando chega perto das bordas
  const handleScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const oneSet = SET_SIZE * CARD_W
    if (el.scrollLeft < oneSet * 0.5) {
      el.scrollLeft += oneSet
    } else if (el.scrollLeft > oneSet * 2.2) {
      el.scrollLeft -= oneSet
    }
  }, [])

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'next' ? CARD_W * 2 : -CARD_W * 2, behavior: 'smooth' })
  }, [])

  return (
    <section id="promotions" className="section-padding border-b border-smoke">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow">Caixas & Combos</p>
          <h2 className="font-display leading-[0.92] text-bone" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            PROMOÇÕES<br />EVERTREZE
          </h2>
        </div>

        {/* Carousel wrapper com setas laterais */}
        <div className="relative">
          {/* Seta esquerda */}
          <button
            onClick={() => scroll('prev')}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 border border-smoke bg-carbon text-bone flex items-center justify-center font-mono text-base hover:border-bone hover:bg-smoke transition-all duration-200"
          >
            ←
          </button>

          {/* Seta direita */}
          <button
            onClick={() => scroll('next')}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 border border-smoke bg-carbon text-bone flex items-center justify-center font-mono text-base hover:border-bone hover:bg-smoke transition-all duration-200"
          >
            →
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-px overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ITEMS.map((promo, i) => (
              <PromoCard key={`${promo.id}-${i}`} promo={promo} idx={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function PromoCard({ promo }: { promo: BoxPromotion }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="flex-none w-[260px] sm:w-[280px] bg-iron border border-smoke flex flex-col hover:border-hop/40 transition-colors duration-300">
      {/* Image area */}
      <div className="relative bg-carbon flex items-center justify-center h-[220px] overflow-hidden">
        {promo.abv !== undefined && (
          <div className="absolute top-3 right-3 z-10 text-right">
            <div className="font-mono text-[0.6rem] tracking-[0.12em] text-ash leading-[1.6]">
              ABV: {promo.abv}%
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.12em] text-ash">
              IBU: {promo.ibu}
            </div>
          </div>
        )}

        {!imgError ? (
          <Image
            src={promo.imageUrl}
            alt={promo.name}
            width={180}
            height={200}
            className="h-[190px] w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 opacity-30">
            <span className="font-display text-[3rem] text-bone leading-none">13</span>
            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-ash uppercase">Evertreze</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4">
        <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-hop mb-1">
          {promo.subtitle}
        </p>
        <h3 className="font-display text-[1.15rem] leading-[1.1] text-bone mb-4 flex-1">
          {promo.name}
        </h3>

        {/* Price row */}
        {promo.isSpecial ? (
          <div className="grid grid-cols-2 gap-px mt-auto">
            <Link
              href={promo.ctaHref}
              className="bg-smoke px-3 py-3 text-center hover:bg-steel transition-colors"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.08em] text-bone leading-[1.4] block font-bold">
                {promo.ctaPrimaryLabel}
              </span>
            </Link>
            <Link
              href={promo.ctaHref}
              className="bg-hop px-3 py-3 text-center hover:brightness-110 transition-all"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.08em] text-void leading-[1.4] block font-bold">
                {promo.ctaSecondaryLabel}
              </span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px mt-auto">
            {/* Evercluber */}
            <div className="bg-smoke px-3 py-2.5">
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-ash mb-0.5">Evercluber</p>
              <p className="font-display text-[1.1rem] leading-none text-bone">
                EVC$ {promo.priceClub}
              </p>
              <p className="font-mono text-[0.55rem] tracking-[0.08em] text-hop mt-0.5">
                {promo.discountLabel}
              </p>
            </div>
            {/* Cliente */}
            <div className="bg-hop px-3 py-2.5">
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-void/70 mb-0.5">Cliente</p>
              <p className="font-display text-[1.1rem] leading-none text-void">
                R$ {promo.priceClient}
              </p>
              <p className="font-mono text-[0.55rem] tracking-[0.08em] text-void/80 mt-0.5">
                {promo.cashbackLabel}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export function PromotionsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'next' ? CARD_WIDTH * 2 : -CARD_WIDTH * 2, behavior: 'smooth' })
    setTimeout(updateArrows, 350)
  }, [updateArrows])

  return (
    <section id="promotions" className="section-padding border-b border-smoke">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow">Caixas & Combos</p>
          <h2 className="font-display leading-[0.92] text-bone" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            PROMOÇÕES<br />EVERTREZE
          </h2>
        </div>

        {/* Carousel wrapper com setas laterais */}
        <div className="relative">
          {/* Seta esquerda */}
          <button
            onClick={() => scroll('prev')}
            disabled={!canPrev}
            aria-label="Anterior"
            className={clsx(
              'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10',
              'w-11 h-11 border flex items-center justify-center font-mono text-base',
              'bg-carbon transition-all duration-200',
              canPrev
                ? 'border-smoke text-bone hover:border-bone hover:bg-smoke cursor-pointer'
                : 'border-steel text-steel opacity-0 pointer-events-none'
            )}
          >
            ←
          </button>

          {/* Seta direita */}
          <button
            onClick={() => scroll('next')}
            disabled={!canNext}
            aria-label="Próximo"
            className={clsx(
              'absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10',
              'w-11 h-11 border flex items-center justify-center font-mono text-base',
              'bg-carbon transition-all duration-200',
              canNext
                ? 'border-smoke text-bone hover:border-bone hover:bg-smoke cursor-pointer'
                : 'border-steel text-steel opacity-0 pointer-events-none'
            )}
          >
            →
          </button>

        {/* Carousel track */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex gap-px overflow-x-auto scroll-smooth pb-2 -mx-4 px-4 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BOX_PROMOTIONS.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
        </div>{/* fim wrapper relativo */}
      </div>
    </section>
  )
}
