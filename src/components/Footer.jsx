import { useLanguage } from '../lib/LanguageContext'
import { IconRoute } from './Icons'

const columns = [
  {
    title: 'Product',
    links: ['How it works', 'Pricing', 'Route pooling', 'Subscription passes', 'Holiday travel'],
  },
  {
    title: 'Drivers',
    links: ['Apply to drive', 'Earnings', 'Vehicle tiers', 'Driver support'],
  },
  {
    title: 'Company',
    links: ['About', 'Safety', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Terms of service', 'Privacy policy', 'Driver agreement'],
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark">
              <IconRoute width={20} height={20} strokeWidth={2.1} />
            </span>
            <span className="brand-name">Guzo Ride</span>
          </a>
          <p>{t('footer_tagline')}</p>
        </div>

        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Guzo Ride. Addis Ababa pilot — working title.</span>
        <span className="footer-lang">English · አማርኛ</span>
      </div>
    </footer>
  )
}
