import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { IconAndroid, IconApple, IconCheck } from '../components/Icons'

export default function DownloadCTA() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!value.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="section" id="download">
      <div className="container">
        <div className="download-panel">
          <div className="download-glow" aria-hidden="true" />
          <h2>{t('cta_h')}</h2>
          <p>{t('cta_sub')}</p>

          {submitted ? (
            <div className="download-success">
              <IconCheck width={20} height={20} strokeWidth={2.4} />
              You&rsquo;re on the list — we&rsquo;ll be in touch.
            </div>
          ) : (
            <form className="download-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t('cta_placeholder')}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label={t('cta_placeholder')}
              />
              <button className="btn btn-primary" type="submit">
                {t('cta_button')}
              </button>
            </form>
          )}

          <div className="store-badges">
            <span className="store-badge">
              <IconApple width={20} height={20} />
              <span>
                <em>Coming soon on</em>
                App Store
              </span>
            </span>
            <span className="store-badge">
              <IconAndroid width={20} height={20} />
              <span>
                <em>Coming soon on</em>
                Google Play
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
