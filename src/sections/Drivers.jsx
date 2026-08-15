import { IconCheck, IconStar } from '../components/Icons'

const points = [
  'Fill empty seats on a route you’re already driving instead of running it for one fare',
  'Choose commission-per-trip or a flat subscription access fee — your call',
  'Comfort/Luxury tiers let a newer vehicle earn above the standard-tier cap',
  'Transparent, agreed fares before the trip starts means fewer disputes',
  'Performance bonuses, recognition badges, and referral rewards',
]

export default function Drivers() {
  return (
    <section className="section" id="drivers">
      <div className="container drivers-grid">
        <div className="drivers-visual">
          <div className="earnings-card">
            <div className="earnings-head">
              <span>This week</span>
              <span className="earnings-total">3,240 ETB</span>
            </div>
            <div className="earnings-bars">
              {[38, 62, 45, 80, 54, 70, 30].map((h, i) => (
                <div className="earnings-bar" key={i}>
                  <div className="earnings-bar-fill" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
            <div className="earnings-days">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div className="earnings-badge">
              <IconStar width={16} height={16} strokeWidth={2.1} />
              Top Rated Driver · 4.9
            </div>
          </div>
        </div>

        <div className="drivers-copy">
          <span className="eyebrow">For drivers</span>
          <h2>Earn more per hour you&rsquo;re already driving</h2>
          <p className="section-subtitle align-left">
            Route posting turns dead mileage into paid seats, and flexible pricing means you&rsquo;re
            not locked into one earnings model.
          </p>
          <ul className="drivers-list">
            {points.map((p) => (
              <li key={p}>
                <IconCheck width={18} height={18} strokeWidth={2.2} />
                {p}
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-lg" href="#download">
            Apply to drive
          </a>
        </div>
      </div>
    </section>
  )
}
