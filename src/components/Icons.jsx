const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconBolt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  )
}

export function IconRoute(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="19" r="2.4" />
      <circle cx="18" cy="5" r="2.4" />
      <path d="M6 16.6V13a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4" />
    </svg>
  )
}

export function IconCalendar(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3.5 10.5h17" />
    </svg>
  )
}

export function IconWallet(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6.5" width="18" height="13" rx="3" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8L14.8 10" />
    </svg>
  )
}

export function IconUsers(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19c.6-3.3 3.2-5.3 6.2-5.3s5.6 2 6.2 5.3" />
      <circle cx="17" cy="7.6" r="2.5" />
      <path d="M15.5 13.9c2.5.2 4.4 2 4.9 4.7" />
    </svg>
  )
}

export function IconMapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function IconGift(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="9" width="17" height="4.2" rx="1" />
      <path d="M5 13.2V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.8M12 9v12" />
      <path d="M12 9C9.5 9 8 7.6 8 6a2.3 2.3 0 0 1 4-1.5A2.3 2.3 0 0 1 16 6c0 1.6-1.5 3-4 3Z" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}

export function IconTruck(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7" width="12" height="9.5" rx="1.5" />
      <path d="M14.5 10h3.6L21 13.3v3.2h-6.5z" />
      <circle cx="7" cy="18.3" r="1.7" />
      <circle cx="17.2" cy="18.3" r="1.7" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z" />
    </svg>
  )
}

export function IconGlobe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  )
}

export function IconChevronDown(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  )
}

export function IconX(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  )
}

export function IconApple(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M17.05 12.5c-.03-2.5 2.04-3.7 2.13-3.76-1.16-1.7-2.98-1.94-3.63-1.96-1.55-.16-3.02.91-3.8.91-.79 0-2-.89-3.29-.86-1.7.02-3.26.98-4.13 2.5-1.77 3.06-.45 7.6 1.26 10.08.84 1.21 1.83 2.57 3.13 2.52 1.26-.05 1.73-.81 3.25-.81 1.51 0 1.94.81 3.27.78 1.35-.02 2.2-1.22 3.02-2.44.96-1.4 1.35-2.76 1.37-2.83-.03-.01-2.62-1-2.65-3.98Zm-2.5-7.3c.68-.83 1.15-1.98 1.02-3.13-.99.04-2.18.66-2.89 1.49-.63.73-1.19 1.92-1.04 3.04 1.1.09 2.22-.56 2.9-1.4Z" />
    </svg>
  )
}

export function IconAndroid(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M6.5 9.5v6.2a1 1 0 0 0 1 1h.9v3.1a1.4 1.4 0 0 0 2.8 0v-3.1h1.6v3.1a1.4 1.4 0 0 0 2.8 0v-3.1h.9a1 1 0 0 0 1-1V9.5h-11ZM5.6 9a1.3 1.3 0 0 0-1.3 1.3v4.6a1.3 1.3 0 0 0 2.6 0v-4.6A1.3 1.3 0 0 0 5.6 9Zm12.8 0a1.3 1.3 0 0 0-1.3 1.3v4.6a1.3 1.3 0 0 0 2.6 0v-4.6A1.3 1.3 0 0 0 18.4 9ZM8.9 3.6l-.8-1.4a.35.35 0 0 0-.6.35l.77 1.34a5.9 5.9 0 0 0-2.57 4.3h11.6a5.9 5.9 0 0 0-2.57-4.3l.77-1.34a.35.35 0 0 0-.6-.35l-.8 1.4a6.4 6.4 0 0 0-5.2 0ZM9 6.3a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm6 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z" />
    </svg>
  )
}
