'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { clsx } from 'clsx'

const CDN = 'https://www.everbrew.com.br/wp-content/uploads'

const WA_LINK = 'https://wa.me/5513997034189?text=Quero%20entrar%20no%20EverGroup!'

const BENEFITS = [
  {
    img:     `${CDN}/2023/11/lancamento-em-primeira-mao.jpg`,
    title:   'Lançamentos em Primeira Mão',
    desc:    'Fique sabendo antes de todo mundo quando um novo rótulo chega. Seja o primeiro a garantir o que sai da fábrica.',
    tag:     'Exclusivo',
  },
  {
    img:     `${CDN}/2023/11/caveira-conteudos-exclusivos.jpg`,
    title:   'Conteúdos Exclusivos',
    desc:    'O que é terpeno? Diferenças entre lúpulos, IBU, ABV, harmonização — tudo explicado direto pela equipe Everbrew.',
    tag:     'Educação',
  },
  {
    img:     `${CDN}/2023/11/agenda-do-pub.jpg`,
    title:   'Agenda do EverPub',
    desc:    'Shows, tap takeovers, degustações e eventos especiais. Você fica sabendo antes que a divulgação saia nas redes.',
    tag:     'Eventos',
  },
  {
    img:     `${CDN}/2023/11/caveira-reposicao-rotulos-prateleiras.jpg`,
    title:   'Promoções Exclusivas',
    desc:    'Descontos e ofertas que nunca aparecem no site público. Disponíveis só para os membros do grupo.',
    tag:     'Ofertas',
  },
  {
    img:     `${CDN}/2023/11/conteudos-sobre-cerveja.jpg`,
    title:   'Conteúdo sobre Cerveja',
    desc:    'Como servir corretamente, estilos, temperatura ideal, harmonização com comida. Aprenda com quem faz.',
    tag:     'Cultura',
  },
  {
    img:     `${CDN}/2023/11/caveira-agenda-de-eventos-brasil.jpg`,
    title:   'Agenda de Eventos no Brasil',
    desc:    'Festivais de cerveja artesanal, feiras e encontros pelo Brasil. Curadoria feita pela equipe Everbrew.',
    tag:     'Agenda',
  },
]

const RULES = [
  'O grupo é somente de transmissão — mensagens dos participantes ficam bloqueadas para manter a ordem.',
  'É estritamente proibido enviar mensagens de cunho sexual, religioso, político ou de ódio.',
  'Proibida a divulgação de outros produtos, serviços ou vendas de qualquer natureza.',
  'Violações resultam em exclusão e bloqueio imediato do grupo.',
  'Existe apenas UM grupo oficial da Cervejaria Everbrew, administrado pelo número (13) 99703-4189.',
  'Você é livre para entrar e sair quando desejar.',
]

/* ── BenefitCard ─────────────────────────────────────────── */
function BenefitCard({ img, title, desc, tag }: typeof BENEFITS[0]) {
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
            hovered ? 'scale-110' : 'scale-100'
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

/* ── RulesAccordion ──────────────────────────────────────── */
function RulesAccordion() {
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
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="px-8 pb-6 space-y-3">
          {RULES.map((rule, i) => (
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

/* ── Page ────────────────────────────────────────────────── */
export default function EverGroupPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-smoke bg-carbon">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-void/30" />

          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 font-display leading-none text-white/[0.04] select-none flex items-center"
            style={{ fontSize: '18vw' }}
          >
            GROUP
          </span>
          <div className="container-main relative">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  {/* WhatsApp icon */}
                  <div className="w-8 h-8 bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <p className="text-[0.7rem] font-mono uppercase tracking-widest text-ash">
                    Grupo Oficial de WhatsApp
                  </p>
                </div>

                <h1
                  className="font-display text-bone leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
                >
                  EVER<span className="text-fire">GROUP</span>
                </h1>

                <p className="text-ash mt-5 max-w-md leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
                  O grupo de WhatsApp oficial da Cervejaria Everbrew. Lançamentos, promoções exclusivas,
                  conteúdo sobre cerveja e a agenda do EverPub — direto no seu celular.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold text-[0.875rem] uppercase tracking-[0.15em] hover:brightness-110 transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Entrar no Grupo
                  </a>
                  <a
                    href="#conteudo"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-smoke text-ash hover:text-bone hover:border-steel text-[0.875rem] font-semibold uppercase tracking-[0.15em] transition-all"
                  >
                    Ver Conteúdo
                  </a>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mt-12">
                  {[
                    ['Gratuito', 'Sem custo'],
                    ['1 Grupo', '100% Oficial'],
                    ['WhatsApp', 'Acesso direto'],
                  ].map(([val, lab]) => (
                    <div key={lab}>
                      <p className="font-display text-[1.6rem] text-fire leading-none">{val}</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-ash mt-1">{lab}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </section>

        {/* ── Sr. Caveira ──────────────────────────────── */}
        <section className="relative overflow-hidden bg-carbon border-b border-smoke py-20">
          {/* bg text decoration */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute inset-y-0 left-0 font-display leading-none text-white/[0.025] flex items-center"
            style={{ fontSize: '16vw' }}
          >
            SR.
          </span>

          <div className="container-main relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">

              {/* Left — beer cans */}
              <div className="hidden lg:flex items-end justify-end gap-3 h-64">
                {[
                  `${CDN}/2022/01/EVEBREW.evermaine.png`,
                  `${CDN}/2022/08/EVERBREW.outofcontrol-e1659708641365.png`,
                  `${CDN}/2022/02/EVEBREW.evermont-e1644252181921.png`,
                ].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="object-contain drop-shadow-2xl"
                    style={{
                      height: `${[200, 240, 200][i]}px`,
                      transform: `rotate(${[-8, 0, 6][i]}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* Center — mascot + text */}
              <div className="flex flex-col items-center text-center gap-6 lg:px-8">
                <img
                  src={`${CDN}/2023/11/caveira-bracos-cruzados.png`}
                  alt="Sr. Caveira — mascote Everbrew"
                  className="w-36 lg:w-44 object-contain drop-shadow-[0_0_30px_rgba(255,69,0,0.3)]"
                />
                <div>
                  <p className="eyebrow mb-2">Nosso porta-voz</p>
                  <h2 className="font-display text-bone leading-none mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                    CONHEÇA O<br />
                    <span className="text-fire">SR. CAVEIRA</span>
                  </h2>
                  <p className="text-ash text-[0.88rem] leading-relaxed max-w-xs mx-auto">
                    Nosso porta-voz <span className="text-bone font-semibold">Sr. Caveira</span> vai
                    trazer todas as informações do que anda acontecendo no mundo cervejeiro da Everbrew,
                    e mais muita informação bacana sobre a Cerveja em si.
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold text-[0.8rem] uppercase tracking-[0.15em] hover:brightness-110 transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Seguir o Sr. Caveira
                </a>
              </div>

              {/* Right — beer cans */}
              <div className="hidden lg:flex items-end justify-start gap-3 h-64">
                {[
                  `${CDN}/2023/09/evertreze-ipa-lata.png`,
                  `${CDN}/2023/10/everbrew-tropicalizer-beam-lata-473ml.png`,
                  `${CDN}/2023/09/evertreze-sessionipa-lata.png`,
                ].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="object-contain drop-shadow-2xl"
                    style={{
                      height: `${[200, 240, 200][i]}px`,
                      transform: `rotate(${[-6, 0, 8][i]}deg)`,
                    }}
                  />
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────── */}
        <section id="conteudo" className="section-padding bg-void border-b border-smoke">
          <div className="container-main">
            <div className="mb-14">
              <p className="eyebrow mb-3">O que você recebe</p>
              <h2
                className="font-display text-bone leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                CONTEÚDO<br />
                <span className="text-fire">EXCLUSIVO</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map((b) => (
                <BenefitCard key={b.title} {...b} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Curiosidades e Informação ────────────── */}
        <section className="border-b border-smoke overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            {/* Left — illustration */}
            <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden bg-carbon" />
            {/* Right — content */}
            <div className="bg-bone text-void flex flex-col justify-center px-10 py-16 lg:px-16">
              <h2
                className="font-display leading-tight mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#7CB518' }}
              >
                CURIOSIDADES E INFORMAÇÃO!
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'O que é terpeno?',
                  'Qual a diferença dos lúpulos?',
                  'E o IBU e AVB – o que indicam?',
                  'Como harmonizar cada cerveja?',
                  'Como servi-la de forma correta?',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-void font-medium text-[0.95rem]">
                    <span className="shrink-0 mt-0.5" style={{ color: '#7CB518' }}>—</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-[0.82rem] text-void/60 leading-relaxed">
                Todas essas respostas e muito mais você também receberá no grupo, porque nós
                queremos que nossos clientes conheçam tanto de cerveja quanto nós, e extraiam
                delas a melhor e mais completa experiência que podem proporcionar.
              </p>
            </div>
          </div>
        </section>

        {/* ── How it Works ─────────────────────────────── */}
        <section className="section-padding bg-carbon border-b border-smoke">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Mascot */}
              <div className="flex items-center justify-center">
                <img
                  src={`${CDN}/2023/11/caveira-bracos-cruzados.png`}
                  alt="Mascote Everbrew"
                  className="w-72 lg:w-full max-w-sm object-contain drop-shadow-2xl"
                />
              </div>

              {/* Steps */}
              <div>
                <p className="eyebrow mb-3">Como funciona</p>
                <h2
                  className="font-display text-bone leading-none mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  SIMPLES<br />ASSIM
                </h2>
                <div className="space-y-4">
                  {[
                    { n: '01', t: 'Clique em Entrar no Grupo',            d: 'Você será redirecionado para o WhatsApp com link direto para o grupo oficial.' },
                    { n: '02', t: 'Solicite a entrada',                    d: 'No WhatsApp, confirme a entrada. A aprovação é automática.' },
                    { n: '03', t: 'Receba conteúdo exclusivo',             d: 'Lançamentos, promoções e conteúdo cervejeiro diretamente no seu celular.' },
                    { n: '04', t: 'Aproveite os benefícios',               d: 'Acesse promoções que nunca aparecem no site e ingressos antecipados para eventos.' },
                  ].map(({ n, t, d }) => (
                    <div key={n} className="flex gap-5 p-5 border border-smoke bg-iron hover:border-fire/40 transition-colors group">
                      <span className="font-mono text-[0.7rem] tracking-widest text-fire shrink-0 mt-0.5">{n}</span>
                      <div>
                        <p className="text-bone font-semibold text-[0.9rem] group-hover:text-fire transition-colors">{t}</p>
                        <p className="text-ash text-[0.8rem] mt-1 leading-relaxed">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Regras do Grupo ───────────────────────── */}
        <section className="border-b border-smoke overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
            {/* Left — content */}
            <div className="bg-void flex flex-col justify-center px-10 py-16 lg:px-16">
              <h2
                className="font-display leading-tight mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#7CB518' }}
              >
                REGRAS DO GRUPO:
              </h2>
              <div className="space-y-4 text-ash text-[0.85rem] leading-relaxed">
                <p>
                  O grupo tem o intuito de levar informações sobre a Everbrew e sobre a Cerveja da
                  Everbrew para nossos clientes e todos os demais interessados, com isso, o envio de
                  mensagens por parte dos participantes são bloqueadas, em virtude de mantermos a
                  ordem no grupo.
                </p>
                <p>
                  Caso, eventualmente, o envio de mensagens sejam abertas aos clientes, são
                  estritamente proibidas mensagens de cunho sexual, religioso, político, de divulgação
                  de outros serviços/produtos, que disseminem ódio e preconceito e venda de quaisquer
                  objetos.
                </p>
                <p>
                  Em situação onde mensagens desse tipo sejam enviadas o usuário será prontamente
                  excluído e bloqueado, ficando impossibilitado de voltar ao grupo.
                </p>
              </div>
              <p className="mt-6 text-[0.75rem] font-mono text-smoke">
                Encontrou um grupo falso?{' '}
                <a
                  href="https://wa.me/5513997034189?text=Quero%20denunciar%20grupo%20falso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fire hover:underline"
                >
                  Denuncie aqui →
                </a>
              </p>
            </div>
            {/* Right — illustration */}
            <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden bg-carbon" />
          </div>
        </section>

        {/* ── CTA Final ────────────────────────────────── */}
        <section className="section-padding bg-carbon overflow-hidden relative">

          <div className="container-main relative text-center">
            <p className="eyebrow mb-4">É grátis</p>
            <h2
              className="font-display text-bone leading-none mb-5"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              ENTRA NO<br />
              <span className="text-fire">GRUPO</span>
            </h2>
            <p className="text-ash text-[0.9rem] max-w-sm mx-auto mb-10 leading-relaxed">
              Acesso gratuito. Saia quando quiser. Sem spam — só conteúdo que vale a pena.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold text-[0.875rem] uppercase tracking-[0.2em] hover:brightness-110 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Entrar no EverGroup
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-[0.72rem] font-mono text-smoke">
              <span>✓ Totalmente gratuito</span>
              <span>✓ Sem spam</span>
              <span>✓ Saia quando quiser</span>
              <span>✓ 100% oficial</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
