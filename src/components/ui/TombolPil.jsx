import React from 'react'

export default function TombolPil({
  children,
  varian = 'utama',
  href,
  onClick,
  target,
  rel,
  tipe = 'button',
  disabled = false,
  kelas = '',
  ariaLabel
}) {
  let gayaVarian = 'bg-tinta text-kertas hover:bg-hutan shadow-lembut'
  if (varian === 'sekunder') {
    gayaVarian = 'border border-hutan text-hutan hover:bg-hutan hover:text-kertas'
  } else if (varian === 'emas') {
    gayaVarian = 'border border-emas/90 text-emas hover:bg-emas hover:text-malamgelap bg-malamgelap/70 shadow-lg'
  } else if (varian === 'terang') {
    gayaVarian = 'bg-kertas text-hutan hover:bg-pasir shadow-lembut'
  } else if (varian === 'jingga') {
    gayaVarian = 'bg-jingga text-kertas hover:bg-hutan shadow-lembut'
  }

  const gayaDasar = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ' + gayaVarian + ' ' + kelas

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={gayaDasar}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={tipe}
      disabled={disabled}
      className={gayaDasar}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
