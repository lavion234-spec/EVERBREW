'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

export function AgeGate() {
  const [visible, setVisible] = useState(false)
  const [denied, setDenied] = useState(false)

  useEffect(() => {
    const confirmed = sessionStorage.getItem('eb_age_ok')
    if (!confirmed) setVisible(true)
  }, [])

  function confirmAge() {
    sessionStorage.setItem('eb_age_ok', '1')
    setVisible(false)
  }

  function denyAge() {
    setDenied(true)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-void"
      role="dialog"
      aria-modal
      aria-label="Verificação de idade"
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Background decorative text */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-display text-[40vw] leading-none text-white/[0.02] whitespace-nowrap"
      >
        18+
      </span>

      <div className="relative text-center px-6 max-w-md w-full">
        {/* Logo */}
        <div className="mb-8">
          <span className="font-display text-[2.5rem] tracking-wider text-bone">
            EVER<span className="text-fire">BREW</span>
          </span>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-ash mt-1">
            Bones For Life
          </p>
        </div>

        {denied ? (
          <>
            <h2 className="font-display text-[2rem] text-bone mb-3">
              ATÉ A PRÓXIMA.
            </h2>
            <p className="text-ash text-sm">
              Nosso conteúdo é restrito a maiores de 18 anos.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-display text-[2.5rem] leading-none text-bone mb-2">
              VOCÊ TEM<br />18 ANOS<br />OU MAIS?
            </h2>
            <p className="text-ash text-[0.8rem] mb-8">
              Apenas maiores de 18 anos podem acessar este site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={confirmAge} variant="primary" size="lg" full>
                SIM, TENHO 18+
              </Button>
              <Button onClick={denyAge} variant="secondary" size="lg" full>
                NÃO
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
