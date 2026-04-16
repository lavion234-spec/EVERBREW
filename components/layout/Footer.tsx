import Link from 'next/link'

const LINKS = {
  cervejas: [
    { label: 'Todos os Rótulos', href: '/cervejas' },
    { label: 'Juicy IPAs',       href: '/cervejas?estilo=juicy-ipa' },
    { label: 'Double IPAs',      href: '/cervejas?estilo=double-ipa' },
    { label: 'Imperial Sours',   href: '/cervejas?estilo=imperial-sour' },
    { label: 'Light IPAs',       href: '/cervejas?estilo=light-ipa' },
    { label: 'Novos Lotes 🔥',  href: '/cervejas?filtro=novos' },
  ],
  everclub: [
    { label: 'O que é o EverClub?', href: '/everclub' },
    { label: 'Planos EverCoins',    href: '/everclub#planos' },
    { label: 'Benefícios',          href: '/everclub#beneficios' },
    { label: 'Depoimentos',         href: '/everclub#depoimentos' },
  ],
  loja: [
    { label: 'Souvenirs',         href: '/loja' },
    { label: 'Copo Lata 475ml',   href: '/loja' },
    { label: 'Copo Atlanta 470ml', href: '/loja' },
    { label: 'Kits & Combos',     href: '/loja#kits' },
  ],
  empresa: [
    { label: 'Since 2017 · Santos/SP', href: '/' },
    { label: 'Contatos',               href: 'https://wa.me/5513997034189' },
    { label: 'Seja um Parceiro',       href: 'https://wa.me/5513997034189' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-carbon border-t border-smoke pt-20 pb-10">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-[2.5rem] tracking-[0.08em] text-bone hover:text-fire transition-colors">
              EVER<span className="text-fire">BREW</span>
            </Link>
            <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ash mt-1 mb-6">
              Bones for Life · Santos/SP · Since 2017
            </p>
            <p className="text-[0.8rem] text-ash leading-[1.8] mb-7 max-w-[320px]">
              Cervejaria artesanal de Santos, SP. Produzimos cervejas hop-forward de intensidade extrema para apreciadores exigentes.
            </p>
            <div className="flex gap-3 mb-6">
              {[
                { label: 'IG', href: 'https://instagram.com/cervejariaeverbrew', ariaLabel: 'Instagram' },
                { label: 'FB', href: 'https://facebook.com/cervejariaeverbrew', ariaLabel: 'Facebook' },
                { label: 'UT', href: 'https://untappd.com/CervejariaEverBrew/beer', ariaLabel: 'Untappd' },
                { label: 'WA', href: 'https://wa.me/5513997034189', ariaLabel: 'WhatsApp' },
              ].map(({ label, href, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="w-9 h-9 border border-smoke flex items-center justify-center text-ash text-[0.8rem] font-bold hover:border-bone hover:text-bone transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
            <a href="mailto:sac@everbrew.com.br" className="font-mono text-[0.65rem] text-steel hover:text-ash transition-colors">
              sac@everbrew.com.br
            </a>
          </div>

          {/* Links */}
          {[
            { title: 'Cervejas',  links: LINKS.cervejas },
            { title: 'EverClub', links: LINKS.everclub },
            { title: 'Loja',      links: LINKS.loja },
            { title: 'Empresa',   links: LINKS.empresa },
          ].map(({ title, links }) => (
            <div key={title}>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-bone mb-5 pb-3 border-b border-smoke">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[0.8rem] text-ash hover:text-bone transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-smoke flex flex-col md:flex-row items-start md:items-center justify-between gap-4 flex-wrap">
          <p className="font-mono text-[0.6rem] tracking-[0.08em] text-steel leading-[1.8]">
            © 2017–{new Date().getFullYear()} Cervejaria Everbrew. Todos os direitos reservados.
            <br className="hidden md:block" />
            Proibida a venda e consumo de bebidas alcoólicas para menores de 18 anos. Beba com moderação.
          </p>
          <div className="font-display text-[1.2rem] tracking-[0.1em] text-steel border border-smoke px-2.5 py-1">
            18+
          </div>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Master', 'Pix', 'Boleto', 'AmEx'].map((method) => (
              <span
                key={method}
                className="bg-iron border border-smoke px-2.5 py-[5px] font-mono text-[0.55rem] tracking-[0.08em] uppercase text-ash"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
