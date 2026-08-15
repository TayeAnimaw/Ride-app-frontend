import { IconCheck, IconMapPin, IconUsers } from '../components/Icons'

const stops = [
  { label: 'Bole', sub: 'Driver origin', kind: 'start' },
  { label: 'Megenagna', sub: 'Your pickup', kind: 'mid' },
  { label: 'Arat Kilo', sub: '2 passengers pooling', kind: 'mid' },
  { label: 'Piassa', sub: 'Driver destination', kind: 'end' },
]

export default function RouteShowcase() {
  return (
    <section className="section section-tinted">
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <span className="eyebrow">Matching engine</span>
          <h2>
            See tomorrow&rsquo;s ride, <span className="text-accent">today.</span>
          </h2>
          <p className="section-subtitle align-left">
            Drivers declare a route once. The matching engine finds every passenger whose trip
            overlaps that corridor — even if it&rsquo;s only part of the driver&rsquo;s full route —
            and lets multiple passengers book distinct segments of the same trip.
          </p>

          <ul className="showcase-list">
            <li>
              <IconCheck width={18} height={18} strokeWidth={2.2} />
              Seat-and-segment booking, not just headcount
            </li>
            <li>
              <IconCheck width={18} height={18} strokeWidth={2.2} />
              Ranked by route overlap, detour cost, price and rating
            </li>
            <li>
              <IconCheck width={18} height={18} strokeWidth={2.2} />
              Configurable detour tolerance, set by Admin per corridor
            </li>
          </ul>
        </div>

        <div className="showcase-visual">
          <div className="route-card">
            <div className="route-card-head">
              <div>
                <strong>Bole → Piassa</strong>
                <span>Today · 8:10 AM · Standard vehicle</span>
              </div>
              <span className="route-card-price">45 ETB</span>
            </div>

            <div className="route-timeline">
              {stops.map((s, i) => (
                <div className={`route-stop kind-${s.kind}`} key={s.label}>
                  <span className="route-stop-node" />
                  {i < stops.length - 1 && <span className="route-stop-line" />}
                  <div className="route-stop-body">
                    <strong>{s.label}</strong>
                    <span>{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="route-card-foot">
              <span>
                <IconUsers width={16} height={16} strokeWidth={2.1} /> 3 seats left of 4
              </span>
              <span>
                <IconMapPin width={16} height={16} strokeWidth={2.1} /> 78% overlap with your trip
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
