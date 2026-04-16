export function ManifestoSection() {
  return (
    <section id="manifesto" className="section-padding border-y border-smoke relative overflow-hidden">
      <span
        className="absolute font-display text-[22vw] text-iron whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
        aria-hidden="true"
      >
        EVER
      </span>

      <div className="container-main relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">

          {/* Stats */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-10">
            {[
              { value: '2017', label: 'Fundação' },
              { value: '7+',   label: 'Anos de história' },
              { value: '13',   label: 'Rótulos ativos' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-[3rem] text-fire leading-none">{value}</div>
                <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ash mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="eyebrow justify-center">Nossa Filosofia</p>
            <blockquote className="font-display leading-[1.05] text-bone" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
              &ldquo;Não fazemos cerveja<br />para{' '}
              <em className="text-fire not-italic">todo mundo.</em>
              <br />Não porque não<br />podemos.
              <br />Porque{' '}
              <em className="text-fire not-italic">escolhemos.</em>&rdquo;
            </blockquote>
            <footer className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-ash mt-8">
              — Cervejaria Everbrew · Santos/SP
            </footer>
          </div>

          {/* Body */}
          <div className="text-[0.95rem] text-ash leading-[1.8] space-y-5">
            <p>
              Nascida em Santos em 2017, a Everbrew foi criada por pessoas que se recusaram a fazer cerveja mediana. Nossa filosofia é simples: intensidade máxima em cada lote.
            </p>
            <p>
              Do mosto ao enlatamento, cada detalhe é obsessivamente cuidado. Usamos lúpulos premium, processos artesanais e a coragem de fazer diferente — sempre.
            </p>
            <p>
              O resultado? Cervejas que marcam. Experiências que voltam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
