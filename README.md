# 🍺 EVERBREW — Site Oficial

Site institucional e e-commerce da **Cervejaria Everbrew**, desenvolvido em Next.js 14 com exportação estática para GitHub Pages.

🔗 **Deploy:** [lavion234-spec.github.io/EVERBREW](https://lavion234-spec.github.io/EVERBREW/)

---

## Tecnologias

| Tech | Versão |
|---|---|
| Next.js | 14.2 |
| React | 18.3 |
| TypeScript | 5.4 |
| Tailwind CSS | 3.4 |
| Zustand | 4.5 |
| Framer Motion | 11 |

---

## Estrutura do Projeto

```
app/
├── page.tsx               # Homepage
├── cervejas/              # Catálogo de cervejas
├── checkout/              # Carrinho e checkout
├── everclub/              # Página do EverClub (membership)
├── evergroup/             # Página do EverGroup (WhatsApp)
├── evergroup/             # Página institucional
└── loja/                  # Loja completa

components/
├── home/                  # Seções da homepage
│   ├── HeroBannerCarousel.tsx
│   ├── EverclubSection.tsx    # EverClub + EverCoins
│   ├── ProductsSection.tsx
│   └── ...
├── layout/                # Header, Footer, CartDrawer, AgeGate
└── ui/                    # Button, ProductCard

lib/
├── data.ts                # Dados: produtos, planos EverCoins, reviews
└── store/cart.ts          # Estado global do carrinho (Zustand)

public/
└── coins/                 # Imagens das moedas EverCoins e heroes das páginas
```

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Homepage com hero carousel, produtos em destaque, EverClub e EverCoins |
| `/cervejas` | Catálogo com filtros por estilo e ABV |
| `/everclub` | Programa de membership com planos EverCoins |
| `/evergroup` | Grupo oficial de WhatsApp |
| `/institucional` | Sobre a cervejaria |
| `/loja` | Loja completa |
| `/checkout` | Carrinho e checkout |

---

## Rodando Localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificar tipos TypeScript
npm run type-check
```

---

## Deploy

O deploy é feito automaticamente via **GitHub Actions** ao fazer push para o branch `main`.

```bash
git add -A
git commit -m "sua mensagem"
git push origin main
```

> ⚠️ **Não** usar `npx gh-pages` manualmente — o workflow `.github/workflows/deploy.yml` reconstrói o projeto a partir do `main` e sobrescreve qualquer deploy manual.

O site estará disponível em ~2 minutos após o push.

---

## EverCoins

Sistema de moeda interna da cervejaria. 4 tiers com bônus progressivos:

| Tier | Investimento | Bônus | Parcelas |
|---|---|---|---|
| EverBronze | R$ 500 | +15% | 5x |
| EverPrata | R$ 1.000 | +20% | 5x |
| EverOuro | R$ 2.000 | +25% | 10x |
| EverPlatinum | R$ 5.000 | +30% | 10x |

---

## Identidade Visual

- **Fundo:** `#070707` (void)
- **Texto:** `#F5F0E8` (bone)
- **Destaque:** `#E8C547` (gold) / `#FF4D00` (fire)
- **Fontes:** Display condensada + mono
- **Estilo:** Dark, industrial, caveiras, hop-forward
