import { useEffect, useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { IconGlobe, IconMenu, IconRoute, IconX } from './Icons'

const links = [
  { key: 'nav_how', href: '#how-it-works' },
  { key: 'nav_pricing', href: '#pricing' },
  { key: 'nav_drivers', href: '#drivers' },
  { key: 'nav_holiday', href: '#holiday' },
  { key: 'nav_faq', href: '#faq' },
]

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <IconRoute width={20} height={20} strokeWidth={2.1} />
          </span>
          <span className="brand-name">Guzo Ride</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.key} href={l.href}>
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            <IconGlobe width={16} height={16} strokeWidth={2} />
            {lang === 'en' ? 'EN' : 'አማ'}
          </button>
          <a className="btn btn-primary btn-sm" href="#download">
            {t('nav_cta')}
          </a>
          <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <IconX width={22} height={22} /> : <IconMenu width={22} height={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l.key} href={l.href} onClick={() => setOpen(false)}>
              {t(l.key)}
            </a>
          ))}
          <a className="btn btn-primary" href="#download" onClick={() => setOpen(false)}>
            {t('nav_cta')}
          </a>
        </div>
      )}
    </header>
  )
}
