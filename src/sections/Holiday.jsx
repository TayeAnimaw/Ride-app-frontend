import SectionHeading from '../components/SectionHeading'
import { IconCalendar, IconShield, IconUsers } from '../components/Icons'

const holidays = ['Enkutatash', 'Meskel', 'Timkat', 'Genna', 'Fasika']

const features = [
  {
    icon: IconCalendar,
    title: 'Book weeks ahead',
    desc: 'Reserve an intercity seat for the holiday rush days or weeks before travel day — not just on the day of.',
  },
  {
    icon: IconUsers,
    title: 'Minibus-scale pooling',
    desc: 'Popular corridors like Addis Ababa – Bahir Dar or Addis Ababa – Hawassa pool across larger vehicles, not just sedans.',
  },
  {
    icon: IconShield,
    title: 'Capped fares, even at peak',
    desc: 'The same fare-transparency principle applies during scarcity — visible, bookable supply, not price-gouging.',
  },
]

export default function Holiday() {
  return (
    <section className="section section-holiday" id="holiday">
      <div className="container">
        <SectionHeading
          eyebrow="Holiday & intercity"
          title="Holiday travel, without the scramble"
          subtitle="Around Enkutatash, Meskel, Timkat, Genna and Fasika, intercity demand outpaces supply. Gebeta Ride turns that into bookable capacity, not a bus-station scrum."
        />

        <div className="holiday-chips">
          {holidays.map((h) => (
            <span className="holiday-chip" key={h}>
              {h}
            </span>
          ))}
        </div>

        <div className="holiday-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <div className="holiday-card" key={title}>
              <div className="holiday-icon">
                <Icon width={20} height={20} strokeWidth={2} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
