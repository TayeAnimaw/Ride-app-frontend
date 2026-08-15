import SectionHeading from '../components/SectionHeading'
import { IconCheck } from '../components/Icons'

const tiers = [
  {
    name: 'Standard',
    tagline: 'The volume tier — priced like a normal taxi',
    price: 'Meter fare',
    fee: '+ capped platform fee, up to ~20 ETB',
    highlight: false,
    features: [
      'Base fare aligned to local taxi pricing',
      'Platform fee shown separately, capped',
      'Sedan, Bajaj/three-wheeler options',
      'Cash or Telebirr / CBE Birr',
    ],
  },
  {
    name: 'Comfort',
    tagline: 'Newer vehicle, guaranteed AC, more room',
    price: 'Market-based',
    fee: 'No cap — optional upgrade',
    highlight: true,
    features: [
      'Newer, higher-spec vehicles',
      'Selectable at booking, on-demand or posted route',
      'Same fare-transparency guarantee',
      'Priority for pooled comfort seats',
    ],
  },
  {
    name: 'Luxury',
    tagline: 'Premium cars for the trips that matter',
    price: 'Market-based',
    fee: 'No cap — optional upgrade',
    highlight: false,
    features: [
      'Top-tier vehicle class',
      'Preferred/dedicated driver option (v2+)',
      'Ideal for airport & business trips',
      'Filter by tier on every search',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Fare transparency, by design"
          subtitle="Base fare and platform fee are shown separately, before you book — so the price cap is visible, not just claimed."
        />

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div className={`pricing-card${tier.highlight ? ' is-highlight' : ''}`} key={tier.name}>
              {tier.highlight && <span className="pricing-badge">Most flexible</span>}
              <h3>{tier.name}</h3>
              <p className="pricing-tagline">{tier.tagline}</p>
              <div className="pricing-price">{tier.price}</div>
              <div className="pricing-fee">{tier.fee}</div>
              <ul className="pricing-features">
                {tier.features.map((f) => (
                  <li key={f}>
                    <IconCheck width={16} height={16} strokeWidth={2.3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <IconCheck width={18} height={18} strokeWidth={2.2} />
          <p>
            Every trip shows <strong>base fare + platform fee</strong> as two separate line items
            before you confirm — the cap is a configurable Admin policy, reviewed against fuel
            costs, never silently applied.
          </p>
        </div>
      </div>
    </section>
  )
}
