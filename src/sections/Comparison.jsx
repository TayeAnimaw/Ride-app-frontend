import SectionHeading from '../components/SectionHeading'
import { IconCheck, IconX } from '../components/Icons'

const rows = [
  {
    dimension: 'Pricing model',
    typical: 'Often above standard taxi rates',
    station: 'Negotiated, inconsistent, spikes at peak',
    us: 'Standard tier capped near normal taxi pricing',
  },
  {
    dimension: 'Advance route visibility',
    typical: 'On-demand dispatch only',
    station: 'First-come, first-served',
    us: 'Drivers post routes; book ahead of time',
  },
  {
    dimension: 'Ride pooling',
    typical: 'Limited or not offered',
    station: 'Informal, not app-bookable',
    us: 'Built-in seat/segment pooling',
  },
  {
    dimension: 'Subscription passes',
    typical: 'Not a core feature',
    station: 'Not available',
    us: 'Corridor-based commuter passes',
  },
  {
    dimension: 'Fare transparency',
    typical: 'Varies by app',
    station: 'Negotiated, no fixed reference',
    us: 'Base fare + fee shown separately',
  },
]

export default function Comparison() {
  return (
    <section className="section section-tinted">
      <div className="container">
        <SectionHeading
          eyebrow="Why Guzo Ride"
          title="Built to close a real gap"
          subtitle="A positioning reference against typical ride-hailing apps and station-based taxis — validated periodically, not a fixed claim."
        />

        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Typical ride-hailing</th>
                <th>Station-based taxis</th>
                <th className="col-us">Guzo Ride</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.dimension}>
                  <th scope="row">{r.dimension}</th>
                  <td>
                    <IconX width={14} height={14} strokeWidth={2.4} className="cell-icon icon-muted" />
                    {r.typical}
                  </td>
                  <td>
                    <IconX width={14} height={14} strokeWidth={2.4} className="cell-icon icon-muted" />
                    {r.station}
                  </td>
                  <td className="col-us">
                    <IconCheck width={14} height={14} strokeWidth={2.6} className="cell-icon icon-good" />
                    {r.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
