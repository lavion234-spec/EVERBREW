const TICKER_ITEMS = [
  { text: 'BONES FOR LIFE',          highlight: true },
  { text: 'JUICY IPA',               highlight: false },
  { text: 'EXTREMAMENTE ARTESANAL',  highlight: true },
  { text: 'SANTOS / SP',             highlight: false },
  { text: 'HOP FORWARD',             highlight: false },
  { text: 'DOUBLE IPA',              highlight: true },
  { text: 'IMPERIAL SOUR',           highlight: false },
  { text: 'SINCE 2017',              highlight: false },
  { text: 'CERVEJA EXTREMA',         highlight: true },
]

export function TickerBanner() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="bg-iron border-y border-smoke py-[18px] overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-ticker w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={[
              'font-display text-[1.1rem] tracking-[0.12em] px-8',
              item.highlight ? 'text-fire' : 'text-ash',
            ].join(' ')}
          >
            {item.text}
            {i < doubled.length - 1 && (
              <span className="font-mono text-[0.5rem] text-smoke mx-1 align-middle">
                •
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
