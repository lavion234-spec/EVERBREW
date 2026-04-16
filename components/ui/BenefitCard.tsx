'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

export interface BenefitCardItem {
  img:   string
  title: string
  desc:  string
  tag:   string
}

export function BenefitCard({ img, title, desc, tag }: BenefitCardItem) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="group relative overflow-hidden bg-carbon border border-smoke hover:border-fire/50 transition-all duration-300 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={title}
          className={clsx(
            'w-full h-full object-cover transition-transform duration-500',
            hovered ? 'scale-110' : 'scale-100',
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-fire/90 text-white text-[0.65rem] font-mono uppercase tracking-widest">
          {tag}
        </span>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-[1.3rem] tracking-[0.08em] text-bone leading-tight mb-2">
          {title}
        </h3>
        <p className="text-ash text-[0.82rem] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
