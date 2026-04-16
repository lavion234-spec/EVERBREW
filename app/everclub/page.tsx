import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button, LinkButton } from '@/components/ui/Button'
import { COIN_PLANS, REVIEWS } from '@/lib/data'

const BENEFITS = [
  {
    icon: '◆',
    title: 'Até 40% de desconto',
    desc: 'Preço exclusivo de clube em todos os rótulos do catálogo.',
  },
  {
    icon: '◈',
    title: 'EverCoins',
    desc: 'Cashback em crédito que valoriza quanto mais você investe no clube.',
  },
  {
    icon: '▲',
    title: 'Acesso antecipado',
    desc: 'Você compra rótulos novos antes de qualquer pessoa de fora.',
  },
  {
    icon: '●',
    title: 'Frete zero',
    desc: 'Entrega gratuita para Everclubers em todo o Brasil.',
  },
  {
    icon: '◉',
    title: 'Drops exclusivos',
    desc: 'Rótulos que só existem para membros. Nunca aparece no site público.',
  },
  {
    icon: '◐',
    title: 'Comunidade privada',
    desc: 'Grupo fechado com a crew Everbrew. Eventos, degustações e conteúdo direto.',
  },
]

const TIER_STYLES: Record<string, { border: string; label: string; badge: string; img: string }> = {
  bronze:   { border: 'border-amber/40',     label: 'text-amber',     badge: 'bg-amber/10 text-amber', img: '/EVERBREW/coins/everbronze.png'   },
  prata:    { border: 'border-ash/40',       label: 'text-mist',      badge: 'bg-ash/10 text-mist',    img: '/EVERBREW/coins/everprata.png'    },
  ouro:     { border: 'border-gold/70',      label: 'text-gold',      badge: 'bg-gold/15 text-gold',   img: '/EVERBREW/coins/everouro.png'     },
  platinum: { border: 'border-bone/40',      label: 'text-bone',      badge: 'bg-bone/10 text-bone',   img: '/EVERBREW/coins/everplatinum.png' },
}

export default function EverClubPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-carbon border-b border-smoke">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 font-display text-[22vw] leading-none text-white/[0.02] select-none flex items-center"
          >
            CLUB
          </span>
          <div className="container-main relative">
            <p className="eyebrow mb-4">Membership Exclusivo</p>
            <h1
              className="font-display text-bone leading-none"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
            >
              EVER<span className="text-gold">CLUB</span>
            </h1>
            <p
              className="text-ash mt-5 max-w-lg"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
            >
              Acesso exclusivo. Preços impossíveis para quem está fora. Drops que nunca aparecem no site público.
              Se você leva cerveja a sério — o EverClub foi feito para você.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <LinkButton href="#planos" variant="gold" size="lg">
                VER PLANOS →
              </LinkButton>
              <LinkButton href="#beneficios" variant="secondary" size="lg">
                COMO FUNCIONA
              </LinkButton>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                ['12.000+', 'Everclubers'],
                ['40%', 'de desconto'],
                ['Até +30%', 'em EverCoins'],
              ].map(([val, lab]) => (
                <div key={lab}>
                  <p className="font-display text-[2rem] text-gold leading-none">{val}</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] text-ash mt-1">{lab}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="section-padding bg-void border-b border-smoke">
          <div className="container-main">
            <div className="mb-14">
              <p className="eyebrow mb-3">O que você ganha</p>
              <h2
                className="font-display text-bone leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                PRIVILÉGIOS<br />DE MEMBRO
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-smoke">
              {BENEFITS.map((b) => (
                <div key={b.title} className="bg-void p-8 hover:bg-carbon transition-colors">
                  <span className="text-fire text-xl">{b.icon}</span>
                  <h3 className="font-display text-[1.4rem] text-bone mt-4 mb-2">{b.title}</h3>
                  <p className="text-ash text-[0.85rem] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How EverCoins work */}
        <section className="section-padding bg-carbon border-b border-smoke">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-3">EverCoins</p>
                <h2
                  className="font-display text-bone leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  SEU DINHEIRO<br />RENDE <span className="text-gold">MAIS</span>
                </h2>
                <p className="text-ash mt-5 text-[0.9rem] leading-relaxed max-w-md">
                  EverCoins é o crédito interno do clube. Você investe um valor em reais e recebe de volta em EVC — com bônus que varia de <strong className="text-bone">+15% a +30%</strong> dependendo do tier escolhido.
                </p>
                <p className="text-ash mt-3 text-[0.9rem] leading-relaxed max-w-md">
                  Use EVC para comprar qualquer rótulo do catálogo, kits, acessórios e drops exclusivos. O saldo não expira.
                </p>
              </div>
              {/* Flow diagram */}
              <div className="space-y-3">
                {[
                  { step: '01', text: 'Você escolhe o plano e investe em reais', accent: false },
                  { step: '02', text: 'Recebe EverCoins com bônus no saldo', accent: true },
                  { step: '03', text: 'Usa EVC para comprar cervejas com desconto', accent: false },
                  { step: '04', text: 'Cashback em EVC a cada compra', accent: false },
                ].map(({ step, text, accent }) => (
                  <div
                    key={step}
                    className={`flex items-center gap-5 p-5 border ${accent ? 'border-gold/40 bg-gold/5' : 'border-smoke bg-iron'}`}
                  >
                    <span className={`font-mono text-[0.7rem] tracking-widest ${accent ? 'text-gold' : 'text-ash'}`}>{step}</span>
                    <p className={`text-[0.9rem] ${accent ? 'text-bone font-semibold' : 'text-mist'}`}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="planos" className="section-padding bg-void border-b border-smoke">
          <div className="container-main">
            <div className="mb-14 text-center">
              <p className="eyebrow mb-3">Planos</p>
              <h2
                className="font-display text-bone leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                ESCOLHA SEU TIER
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {COIN_PLANS.map((plan) => {
                const ts = TIER_STYLES[plan.tier] ?? TIER_STYLES.bronze
                return (
                  <div
                    key={plan.id}
                    className={`relative border ${ts.border} bg-carbon p-8 flex flex-col
                      ${plan.isFeatured ? 'ring-1 ring-gold' : ''}`}
                  >
                    {plan.isFeatured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-void text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1">
                        MAIS POPULAR
                      </span>
                    )}
                    <img
                      src={ts.img}
                      alt={plan.tierLabel}
                      className="w-20 h-20 object-contain mb-4"
                    />
                    <div className={`inline-block px-3 py-1 text-[0.65rem] uppercase tracking-widest font-bold mb-6 ${ts.badge}`}>
                      {plan.tierLabel}
                    </div>

                    <div className="mb-1">
                      <p className="text-ash text-[0.7rem] uppercase tracking-widest">Investimento</p>
                      <p className={`font-display text-[2.5rem] leading-none ${ts.label}`}>
                        R${plan.investment.toLocaleString('pt-BR')}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-smoke mb-6">
                      <p className="text-ash text-[0.7rem] uppercase tracking-widest">Você recebe</p>
                      <p className="font-display text-[2rem] text-bone leading-none">
                        EVC${plan.evcReturn.toLocaleString('pt-BR')}
                      </p>
                      <p className={`text-[0.75rem] mt-1 font-semibold ${ts.label}`}>+{plan.bonusPct}% de bônus</p>
                    </div>

                    {plan.installments > 1 && (
                      <p className="text-ash text-[0.75rem] mb-6">
                        Parcelável em até <span className="text-bone">{plan.installments}x</span>
                      </p>
                    )}

                    <Button
                      variant={plan.isFeatured ? 'gold' : 'secondary'}
                      size="md"
                      full
                      className="mt-auto"
                    >
                      ASSINAR {plan.tierLabel.toUpperCase()}
                    </Button>
                  </div>
                )
              })}
            </div>

            <p className="text-center text-ash text-[0.75rem] mt-8">
              Pagamento seguro. Parcelamento disponível. Saldo EVC não expira.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-carbon border-b border-smoke">
          <div className="container-main">
            <p className="eyebrow mb-3">Reviews</p>
            <h2
              className="font-display text-bone leading-none mb-14"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              QUEM JÁ É<br />DO CLUBE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIEWS.map(r => (
                <figure key={r.id} className="border border-smoke bg-void p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <blockquote className="text-mist text-[0.9rem] leading-relaxed mb-6">
                    {r.text}
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-fire/20 flex items-center justify-center text-fire text-[0.7rem] font-bold">
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-bone text-[0.85rem] font-semibold">{r.author}</p>
                      <p className="text-ash text-[0.7rem]">{r.platform}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-void">
          <div className="container-main text-center">
            <h2
              className="font-display text-bone leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              PRONTO PARA<br />ENTRAR?
            </h2>
            <p className="text-ash text-[0.9rem] max-w-md mx-auto mb-10">
              12.000+ Everclubers não podem estar errados. Escolha seu tier e comece hoje.
            </p>
            <LinkButton href="#planos" variant="gold" size="lg">
              QUERO MEU EVERCOINS →
            </LinkButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
