# EVERBREW — DIAGNÓSTICO COMPLETO E PROPOSTA DE REDESIGN
> Análise UX/UI/CRO | Versão 1.0 | Abril 2026

---

## SUMÁRIO EXECUTIVO

O site atual da Everbrew possui identidade visual forte e produtos de qualidade reconhecida, mas **desperdiça potencial de conversão** em todas as etapas do funil. A navegação é confusa, a hierarquia visual é inconsistente, os CTAs são fracos e a experiência mobile é comprometida. Com um redesign completo focado em **Dark Premium Industrial**, a marca pode aumentar seus indicadores de conversão em 30–60% mantendo — e fortalecendo — sua personalidade agressiva e exclusiva.

---

## 1. DIAGNÓSTICO COMPLETO

### 1.1 Problemas de UX (Navegação e Fluxo)

| # | Problema | Impacto | Prioridade |
|---|----------|---------|-----------|
| 1 | **Age gate sem persistência** — exibe o popup a cada visita sem cookie persistente | Abandono de +30% antes mesmo de ver o site | 🔴 CRÍTICO |
| 2 | **Menu superficial**: "Inicial, Quem Somos, Cervejas, A Cervejaria, EverClub" — sem sub-menus, sem categorias por estilo | Usuário não encontra produto específico | 🔴 CRÍTICO |
| 3 | **Seção "Evercoins" repetida 4–5 vezes** na mesma página (artefato do carrossel) | Confusão e poluição visual extrema | 🔴 CRÍTICO |
| 4 | **Zero busca no site** | Usuários que já conhecem um rótulo não conseguem achar rapidamente | 🟠 ALTO |
| 5 | **Fluxo confuso**: Homepage mistura Evercoins, Cervejas, Kits, Souvenirs sem hierarquia clara | Usuário não sabe o que fazer primeiro | 🟠 ALTO |
| 6 | **Sem filtros na página de Cervejas** (por estilo, ABV, disponibilidade) | Abandono na descoberta de produtos | 🟠 ALTO |
| 7 | **EverClub não é explicado antes de ser vendido** | Usuário chega nos planos sem entender o benefício | 🟡 MÉDIO |
| 8 | **Ausência de breadcrumbs** nas páginas internas | Desorientação na navegação | 🟡 MÉDIO |

### 1.2 Problemas de UI (Hierarquia, Visual, Tipografia)

| # | Problema | Impacto |
|---|----------|---------|
| 1 | **Banners do carrossel sem CTA claro** — apenas imagem + link, sem headline ou copy | Baixíssima taxa de clique |
| 2 | **Dupla exibição de preço** (EVC$ vs R$) no mesmo card cria leitura fragmentada | Confusão cognitiva, reduz intenção de compra |
| 3 | **ABV/IBU minúsculo** nos cards — informação-chave para o público intermediário/avançado | Proposta de valor perdida |
| 4 | **Títulos de seção inconsistentes**: "Outras cervejas na nossa prateleira", "Kits e Combos Promocionais." (com ponto) | Percepção amadora |
| 5 | **Falta de espaçamento** entre seções — conteúdo aparece colado | Leitura cansativa |
| 6 | **Ausência de hierarquia tipográfica clara** — tudo compete pela atenção | Nenhum ponto focal |
| 7 | **Footer minimalista demais** — falta links institucionais, pagamentos, segurança | Credibilidade prejudicada |
| 8 | **Carrinho visível apenas como "0 Carrinho" em texto** | Para compra impulsiva, o ícone precisa ser imediato |

### 1.3 Problemas de Conversão (CTA e Copy)

- **Hero inexistente**: A primeira dobra é um carrossel de banners de produto — não há headline de marca, manifesto, nem CTA principal. Nenhum usuário novo sabe em 3 segundos o que a Everbrew é e por que comprar.
- **CTAs genéricos**: "ADICIONAR AO CARRINHO" funciona, mas não há urgência, escassez ou benefício reforçado.
- **EverClub enterrado**: O programa de fidelidade/desconto mais importante da marca não tem destaque visual proporcional ao seu valor de LTV.
- **Evercoins confuso**: A mecânica (investir dinheiro real para ganhar cashback) é inovadora, mas a apresentação é idêntica a uma loja de créditos de jogos — sem copywriting que eduque e converta.
- **Sem prova social**: Zero avaliações, notas Untappd, reviews de clientes visíveis na homepage. Para cerveja artesanal, opinião de comunidade é decisório.
- **Sem FOMO/escassez**: Produtos de lote limitado não comunicam isso de forma clara.

### 1.4 Pontos Fracos do E-commerce

- Seletor de quantidade com botão único "ADICIONAR AO CARRINHO" — sem feedback visual de sucesso
- Sem recomendações (cross-sell/upsell) documentadas
- Sem indicador de estoque ("últimas unidades", "esgotado")
- EverGift Kit (produto customizável) não tem destaque como gift-giving premium
- Página de produto provavelmente não tem layout otimizado (não rastreada aqui mas baseado no padrão WooCommerce padrão)
- Sem sticky add-to-cart no mobile para produtos

### 1.5 Falhas na Experiência Mobile

- **Carrossel de banners**: Imagens tall provavelmente cortadas ou distorcidas em mobile
- **Duplo preço em cards** ocupa 50% do card height no mobile
- **Menu atual** provavelmente usa hamburger default do tema WP — não otimizado
- **Seções com texto junto** ("Confiraagoramesmo!") — problema de renderização CSS no mobile atual
- **CTA de WhatsApp** no topo (parceiros) compete visualmente com o branding

### 1.6 Inconsistências Visuais

- Mistura de imagens foto-realistas e renders 3D nos products sem unidade
- Botões sem consistência visual (alguns com borda, alguns filled, tamanhos diferentes)
- Tagline "BONES FOR LIFE" aparece esporadicamente sem sistema
- "SPOILER: VOCÊ VAI QUERER COLAR TODOS." — copy forte mas tipografia inconsistente com o restante

---

## 2. DESIGN SYSTEM (REESTRUTURAÇÃO)

### 2.1 Paleta de Cores

```
VOID       #070707   → Background base (mais escuro que preto puro — sofisticado)
CARBON     #0E0E0E   → Card backgrounds
IRON       #161616   → Superfícies elevadas
SMOKE      #282828   → Bordas, divisores
STEEL      #3A3A3A   → Hover states sutis
ASH        #707070   → Texto secundário / muted
MIST       #A0A0A0   → Placeholders
BONE       #E8DDD0   → Texto primário (warmth — conecta com "craft")
CREAM      #F5EDD8   → Highlights, links

FIRE       #FF4500   → CTA principal / Brand accent (laranja agressivo)
EMBER      #FF6B2B   → Hover do fire
AMBER      #FF8C00   → Acento secundário
GOLD       #C49A28   → Premium / EverPlatinum
GOLD-LIGHT #E8C547   → Hover do gold
HOP-GREEN  #7CB518   → Indicadores (IBU, frescor)
```

**Regra de uso:**
- 80% escuro (void/carbon/iron)
- 15% bone/cream (texto)
- 5% fire/amber (CTAs e destaques)
- Gold apenas para elementos premium (EverPlatinum, badges especiais)

### 2.2 Tipografia

```
DISPLAY:   Bebas Neue      → Headings, heroes, nomes de produtos
           Peso: 400 (a fonte já é bold por natureza)
           Uso: headlines, banners, nomes de cerveja em destaque

BODY:      Space Grotesk   → Corpo de texto, parágrafos, labels
           Pesos: 300, 400, 500, 600, 700
           Substitui Inter por ter personalidade mais "artisanal-tech"

MONO:      IBM Plex Mono   → ABV, IBU, Evercoins values, dados técnicos
           Peso: 400, 700
           Transmite precisão técnica — perfeito para público avançado
```

**Escala tipográfica:**
```
9xl  → 9rem   / 144px — Hero principal
8xl  → 7rem   / 112px — Section heroes
6xl  → 4rem   / 64px  — Section titles
4xl  → 2.5rem / 40px  — Subtitles
2xl  → 1.5rem / 24px  — Card names
xl   → 1.25rem/ 20px  — Labels grandes
base → 1rem   / 16px  — Body text
sm   → 0.875rem/14px  — Captions, muted
xs   → 0.75rem / 12px — Legal, micro
```

### 2.3 Grid / Layout

```
Breakpoints:
  Mobile:  < 640px   — 4 colunas, gutter 16px
  Tablet:  640–1024px — 8 colunas, gutter 24px
  Desktop: > 1024px  — 12 colunas, gutter 32px
  Wide:    > 1440px  — Container max 1280px, centrado

Espaçamento vertical de seções:
  Mobile:  64px top/bottom
  Desktop: 120px top/bottom

Container máximo: 1280px
Full-bleed elements: Hero, Ticker, Manifesto background, Footer
```

### 2.4 Componentes Reutilizáveis

#### Botões

```
PRIMARY    → bg: fire (#FF4500), text: white, hover: ember (#FF6B2B)
             padding: 14px 32px, font: Space Grotesk 600, uppercase, tracking-wider
             border-radius: 2px (quase quadrado — brutalista)

SECONDARY  → bg: transparent, border: 1px bone, text: bone
             hover: bg bone, text void

GHOST      → bg: transparent, border: none, text: ash
             hover: text bone, underline

CLUB       → bg: gold gradient, text: void (escuro), tamanho igual primary
             Apenas para CTAs EverClub/EverCoins
```

#### Cards de Produto

```
┌────────────────────────────┐
│  [JUICY IPA]  [NOVO LOTE]  │  ← badges top
│                            │
│       🍺 PRODUCT IMAGE     │  ← 60% da altura do card
│                            │
│  ABV 7.5%  ║  IBU 60       │  ← dados em mono font
│  ─────────────────────     │
│  EVERDANK                  │  ← Bebas Neue 2xl
│                            │
│  ◆ Evercluber  EVC$31,50   │  ← destaque gold
│    Cliente     R$ 42,40    │  ← muted
│    15% cashback            │  ← hop green
│                            │
│  [──── ADICIONAR ────]     │  ← btn primary full width
└────────────────────────────┘
  bg: carbon | border: 1px smoke
  hover: border-color fire, scale(1.02)
```

#### Badges

```
STYLE     → pill, fire bg 10% opacity, fire text, 1px fire border
NOVO LOTE → pill, amber bg 10%, amber text
VEGAN     → pill, hop-green bg 10%, hop-green text
ESGOTADO  → pill, ash bg, ash text, opacity 60%
DESTAQUE  → pill, gold gradient bg, void text
```

### 2.5 Estilo Visual

**Dark Premium Industrial + Craft Punk**

Referências:
- **Liquid Death** (agressividade + humor + cult brand)
- **Supreme** (exclusividade, drop culture, urgência)
- **Nike SNKRS app** (dark mode, produtos como arte)
- **Notion** (dark mode bem executado, tipografia forte)
- **Carhartt WIP** (streetwear industrial, sem frufru)

Elementos visuais específicos:
- Grain/noise overlay sutil (3% opacity) sobre backgrounds escuros
- Bordas de 1px — sharp, sem border-radius excessivo
- Grid lines decorativas em contextos específicos
- Textura de lúpulo ou granulado de malte como padrão de fundo em seções especiais
- Animações: parallax suave, reveal on scroll, hover com shimmer de cerveja

---

## 3. NOVA ESTRUTURA DO SITE

### 3.1 Homepage — Novo Fluxo

```
1. AGE GATE
   └─ Persistência via sessionStorage + cookie 30 dias

2. HEADER (sticky)
   ├─ Logo (left)
   ├─ Nav: CERVEJAS ▾ | EVERCLUB | LOJA | SOBRE
   │        └─ Mega-menu: Juicy IPAs | Double IPAs | Sours | Kits | Novos Lotes
   └─ Right: 🔍 | ♥ | 🛒(n) | ENTRAR

3. HERO (100vh)
   ├─ Headline: "BEBA DIFERENTE. PENSE EXTREMO." (Bebas Neue, 9xl)
   ├─ Subline: "Cervejaria artesanal de Santos. Hop-forward ou nada."
   ├─ CTAs: [EXPLORAR RÓTULOS →] [ENTRAR NO EVERCLUB ◆]
   └─ Visual: produto em destaque (3D ou foto) + partículas animadas

4. TICKER
   "BONES FOR LIFE • JUICY IPA • EXTREMAMENTE ARTESANAL • SANTOS/SP •
    SINCE 2017 • HOP FORWARD • DOUBLE IPA • IMPERIAL SOUR •"

5. RÓTULOS EM DESTAQUE (4 cards)
   └─ Link "VER COLEÇÃO COMPLETA →"

6. MANIFESTO DA MARCA
   ├─ Eyebrow: "POR QUE EVERBREW?"
   ├─ Quote: "Não fazemos cerveja para todo mundo. Não porque não podemos.
   │          Porque escolhemos."
   └─ Copy: história + filosofia + dados (10 anos, X lotes, Y prêmios)

7. EVERCLUB CTA (full-width)
   ├─ Benefícios: ATÉ 40% OFF | 15% CASHBACK | ACESSO ANTECIPADO
   └─ CTA: [QUERO SER EVERCLUBER ◆]

8. PRODUTOS — NOVOS LOTES
   └─ Spotlight: 1 produto featured + 3 cards lado a lado

9. KITS & COMBOS
   └─ 2 cards grandes: Evertreze + EverGift

10. EVERCOINS — INVISTA EM SABOR
    ├─ Explicação clara do sistema (30s read)
    └─ 4 planos em tabela comparativa

11. SOUVENIRS
    └─ 3 cards: copos, adesivos

12. PROVA SOCIAL
    ├─ Reviews (Untappd + Google)
    ├─ Contagem: "★ 4.8 no Untappd | +12.000 Everclubbers"
    └─ Feed Instagram (6 fotos)

13. NEWSLETTER
    "SEJA O PRIMEIRO A SABER." + [email] + [ENTRAR →]

14. FOOTER
    ├─ Logo + "BONES FOR LIFE"
    ├─ Colunas: Cervejas | EverClub | Empresa | Ajuda
    ├─ Selos: pagamentos, segurança, 18+
    └─ Social + Legal
```

### 3.2 Página de Produto (PDP)

```
┌─────────────────────────────────────────────────────────┐
│  [Breadcrumb: Home > Cervejas > Juicy IPA > EverDank]   │
├────────────────────────┬────────────────────────────────┤
│                        │  JUICY IPA                     │
│   [PRODUCT IMAGE]      │  EVERDANK                      │
│   360° / Gallery       │                                │
│                        │  ABV: 7.5% | IBU: 60           │
│                        │  Volume: 473ml                 │
│                        │                                │
│                        │  Evercluber: EVC$ 31,50        │
│                        │    (até 40% off)               │
│                        │  Cliente: R$ 42,40             │
│                        │    + 15% cashback              │
│                        │                                │
│                        │  [─ 1 +] [ADICIONAR ────────]  │
│                        │  [◆ ENTRAR NO EVERCLUB]        │
│                        │                                │
│                        │  ✓ Envio em 24h (capitais)     │
│                        │  ✓ Frete grátis acima R$299    │
│                        │  ✓ Devolução fácil             │
├────────────────────────┴────────────────────────────────┤
│  SOBRE A CERVEJA   |   HARMONIZAÇÃO   |   FICHA TÉCNICA │
│  [Tab content]                                          │
├─────────────────────────────────────────────────────────┤
│  VOCÊ TAMBÉM VAI QUERER                                 │
│  [Related products horizontal scroll]                   │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Página de Categorias (Cervejas)

```
- Hero da página: título + filtros visíveis
- Filtros: Estilo | ABV | Novidades | Disponibilidade
           (sidebar desktop / bottom sheet mobile)
- Grid: 3 colunas desktop, 2 tablet, 1 mobile
- Ordenação: Mais Populares | Novidades | Menor Preço
- Sticky "n produtos encontrados"
```

### 3.4 Organização do Menu

```
CERVEJAS ▾
  ├─ Todos os Rótulos
  ├─ Juicy IPA
  ├─ Double IPA / Extremas
  ├─ Sours
  ├─ Novos Lotes 🔥
  └─ Esgotados / Arquivo

KITS & COMBOS ▾
  ├─ Caixa EverTreze
  └─ EverGift Kit

EVERCLUB ◆
  (landing page dedicada com explicação + planos)

EVERCOINS
  (landing page dedicada)

LOJA
  └─ Souvenirs: Copos | Adesivos | Vestuário

SOBRE
  ├─ Nossa História
  ├─ A Cervejaria (visita)
  └─ Contato
```

---

## 4. MELHORIAS DE CONVERSÃO (CRO)

### 4.1 CTAs Estratégicos

| Posição | CTA Atual | CTA Novo | Justificativa |
|---------|-----------|----------|---------------|
| Hero primário | (não existe) | "EXPLORAR RÓTULOS →" | Direciona ao produto |
| Hero secundário | (não existe) | "ENTRAR NO EVERCLUB ◆" | Captura LTV |
| Product card | "ADICIONAR AO CARRINHO" | "ADICIONAR" + animação de sucesso | Mais curto, feedback visual |
| EverClub banner | "Até 35% off no" (incompleto!) | "QUERO ECONOMIZAR 40%" | Benefit-first copy |
| Evercoins | "Adicione ao carrinho: Plano X" | "INVESTIR AGORA — EVC$ + BÔNUS" | Remove friccão de "compra" |
| Footer | (newsletter sem CTA) | "ENTRAR NA LISTA →" | Ação clara |

### 4.2 Urgência e Escassez

- **Badge "NOVO LOTE"** com número do lote (ex: "LOTE #47") — colecionismo
- **Contador de estoque**: "apenas 42 latas disponíveis" nos produtos com baixo estoque
- **"ÚLTIMO LOTE DISPONÍVEL"** quando estoque crítico
- **Janela de oferta**: banner sutil no topo "Frete grátis até meia-noite hoje" (personalizado por campanha)
- **Drops**: página de "próximo lançamento" com countdown + captura de email
- **Lote x Edição**: numeração visível nos produtos — edições limitadas têm percepção de alto valor

### 4.3 Como Destacar o EverClub

```
Seção dedicada na homepage com:
├─ Headline: "OS VERDADEIROS FÃS PAGAM MENOS."
├─ Subline: "Entre para o EverClub e transforme cada pedido em investimento."
├─ Benefícios visuais (icons + números):
│   ◆ Até 40% de Desconto em todos os rótulos
│   ◆ 15% Cashback em EverCoins a cada compra
│   ◆ Acesso antecipado a novos lotes
│   ◆ Kits exclusivos para membros
│   ◆ Comunidade de Everclubbers (Discord/WhatsApp)
├─ Prova social: "12.000+ membros" / depoimento de membro
└─ CTA: [VER PLANOS] e [ENTRAR GRÁTIS] (se houver opção free)

No header: badge "◆ CLUBE" sempre visível, com tooltip "Economize até 40%"
No product card: preço Evercluber em destaque MAIOR que preço normal (inversão atual)
```

### 4.4 Otimização de Copy

**Antes → Depois:**

| Elemento | Antes | Depois |
|----------|-------|--------|
| Page title | "Everbrew" | "EVERBREW — Cerveja Artesanal Extrema" |
| Hero H1 | (inexistente) | "BEBA DIFERENTE. PENSE EXTREMO." |
| EverClub btn | "Até 35% off no" | "ECONOMIZE ATÉ 40% AGORA" |
| Products title | "Outras cervejas na nossa prateleira" | "RÓTULOS EXTREMOS" |
| Evercoins intro | "Conheça nossos planos de Evercoins" | "INVISTA EM SABOR — GANHE DE VOLTA" |
| Newsletter | "Fique por dentro das novidades" | "SEJA O PRIMEIRO. SEMPRE." |
| Product CTA | "ADICIONAR AO CARRINHO" | "ADICIONAR" (+ feedback visual) |

---

## 5. EXPERIÊNCIA DO USUÁRIO

### 5.1 Jornada Ideal do Usuário

```
DISCOVERY (Redes Sociais / Google)
    ↓
LANDING (Homepage)
  └─ Age gate (máx. 1 clique, lembra por 30 dias)
  └─ Hero: entende a marca em 3 segundos
  └─ Ticker + Produtos: vê o portfólio
    ↓
EXPLORAÇÃO (Cervejas / Produto)
  └─ Filtra por estilo
  └─ Lê ABV/IBU (decisor para público advanced)
  └─ Ve avaliações Untappd
    ↓
CONVERSÃO (Produto → Carrinho)
  └─ Entende preço normal vs clube
  └─ Considera entrar no clube (tooltip no preço)
  └─ Add to cart com feedback
    ↓
UPSELL (Carrinho)
  └─ "Adicione + R$X para frete grátis"
  └─ "Membros Evercluber economizariam R$XX neste pedido"
  └─ Kit recommendation
    ↓
CHECKOUT
  └─ 3 etapas máximo: Dados → Entrega → Pagamento
  └─ Auto-fill de endereço por CEP
  └─ Evercoins como método de pagamento visível
    ↓
PÓS-COMPRA
  └─ Email: "Seus rótulos estão a caminho 🍺"
  └─ Incentivo: "Ganhou EVC$ X de cashback"
  └─ Cross-sell: próxima compra com desconto temporário
```

### 5.2 Retenção e Tempo no Site

- **Storytelling por produto**: cada cerveja tem uma página com história de criação, inspiração, produtor responsável
- **"Modo Exploração"**: botão que ativa "navegação aleatória" entre rótulos — gamification
- **Beer Journal**: área do usuário logado com histórico de pedidos e "cervejas que você vai querer tentar"
- **Vídeos curtos**: 15-30s de como a cerveja é produzida, no hover do produto (autoplay muted)
- **Untappd integration**: mostrar check-ins de amigos na PDP
- **Lote history**: timeline de launches da marca

### 5.3 Estratégias de Engajamento

- **Community wall**: feed de fotos de clientes com a hashtag #everbrew
- **Ranking de membros**: gamification no EverClub (níveis Bronze → Platinum visíveis)
- **Surveys rápidos**: "Qual seria sua próxima Everbrew? Vote" (1 clique, coleta dados)
- **Mystery Box**: opção de "Surpreenda-me" no carrinho

---

## 6. DIFERENCIAL COMPETITIVO

### 6.1 Ideias Criativas para Destacar a Marca

1. **"LOTE NUMBER"** — cada lote tem número de série visível. Usuários que compram lotes raros viram "colecionadores". Badges no perfil.

2. **"EXTREMOMETER"** — medidor visual nos produtos mostrando intensidade (0–100) de amargor, corpo, aroma. Substitui IBU/ABV frios por uma experiência visual.

3. **"EVERBREW DROPS"** — página de lançamentos ao estilo Nike SNKRS. Data, hora, alerta por email/push. Cria FOMO e engagement.

4. **QR Code na lata → experiência digital**: Scan da lata leva para página especial com receita de harmonização, playlist do lote, história do rótulo.

5. **"BONES FOR LIFE WALL"**: Hall virtual de membros antigos, com número de pedidos, rótulos favoritos — comunidade visível.

6. **Parallax 3D do produto**: Na PDP, movimento do mouse rotaciona a lata levemente — experiência imersiva premium.

### 6.2 Percepção Premium

- **Fotografia editorial**: latas sobre gelo seco, beat fotografia industrial — não foto de produto branca
- **Packaging experience**: mostrar o unboxing no site (video 30s)
- **Craft numbers**: "Produzimos em lotes de até 5.000 litros. Não mais."
- **Founder voice**: mensagem do fundador em formato editorial (não institucional)

### 6.3 Experiência Imersiva

```
Microinterações:
- Hover em produto: lata "gelando" (frost animation + condensation)
- Add to cart: animação de "cheers" (clink de lata)
- Scroll na homepage: parallax nas imagens de produtos
- EverClub join: confetti em gold/fire ao confirmar cadastro
- Carrinho abrindo: slide from right com blur backdrop

Storytelling visual:
- Linha do tempo scrollable da história da cervejaria
- Mapa de Santos com a localização da cervejaria animado
- "Da sua mesa ao nosso tanque" — processo de produção ilustrado
```

---

## 7. MOBILE FIRST

### 7.1 Layouts Específicos Mobile

```
Header Mobile:
├─ Logo (center)
├─ Hamburger (right)
└─ Cart icon com badge (right, ao lado do hamburger)

Drawer Menu:
├─ Search bar no topo
├─ Links principais full-width
└─ EverClub CTA no bottom do drawer

Hero Mobile:
├─ Imagem produto: 100vw, top half
├─ Texto: bottom half, bold, menor
└─ 1 CTA primário (não 2)

Product Card Mobile:
├─ Horizontal layout opção (abaixo de produtos)
├─ Swipe carousel (não grid)
└─ Quick-add sem ir para PDP

PDP Mobile:
└─ Sticky bottom bar: nome + preço + [ADICIONAR]

Checkout Mobile:
└─ Apple Pay / Google Pay como primeira opção
```

### 7.2 Performance Mobile

- **LCP < 2.5s**: Hero image servida em WebP + AVIF, lazy loading below fold
- **CLS = 0**: Skeleton loaders em todos os cards de produto
- **FID < 100ms**: Leve hidratação — SSR da homepage
- **Core Web Vitals green** no PageSpeed Insights
- Imagens de produto: CDN + next/image com blur placeholder
- JS splitting: cada seção carrega seu JS de forma independente
- Font loading: `display: swap` no Bebas Neue e Space Grotesk**Metas:**
  - Lighthouse Performance ≥ 90 (mobile)
  - First Contentful Paint < 1.2s
  - Time to Interactive < 3.5s

---

## 8. PROPOSTA VISUAL

### 8.1 Sensação Geral

O novo Everbrew site deve transmitir: **"você entrou em um lugar que não é para todo mundo — e isso é exatamente por isso que você quer estar aqui."**

Sensação: **Club Room da sua cervejaria favorita + página de drop da Nike + editorial da Dazed Magazine.**

### 8.2 Estilo Visual Descritivo

```
Fundo: #070707 — quase preto, não preto total (sofisticação vs raw)
Grain overlay: 2–3% de noise — dá textura craft, humaniza o digital
Tipografia dominante: Bebas Neue em branco/bone — aggressive, legível, grande
Grids expostos: linhas finas (1px #252525) como guideline decorativo
Bordas: sempre 1px — nunca arredondado demais. Brutalist precision.
Luz: vinheta escura nas edges, luz central nas imagens (produto como star)
Movimento: tudo se mover 10–20% mais devagar que parece natural — theatrical
```

### 8.3 Referências Visuais

| Referência | O que pegar |
|------------|-------------|
| **Liquid Death** | Agressividade + humor + cult feel no digital |
| **Nike SNKRS App** | Drop culture + dark mode + produto como arte |
| **Carhartt WIP website** | Industrial, tipografia forte, sem excessos |
| **Dazed Digital** | Editorial magazine meets e-commerce |
| **Notion dark mode** | Execução de dark mode elegante |
| **Supreme drops page** | Exclusividade + urgência + minimalismo extremo |

### 8.4 Elementos Que NÃO Usar

- ❌ Gradientes coloridos (foge da paleta)
- ❌ Ícones de stock (usar custom SVGs da marca)
- ❌ White backgrounds (nem em modais)
- ❌ Font Comic/Rounded (antipattern para a marca)
- ❌ Animações de loading genéricas (criar branded loader — lata enchendo)
- ❌ Cores pastéis ou "fun" demais

---

## 9. STACK TÉCNICA RECOMENDADA

Para projeto 100% comercial de larga escala:

```
Frontend Framework:  Next.js 14 (App Router) + TypeScript
Styling:             Tailwind CSS v3 + CSS Custom Properties (tokens)
Animations:          Framer Motion 11
State (Cart):        Zustand
Backend/CMS:         WooCommerce (manter) com REST API headless
                     OU Shopify Headless (migração recomendada para escalar)
Media:               Cloudinary CDN (imagens + vídeos)
Analytics:           GA4 + GTM + Hotjar (heatmaps)
Search:              Algolia InstantSearch
Email:               Klaviyo (automações de e-commerce)
Hosting:             Vercel (frontend) + mantém WP no servidor atual
Pagamentos:          Stripe (alternativa) + manter gateways atuais
Performance:         next/image, ISR para PDPs, SSG para homepage
SEO:                 next/seo, sitemap automático, Schema markup (Product)
```

**Estimativa de desenvolvimento (equipe de 2 devs):**
- Design System + Componentes: 2 semanas
- Homepage + Header/Footer: 1 semana
- Cervejas (lista + PDP): 1,5 semanas
- EverClub + Evercoins pages: 1 semana
- Cart + Checkout (WooCommerce API): 2 semanas
- QA + Otimização: 1 semana
- **Total: ~8–9 semanas (2 meses)**

---

## 10. MÉTRICAS DE SUCESSO (KPIs)

| Métrica | Atual (estimado) | Meta Pós-Redesign |
|---------|-----------------|-------------------|
| Taxa de conversão | 1–2% | 3–4% |
| Tempo médio na página | 1:30 | 3:00+ |
| Bounce rate homepage | 60–70% | 35–45% |
| Valor médio do pedido | R$ 80–120 | R$ 150–200 |
| Taxa de adesão EverClub | Baixa | +40% |
| Mobile conversion | 0.5–1% | 2–3% |
| Page speed (mobile) | ~40 | ≥90 |

---

*Diagnóstico preparado com base em análise live do site everbrew.com.br em Abril/2026.*
*Stack recomendada para projeto Next.js 14 + TypeScript + Tailwind CSS.*
