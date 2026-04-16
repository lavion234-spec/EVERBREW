import type { ReactNode } from 'react'

interface PageHeroProps {
  /** Caminho da imagem de fundo (ex: '/EVERBREW/coins/everclub-hero.png') */
  backgroundImage: string
  /** Texto fantasma decorativo no fundo (ex: 'CLUB') */
  backgroundText?: string
  /** Eyebrow acima do título */
  eyebrow: string
  /** Título principal */
  title: ReactNode
  /** Subtítulo/descrição */
  subtitle: ReactNode
  /** Conteúdo adicional abaixo do subtítulo (botões, stats, etc.) */
  children?: ReactNode
  /** Classes extras para a section */
  className?: string
  /** Posição do background (default: 'center top') */
  backgroundPosition?: string
  /** Padding inferior extra (default: 'pb-20') */
  paddingBottom?: string
  /** Altura mínima (default: undefined) */
  minHeight?: string
}

export function PageHero({
  backgroundImage,
  backgroundText,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  backgroundPosition = 'center top',
  paddingBottom = 'pb-20',
  minHeight,
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-36 ${paddingBottom} overflow-hidden border-b border-smoke ${minHeight ?? ''} ${className}`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-void/75 backdrop-brightness-50" />

      {/* Decorative background text */}
      {backgroundText && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 font-display leading-none text-white/[0.04] select-none flex items-center"
          style={{ fontSize: '18vw' }}
        >
          {backgroundText}
        </span>
      )}

      <div className="container-main relative">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1
            className="font-display text-bone leading-none"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            {title}
          </h1>
          <p
            className="text-ash mt-5 max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
          >
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  )
}
