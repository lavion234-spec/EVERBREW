// Tipagem centralizada do Design System Everbrew

export type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost'
export type ButtonSize    = 'sm' | 'md' | 'lg'
export type BadgeVariant  = 'style' | 'new' | 'hop' | 'gold' | 'muted'

export interface Product {
  id:           string
  slug:         string
  name:         string
  style:        string
  abv:          number
  ibu:          number
  volume:       number  // ml
  imageUrl:     string
  description:  string
  priceClient:  number  // R$
  priceClub:    number  // EVC$
  cashbackPct:  number  // % cashback
  discountPct:  number  // % desconto club
  isNew?:       boolean
  isFeatured?:  boolean
  badges?:      BadgeVariant[]
  loteNumber?:  number
  inStock:      boolean
  stockQty?:    number
}

export interface Kit {
  id:          string
  slug:        string
  name:        string
  subtitle:    string
  description: string
  price?:      number
  ctaLabel:    string
  ctaHref:     string
  variant:     'primary' | 'secondary'
}

export interface CoinPlan {
  id:           string
  tier:         'bronze' | 'prata' | 'ouro' | 'platinum'
  tierLabel:    string
  investment:   number  // R$
  evcReturn:    number  // EVC$
  bonusPct:     number  // %
  installments: number
  isFeatured?:  boolean
}

export interface Review {
  id:       string
  author:   string
  platform: string
  rating:   number
  text:     string
  initials: string
  tier?:    string
}

export interface Souvenir {
  id:          string
  slug:        string
  name:        string
  subtitle:    string
  description: string
  tagline?:    string
  price:       number
  priceClub?:  number
  cashbackPct: number
  imageUrl:    string
  inStock:     boolean
  isNew?:      boolean
  hasVariants?: boolean   // produto variável (tamanho/cor) — abre link externo
  ctaUrl?:     string    // url produto externo para variantes
}

export interface CartItem {
  productId: string
  name:      string
  price:     number
  priceEvc?: number
  qty:       number
  imageUrl:  string
}
