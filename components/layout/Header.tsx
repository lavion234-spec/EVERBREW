'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import { useCartStore } from '@/lib/store/cart'

const NAV_LINKS = [
  { label: 'Cervejas',      href: '/cervejas' },
  { label: 'Loja',          href: '/loja' },
  { label: '◆ EverClub',   href: '/everclub',       isClub: true },
  { label: 'EverCoins',     href: '/everclub#planos' },
  { label: 'EverGroup',     href: '/evergroup' },
  { label: 'Institucional', href: '/institucional' },
] as const

export function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const cartCount  = useCartStore((s) => s.count())
  const toggleCart = useCartStore((s) => s.toggleCart)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-[100] h-[72px] md:h-[72px]',
          'flex items-center transition-all duration-300',
          scrolled && 'bg-void/92 backdrop-blur-nav border-b border-smoke'
        )}
      >
        <div className="container-main flex items-center justify-between w-full">

          {/* Logo */}
          <Link href="/" className="font-display text-[1.8rem] tracking-[0.1em] text-bone hover:text-fire transition-colors">
            EVER<span className="text-fire">BREW</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-[0.8rem] font-semibold tracking-[0.12em] uppercase',
                  'relative transition-colors duration-200',
                  'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px',
                  'after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200',
                  ('isClub' in link && link.isClub)
                    ? 'text-gold-light after:bg-gold-light'
                    : 'text-ash hover:text-bone after:bg-fire'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative w-[38px] h-[38px] flex items-center justify-center text-ash hover:text-bone border border-transparent hover:border-smoke rounded-none transition-all duration-200"
              aria-label={`Carrinho — ${cartCount} item(s)`}
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-fire text-white text-[0.6rem] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              href="/everclub"
              className="hidden md:inline-block text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-ash px-4 py-2 border border-smoke hover:border-steel hover:text-bone transition-all duration-200"
            >
              Entrar
            </Link>

            {/* Hamburger */}
            <button
              className="flex md:hidden flex-col gap-[5px] p-1.5"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="block w-[22px] h-[1.5px] bg-bone transition-all" />
              <span className="block w-[22px] h-[1.5px] bg-bone transition-all" />
              <span className="block w-[22px] h-[1.5px] bg-bone transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-[200] transition-all duration-300',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={clsx(
            'absolute inset-0 bg-void/80 transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <nav
          className={clsx(
            'absolute top-0 right-0 bottom-0 w-[320px]',
            'bg-carbon border-l border-smoke',
            'flex flex-col p-6 overflow-y-auto',
            'transition-transform duration-400 ease-smooth',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          aria-label="Menu mobile"
        >
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-smoke">
            <span className="font-display text-[1.5rem] tracking-[0.1em]">
              EVER<span className="text-fire">BREW</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-ash hover:text-bone text-xl w-[38px] h-[38px] flex items-center justify-center"
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  'font-display text-[2rem] tracking-[0.04em] py-3 border-b border-smoke transition-colors',
                  ('isClub' in link && link.isClub) ? 'text-gold-light' : 'text-ash hover:text-bone'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <Link
              href="/everclub"
              onClick={() => setMenuOpen(false)}
              className="btn-gold w-full text-center flex items-center justify-center px-6 py-4 font-semibold tracking-widest uppercase text-sm"
            >
              ENTRAR NO EVERCLUB ◆
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}
