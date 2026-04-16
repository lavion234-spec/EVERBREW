import Link from 'next/link'
import { LinkButton } from '@/components/ui/Button'
import { COIN_PLANS } from '@/lib/data'
import type { CoinPlan } from '@/types'

const tierStyles: Record<CoinPlan['tier'], { color: string; label: string }> = {
  bronze:   { color: '#CD7F32', label: '◈ EverBronze' },
  prata:    { color: '#C0C0C0', label: '◈ EverPrata'  },
  ouro:     { color: '#E8C547', label: '◈ EverOuro'   },
  platinum: { color: '#E5E4E2', label: '◈ EverPlatinum' },
}

export function EverclubSection() {
  return (
    <section id="everclub" className="section-padding border-b border-smoke">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Content */}
          <div>
            <p className="eyebrow">Programa de Fidelidade</p>
            <h2 className="font-display leading-[0.92] text-bone mb-5" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              OS VERDADEIROS<br />FÃS PAGAM<br /><span className="text-fire">MENOS.</span>
            </h2>
            <p className="text-[0.95rem] text-ash leading-[1.8] max-w-[480px] mb-10">
              Junte-se ao EverClub e transforme cada pedido em investimento. Quanto mais você bebe, mais você economiza — e mais exclusividade você acessa.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: '40',  title: 'Até 40% de Desconto', desc: 'Em todos os rótulos da linha. Todo pedido, sempre.' },
                { icon: '◆',   title: '15% Cashback em EverCoins', desc: 'Investimento que volta como saldo para suas próximas compras.' },
                { icon: '🔥', title: 'Acesso Antecipado', desc: 'Novos lotes e drops exclusivos antes do público geral.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-5 items-start p-5 bg-carbon border border-smoke hover:border-steel transition-colors duration-200">
                  <div className="font-display text-[2rem] text-fire w-12 flex-shrink-0 leading-none">{icon}</div>
                  <div>
                    <div className="font-semibold text-[0.95rem] text-bone mb-1">{title}</div>
                    <div className="text-[0.8rem] text-ash">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="bg-iron border border-smoke p-12 relative overflow-hidden">
            <span
              className="absolute top-[-20px] right-[-20px] font-display text-[120px] text-gold/5 leading-none pointer-events-none select-none"
              aria-hidden="true"
            >
              ◆
            </span>
            <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-gold-light mb-4">
              ◆ EverClub Membership
            </p>
            <h3 className="font-display text-[3rem] leading-[0.95] text-bone mb-4">
              SEJA<br />EVERCLUBER
            </h3>
            <p className="text-[0.85rem] text-ash leading-[1.7] mb-9">
              Crie sua conta e já comece a aproveitar os preços exclusivos de membro em todos os pedidos.
            </p>

            <ul className="flex flex-col gap-3 mb-9">
              {[
                'Preços exclusivos de Everclubber',
                'Cashback automático em EverCoins',
                'Histórico completo de pedidos',
                'Notificações de novos lotes',
                'Acesso ao EverClub Social',
              ].map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-[0.85rem] text-bone">
                  <span className="font-mono text-fire text-[0.8rem]">→</span>
                  {perk}
                </li>
              ))}
            </ul>

            <LinkButton href="/everclub" variant="gold" full className="mb-4">
              QUERO SER EVERCLUBER ◆
            </LinkButton>
            <LinkButton href="/everclub#planos" variant="secondary" full>
              VER PLANOS EVERCOINS
            </LinkButton>

            <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ash mt-7 pt-7 border-t border-smoke">
              <strong className="text-bone">+12.000</strong> Everclubbers ativos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EvercoinsSection() {
  return (
    <section id="evercoins" className="section-padding bg-carbon border-b border-smoke">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-16">
          <div>
            <p className="eyebrow">Programa de Investimento</p>
            <h2 className="font-display leading-[0.92] text-bone" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              INVISTA EM<br />SABOR.
            </h2>
          </div>
          <p className="text-[0.95rem] text-ash leading-[1.8]">
            EverCoins (EVC$) é a moeda interna da Everbrew. Você investe um valor real e recebe de volta mais EVC$ para usar nas suas compras. Quanto maior o aporte, maior o bônus. Simples, transparente, saboroso.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
          {COIN_PLANS.map((plan) => {
            const tier = tierStyles[plan.tier]
            return (
              <div
                key={plan.id}
                className={[
                  'bg-iron border p-8 relative transition-all duration-300 hover:-translate-y-1',
                  plan.isFeatured ? 'border-gold' : 'border-smoke hover:border-steel',
                ].join(' ')}
              >
                {plan.isFeatured && (
                  <span className="absolute top-[-1px] left-1/2 -translate-x-1/2 bg-gold text-void font-mono text-[0.55rem] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    MAIS POPULAR
                  </span>
                )}
                <p
                  className="font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-5"
                  style={{ color: tier.color }}
                >
                  {tier.label}
                </p>
                <div className="font-display text-[2.4rem] text-bone leading-none mb-1">
                  R$ {plan.investment.toLocaleString('pt-BR')}
                </div>
                <p className="text-[0.75rem] text-ash mb-5">Valor do investimento</p>
                <div className="py-4 border-y border-smoke mb-5">
                  <div className="font-mono text-[1.1rem] font-bold text-gold-light">
                    EVC$ {plan.evcReturn.toLocaleString('pt-BR')}
                  </div>
                  <div className="font-mono text-[0.65rem] text-hop mt-1">
                    +{plan.bonusPct}% de bônus
                  </div>
                </div>
                <p className="text-[0.75rem] text-ash mb-6">
                  Até {plan.installments}x sem juros
                </p>
                <LinkButton
                  href={`/produto/plano-ever${plan.tier}`}
                  variant={plan.isFeatured ? 'gold' : 'secondary'}
                  full
                  size="sm"
                >
                  INVESTIR AGORA
                </LinkButton>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
