import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '@/components/ui/Button'
import { PRODUCTS } from '@/lib/data'

const FEATURED = PRODUCTS.find((p) => p.id === 'evermaine')!
const SIDE_LIST = PRODUCTS.filter((p) => p.id === 'hey-mate' || p.id === 'little-juice')

export function NewArrivalsSection() {
  return (
    <section id="new-arrivals" className="section-padding border-b border-smoke">
      <div className="container-main">
        <p className="eyebrow mb-10">Novos Lotes</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-px">

          {/* Featured */}
          <div className="bg-carbon border border-smoke p-14 flex flex-col justify-between min-h-[550px] relative overflow-hidden">
            <Image
              src={FEATURED.imageUrl}
              alt=""
              width={300}
              height={480}
              aria-hidden
              className="absolute right-[-40px] bottom-[-20px] h-[420px] w-auto opacity-20 pointer-events-none"
            />

            <div className="relative z-10">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-fire bg-fire/10 border border-fire/20 px-3 py-1.5 inline-block mb-7">
                LOTE #{FEATURED.loteNumber} — RECÉM CHEGADO
              </span>
              <h3 className="font-display text-[5rem] leading-[0.9] text-bone mb-5">
                {FEATURED.name.toUpperCase().replace(' ', '\n')}
              </h3>
              <p className="text-[0.9rem] text-ash leading-[1.8] max-w-[360px] mb-9">
                {FEATURED.description}
              </p>
              <div className="flex gap-6 mb-10">
                {[
                  { label: 'ABV', value: `${FEATURED.abv}%` },
                  { label: 'IBU', value: FEATURED.ibu },
                  { label: 'VOL', value: `${FEATURED.volume}ml` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="font-mono text-[1rem] font-bold text-bone">{value}</div>
                    <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-ash">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={`/produto/${FEATURED.slug}`} variant="primary">
                  ADICIONAR AO CARRINHO
                </LinkButton>
                <LinkButton href={`/produto/${FEATURED.slug}`} variant="secondary">
                  VER DETALHES
                </LinkButton>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-smoke flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-gold-light bg-gold/10 border border-gold/20 px-2 py-0.5">◆ Club</span>
                <span className="font-mono text-[1rem] font-bold text-gold-light">
                  EVC$ {FEATURED.priceClub.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="text-right">
                <div className="font-mono text-[0.85rem] text-mist">
                  R$ {FEATURED.priceClient.toFixed(2).replace('.', ',')}
                </div>
                <div className="text-[0.65rem] text-hop">+{FEATURED.cashbackPct}% cashback</div>
              </div>
            </div>
          </div>

          {/* Side list */}
          <div className="grid grid-rows-3 gap-px">
            {SIDE_LIST.map((product) => (
              <div
                key={product.id}
                className="bg-carbon border border-smoke p-7 flex items-center gap-6 hover:bg-iron hover:border-steel transition-all duration-200"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="h-20 w-auto object-contain flex-shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-ash mb-1">
                    {product.style} · ABV {product.abv}% · IBU {product.ibu}
                  </div>
                  <div className="font-display text-[1.5rem] text-bone leading-none mb-2">
                    {product.name.toUpperCase()}
                  </div>
                  <div className="font-mono text-[0.8rem] text-mist">
                    <strong className="text-gold-light">
                      EVC$ {product.priceClub.toFixed(2).replace('.', ',')}
                    </strong>{' '}
                    · R$ {product.priceClient.toFixed(2).replace('.', ',')}
                  </div>
                </div>
                <LinkButton href={`/produto/${product.slug}`} variant="secondary" size="sm">
                  + CARRINHO
                </LinkButton>
              </div>
            ))}

            {/* View all */}
            <div className="bg-carbon border border-smoke p-7 flex flex-col items-center justify-center gap-4 text-center">
              <p className="font-display text-[1.2rem] tracking-[0.1em] text-ash">
                VER TODOS OS RÓTULOS
              </p>
              <LinkButton href="/cervejas" variant="secondary">
                EXPLORAR CATÁLOGO →
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
