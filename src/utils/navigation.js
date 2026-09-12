const LEGAL_ROUTES = {
  'Privacy Policy': '/privacy',
  'Terms and Condition': '/termandcondition',
  'FAQ': '/faq',
}

export function navigateTo(link, onDone) {
  if (LEGAL_ROUTES[link]) {
    window.open(LEGAL_ROUTES[link], '_blank')
  } else {
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }
  onDone?.()
}
