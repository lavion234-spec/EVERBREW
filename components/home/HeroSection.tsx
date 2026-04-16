'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LinkButton } from '@/components/ui/Button'

const STATS = [
  { value: '13+', suffix: '',  label: 'Rótulos Ativos' },
  { value: '40',  suffix: '%', label: 'Off no EverClub' },
  { value: '12',  suffix: 'k', label: 'Everclubbers' },
  { value: '4.8', suffix: '★', label: 'Nota Untappd'  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] grid grid-cols-1 md:grid-cols-2 items-center pt-[72px] overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 70% 50%, rgba(255,69,0,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 30% 80%, rgba(255,140,0,0.04) 0%, transparent 60%)
          `,
        }}
      />
      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(#282828 1px, transparent 1px),
            linear-gradient(90deg, #282828 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        className="container-main relative z-10 py-20 md:py-0"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ash mb-7"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse-dot"
            aria-hidden="true"
          />
          Cervejaria Artesanal · Santos/SP · Since 2017
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display leading-[0.88] tracking-[0.01em] mb-7"
          style={{ fontSize: 'clamp(5rem, 10vw, 9.5rem)' }}
        >
          <span className="block text-bone">BEBA</span>
          <span className="block text-fire">DIFERENTE.</span>
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: '1.5px rgba(232,221,208,0.5)' }}
          >
            PENSE
          </span>
          <span className="block text-bone">EXTREMO.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p variants={item} className="text-[1.05rem] text-ash leading-[1.7] mb-11 max-w-[440px]">
          <strong className="text-bone">Hop-forward ou nada.</strong> Cada lata é um lote limitado de intensidade artesanal. Feita para quem sabe que cerveja é muito mais que bebida.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <LinkButton href="/cervejas" variant="primary" size="lg">
            EXPLORAR RÓTULOS →
          </LinkButton>
          <LinkButton href="/everclub" variant="secondary" size="lg">
            ◆ ENTRAR NO EVERCLUB
          </LinkButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-smoke"
        >
          {STATS.map(({ value, suffix, label }) => (
            <div key={label}>
              <div className="font-display text-[2.2rem] text-bone leading-none">
                {value}
                <span className="text-fire text-[1.4rem]">{suffix}</span>
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ash mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Visual — hidden on mobile */}
      <motion.div
        className="hidden md:flex items-center justify-center relative z-10 self-stretch"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        aria-hidden="true"
      >
        <div className="relative w-[300px]">
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,69,0,0.15) 0%, transparent 70%)',
            }}
          />
          {/* Can */}
          <Image
            src="https://www.everbrew.com.br/wp-content/uploads/2022/01/EVEBREW.evermaine-971x1536.png"
            alt="Cerveja Evermaine — Everbrew Juicy IPA"
            width={300}
            height={480}
            priority
            className="w-full animate-float drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
          />
          {/* Data overlays */}
          <span className="absolute top-[40%] right-[-90px] font-mono text-[0.7rem] tracking-[0.15em] text-ash">
            ABV · 7.7%
          </span>
          <span className="absolute bottom-[30%] right-[-70px] font-mono text-[0.7rem] tracking-[0.15em] text-ash">
            IBU · 60
          </span>
          <span
            className="absolute top-[30%] left-[-70px] font-mono text-[0.7rem] tracking-[0.15em] text-ash"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            JUICY IPA
          </span>
        </div>
      </motion.div>
    </section>
  )
}
