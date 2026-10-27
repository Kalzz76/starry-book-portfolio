import React from 'react'

export default function TombolPlakat({
  children,
  href,
  onClick,
  varian = 'utama',
  target,
  rel,
  ariaLabel,
  disabled = false,
  kelas = ''
}) {
  const kelasVarian = varian === 'utama'
    ? 'bg-ramuanmerah text-krem border-2 border-emas hover:bg-emas hover:text-sepia shadow-md'
    : 'border-2 border-emas text-emas hover:bg-emas hover:text-sepia'

  const kelasGabung = `inline-flex items-center justify-center gap-2.5 font-judul text-xs sm:text-sm uppercase tracking-widest px-5 sm:px-6 py-2.5 rounded-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emas select-none cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${kelasVarian} ${kelas}`

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={kelasGabung}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={kelasGabung}
    >
      {children}
    </button>
  )
}
