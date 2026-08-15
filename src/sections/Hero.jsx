import { useLanguage } from '../lib/LanguageContext'
import { IconArrowRight, IconBolt, IconCheck, IconClock, IconMapPin } from '../components/Icons'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge badge-eyebrow">
            <span className="dot-pulse" />
            {t('hero_eyebrow')}
          </span>

          <h1 className="hero-title">
            {t('hero_h1_1')}
            <br />
            <span className="text-accent">{t('hero_h1_2')}</span>
          </h1>

          <p className="hero-sub">{t('hero_sub')}</p>

          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#download">
              {t('hero_cta_primary')}
              <IconArrowRight width={18} height={18} />
            </a>
            <a className="btn btn-outline btn-lg" href="#drivers">
              {t('hero_cta_secondary')}
            </a>
          </div>

          <ul className="hero-proof">
            <li>
              <IconCheck width={16} height={16} strokeWidth={2.4} />
              {t('hero_proof_1')}
            </li>
            <li>
              <IconCheck width={16} height={16} strokeWidth={2.4} />
              {t('hero_proof_2')}
            </li>
            <li>
              <IconCheck width={16} height={16} strokeWidth={2.4} />
              {t('hero_proof_3')}
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <PhoneMock />
          <div className="float-card float-card-top">
            <IconBolt width={16} height={16} strokeWidth={2.2} />
            <div>
              <strong>~5s</strong>
              <span>avg. match broadcast</span>
            </div>
          </div>
          <div className="float-card float-card-bottom">
            <IconClock width={16} height={16} strokeWidth={2.2} />
            <div>
              <strong>Fare shown</strong>
              <span>before you book</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMock() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-map">
          <svg viewBox="0 0 320 260" className="phone-map-svg" aria-hidden="true">
            <path d="M0 60 H320" className="road road-h" />
            <path d="M0 150 H320" className="road road-h" />
            <path d="M70 0 V260" className="road road-v" />
            <path d="M230 0 V260" className="road road-v" />
            <path
              d="M40 210 C 90 150, 120 190, 160 130 S 230 60, 280 40"
              className="route-line"
              fill="none"
            />
            <circle cx="40" cy="210" r="7" className="pin pin-start" />
            <circle cx="280" cy="40" r="7" className="pin pin-end" />
          </svg>
        </div>

        <div className="phone-sheet">
          <div className="phone-sheet-handle" />
          <div className="phone-route-row">
            <IconMapPin width={16} height={16} strokeWidth={2.2} />
            <div className="phone-route-text">
              <strong>Bole → Piassa</strong>
              <span>Departs 8:10 AM · 3 seats left</span>
            </div>
            <span className="phone-price">45 ETB</span>
          </div>
          <div className="phone-route-row phone-route-row-alt">
            <IconMapPin width={16} height={16} strokeWidth={2.2} />
            <div className="phone-route-text">
              <strong>Megenagna → Piassa</strong>
              <span>Departs 8:25 AM · 1 seat left</span>
            </div>
            <span className="phone-price">30 ETB</span>
          </div>
          <button className="phone-cta" type="button" tabIndex={-1}>
            Book this seat
          </button>
        </div>
      </div>
    </div>
  )
}
