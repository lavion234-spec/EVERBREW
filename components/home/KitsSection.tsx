import { LinkButton } from '@/components/ui/Button'
import { KITS } from '@/lib/data'

export function KitsSection() {
  return (
    <section id="kits" className="section-padding border-b border-smoke">
      <div className="container-main">
        <p className="eyebrow">Combos & Presentes</p>
        <h2 className="font-display leading-[0.92] text-bone mb-14" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
          KITS &<br />COMBOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          {KITS.map((kit) => (
            <div
              key={kit.id}
              className="bg-carbon border border-smoke p-14 relative overflow-hidden min-h-[320px] flex flex-col hover:border-fire/30 transition-colors duration-300"
            >
              <span
                className="absolute right-[-40px] bottom-[-30px] font-display text-[16rem] leading-[0.8] text-iron pointer-events-none select-none"
                aria-hidden="true"
              >
                {kit.id === 'evertreze' ? '13' : '♡'}
              </span>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ash mb-4 relative z-10">
                {kit.subtitle}
              </p>
              <h3 className="font-display text-[3.2rem] leading-[0.95] text-bone mb-4 relative z-10">
                {kit.name}
              </h3>
              <p className="text-[0.85rem] text-ash leading-[1.7] mb-10 max-w-[320px] relative z-10">
                {kit.description}
              </p>
              <div className="mt-auto relative z-10">
                <LinkButton href={kit.ctaHref} variant={kit.variant}>
                  {kit.ctaLabel}
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
