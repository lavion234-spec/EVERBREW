'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

const CDN = 'https://www.everbrew.com.br/wp-content/uploads'

const SLIDES = [
  {
    image: `${CDN}/2026/03/BANNER_SITE-12.png`,
    href:  '/cervejas',
    alt:   'Double EverIPA — Cerveja Everbrew',
  },
  {
    image: `${CDN}/2026/03/BANNER_SITE-9.png`,
    href:  '/cervejas',
    alt:   'Hey Mate! — Cerveja Everbrew',
  },
  {
    image: `${CDN}/2026/03/BANNER_SITE-11.png`,
    href:  '/cervejas',
    alt:   'Falling Coconut — Cerveja Everbrew',
  },
  {
    image: `${CDN}/2026/04/BANNER_SITE.png`,
    href:  '/cervejas',
    alt:   'Novidades Everbrew',
  },
  {
    image: `${CDN}/2025/04/BANNER_DESKTOP.png`,
    href:  '/cervejas',
    alt:   'Everbrew — Cervejas Extremas',
  },
  {
    image: `${CDN}/2025/04/BANNER_DESKTOP-2.png`,
    href:  '/loja',
    alt:   'Caixa EVERTREZE — Kits Everbrew',
  },
  {
    image: `${CDN}/2025/08/1920x1080-alta-site-2-1.png`,
    href:  '/loja',
    alt:   'Everbrew — Loja Online',
  },
  {
    image: `${CDN}/2025/08/1920x1080-alta-site-3.png`,
    href:  '/everclub',
    alt:   'EverClub — Programa de Fidelidade',
  },
]

export function HeroBannerCarousel() {
  const [current, setCurrent]   = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = SLIDES.length

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  // Autoplay
  const startAutoplay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 5000)
  }, [total])

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [startAutoplay, stopAutoplay])

  // Touch/drag support
  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX
    setIsDragging(true)
    stopAutoplay()
  }
  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging) return
    const diff = dragStartX.current - e.clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    setIsDragging(false)
    startAutoplay()
  }

  return (
    <section
      className="relative w-full overflow-hidden border-b border-smoke"
      style={{ aspectRatio: '16/5.6' }}
      aria-label="Destaques Everbrew"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={() => { if (isDragging) { setIsDragging(false); startAutoplay() } }}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${current * 100}%)`, cursor: isDragging ? 'grabbing' : 'grab' }}
        aria-live="polite"
      >
        {SLIDES.map((slide, i) => (
          <Link
            key={i}
            href={slide.href}
            className="relative flex-shrink-0 w-full h-full block overflow-hidden"
            tabIndex={i === current ? 0 : -1}
            aria-hidden={i !== current}
            draggable={false}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center select-none"
              draggable={false}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </Link>
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.preventDefault(); prev(); stopAutoplay(); startAutoplay() }}
        className={clsx(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 flex items-center justify-center',
          'bg-void/60 hover:bg-fire/80 border border-smoke hover:border-fire',
          'text-bone transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fire'
        )}
        aria-label="Slide anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.preventDefault(); next(); stopAutoplay(); startAutoplay() }}
        className={clsx(
          'absolute right-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 flex items-center justify-center',
          'bg-void/60 hover:bg-fire/80 border border-smoke hover:border-fire',
          'text-bone transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fire'
        )}
        aria-label="Próximo slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2" role="tablist" aria-label="Slides">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => { goTo(i); stopAutoplay(); startAutoplay() }}
            className={clsx(
              'transition-all duration-300 rounded-none focus-visible:outline-none',
              i === current
                ? 'w-6 h-[3px] bg-fire'
                : 'w-[3px] h-[3px] bg-bone/40 hover:bg-bone/70'
            )}
          />
        ))}
      </div>
    </section>
  )
}
