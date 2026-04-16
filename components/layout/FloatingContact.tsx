'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { CDN } from '@/lib/data'

const SKULL_URL = `${CDN}/2022/08/caveira-apontando.png`

const CONTACTS = [
  {
    label: 'E-commerce',
    href:  'https://wa.me/5513997034189?text=Ol%C3%A1%21+Quero+falar+sobre+o+E-commerce+Everbrew.',
  },
  {
    label: 'Pub e Delivery',
    href:  'https://wa.me/5513997034189?text=Ol%C3%A1%21+Quero+fazer+um+pedido+no+Pub%2FDelivery.',
  },
]

export function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[400] flex flex-col items-end gap-0">

      {/* Popup balloon */}
      <div
        className={clsx(
          'mb-2 w-72 bg-white shadow-2xl transition-all duration-300 origin-bottom-right',
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none',
        )}
      >
        {/* Top bar — close button */}
        <div className="flex justify-end px-3 pt-2">
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="text-[#7BC043] hover:text-[#5a9130] font-bold text-lg leading-none transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-1">
          <h3 className="font-display text-[1.4rem] tracking-[0.06em] text-[#1a1a1a] leading-tight mb-3">
            POSSO TE AJUDAR?
          </h3>
          <p className="text-[0.82rem] text-[#333] leading-relaxed mb-5">
            <strong>Fábrica, E-commerce e comercial</strong> o horário de atendimento é de{' '}
            <strong>segunda a sexta das 8h as 18h</strong>. Para o{' '}
            <strong>Pub/Delivery</strong> de terça à domingo, das{' '}
            <strong>17h30 as 1h</strong>.
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#7BC043] hover:bg-[#5a9130] text-white font-bold text-[0.75rem] uppercase tracking-[0.08em] py-3 px-2 transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Triangle pointing down toward skull */}
        <div
          className="absolute -bottom-[10px] right-8 w-0 h-0"
          style={{
            borderLeft:  '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop:   '10px solid white',
          }}
        />
      </div>

      {/* Trigger — skull mascot */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative w-20 h-20 group focus:outline-none"
        aria-label={open ? 'Fechar contato' : 'Fale conosco'}
        aria-expanded={open}
      >
        <img
          src={SKULL_URL}
          alt="Sr. Caveira — Fale Conosco"
          className={clsx(
            'w-full h-full object-contain drop-shadow-2xl transition-transform duration-300',
            open ? '-scale-x-100 -translate-y-1' : 'group-hover:-translate-y-2',
          )}
        />
        {!open && (
          <span className="absolute inset-0 rounded-full border border-[#7BC043]/50 animate-ping pointer-events-none" />
        )}
      </button>

    </div>
  )
}
