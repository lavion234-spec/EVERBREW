'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

const CDN = 'https://www.everbrew.com.br/wp-content/uploads'
const SKULL_URL = `${CDN}/2022/08/caveira-apontando.png`
const WA_LINK   = 'https://wa.me/5513997034189?text=Ol%C3%A1%21+Quero+falar+com+a+Everbrew.'
const EMAIL     = 'sac@everbrew.com.br'

const OPTIONS = [
  {
    label: 'WhatsApp',
    sub:   '(13) 99703-4189',
    href:  WA_LINK,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: 'bg-[#25D366] hover:brightness-110 text-white',
  },
  {
    label: 'E-mail',
    sub:   'sac@everbrew.com.br',
    href:  `mailto:${EMAIL}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    color: 'bg-fire hover:bg-ember text-white',
  },
]

export function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[400] flex flex-col items-end gap-3">

      {/* Options panel */}
      <div
        className={clsx(
          'flex flex-col gap-2 transition-all duration-300 origin-bottom-right',
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        {/* Header balloon */}
        <div className="relative mr-1 mb-1">
          <div className="bg-[#7BC043] text-void font-display text-[1.1rem] tracking-[0.1em] uppercase px-5 py-3 shadow-lg">
            FALE CONOSCO!
          </div>
          {/* Triangle pointing down-right */}
          <div
            className="absolute -bottom-2 right-5 w-0 h-0"
            style={{ borderLeft: '8px solid transparent', borderRight: '0px', borderTop: '10px solid #7BC043' }}
          />
        </div>

        {/* Buttons */}
        {OPTIONS.map((opt) => (
          <a
            key={opt.label}
            href={opt.href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'flex items-center gap-3 px-4 py-3 font-semibold text-[0.8rem] uppercase tracking-[0.1em]',
              'shadow-lg transition-all duration-200 w-52',
              opt.color
            )}
          >
            {opt.icon}
            <div className="flex flex-col leading-tight">
              <span>{opt.label}</span>
              <span className="text-[0.65rem] font-normal opacity-80 normal-case tracking-normal">{opt.sub}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Trigger — skull mascot */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative w-20 h-20 group focus:outline-none"
        aria-label="Fale conosco"
        aria-expanded={open}
      >
        {/* Skull image */}
        <img
          src={SKULL_URL}
          alt="Mascote Everbrew"
          className={clsx(
            'w-full h-full object-contain drop-shadow-2xl transition-transform duration-300',
            open ? '-scale-x-100 -translate-y-1' : 'group-hover:-translate-y-1'
          )}
        />
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full border border-fire/40 animate-ping pointer-events-none" />
        )}
      </button>

    </div>
  )
}
