'use client'

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useCartStore } from '@/lib/store/cart'
import { clsx } from 'clsx'

// ── Types ────────────────────────────────────────────────────
interface FormFields {
  name:         string
  email:        string
  cpf:          string
  phone:        string
  cep:          string
  street:       string
  number:       string
  complement:   string
  neighborhood: string
  city:         string
  state:        string
}

const EMPTY_FORM: FormFields = {
  name: '', email: '', cpf: '', phone: '',
  cep: '', street: '', number: '',
  complement: '', neighborhood: '', city: '', state: '',
}

// ── Masks ────────────────────────────────────────────────────
function maskCPF(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}
function maskPhone(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
}
function maskCEP(v: string) {
  return v.replace(/\D/g, '').slice(0, 8)
    .replace(/(\d{5})(\d{1,3})$/, '$1-$2')
}

// ── Input style helper ───────────────────────────────────────
function inputCls(error?: string) {
  return clsx(
    'w-full bg-iron border px-4 py-3',
    'text-bone text-sm font-body placeholder:text-smoke',
    'focus:outline-none focus:ring-1 transition-all duration-200',
    error
      ? 'border-fire focus:ring-fire/40'
      : 'border-smoke hover:border-steel focus:border-steel focus:ring-steel/30'
  )
}

// ── Sub-components ───────────────────────────────────────────
function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <h3 className="font-display text-lg tracking-[0.15em] text-bone uppercase border-b border-smoke pb-2">
        {title}
      </h3>
      {children}
    </section>
  )
}

function FormField({
  label, error, className, children,
}: {
  label: string; error?: string; className?: string; children: React.ReactNode
}) {
  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label className="text-[0.72rem] font-mono uppercase tracking-widest text-ash">
        {label}
      </label>
      {children}
      {error && <p className="text-fire text-[0.7rem] font-mono">{error}</p>}
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────
export default function CheckoutPage() {
  const items     = useCartStore((s) => s.items)
  const clearCart = useCartStore((s) => s.clearCart)
  const total     = items.reduce((acc, i) => acc + i.price * i.qty, 0)

  const [form,       setForm]       = useState<FormFields>(EMPTY_FORM)
  const [errors,     setErrors]     = useState<Partial<FormFields>>({})
  const [cepLoading, setCepLoading] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)

  // Auto-fill address from CEP via ViaCEP
  useEffect(() => {
    const digits = form.cep.replace(/\D/g, '')
    if (digits.length !== 8) return
    setCepLoading(true)
    fetch(`https://viacep.com.br/ws/${digits}/json/`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.erro) {
          setForm((f) => ({
            ...f,
            street:       data.logradouro || f.street,
            neighborhood: data.bairro     || f.neighborhood,
            city:         data.localidade || f.city,
            state:        data.uf         || f.state,
          }))
        }
      })
      .catch(() => {})
      .finally(() => setCepLoading(false))
  }, [form.cep])

  function setField(key: keyof FormFields, raw: string) {
    let v = raw
    if (key === 'cpf')   v = maskCPF(raw)
    if (key === 'phone') v = maskPhone(raw)
    if (key === 'cep')   v = maskCEP(raw)
    setForm((f) => ({ ...f, [key]: v }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function input(key: keyof FormFields) {
    return {
      value: form[key],
      onChange: (e: ChangeEvent<HTMLInputElement>) => setField(key, e.target.value),
    }
  }

  function validate(): boolean {
    const e: Partial<FormFields> = {}
    if (!form.name.trim())                                    e.name  = 'Nome obrigatório'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))     e.email = 'E-mail inválido'
    if (form.cpf.replace(/\D/g, '').length !== 11)           e.cpf   = 'CPF inválido'
    if (form.phone.replace(/\D/g, '').length < 10)           e.phone = 'Telefone inválido'
    if (form.cep.replace(/\D/g, '').length !== 8)            e.cep   = 'CEP inválido'
    if (!form.street.trim())                                  e.street = 'Endereço obrigatório'
    if (!form.number.trim())                                  e.number = 'Número obrigatório'
    if (!form.city.trim())                                    e.city   = 'Cidade obrigatória'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    // TODO: integrar gateway de pagamento (Stripe / Mercado Pago)
    clearCart()
    setSubmitted(true)
  }

  // ── Empty cart ─────────────────────────────────────────────
  if (items.length === 0 && !submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center gap-5 px-4">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-smoke">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <p className="text-ash font-body text-sm">Seu carrinho está vazio.</p>
          <Link
            href="/loja"
            className="py-3 px-8 bg-fire text-white hover:bg-ember text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-all"
          >
            Ir para a Loja
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  // ── Success ────────────────────────────────────────────────
  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-md">
            <div className="w-16 h-16 mx-auto border border-fire flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="font-display text-4xl md:text-5xl tracking-widest text-bone">
              PEDIDO RECEBIDO
            </h1>
            <p className="text-ash text-sm leading-relaxed">
              Obrigado, <span className="text-bone font-semibold">{form.name.split(' ')[0]}</span>!{' '}
              Você receberá um e-mail de confirmação em breve no endereço{' '}
              <span className="text-bone">{form.email}</span>.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 py-3 px-8 bg-fire text-white hover:bg-ember text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-all"
            >
              Voltar ao Início
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // ── Checkout form ──────────────────────────────────────────
  return (
    <>
      <Header />
      <main className="bg-void min-h-screen pt-24 pb-20">
        <div className="container-main">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[0.7rem] font-mono uppercase tracking-widest text-ash mb-8">
            <Link href="/" className="hover:text-bone transition-colors">Home</Link>
            <span className="text-smoke">›</span>
            <Link href="/loja" className="hover:text-bone transition-colors">Loja</Link>
            <span className="text-smoke">›</span>
            <span className="text-bone">Checkout</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl tracking-widest text-bone mb-10">
            FINALIZAÇÃO
          </h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">

              {/* ── Form ──────────────────────────────────── */}
              <div className="space-y-10">

                {/* 01 — Dados Pessoais */}
                <FormSection title="01 — Dados Pessoais">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Nome completo" error={errors.name} className="sm:col-span-2">
                      <input
                        type="text"
                        placeholder="João Silva"
                        autoComplete="name"
                        {...input('name')}
                        className={inputCls(errors.name)}
                      />
                    </FormField>
                    <FormField label="E-mail" error={errors.email}>
                      <input
                        type="email"
                        placeholder="joao@email.com"
                        autoComplete="email"
                        {...input('email')}
                        className={inputCls(errors.email)}
                      />
                    </FormField>
                    <FormField label="CPF" error={errors.cpf}>
                      <input
                        type="text"
                        placeholder="000.000.000-00"
                        inputMode="numeric"
                        {...input('cpf')}
                        className={inputCls(errors.cpf)}
                      />
                    </FormField>
                    <FormField label="Telefone / WhatsApp" error={errors.phone} className="sm:col-span-2">
                      <input
                        type="tel"
                        placeholder="(13) 99999-9999"
                        autoComplete="tel"
                        {...input('phone')}
                        className={inputCls(errors.phone)}
                      />
                    </FormField>
                  </div>
                </FormSection>

                {/* 02 — Endereço */}
                <FormSection title="02 — Endereço de Entrega">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="CEP" error={errors.cep}>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="00000-000"
                          inputMode="numeric"
                          {...input('cep')}
                          className={inputCls(errors.cep)}
                        />
                        {cepLoading && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-fire text-[0.7rem] font-mono animate-pulse">
                            buscando...
                          </span>
                        )}
                      </div>
                    </FormField>
                    <FormField label="Estado" error={errors.state}>
                      <input
                        type="text"
                        placeholder="SP"
                        maxLength={2}
                        {...input('state')}
                        className={inputCls(errors.state)}
                      />
                    </FormField>
                    <FormField label="Endereço" error={errors.street} className="sm:col-span-2">
                      <input
                        type="text"
                        placeholder="Rua, Avenida..."
                        autoComplete="street-address"
                        {...input('street')}
                        className={inputCls(errors.street)}
                      />
                    </FormField>
                    <FormField label="Número" error={errors.number}>
                      <input
                        type="text"
                        placeholder="123"
                        {...input('number')}
                        className={inputCls(errors.number)}
                      />
                    </FormField>
                    <FormField label="Complemento">
                      <input
                        type="text"
                        placeholder="Apto, bloco, casa..."
                        {...input('complement')}
                        className={inputCls()}
                      />
                    </FormField>
                    <FormField label="Bairro">
                      <input
                        type="text"
                        placeholder="Centro"
                        {...input('neighborhood')}
                        className={inputCls()}
                      />
                    </FormField>
                    <FormField label="Cidade" error={errors.city}>
                      <input
                        type="text"
                        placeholder="Santos"
                        {...input('city')}
                        className={inputCls(errors.city)}
                      />
                    </FormField>
                  </div>
                </FormSection>

                {/* 03 — Pagamento (placeholder) */}
                <FormSection title="03 — Pagamento">
                  <div className="border border-dashed border-smoke/50 p-8 text-center space-y-4">
                    <div className="flex items-center justify-center gap-6 opacity-40">
                      {/* Cartão */}
                      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone">
                        <rect x="1" y="4" width="22" height="16" rx="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      {/* PIX */}
                      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone">
                        <path d="M12 3L21 12L12 21L3 12Z" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      {/* Boleto */}
                      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M6 8v8M9 8v8M13 8v8M16 8v4M19 8v4M16 15v1M19 15v1" />
                      </svg>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-bone text-[0.8rem] font-semibold uppercase tracking-[0.15em]">
                        Módulo de Pagamento
                      </p>
                      <p className="text-ash text-[0.78rem] font-mono">
                        Cartão de Crédito · PIX · Boleto
                      </p>
                      <p className="text-smoke text-[0.7rem] font-mono">
                        Integração com gateway sendo implementada
                      </p>
                    </div>
                  </div>
                </FormSection>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-fire text-white hover:bg-ember text-[0.875rem] font-semibold uppercase tracking-[0.15em] transition-all duration-200"
                >
                  Confirmar Pedido
                </button>
              </div>

              {/* ── Order Summary ──────────────────────────── */}
              <aside className="lg:sticky lg:top-28 space-y-5 bg-carbon border border-smoke p-6">
                <h2 className="font-display text-xl tracking-[0.12em] text-bone uppercase border-b border-smoke pb-3">
                  Resumo do Pedido
                </h2>

                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.productId} className="flex gap-3">
                      <div className="w-14 h-14 shrink-0 bg-iron border border-smoke overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-bone text-[0.82rem] font-semibold leading-tight line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-ash text-[0.75rem] font-mono mt-0.5">
                          {item.qty}×
                        </p>
                      </div>
                      <p className="text-fire font-semibold text-[0.85rem] shrink-0">
                        R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-smoke pt-4 space-y-2.5">
                  <div className="flex justify-between text-sm text-ash">
                    <span>Subtotal</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-sm text-ash">
                    <span>Frete</span>
                    <span className="text-smoke font-mono text-xs">A calcular</span>
                  </div>
                  <div className="flex justify-between text-bone font-bold text-lg pt-2 border-t border-smoke">
                    <span>Total</span>
                    <span className="text-fire">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <div className="bg-iron/40 border border-smoke/30 p-4 space-y-1">
                  <p className="text-[0.7rem] font-mono text-ash uppercase tracking-widest">
                    Compra Segura
                  </p>
                  <p className="text-[0.72rem] text-smoke font-body">
                    Dados protegidos com criptografia SSL/TLS.
                  </p>
                </div>
              </aside>

            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
