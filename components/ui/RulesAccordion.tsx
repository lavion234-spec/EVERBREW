'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

interface RulesAccordionProps {
  rules: string[]
}

export function RulesAccordion({ rules }: RulesAccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-smoke">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-iron/50 transition-colors"
      >
        <span className="font-display text-xl tracking-[0.1em] text-bone uppercase">
          Regras do Grupo
        </span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          className={clsx('text-fire transition-transform duration-300 shrink-0', open ? 'rotate-180' : '')}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-500',
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="px-8 pb-6 space-y-3">
          {rules.map((rule, i) => (
            <li key={i} className="flex gap-3 text-[0.85rem] text-ash leading-relaxed">
              <span className="text-fire font-mono mt-0.5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
