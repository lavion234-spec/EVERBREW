'use client'

import { useState, useEffect, useCallback, type FormEvent } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button, LinkButton } from '@/components/ui/Button'
import { clsx } from 'clsx'

const CDN = 'https://www.everbrew.com.br/wp-content/uploads'

const FABRICA_PHOTOS = [
  { src: `${CDN}/2022/01/fabrica-everbrew-1.jpeg`, alt: 'Fábrica Everbrew — vista geral' },
  { src: `${CDN}/2022/01/fabrica-everbrew-2.jpeg`, alt: 'Fábrica Everbrew — tanques de fermentação' },
  { src: `${CDN}/2022/01/fabrica-everbrew-3.jpeg`, alt: 'Fábrica Everbrew — detalhes do equipamento' },
  { src: `${CDN}/2022/01/fabrica-everbrew-4.jpeg`, alt: 'Fábrica Everbrew — processo de produção' },
  { src: `${CDN}/2022/01/fabrica-everbrew-5.jpeg`, alt: 'Fábrica Everbrew — área de enlatamento' },
  { src: `${CDN}/2022/01/fabrica-everbrew-6.jpeg`, alt: 'Fábrica Everbrew — equipamentos modernos' },
]

const EVERPUB_PHOTOS = [
  { src: `${CDN}/2022/01/everpub-3.jpeg`,            alt: 'EverPub — ambiente interno' },
  { src: `${CDN}/2021/05/fachada-everbrew-santos.jpg`, alt: 'Cervejaria Everbrew — Fachada em Santos' },
  { src: `${CDN}/2022/01/everpub-1.jpeg`,            alt: 'EverPub — balcão de chopes' },
  { src: `${CDN}/2022/01/everpub-2.jpeg`,            alt: 'EverPub — espaço para shows' },
  { src: `${CDN}/2022/01/everpub-5.jpeg`,            alt: 'EverPub — ambientação noturna' },
]

// ── Lightbox types ─────────────────────────────────────────────
type LightboxItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; youtubeId: string; title: string }

function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }: {
  item: LightboxItem
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[200] bg-void/95 backdrop-blur-sm flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className="absolute top-5 right-5 z-[210] w-10 h-10 flex items-center justify-center border border-smoke bg-iron text-ash hover:text-bone hover:border-fire transition-colors"
        aria-label="Fechar"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev && onPrev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[210] w-11 h-11 flex items-center justify-center border border-smoke bg-iron text-ash hover:text-bone hover:bg-fire/80 hover:border-fire transition-all"
          aria-label="Anterior"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext && onNext() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[210] w-11 h-11 flex items-center justify-center border border-smoke bg-iron text-ash hover:text-bone hover:bg-fire/80 hover:border-fire transition-all"
          aria-label="Próximo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      )}

      {/* Content — stopPropagation garante que clicar na mídia não fecha */}
      <div
        className="relative z-[205] flex items-center justify-center px-16 py-12 max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl border border-smoke/40"
          />
        ) : (
          <div className="w-[85vw] max-w-4xl aspect-video shadow-2xl border border-smoke/40">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={item.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

const TIMELINE = [
  { year: '2016', label: 'Fundação como cervejaria cigana' },
  { year: '2018', label: 'Inauguração do EverPub em Santos' },
  { year: '2021', label: 'Crowdfunding para fábrica própria' },
  { year: '2022', label: 'Inauguração da fábrica no Mercado Municipal' },
]

export default function InstitucionalPage() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [lightbox, setLightbox] = useState<{ items: LightboxItem[]; index: number } | null>(null)

  const openLightbox = useCallback((items: LightboxItem[], index: number) => {
    setLightbox({ items, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prevItem = useCallback(() => {
    setLightbox((lb) => lb && lb.index > 0 ? { ...lb, index: lb.index - 1 } : lb)
  }, [])

  const nextItem = useCallback(() => {
    setLightbox((lb) => lb && lb.index < lb.items.length - 1 ? { ...lb, index: lb.index + 1 } : lb)
  }, [])

  // Build lightbox item sets
  const fabricaItems: LightboxItem[] = [
    { type: 'video', youtubeId: '0GfulXeCf9M', title: 'Tour pela Fábrica Everbrew' },
    ...FABRICA_PHOTOS.map((p) => ({ type: 'image' as const, src: p.src, alt: p.alt })),
  ]
  const everpubItems: LightboxItem[] = EVERPUB_PHOTOS.map((p) => ({ type: 'image' as const, src: p.src, alt: p.alt }))

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {lightbox && (
        <Lightbox
          item={lightbox.items[lightbox.index]}
          onClose={closeLightbox}
          onPrev={lightbox.index > 0 ? prevItem : undefined}
          onNext={lightbox.index < lightbox.items.length - 1 ? nextItem : undefined}
          hasPrev={lightbox.index > 0}
          hasNext={lightbox.index < lightbox.items.length - 1}
        />
      )}
      <Header />
      <main>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          className="relative min-h-[75vh] flex items-end pt-[72px] overflow-hidden"
          aria-label="Institucional Everbrew"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={`${CDN}/2021/04/header-home-everbrew.jpg`}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/65 to-void/25" />
          </div>

          {/* Grid decoration */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(#282828 1px, transparent 1px),
                linear-gradient(90deg, #282828 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />

          <div className="container-main relative z-10 pb-16">
            <p className="eyebrow mb-5">Santos/SP · Since 2016</p>
            <h1
              className="font-display leading-[0.88] text-bone mb-8"
              style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}
            >
              <span className="block">QUEM</span>
              <span className="block text-fire">SOMOS.</span>
            </h1>

            <nav
              className="flex flex-wrap gap-x-8 gap-y-3"
              aria-label="Seções da página"
            >
              {[
                { href: '#quem-somos',   label: 'Fundadores' },
                { href: '#a-cervejaria', label: 'A Cervejaria' },
                { href: '#a-fabrica',    label: 'A Fábrica' },
                { href: '#everpub',      label: 'EverPub' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-ash hover:text-bone transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-4 h-px bg-steel inline-block" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────────────── */}
        <div className="border-y border-smoke bg-carbon">
          <div className="container-main py-5">
            <div className="flex flex-wrap justify-between items-center gap-y-4 gap-x-6">
              {[
                { value: '2016',   label: 'Fundação' },
                { value: '180+',   label: 'Lançamentos' },
                { value: '2',      label: 'Países exportados' },
                { value: '★ Top 5', label: 'IPAs no Untappd' },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="font-display text-[2rem] text-fire leading-none">{value}</span>
                  <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-ash">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── QUEM SOMOS ────────────────────────────────────────── */}
        <section id="quem-somos" className="section-padding border-b border-smoke relative overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute font-display text-[22vw] text-iron whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
          >
            BONES
          </span>

          <div className="container-main relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <div>
                <p className="eyebrow">Os Fundadores</p>
                <h2
                  className="font-display leading-[0.9] text-bone mb-8"
                  style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
                >
                  DOIS APAIXONADOS PELA{' '}
                  <span className="text-fire">ALQUIMIA CERVEJEIRA</span>
                </h2>
                <div className="space-y-5 text-[0.95rem] text-ash leading-[1.8]">
                  <p>
                    <strong className="text-bone">Dois apaixonados pela alquimia cervejeira</strong>,
                    nosso objetivo é fazer cervejas intensas no sabor e no aroma. Buscamos extrair
                    o máximo dos grãos, dos lúpulos e das leveduras, trazendo sempre novidades em
                    receitas para tornar cada vez melhor a experiência com a Everbrew.
                  </p>
                  <p>
                    Nossos principais pilares são qualidade e intensidade, o grito
                    {' '}<strong className="text-bone">"Bones For Life"</strong> traduz o lema que está
                    marcado em nossas cervejas: viver e fazer acontecer de forma a ser eterno.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  {[
                    { name: 'Célio Ongaro Jr.', role: 'Co-Fundador · Mestre Cervejeiro' },
                    { name: 'Renê dos Santos',  role: 'Co-Fundador · Diretor Operacional' },
                  ].map(({ name, role }) => (
                    <div key={name} className="flex items-center gap-5 p-5 bg-carbon border border-smoke hover:border-steel transition-colors duration-200">
                      <div className="w-11 h-11 bg-iron border border-smoke flex items-center justify-center font-display text-fire text-[1.4rem] flex-shrink-0 leading-none">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-bone text-[0.95rem]">{name}</div>
                        <div className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ash mt-0.5">{role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="relative h-[500px] lg:h-[600px] border border-smoke overflow-hidden">
                <img
                  src={`${CDN}/2021/04/header-home-everbrew.jpg`}
                  alt="Fundadores Everbrew — Célio Ongaro Jr. e Renê dos Santos"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-void/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <blockquote className="font-display text-[2rem] text-white/15 leading-tight select-none">
                    BONES<br />FOR LIFE
                  </blockquote>
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-bone/50 mt-2">
                    — Filosofia Everbrew
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── A CERVEJARIA ──────────────────────────────────────── */}
        <section id="a-cervejaria" className="section-padding bg-carbon border-b border-smoke relative overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute right-[-3%] top-1/2 -translate-y-1/2 font-display text-[16vw] text-iron/60 pointer-events-none select-none leading-[0.85] text-right"
          >
            SINCE<br />2016
          </span>

          <div className="container-main relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

              {/* Text */}
              <div>
                <p className="eyebrow">Santos/SP</p>
                <h2
                  className="font-display leading-[0.9] text-bone mb-8"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  A NOSSA <span className="text-fire">CERVEJARIA</span>
                </h2>
                <div className="space-y-5 text-[0.95rem] text-ash leading-[1.8]">
                  <p>
                    Santos/SP é a cidade da Everbrew desde 2016.{' '}
                    <strong className="text-bone">Célio Ongaro Jr.</strong> e{' '}
                    <strong className="text-bone">Renê dos Santos</strong> deram início à marca como
                    cervejaria cigana, que hoje já contabiliza mais de{' '}
                    <strong className="text-bone">180 lançamentos</strong> e é reconhecida
                    internacionalmente, exportando para{' '}
                    <strong className="text-bone">Holanda e China</strong>.
                  </p>
                  <p>
                    No aplicativo cervejeiro Untappd ocuparam simultaneamente as{' '}
                    <strong className="text-bone">5 primeiras colocações no ranking de TOP IPA&apos;s</strong>.
                  </p>
                  <p>
                    Em 2021 deram início ao{' '}
                    <strong className="text-bone">Crowdfunding para construção da fábrica própria</strong>{' '}
                    no Mercado Municipal de Santos (SP), iniciativa que é parte do projeto de
                    revitalização do mesmo. O financiamento coletivo foi um sucesso e deu origem ao{' '}
                    <strong className="text-bone">Everclub</strong>, um clube cervejeiro com benefícios
                    e vantagens exclusivas para os participantes.
                  </p>
                  <p>
                    A inauguração da fábrica representou um marco para a Everbrew e para a cidade de
                    Santos, garantindo excelência no processo de produção com equipamentos de
                    tecnologias seguras e modernas.
                  </p>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-2 gap-px mt-10 border border-smoke">
                  {TIMELINE.map(({ year, label }) => (
                    <div key={year} className="bg-iron border border-smoke p-6">
                      <div className="font-display text-[2.5rem] text-fire leading-none mb-1">{year}</div>
                      <div className="text-[0.8rem] text-ash leading-[1.5]">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image + form */}
              <div className="space-y-6">
                <div className="relative h-[360px] border border-smoke overflow-hidden">
                  <img
                    src={`${CDN}/2021/05/fachada-everbrew-santos.jpg`}
                    alt="Fachada da Cervejaria Everbrew no Mercado Municipal de Santos"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-bone/60">
                      Mercado Municipal · Santos · SP
                    </p>
                  </div>
                </div>

                {/* Email signup */}
                <div className="bg-iron border border-smoke p-8">
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-fire mb-2">
                    → Visitações & Eventos
                  </p>
                  <p className="text-[0.85rem] text-ash mb-5 leading-[1.7]">
                    Cadastre-se para saber sobre visitações e eventos na nossa fábrica.
                  </p>
                  {submitted ? (
                    <div className="p-4 bg-hop/10 border border-hop/30">
                      <p className="font-display text-[1.3rem] text-hop">✓ CADASTRADO!</p>
                      <p className="text-[0.8rem] text-ash mt-1">Em breve você receberá as novidades.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="flex">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 bg-void border border-smoke border-r-0 text-bone font-body text-sm px-5 py-3.5 outline-none rounded-none placeholder:text-steel focus:border-ash transition-colors"
                          placeholder="seu@email.com"
                          required
                          autoComplete="email"
                          aria-label="Seu email para visitações"
                        />
                        <Button type="submit" variant="primary" size="sm" className="rounded-none whitespace-nowrap">
                          CADASTRAR →
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── A FÁBRICA ─────────────────────────────────────────── */}
        <section id="a-fabrica" className="section-padding border-b border-smoke">
          <div className="container-main">

            <div className="mb-12">
              <p className="eyebrow">A Nossa Casa</p>
              <h2
                className="font-display leading-[0.9] text-bone"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                CONFIRA COMO FICOU<br />
                <span className="text-fire">A FÁBRICA</span>
              </h2>
            </div>

            {/* Video + gallery grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-smoke">

              {/* YouTube video */}
              <div className="relative aspect-video bg-iron overflow-hidden group">
                <img
                  src={`${CDN}/2022/01/video-fabrica.jpg`}
                  alt="Thumbnail do vídeo tour pela Fábrica Everbrew"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-void/50 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(fabricaItems, 0)}
                    className="w-20 h-20 bg-fire/90 hover:bg-fire flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Assistir vídeo tour pela Fábrica Everbrew"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-bone/70">▶ Tour pela Fábrica</p>
                </div>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-3 gap-px">
                {FABRICA_PHOTOS.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(fabricaItems, i + 1)}
                    className="relative bg-iron overflow-hidden group cursor-zoom-in focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fire"
                    style={{ aspectRatio: '1' }}
                    aria-label={`Ver foto: ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={clsx(
                      'absolute inset-0 flex items-center justify-center',
                      'bg-void/20 group-hover:bg-void/50 transition-all duration-300'
                    )}>
                      <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── EVERPUB ───────────────────────────────────────────── */}
        <section id="everpub" className="section-padding bg-carbon border-b border-smoke">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

              {/* Gallery */}
              <div className="grid grid-cols-2 gap-px border border-smoke">
                {/* Feature */}
                <button
                  onClick={() => openLightbox(everpubItems, 0)}
                  className="col-span-2 relative overflow-hidden group cursor-zoom-in focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fire"
                  style={{ height: '300px' }}
                  aria-label={`Ver foto: ${EVERPUB_PHOTOS[0].alt}`}
                >
                  <img
                    src={EVERPUB_PHOTOS[0].src}
                    alt={EVERPUB_PHOTOS[0].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent group-hover:from-void/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-8 h-8 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </button>
                {/* Thumbnails */}
                {EVERPUB_PHOTOS.slice(1).map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(everpubItems, i + 1)}
                    className="relative overflow-hidden group cursor-zoom-in focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fire"
                    style={{ height: '150px' }}
                    aria-label={`Ver foto: ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={clsx(
                      'absolute inset-0 flex items-center justify-center',
                      'bg-void/20 group-hover:bg-void/50 transition-all duration-300'
                    )}>
                      <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div>
                <p className="eyebrow">Santos/SP · 2018</p>
                <h2
                  className="font-display leading-[0.9] text-bone mb-8"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  EVER<span className="text-fire">PUB</span>
                </h2>
                <div className="space-y-5 text-[0.95rem] text-ash leading-[1.8]">
                  <p>
                    Inaugurado em 2018 em Santos/SP, o EverPub surgiu como um espaço destinado à
                    criação e testes de lotes exclusivos. Hoje, após a construção da fábrica, o Pub
                    recebe visitantes que podem apreciar{' '}
                    <strong className="text-bone">cervejas e chopes</strong>, com{' '}
                    <strong className="text-bone">música ao vivo</strong> e um cardápio recheado
                    de opções que harmonizam e tornam a experiência ainda mais marcante.
                  </p>
                </div>

                {/* Address */}
                <div className="mt-10 p-6 bg-iron border border-smoke">
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-fire mb-3">
                    → Onde ficamos
                  </p>
                  <address className="not-italic text-[0.9rem] text-bone leading-[2]">
                    Av Siqueira Campos – 351<br />
                    Santos – São Paulo<br />
                    <span className="font-mono text-[0.75rem] text-ash">CEP 11045-201</span>
                  </address>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Av+Siqueira+Campos+351+Santos+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body font-semibold text-[0.875rem] tracking-[0.12em] uppercase px-8 py-[14px] bg-fire text-white hover:bg-ember hover:-translate-y-px transition-all duration-200"
                  >
                    VER NO MAPA →
                  </a>
                  <LinkButton href="/cervejas" variant="secondary">
                    VER CERVEJAS
                  </LinkButton>
                </div>

                {/* Socials */}
                <div className="mt-8 pt-6 border-t border-smoke flex items-center flex-wrap gap-5">
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ash">Siga →</span>
                  {[
                    { href: 'https://www.instagram.com/cervejariaeverbrew/', label: 'Instagram' },
                    { href: 'https://www.facebook.com/cervejariaeverbrew/', label: 'Facebook' },
                    { href: 'https://untappd.com/CervejariaEverBrew/beer', label: 'Untappd' },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.75rem] tracking-widest uppercase text-ash hover:text-bone transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────── */}
        <section className="section-padding border-b border-smoke relative overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute font-display text-[20vw] text-iron whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
          >
            EVER
          </span>
          <div className="container-main relative text-center">
            <p className="eyebrow justify-center">Nossa Essência</p>
            <h2
              className="font-display leading-[0.88] text-bone"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              CERVEJAS EXTREMAS EM<br />
              <span className="text-fire">QUALIDADE E SABOR</span>
            </h2>
            <p className="text-[0.95rem] text-ash mt-6 max-w-lg mx-auto leading-[1.8]">
              Conheça a linha completa de rótulos Everbrew e descubra por qual das nossas
              cervejas você vai se apaixonar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <LinkButton href="/cervejas" variant="primary" size="lg">
                VER TODAS AS CERVEJAS →
              </LinkButton>
              <LinkButton href="/everclub" variant="secondary" size="lg">
                CONHECER O EVERCLUB
              </LinkButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
