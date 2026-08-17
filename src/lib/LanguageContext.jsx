import { createContext, useContext, useMemo, useState } from 'react'

const strings = {
  nav_how: { en: 'How it works', am: 'እንዴት እንደሚሰራ' },
  nav_pricing: { en: 'Pricing', am: 'ዋጋ' },
  nav_drivers: { en: 'For drivers', am: 'ለአሽከርካሪዎች' },
  nav_holiday: { en: 'Holiday travel', am: 'የበዓል ጉዞ' },
  nav_faq: { en: 'FAQ', am: 'ጥያቄዎች' },
  nav_cta: { en: 'Get the app', am: 'መተግበሪያውን ያግኙ' },

  hero_eyebrow: { en: 'Now piloting in Addis Ababa', am: 'በአዲስ አበባ በሙከራ ላይ' },
  hero_h1_1: { en: 'Stop waiting for a taxi', am: 'ታክሲ ሲመጣ' },
  hero_h1_2: { en: "that isn't coming.", am: 'መጠበቅ ይብቃ።' },
  hero_sub: {
    en: 'Guzo Ride blends instant ride-hailing, driver-declared routes you can book ahead, and commuter subscription passes — one app, priced close to a normal taxi, not above it.',
    am: 'ጉዞ ራይድ ፈጣን ታክሲ ጥሪ፣ አሽከርካሪዎች አስቀድመው የሚያሳውቁትን መንገድ ቦታ ማስያዝ እና ወርሃዊ የደንበኝነት ትኬቶችን በአንድ መተግበሪያ ያቀርባል — ከመደበኛ ታክሲ ዋጋ ጋር ተመጣጣኝ በሆነ ዋጋ።',
  },
  hero_cta_primary: { en: 'Get the app', am: 'መተግበሪያውን ያውርዱ' },
  hero_cta_secondary: { en: 'I want to drive', am: 'አሽከርካሪ መሆን እፈልጋለሁ' },
  hero_proof_1: { en: 'Cash or Telebirr', am: 'ጥሬ ገንዘብ ወይም ቴሌብር' },
  hero_proof_2: { en: 'KYC-verified drivers', am: 'የተረጋገጡ አሽከርካሪዎች' },
  hero_proof_3: { en: 'English & አማርኛ', am: 'እንግሊዝኛ እና አማርኛ' },

  cta_h: { en: 'Be the first to ride.', am: 'መጀመሪያ ተሳፋሪ ይሁኑ።' },
  cta_sub: {
    en: "Join the waitlist and we'll notify you the moment Guzo Ride opens in your corridor.",
    am: 'ወደ ማብቂያ ዝርዝር ይግቡ፤ ጉዞ ራይድ በአካባቢዎ ሲከፈት እናሳውቅዎታለን።',
  },
  cta_placeholder: { en: 'Phone number or email', am: 'ስልክ ቁጥር ወይም ኢሜይል' },
  cta_button: { en: 'Notify me', am: 'አሳውቀኝ' },

  footer_tagline: {
    en: 'A ride-hailing, route-pooling and subscription platform built for how Ethiopia actually moves.',
    am: 'ኢትዮጵያ በትክክል ለምትንቀሳቀስበት መንገድ የተገነባ የታክሲ፣ የመንገድ-መጋራት እና የደንበኝነት መድረክ።',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const value = useMemo(
    () => ({
      lang,
      toggle: () => setLang((l) => (l === 'en' ? 'am' : 'en')),
      t: (key) => strings[key]?.[lang] ?? strings[key]?.en ?? key,
    }),
    [lang],
  )
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
