import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax({ children, rentang = 24, kelas = '' }) {
  const ref = useRef(null)
  const [bisaGerak, setBisaGerak] = useState(false)

  useEffect(() => {
    const cekLayar = () => {
      const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const layarKecil = window.innerWidth < 768
      setBisaGerak(!kurangiGerak && !layarKecil)
    }

    cekLayar()
    window.addEventListener('resize', cekLayar)
    return () => window.removeEventListener('resize', cekLayar)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-rentang, rentang])

  if (!bisaGerak) {
    return <div className={kelas}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ y }} className={kelas}>
      {children}
    </motion.div>
  )
}
