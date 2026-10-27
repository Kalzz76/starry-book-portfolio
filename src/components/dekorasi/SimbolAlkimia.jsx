import React from 'react'

export default function SimbolAlkimia({ unsur, kelas = 'w-6 h-6' }) {
  if (unsur === 'api') {
    return (
      <svg viewBox="0 0 24 24" className={kelas} fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12,3 21,20 3,20" />
      </svg>
    )
  }

  if (unsur === 'air') {
    return (
      <svg viewBox="0 0 24 24" className={kelas} fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12,21 21,4 3,4" />
      </svg>
    )
  }

  if (unsur === 'tanah') {
    return (
      <svg viewBox="0 0 24 24" className={kelas} fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12,21 21,4 3,4" />
        <line x1="6.5" y1="10" x2="17.5" y2="10" />
      </svg>
    )
  }

  if (unsur === 'udara') {
    return (
      <svg viewBox="0 0 24 24" className={kelas} fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12,3 21,20 3,20" />
        <line x1="6.5" y1="14" x2="17.5" y2="14" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={kelas} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <polygon points="12,5 18,17 6,17" />
    </svg>
  )
}
