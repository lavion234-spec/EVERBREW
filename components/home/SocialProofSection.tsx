import { REVIEWS } from '@/lib/data'

const NUMBERS = [
  { value: '12k+', label: 'Everclubbers Ativos' },
  { value: '★ 4.8', label: 'Nota no Untappd' },
  { value: '7+', label: 'Anos Produzindo' },
]

export function SocialProofSection() {
  return (
    <section id="social-proof" className="section-padding bg-carbon border-b border-smoke">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-center">

          {/* Numbers */}
          <div>
            <p className="eyebrow">Comunidade</p>
            <div className="flex flex-col gap-10 mt-4">
              {NUMBERS.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-[5rem] text-fire leading-[0.9]">{value}</div>
                  <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ash mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="font-display leading-[0.92] text-bone mb-10" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
              O QUE<br />DIZEM.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-iron border border-smoke p-7">
                  <div className="text-gold-light text-[0.85rem] tracking-[2px] mb-4">
                    {'★'.repeat(review.rating)}
                  </div>
                  <p className="text-[0.875rem] text-bone leading-[1.7] mb-5">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-smoke flex items-center justify-center text-[0.75rem] font-bold text-bone">
                      {review.initials}
                    </div>
                    <div>
                      <div className="text-[0.8rem] font-semibold text-bone">{review.author}</div>
                      <div className="font-mono text-[0.6rem] text-ash">{review.platform}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
