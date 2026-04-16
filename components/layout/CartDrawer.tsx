'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import { clsx } from 'clsx'

export function CartDrawer() {
  const items      = useCartStore((s) => s.items)
  const isOpen     = useCartStore((s) => s.isOpen)
  const toggleCart = useCartStore((s) => s.toggleCart)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQty  = useCartStore((s) => s.updateQty)
  const total      = items.reduce((acc, i) => acc + i.price * i.qty, 0)

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[300] transition-all duration-300',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div
        className={clsx(
          'absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={toggleCart}
      />

      {/* Drawer panel */}
      <aside
        className={clsx(
          'absolute top-0 right-0 bottom-0 w-full max-w-[420px]',
          'bg-carbon border-l border-smoke',
          'flex flex-col',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Carrinho de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-smoke shrink-0">
          <h2 className="font-display text-xl tracking-[0.12em] text-bone uppercase">
            Carrinho
            {items.length > 0 && (
              <span className="ml-2 text-fire">({items.length})</span>
            )}
          </h2>
          <button
            onClick={toggleCart}
            className="w-9 h-9 flex items-center justify-center text-ash hover:text-bone border border-transparent hover:border-smoke transition-all"
            aria-label="Fechar carrinho"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 px-8 text-center">
            <svg
              width="52" height="52" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1" className="text-smoke"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <p className="text-ash text-sm font-body">Seu carrinho está vazio.</p>
            <button
              onClick={toggleCart}
              className="text-fire text-[0.75rem] font-semibold uppercase tracking-[0.12em] hover:underline"
            >
              Continuar Comprando →
            </button>
          </div>
        ) : (
          /* Items list */
          <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.map((item) => (
              <li
                key={item.productId}
                className="flex gap-4 pb-4 border-b border-smoke/60 last:border-0"
              >
                {/* Thumbnail */}
                <div className="w-[72px] h-[72px] shrink-0 bg-iron border border-smoke overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-bone text-[0.85rem] font-semibold leading-tight line-clamp-2">
                      {item.name}
                    </p>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-ash hover:text-fire transition-colors shrink-0 mt-0.5"
                      aria-label={`Remover ${item.name}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Qty controls */}
                    <div className="flex items-center border border-smoke">
                      <button
                        onClick={() => updateQty(item.productId, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center text-ash hover:text-bone hover:bg-iron transition-all text-sm"
                        aria-label="Diminuir quantidade"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-bone text-sm font-mono">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.productId, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center text-ash hover:text-bone hover:bg-iron transition-all text-sm"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-fire font-semibold text-[0.9rem]">
                      R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-smoke space-y-4 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-ash">
                Subtotal
              </span>
              <span className="font-bold text-xl text-bone">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-smoke text-[0.72rem] font-mono">
              Frete e desconto calculados na finalização.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={toggleCart}
                className="py-3 px-4 border border-smoke text-ash hover:text-bone hover:border-steel text-[0.75rem] font-semibold uppercase tracking-[0.1em] transition-all"
              >
                Continuar
              </button>
              <Link
                href="/checkout"
                onClick={toggleCart}
                className="py-3 px-4 bg-fire text-white hover:bg-ember text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-center transition-all"
              >
                Finalizar Compra
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
