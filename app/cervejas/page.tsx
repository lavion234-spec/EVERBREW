'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/ui/ProductCard'
import { PRODUCTS, BEER_STYLES, BEER_ABV_RANGES } from '@/lib/data'

const STYLES = BEER_STYLES
const ABV_RANGES = BEER_ABV_RANGES

export default function CervejasPage() {
  const [activeStyle, setActiveStyle] = useState('Todos')
  const [activeAbv, setActiveAbv] = useState(ABV_RANGES[0])
  const [sort, setSort] = useState<'default' | 'abv-asc' | 'abv-desc' | 'ibu-desc'>('default')

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (activeStyle !== 'Todos') list = list.filter(p => p.style === activeStyle)
    list = list.filter(p => p.abv >= activeAbv.min && p.abv <= activeAbv.max)
    if (sort === 'abv-asc')   list.sort((a, b) => a.abv - b.abv)
    if (sort === 'abv-desc')  list.sort((a, b) => b.abv - a.abv)
    if (sort === 'ibu-desc')  list.sort((a, b) => (b.ibu ?? 0) - (a.ibu ?? 0))
    return list
  }, [activeStyle, activeAbv, sort])

  return (
    <>
      <Header />
      <main>

        {/* Page Hero */}
        <section className="pt-40 pb-32 border-b border-smoke relative overflow-hidden min-h-[480px] flex items-center">
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/EVERBREW/coins/cervejas-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-void/75 backdrop-brightness-50" />

          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20vw] leading-none text-white/[0.04] select-none"
          >
            CERVEJAS
          </span>
          <div className="container-main relative">
            <p className="eyebrow mb-4">Catálogo Completo</p>
            <h1
              className="font-display leading-none text-bone"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
            >
              CERVEJAS<br /><span className="text-fire">EXTREMAS</span>
            </h1>
            <p className="text-ash mt-4 max-w-md">
              {PRODUCTS.length} rótulos. Cada um com uma história. Nenhum para quem gosta de coisa comum.
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="section-padding bg-void">
          <div className="container-main">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Sidebar filters */}
              <aside className="lg:w-56 shrink-0 space-y-8">
                {/* Estilo */}
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ash mb-3">Estilo</p>
                  <ul className="space-y-1">
                    {STYLES.map(s => (
                      <li key={s}>
                        <button
                          onClick={() => setActiveStyle(s)}
                          className={`text-left w-full text-[0.8rem] py-1 transition-colors
                            ${activeStyle === s ? 'text-fire font-semibold' : 'text-mist hover:text-bone'}`}
                        >
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ABV */}
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ash mb-3">Teor Alcoólico</p>
                  <ul className="space-y-1">
                    {ABV_RANGES.map(r => (
                      <li key={r.label}>
                        <button
                          onClick={() => setActiveAbv(r)}
                          className={`text-left w-full text-[0.8rem] py-1 transition-colors
                            ${activeAbv.label === r.label ? 'text-fire font-semibold' : 'text-mist hover:text-bone'}`}
                        >
                          {r.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sort */}
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ash mb-3">Ordenar</p>
                  <ul className="space-y-1">
                    {([
                      ['default',  'Padrão'],
                      ['abv-asc',  'ABV: menor primeiro'],
                      ['abv-desc', 'ABV: maior primeiro'],
                      ['ibu-desc', 'IBU: mais amargo'],
                    ] as const).map(([key, label]) => (
                      <li key={key}>
                        <button
                          onClick={() => setSort(key)}
                          className={`text-left w-full text-[0.8rem] py-1 transition-colors
                            ${sort === key ? 'text-fire font-semibold' : 'text-mist hover:text-bone'}`}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Products grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-ash text-[0.8rem]">
                    <span className="text-bone font-semibold">{filtered.length}</span> {filtered.length === 1 ? 'rótulo' : 'rótulos'}
                  </p>
                </div>

                {filtered.length === 0 ? (
                  <div className="text-center py-24">
                    <p className="font-display text-[2rem] text-iron">NENHUM RESULTADO</p>
                    <button
                      onClick={() => { setActiveStyle('Todos'); setActiveAbv(ABV_RANGES[0]) }}
                      className="text-fire text-sm underline mt-4"
                    >
                      Limpar filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filtered.map(p => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
