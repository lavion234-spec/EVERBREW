'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { SOUVENIRS, KITS } from '@/lib/data'
import { useCartStore } from '@/lib/store/cart'
import type { Souvenir } from '@/types'

/* ─── Souvenir Card ─────────────────────────────────────────── */

function SouvenirCard({ item }: { item: Souvenir }) {
  const [imgError, setImgError] = useState(false)
  const [added,    setAdded]    = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  function handleAdd() {
    addItem({
      productId: item.id,
      name:      item.name,
      price:     item.price,
      imageUrl:  item.imageUrl,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <article className="group relative flex flex-col bg-carbon border border-smoke rounded-sm overflow-hidden hover:border-fire/50 transition-all duration-300">

      {/* Badge Novo */}
      {item.isNew && (
        <span className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-fire text-bone text-[10px] font-mono uppercase tracking-widest rounded-sm">
          Novo
        </span>
      )}

      {/* Badge Variante (tamanho/cor) */}
      {item.hasVariants && (
        <span className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-iron/60 border border-smoke text-ash text-[10px] font-mono uppercase tracking-widest rounded-sm">
          Ver Opções
        </span>
      )}

      {/* Cashback Badge */}
      <span className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-amber/20 border border-amber/40 text-amber text-[10px] font-mono uppercase tracking-widest rounded-sm">
        {item.cashbackPct}% EverCoins
      </span>

      {/* Imagem */}
      <div className="relative w-full aspect-square bg-void/60 overflow-hidden">
        {!imgError ? (
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-[3rem] font-display text-fire/30">EB</span>
            <span className="text-[10px] font-mono text-steel uppercase tracking-widest">Everbrew</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <p className="text-[10px] font-mono text-steel uppercase tracking-[0.15em] mb-1">
            {item.subtitle}
          </p>
          <h3 className="font-display text-[1.2rem] tracking-[0.06em] text-bone leading-tight">
            {item.name}
          </h3>
          {item.tagline && (
            <p className="text-[11px] font-mono text-fire/80 uppercase tracking-widest mt-1">
              {item.tagline}
            </p>
          )}
        </div>

        <p className="text-[13px] text-steel leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Preço */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            {item.priceClub && (
              <p className="text-[11px] font-mono text-amber uppercase tracking-wide mb-0.5">
                Evercluber EVC$ {item.priceClub.toFixed(2).replace('.', ',')}
              </p>
            )}
            <p className="text-[1.4rem] font-display text-bone tracking-wide">
              R$ {item.price.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>

        {/* Botão — variante vs simples */}
        {item.hasVariants ? (
          <a
            href={item.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 text-center font-mono text-[12px] uppercase tracking-[0.15em] rounded-sm
              transition-all duration-200 border border-fire text-fire hover:bg-fire hover:text-bone"
          >
            Ver Opções →
          </a>
        ) : (
          <button
            onClick={handleAdd}
            disabled={!item.inStock}
            className={`
              w-full py-3 font-mono text-[12px] uppercase tracking-[0.15em] rounded-sm
              transition-all duration-200 border
              ${added
                ? 'bg-hop/20 border-hop text-hop'
                : item.inStock
                  ? 'bg-fire/10 border-fire text-fire hover:bg-fire hover:text-bone'
                  : 'bg-smoke/20 border-smoke/30 text-smoke cursor-not-allowed'
              }
            `}
          >
            {added ? '✓ Adicionado' : item.inStock ? 'Adicionar ao Carrinho' : 'Fora de Estoque'}
          </button>
        )}
      </div>
    </article>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

type FilterCat = 'todos' | 'vestuario' | 'copos'

const FILTER_CATS: { id: FilterCat; label: string }[] = [
  { id: 'todos',     label: 'Todos' },
  { id: 'vestuario', label: 'Vestuário' },
  { id: 'copos',     label: 'Copos & Taças' },
]

const SOUVENIRS_VESTUARIO = ['bone', 'camiseta-black-winter', 'camiseta-evermaine', 'camiseta-breeze-blocks']
const SOUVENIRS_COPOS     = ['taca-dublin-10anos', 'americano-300ml', 'copo-dubai', 'copo-lata', 'copo-atlanta']

export default function LojaPage() {
  const [cat, setCat] = useState<FilterCat>('todos')

  const souvenirsFiltrados = cat === 'vestuario'
    ? SOUVENIRS.filter((s) => SOUVENIRS_VESTUARIO.includes(s.id))
    : cat === 'copos'
      ? SOUVENIRS.filter((s) => SOUVENIRS_COPOS.includes(s.id))
      : SOUVENIRS
  return (
    <>
      <Header />

      <main className="min-h-screen bg-void pt-[72px]">

        {/* ── Hero ── */}
        <section className="relative py-20 md:py-28 border-b border-smoke overflow-hidden">
          {/* Grade decorativa */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(var(--color-fire) 1px, transparent 1px), linear-gradient(90deg, var(--color-fire) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="container-main relative z-10 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fire mb-4">
              Everbrew Store
            </p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] tracking-[0.06em] text-bone leading-none mb-4">
              LOJA
            </h1>
            <p className="font-display text-[clamp(1.1rem,3vw,1.6rem)] tracking-[0.2em] text-steel mb-6">
              SOUVENIRS & ACESSÓRIOS
            </p>
            <p className="text-[15px] text-iron max-w-[500px] mx-auto leading-relaxed">
              Represente a Everbrew no dia a dia. Copos, adesivos e acessórios
              para quem vive a cultura craft.
            </p>
          </div>
        </section>

        {/* ── Souvenirs ── */}
        <section className="py-20">
          <div className="container-main">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fire mb-2">
                  Merch Exclusivo
                </p>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] tracking-[0.06em] text-bone leading-none">
                  SOUVENIRS
                </h2>
              </div>

              {/* Filtros */}
              <div className="flex gap-2 flex-wrap">
                {FILTER_CATS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCat(f.id)}
                    className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest rounded-sm border transition-all duration-200
                      ${cat === f.id
                        ? 'bg-fire border-fire text-bone'
                        : 'border-smoke text-steel hover:border-fire/50 hover:text-bone'
                      }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {souvenirsFiltrados.map((item) => (
                <SouvenirCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Divisor + Cashback Info ── */}
        <section className="py-10 border-y border-smoke bg-carbon/50">
          <div className="container-main">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-display text-[2rem] text-amber">◆</span>
                <div>
                  <p className="font-display text-[1.1rem] tracking-[0.08em] text-bone">
                    GANHE EVERCOINS EM TUDO
                  </p>
                  <p className="text-[13px] text-steel mt-0.5">
                    15% de cashback em créditos EverCoins em todos os souvenirs
                  </p>
                </div>
              </div>
              <Link href="/everclub#planos">
                <Button variant="gold" size="sm">
                  Conhecer o EverClub →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Kits & Combos ── */}
        <section className="py-20 border-b border-smoke">
          <div className="container-main">

            <div className="mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fire mb-2">
                Experiência Completa
              </p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] tracking-[0.06em] text-bone leading-none">
                KITS & COMBOS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {KITS.map((kit) => (
                <div
                  key={kit.id}
                  className="relative p-8 border border-smoke bg-carbon rounded-sm overflow-hidden group hover:border-fire/40 transition-all duration-300"
                >
                  {/* Fundo decorativo */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-fire/3 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-fire/6 transition-colors" />

                  <div className="relative z-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fire/70 mb-3">
                      {kit.subtitle}
                    </p>
                    <h3 className="font-display text-[1.6rem] tracking-[0.06em] text-bone mb-3">
                      {kit.name}
                    </h3>
                    <p className="text-[14px] text-steel leading-relaxed mb-6">
                      {kit.description}
                    </p>
                    <Link href={kit.ctaHref} target="_blank" rel="noopener noreferrer">
                      <Button variant={kit.variant === 'primary' ? 'primary' : 'secondary'} size="md">
                        {kit.ctaLabel}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Cervejas ── */}
        <section className="py-20">
          <div className="container-main text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fire mb-4">
              Nosso Portfólio
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[0.06em] text-bone leading-none mb-4">
              CONHEÇA NOSSAS CERVEJAS
            </h2>
            <p className="text-[15px] text-iron max-w-[440px] mx-auto leading-relaxed mb-8">
              Do Juicy IPA ao Imperial Sour — catálogo completo de rótulos
              artesanais que definem a Everbrew.
            </p>
            <Link href="/cervejas">
              <Button variant="primary" size="lg">
                Ver Todas as Cervejas →
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
