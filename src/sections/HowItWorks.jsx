import SectionHeading from '../components/SectionHeading'
import { IconBolt, IconCalendar, IconRoute } from '../components/Icons'

const pillars = [
  {
    icon: IconBolt,
    tone: 'green',
    title: 'On-demand',
    desc: 'Set your pickup and destination, see the fare up front, and get matched with the nearest verified driver in seconds.',
    tag: 'v1 · primary flow',
  },
  {
    icon: IconRoute,
    tone: 'yellow',
    title: 'Route pooling',
    desc: 'Drivers post the corridor they’re already covering. Browse posted routes along your path and book a seat — or a segment — in advance.',
    tag: 'v1.x',
  },
  {
    icon: IconCalendar,
    tone: 'red',
    title: 'Subscription pass',
    desc: 'Commute the same corridor daily? Get a weekly or monthly pass honored by any verified driver running that route.',
    tag: 'v2',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="Three ways to move, one app"
          subtitle="Built for how Addis actually moves — instant dispatch when you need it now, advance visibility when you can plan ahead."
        />

        <div className="pillars-grid">
          {pillars.map(({ icon: Icon, tone, title, desc, tag }) => (
            <div className={`pillar-card tone-${tone}`} key={title}>
              <div className="pillar-icon">
                <Icon width={22} height={22} strokeWidth={2} />
              </div>
              <span className="pillar-tag">{tag}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
