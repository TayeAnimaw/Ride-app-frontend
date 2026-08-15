import { IconGift, IconStar, IconUsers } from '../components/Icons'

const cards = [
  {
    icon: IconStar,
    title: 'Points & tiers',
    desc: 'Earn points on every trip. Reach Bronze, Silver or Gold for priority matching and small fare discounts.',
  },
  {
    icon: IconUsers,
    title: 'Refer & earn',
    desc: 'Invite a friend — you both get rewarded once they complete their first trip.',
  },
  {
    icon: IconGift,
    title: 'Coupons & campaigns',
    desc: 'First-ride discounts, seasonal holiday codes, and targeted offers, tracked right in your account.',
  },
]

export default function Rewards() {
  return (
    <section className="section">
      <div className="container">
        <div className="rewards-banner">
          <div className="rewards-copy">
            <span className="eyebrow eyebrow-on-dark">Feedback & rewards</span>
            <h2>Every trip makes the platform a little better</h2>
            <p>
              A quick happy / neutral / unhappy check after every ride routes real feedback to
              Admin — and feeds a rewards program that thanks you for sticking around.
            </p>
          </div>
          <div className="rewards-cards">
            {cards.map(({ icon: Icon, title, desc }) => (
              <div className="rewards-card" key={title}>
                <Icon width={20} height={20} strokeWidth={2} />
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
