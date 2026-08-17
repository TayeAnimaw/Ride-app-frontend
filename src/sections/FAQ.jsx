import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { IconChevronDown } from '../components/Icons'

const faqs = [
  {
    q: 'Which cities does Guzo Ride operate in?',
    a: 'The pilot launches in Addis Ababa, focused on one or two high-demand corridors first, with national expansion planned once driver density supports it.',
  },
  {
    q: 'Can I still pay with cash?',
    a: 'Yes — cash-on-trip is supported from day one, alongside Telebirr, CBE Birr and card payment as they roll out.',
  },
  {
    q: 'How is the platform fee capped?',
    a: 'The standard tier adds a capped service fee — targeted at up to roughly 20 ETB above the base fare — shown as a separate line item before you book.',
  },
  {
    q: 'What happens if a driver cancels a pooled route?',
    a: 'Pooled and route-posted trips have an explicit cancellation and rebooking policy so every affected passenger is notified and reassigned, not left stranded.',
  },
  {
    q: 'Is the app available in Amharic?',
    a: 'Yes — full Amharic and English support ships from the first release, with additional local languages planned post-MVP.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container container-narrow">
        <SectionHeading eyebrow="FAQ" title="Good to know" />

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={f.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <IconChevronDown width={18} height={18} strokeWidth={2.2} className="faq-chevron" />
                </button>
                {isOpen && <p className="faq-answer">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
