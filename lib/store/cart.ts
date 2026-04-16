'use client'

import { create } from 'zustand'
import type { CartItem } from '@/types'

interface CartState {
  items:    CartItem[]
  isOpen:   boolean
  addItem:  (item: Omit<CartItem, 'qty'>) => void
  removeItem: (productId: string) => void
  updateQty: (productId: string, qty: number) => void
  clearCart: () => void
  toggleCart: () => void
  total:    () => number
  count:    () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items:  [],
  isOpen: false,

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.productId === item.productId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return { items: [...state.items, { ...item, qty: 1 }] }
    })
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    }))
  },

  updateQty: (productId, qty) => {
    if (qty <= 0) {
      get().removeItem(productId)
      return
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === productId ? { ...i, qty } : i
      ),
    }))
  },

  clearCart: () => set({ items: [] }),

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  total: () =>
    get().items.reduce((acc, item) => acc + item.price * item.qty, 0),

  count: () =>
    get().items.reduce((acc, item) => acc + item.qty, 0),
}))
