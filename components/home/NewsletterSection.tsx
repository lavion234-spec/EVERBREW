'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: integrate with Klaviyo or email provider
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="section-padding border-b border-smoke">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div>
            <h2
              className="font-display leading-none text-bone"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              SEJA O<br />PRIMEIRO.<br /><span className="text-fire">SEMPRE.</span>
            </h2>
            <p className="text-[0.9rem] text-ash mt-4">
              Novos lotes, drops exclusivos e ofertas para membros direto no seu email.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="p-6 bg-iron border border-smoke">
                <p className="font-display text-[1.5rem] text-hop">✓ VOCÊ ESTÁ NA LISTA</p>
                <p className="text-[0.85rem] text-ash mt-2">
                  Em breve você receberá as novidades em primeira mão.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex">
                  <input
                    type="email"
                    className="flex-1 bg-iron border border-smoke border-r-0 text-bone font-body text-sm px-6 py-4 outline-none rounded-none placeholder:text-steel focus:border-ash transition-colors"
                    placeholder="seu@email.com"
                    required
                    autoComplete="email"
                    aria-label="Seu email"
                  />
                  <Button type="submit" variant="primary" className="rounded-none">
                    ENTRAR →
                  </Button>
                </div>
                <p className="text-[0.7rem] text-steel mt-3">
                  Sem spam. Apenas o que realmente importa. Cancel when you want.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
