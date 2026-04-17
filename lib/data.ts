import type { Product, Kit, CoinPlan, Review, Souvenir } from '@/types'

// ─── Shared constants ──────────────────────────────────────────
export const CDN = 'https://www.everbrew.com.br/wp-content/uploads'
export const WA_LINK = 'https://wa.me/5513997034189?text=Quero%20entrar%20no%20EverGroup!'

// ─── EverGroup ─────────────────────────────────────────────────
export const EVERGROUP_BANNERS = [
  `${CDN}/2023/11/caveiras-banner-evergoup-1.png`,
  `${CDN}/2023/11/caveiras-banner-evergoup-2.png`,
  `${CDN}/2023/11/caveiras-banner-evergoup-3.png`,
]

export const EVERGROUP_BENEFITS = [
  {
    img:   `${CDN}/2023/11/lancamento-em-primeira-mao.jpg`,
    title: 'Lançamentos em Primeira Mão',
    desc:  'Fique sabendo antes de todo mundo quando um novo rótulo chega. Seja o primeiro a garantir o que sai da fábrica.',
    tag:   'Exclusivo',
  },
  {
    img:   `${CDN}/2023/11/caveira-conteudos-exclusivos.jpg`,
    title: 'Conteúdos Exclusivos',
    desc:  'O que é terpeno? Diferenças entre lúpulos, IBU, ABV, harmonização — tudo explicado direto pela equipe Everbrew.',
    tag:   'Educação',
  },
  {
    img:   `${CDN}/2023/11/agenda-do-pub.jpg`,
    title: 'Agenda do EverPub',
    desc:  'Shows, tap takeovers, degustações e eventos especiais. Você fica sabendo antes que a divulgação saia nas redes.',
    tag:   'Eventos',
  },
  {
    img:   `${CDN}/2023/11/caveira-reposicao-rotulos-prateleiras.jpg`,
    title: 'Promoções Exclusivas',
    desc:  'Descontos e ofertas que nunca aparecem no site público. Disponíveis só para os membros do grupo.',
    tag:   'Ofertas',
  },
  {
    img:   `${CDN}/2023/11/conteudos-sobre-cerveja.jpg`,
    title: 'Conteúdo sobre Cerveja',
    desc:  'Como servir corretamente, estilos, temperatura ideal, harmonização com comida. Aprenda com quem faz.',
    tag:   'Cultura',
  },
  {
    img:   `${CDN}/2023/11/caveira-agenda-de-eventos-brasil.jpg`,
    title: 'Agenda de Eventos no Brasil',
    desc:  'Festivais de cerveja artesanal, feiras e encontros pelo Brasil. Curadoria feita pela equipe Everbrew.',
    tag:   'Agenda',
  },
]

export const EVERGROUP_RULES = [
  'O grupo é somente de transmissão — mensagens dos participantes ficam bloqueadas para manter a ordem.',
  'É estritamente proibido enviar mensagens de cunho sexual, religioso, político ou de ódio.',
  'Proibida a divulgação de outros produtos, serviços ou vendas de qualquer natureza.',
  'Violações resultam em exclusão e bloqueio imediato do grupo.',
  'Existe apenas UM grupo oficial da Cervejaria Everbrew, administrado pelo número (13) 99703-4189.',
  'Você é livre para entrar e sair quando desejar.',
]

// ─── EverClub ──────────────────────────────────────────────────
export const EVERCLUB_BENEFITS = [
  { icon: '◆', title: 'Até 40% de desconto',       desc: 'Preço exclusivo de clube em todos os rótulos do catálogo.' },
  { icon: '◈', title: 'EverCoins',                  desc: 'Cashback em crédito que valoriza quanto mais você investe no clube.' },
  { icon: '▲', title: 'Acesso antecipado',          desc: 'Você compra rótulos novos antes de qualquer pessoa de fora.' },
  { icon: '●', title: 'Frete zero',                 desc: 'Entrega gratuita para Everclubers em todo o Brasil.' },
  { icon: '◉', title: 'Drops exclusivos',           desc: 'Rótulos que só existem para membros. Nunca aparece no site público.' },
  { icon: '◐', title: 'Comunidade privada',         desc: 'Grupo fechado com a crew Everbrew. Eventos, degustações e conteúdo direto.' },
]

export const TIER_STYLES: Record<string, { color: string; label: string; img: string; border: string; badge: string; textLabel: string }> = {
  bronze:   { color: '#CD7F32', label: '◈ EverBronze',   img: '/EVERBREW/coins/everbronze.png',   border: 'border-amber/40', badge: 'bg-amber/10 text-amber', textLabel: 'text-amber'  },
  prata:    { color: '#C0C0C0', label: '◈ EverPrata',    img: '/EVERBREW/coins/everprata.png',    border: 'border-ash/40',   badge: 'bg-ash/10 text-mist',   textLabel: 'text-mist'   },
  ouro:     { color: '#E8C547', label: '◈ EverOuro',     img: '/EVERBREW/coins/everouro.png',     border: 'border-gold/70',  badge: 'bg-gold/15 text-gold',  textLabel: 'text-gold'   },
  platinum: { color: '#E5E4E2', label: '◈ EverPlatinum', img: '/EVERBREW/coins/everplatinum.png', border: 'border-bone/40',  badge: 'bg-bone/10 text-bone',  textLabel: 'text-bone'   },
}

// ─── Cervejas page ─────────────────────────────────────────────
export const BEER_STYLES = ['Todos', 'Juicy IPA', 'Double American IPA', 'Imperial Sour', 'Light Juicy IPA']

export const BEER_ABV_RANGES = [
  { label: 'Todos',              min: 0, max: 99  },
  { label: 'Sem Álcool (até 1%)', min: 0, max: 1.1 },
  { label: 'Leve (4–6%)',        min: 4, max: 6   },
  { label: 'Médio (6–8%)',       min: 6, max: 8   },
  { label: 'Forte (8%+)',        min: 8, max: 99  },
]

// ─── Institucional ─────────────────────────────────────────────
export const FABRICA_PHOTOS = [
  { src: `${CDN}/2022/01/fabrica-everbrew-1.jpeg`, alt: 'Fábrica Everbrew — vista geral' },
  { src: `${CDN}/2022/01/fabrica-everbrew-2.jpeg`, alt: 'Fábrica Everbrew — tanques de fermentação' },
  { src: `${CDN}/2022/01/fabrica-everbrew-3.jpeg`, alt: 'Fábrica Everbrew — detalhes do equipamento' },
  { src: `${CDN}/2022/01/fabrica-everbrew-4.jpeg`, alt: 'Fábrica Everbrew — processo de produção' },
  { src: `${CDN}/2022/01/fabrica-everbrew-5.jpeg`, alt: 'Fábrica Everbrew — área de enlatamento' },
  { src: `${CDN}/2022/01/fabrica-everbrew-6.jpeg`, alt: 'Fábrica Everbrew — equipamentos modernos' },
]

export const EVERPUB_PHOTOS = [
  { src: `${CDN}/2022/01/everpub-3.jpeg`,             alt: 'EverPub — ambiente interno' },
  { src: `${CDN}/2021/05/fachada-everbrew-santos.jpg`, alt: 'Cervejaria Everbrew — Fachada em Santos' },
  { src: `${CDN}/2022/01/everpub-1.jpeg`,             alt: 'EverPub — balcão de chopes' },
  { src: `${CDN}/2022/01/everpub-2.jpeg`,             alt: 'EverPub — espaço para shows' },
  { src: `${CDN}/2022/01/everpub-5.jpeg`,             alt: 'EverPub — ambientação noturna' },
]

export const COMPANY_TIMELINE = [
  { year: '2016', label: 'Fundação como cervejaria cigana' },
  { year: '2018', label: 'Inauguração do EverPub em Santos' },
  { year: '2021', label: 'Crowdfunding para fábrica própria' },
  { year: '2022', label: 'Inauguração da fábrica no Mercado Municipal' },
]

export const PRODUCTS: Product[] = [
  {
    id:          'everdank',
    slug:        'everdank-lata-473ml',
    name:        'EverDank',
    style:       'Juicy IPA',
    abv:         7.5,
    ibu:         60,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2022/03/EVEBREW.everdank-e1646403110292.png',
    description: 'Uma Juicy IPA dankamente lupulada. Notas tropicais com resina intensa. Amargor que persiste, aroma que domina.',
    priceClient: 42.40,
    priceClub:   31.50,
    cashbackPct: 15,
    discountPct: 40,
    isNew:       true,
    isFeatured:  true,
    inStock:     true,
    loteNumber:  52,
  },
  {
    id:          'what-a-grocery',
    slug:        'what-a-grocery',
    name:        'What a Grocery',
    style:       'Imperial Sour',
    abv:         7.0,
    ibu:         4,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2022/05/EVERBREW.whatagrocery-e1651778899229.png',
    description: 'Uma Imperial Sour de acidez precisa e corpo cheio. Para quem sabe que azedo não é defeito — é filosofia.',
    priceClient: 42.40,
    priceClub:   31.50,
    cashbackPct: 15,
    discountPct: 40,
    isFeatured:  true,
    inStock:     true,
  },
  {
    id:          'double-everipa',
    slug:        'cerveja-double-everipa-lata-473ml',
    name:        'Double EverIPA',
    style:       'Double American IPA',
    abv:         8.0,
    ibu:         80,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2025/10/EVERBREW.DOUBLEeverIPA-scaled.png',
    description: '8% ABV. 80 IBU. A Double IPA que não pede licença. Lupulagem agressiva, corpo robusto, final longo e resinoso.',
    priceClient: 39.40,
    priceClub:   28.50,
    cashbackPct: 15,
    discountPct: 40,
    isFeatured:  true,
    badges:      ['gold'],
    inStock:     true,
  },
  {
    id:          'falling-coconut',
    slug:        'cerveja-falling-coconut-lata-473ml',
    name:        'Falling Coconut',
    style:       'Juicy IPA',
    abv:         7.0,
    ibu:         65,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2022/07/EVEBREW.falling-coconuts-e1657050514313.png',
    description: 'O tropicalismo levado às últimas consequências. Coco, maracujá e amargor hop que te derruba suavemente.',
    priceClient: 42.40,
    priceClub:   31.50,
    cashbackPct: 15,
    discountPct: 40,
    badges:      ['hop'],
    inStock:     true,
  },
  {
    id:          'evermaine',
    slug:        'evermaine',
    name:        'Evermaine',
    style:       'Juicy IPA',
    abv:         7.7,
    ibu:         60,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2022/01/EVEBREW.evermaine.png',
    description: 'Segundo rótulo histórico da Everbrew. Desde 2017 conquistando paladares exigentes com amargor tropical e corpo assertivo.',
    priceClient: 39.40,
    priceClub:   28.50,
    cashbackPct: 15,
    discountPct: 40,
    isFeatured:  true,
    isNew:       true,
    loteNumber:  48,
    inStock:     true,
  },
  {
    id:          'hey-mate',
    slug:        'cerveja-hey-mate-lata-473ml',
    name:        'Hey Mate!',
    style:       'Juicy IPA',
    abv:         7.5,
    ibu:         65,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2025/05/EVEBREW.heymate-scaled-e1748090137760.png',
    description: 'Uma saudação hop-forward. O amargor cumprimentando seu paladar desde o primeiro gole.',
    priceClient: 39.40,
    priceClub:   28.50,
    cashbackPct: 15,
    discountPct: 40,
    inStock:     true,
  },
  {
    id:          'little-juice',
    slug:        'little-juice',
    name:        'Little Juice',
    style:       'Light Juicy IPA',
    abv:         1.0,
    ibu:         32,
    volume:      473,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2025/06/EVERBREW.littlejuicy-scaled.png',
    description: 'Toda a personalidade Juicy IPA com 1% ABV. Para os momentos onde você quer o sabor sem o álcool. 22 kcal/100ml.',
    priceClient: 39.40,
    priceClub:   28.50,
    cashbackPct: 15,
    discountPct: 40,
    inStock:     true,
  },
]

export const KITS: Kit[] = [
  {
    id:          'evertreze',
    slug:        'caixa-evertreze-12latas',
    name:        'Caixa EVERTREZE',
    subtitle:    'Edição Especial · 12 Latas 350ml',
    description: 'A caixa com os rótulos mais icônicos da Everbrew. 12 latas 350ml selecionadas para surpreender até o paladar mais exigente.',
    ctaLabel:    'Garantir Minha Caixa →',
    ctaHref:     '/produto/caixa-evertreze-12latas',
    variant:     'primary',
  },
  {
    id:          'evergift',
    slug:        'evergift-kit-presente-customizavel',
    name:        'EverGift Kit',
    subtitle:    'Presente Premium · Customizável',
    description: 'Monte o kit perfeito com cervejas, copos e acessórios à escolha. Presenteie com personalidade — para quem merece o melhor.',
    ctaLabel:    'Montar Meu Kit →',
    ctaHref:     '/produto/evergift-kit-presente-customizavel',
    variant:     'secondary',
  },
]

export const COIN_PLANS: CoinPlan[] = [
  {
    id:           'bronze',
    tier:         'bronze',
    tierLabel:    'EverBronze',
    investment:   500,
    evcReturn:    575,
    bonusPct:     15,
    installments: 5,
  },
  {
    id:           'prata',
    tier:         'prata',
    tierLabel:    'EverPrata',
    investment:   1000,
    evcReturn:    1200,
    bonusPct:     20,
    installments: 5,
  },
  {
    id:           'ouro',
    tier:         'ouro',
    tierLabel:    'EverOuro',
    investment:   2000,
    evcReturn:    2500,
    bonusPct:     25,
    installments: 10,
    isFeatured:   true,
  },
  {
    id:           'platinum',
    tier:         'platinum',
    tierLabel:    'EverPlatinum',
    investment:   5000,
    evcReturn:    6500,
    bonusPct:     30,
    installments: 10,
  },
]

export const REVIEWS: Review[] = [
  {
    id:       '1',
    author:   'Lucas F.',
    platform: 'Untappd · Evercluber',
    rating:   5,
    initials: 'LF',
    text:     '"O EverDank é simplesmente absurdo. Uma Juicy IPA que entrega exatamente o que promete: intensidade do início ao fim. Não consigo imaginar outro rótulo no meu domingo."',
  },
  {
    id:       '2',
    author:   'Marina R.',
    platform: 'Google · Evercluber Ouro',
    rating:   5,
    initials: 'MR',
    text:     '"What a Grocery foi uma revelação. O estilo Imperial Sour deles é preciso — acidez equilibrada, corpo full. Impossível tomar só uma lata."',
  },
  {
    id:       '3',
    author:   'Pedro B.',
    platform: 'Untappd · Evercluber Platinum',
    rating:   5,
    initials: 'PB',
    text:     '"O programa de EverCoins é genial. Consegui juntar saldo e comprei uma caixa inteira com desconto. Esse clube é dos melhores do Brasil."',
  },
  {
    id:       '4',
    author:   'André K.',
    platform: 'Untappd · Evercluber',
    rating:   5,
    initials: 'AK',
    text:     '"Double EverIPA 8% ABV e 80 IBU — exatamente o que eu esperava. Amargor assertivo, lupulagem generosa. A Everbrew não erra."',
  },
]

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4)
export const NEW_PRODUCTS       = PRODUCTS.filter((p) => p.isNew)

// ─── Caixas Evertreze — Promoções ──────────────────────────────
export interface BoxPromotion {
  id:                string
  name:              string
  subtitle:          string
  imageUrl:          string
  abv?:              number
  ibu?:              number
  priceClub:         number
  priceClient:       number
  discountLabel:     string
  cashbackLabel:     string
  ctaHref:           string
  isSpecial?:        boolean
  ctaPrimaryLabel?:  string
  ctaSecondaryLabel?: string
}

export const BOX_PROMOTIONS: BoxPromotion[] = [
  {
    id:            'caixa-evertreze-red-ale',
    name:          'CAIXA EVERTREZE RED ALE',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/10/12x-evertreze-redale.png`,
    abv:           5.1,
    ibu:           30,
    priceClub:     107,
    priceClient:   147,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-evertreze-red-ale',
  },
  {
    id:            'caixa-evertreze-hop-lager',
    name:          'CAIXA EVERTREZE HOP LAGER',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/10/12x-evertreze-hoplager.png`,
    abv:           4.8,
    ibu:           20,
    priceClub:     107,
    priceClient:   147,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-evertreze-hop-lager',
  },
  {
    id:            'caixa-evertreze-ipa',
    name:          'CAIXA EVERTREZE IPA',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/10/12x-evertreze-ipa.png`,
    abv:           6.0,
    ibu:           55,
    priceClub:     148,
    priceClient:   188,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-evertreze-ipa',
  },
  {
    id:            'caixa-evertreze-sour',
    name:          'CAIXA EVERTREZE SOUR',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/10/12x-evertreze-sour.png`,
    abv:           3.8,
    ibu:           7,
    priceClub:     148,
    priceClient:   188,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-evertreze-sour',
  },
  {
    id:            'caixa-evertreze-session-ipa',
    name:          'CAIXA EVERTREZE SESSION IPA',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/10/12x-evertreze-sessionipa.png`,
    abv:           4.6,
    ibu:           30,
    priceClub:     138,
    priceClient:   178,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-evertreze-session-ipa',
  },
  {
    id:            'cx-degustacao-evertreze',
    name:          'CX DEGUSTAÇÃO LINHA EVERTREZE',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/09/kit-evertreze-degustacaot-2023.png`,
    priceClub:     124,
    priceClient:   164,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-degustacao-linha-evertreze',
  },
  {
    id:            'caixa-evertreze-pilsen',
    name:          'CAIXA EVERTREZE PILSEN',
    subtitle:      '12 UNIDADES',
    imageUrl:      `${CDN}/2023/10/12x-evertreze-pilsen.png`,
    abv:           4.8,
    ibu:           14,
    priceClub:     96,
    priceClient:   136,
    discountLabel: 'até 40% Off',
    cashbackLabel: '15% cashback',
    ctaHref:       '/produto/caixa-evertreze-pilsen',
  },
  {
    id:                 'caixa-evertreze',
    name:               'CAIXA EVERTREZE',
    subtitle:           'BONES FOR LIFE',
    imageUrl:           `${CDN}/2024/02/evetreze-caixa-customizada.png`,
    isSpecial:          true,
    ctaPrimaryLabel:    'Confira agora mesmo!',
    ctaSecondaryLabel:  'Escolha suas opções',
    priceClub:          0,
    priceClient:        0,
    discountLabel:      '',
    cashbackLabel:      '',
    ctaHref:            '/produto/caixa-evertreze-12latas',
  },
]

export const SOUVENIRS: Souvenir[] = [
  // ── Bonés ──────────────────────────────────────────────────────────────
  {
    id:          'bone',
    slug:        'bone-everbrew',
    name:        'Boné Everbrew',
    subtitle:    'Boné Trucker Ajustável',
    description: 'Boné trucker nas cores preta e verde escura, com redinha preta. Tamanho único, regulável. Uma perfeita adição de estilo.',
    tagline:     'BONES FOR LIFE',
    price:       79.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2023/04/bone-preto-1.png',
    inStock:     true,
    hasVariants: true,
    ctaUrl:      'https://www.everbrew.com.br/produto/bone-everbrew/',
  },
  // ── Camisetas ──────────────────────────────────────────────────────────
  {
    id:          'camiseta-black-winter',
    slug:        'camiseta-everbrew-black-winter',
    name:        'Camiseta Black Winter',
    subtitle:    'Algodão · Preta',
    description: 'Camiseta em algodão, leve e confortável, com o desenho irado do rótulo da nossa Black Winter. Pra quem é #everlover.',
    tagline:     'COR: PRETA · TAM: P, M, G, GG, XGG',
    price:       94.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2023/07/camiseta-everbrew-black-winter.png',
    inStock:     true,
    hasVariants: true,
    ctaUrl:      'https://www.everbrew.com.br/produto/camiseta-everbrew-black-winter/',
  },
  {
    id:          'camiseta-evermaine',
    slug:        'camiseta-evermaine-everbrew',
    name:        'Camiseta Evermaine',
    subtitle:    'Algodão · Preta',
    description: 'Camiseta em algodão, leve e confortável, com o desenho irado de um dos nossos rótulos favoritos — Evermaine! Pra quem é #everlover.',
    tagline:     'COR: PRETA · TAM: P, M, G, GG, XGG',
    price:       94.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2023/10/camiseta-everbrew-evermaine-preta.png',
    inStock:     true,
    hasVariants: true,
    ctaUrl:      'https://www.everbrew.com.br/produto/camiseta-evermaine-everbrew/',
  },
  {
    id:          'camiseta-breeze-blocks',
    slug:        'camiseta-breeze-blocks-everbrew',
    name:        'Camiseta Breeze Blocks',
    subtitle:    'Algodão · Preta',
    description: 'Camiseta em algodão, leve e confortável, com o desenho irado do rótulo da nossa Breeze Blocks. Pra quem é #everlover.',
    tagline:     'COR: PRETA · TAM: P, M, G, GG',
    price:       94.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2023/04/camiseta-everbrew-breeze-blocks.png',
    inStock:     true,
    hasVariants: true,
    ctaUrl:      'https://www.everbrew.com.br/produto/camiseta-breeze-blocks-everbrew/',
  },
  // ── Copos & Taças ──────────────────────────────────────────────────────
  {
    id:          'taca-dublin-10anos',
    slug:        'taca-dublin-everbrew-10-anos',
    name:        'Taça Dublin Everbrew',
    subtitle:    'Taça Dublin Vidro 400ml',
    description: 'Dez anos de história merecem um brinde à altura. Design elegante e 400ml de capacidade para valorizar o brilho e os aromas de cada Everbrew.',
    tagline:     'EDIÇÃO COMEMORATIVA 10 ANOS',
    price:       39.90,
    priceClub:   35.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2026/04/bonus-extra-3.png',
    inStock:     true,
    isNew:       true,
  },
  {
    id:          'americano-300ml',
    slug:        'copo-americano-everbrew-300ml',
    name:        'Americano 300ml',
    subtitle:    'Copo Americano Vidro 300ml',
    description: 'O copo coringa que nunca falha. Atemporal, versátil e perfeito pra qualquer ocasião — exatamente como a gente usa por aqui.',
    tagline:     'SIMPLES, ICÔNICO E INDISPENSÁVEL',
    price:       22.90,
    priceClub:   17.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2026/04/COPOS-1.png',
    inStock:     true,
  },
  {
    id:          'copo-dubai',
    slug:        'copo-dubai-everbrew',
    name:        'Copo Dubai Everbrew',
    subtitle:    'Copo Dubai Vidro 480ml',
    description: 'Aquele que usamos no pub! O copo Dubai cai bem em qualquer ocasião — da pilsen do dia a dia até as IPAs mais complexas.',
    tagline:     'O COPO DO PUB',
    price:       35.00,
    priceClub:   29.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2023/08/copo-dubai-everbrew.png',
    inStock:     true,
  },
  {
    id:          'copo-lata',
    slug:        'copo-lata-we-are-everbrew-copia',
    name:        'Copo Lata Everbrew',
    subtitle:    'Copo Lata Vidro 475ml',
    description: 'Comemorativo 10 anos. 475ml de capacidade — uma lata inteirinha de Everbrew de uma vez só. Garanta o espaço dele na sua prateleira.',
    tagline:     'O QUERIDINHO ESTÁ DE VOLTA',
    price:       48.90,
    priceClub:   44.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2026/03/COPOS.png',
    inStock:     true,
    isNew:       true,
  },
  {
    id:          'copo-atlanta',
    slug:        'copo-atlanta-craft-beer-470ml',
    name:        'Copo Atlanta Craft Beer',
    subtitle:    'Copo Atlanta 470ml',
    description: 'Copo modelo Atlanta Craft Beer, personalizado. Perfeito para valorizar aromas e sabores — fica melhor ainda com uma Juicy IPA bem fresca.',
    tagline:     'BONES FOR LIFE',
    price:       45.00,
    priceClub:   35.40,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2026/02/COPOS-4.png',
    inStock:     true,
  },
  {
    id:          'cartela-adesivos',
    slug:        'cartela-adesivos-everbrew',
    name:        'Cartela Adesivos Everbrew',
    subtitle:    'Pack de Adesivos Exclusivos',
    description: 'Material resistente, ótima fixação e acabamento de qualidade. Ideal para personalizar objetos e demonstrar seu amor pela marca.',
    tagline:     'VOCÊ VAI QUERER COLAR TODOS',
    price:       12.90,
    cashbackPct: 15,
    imageUrl:    'https://www.everbrew.com.br/wp-content/uploads/2026/03/Captura-de-tela-2026-03-02-163529.png',
    inStock:     true,
  },
]
