export const siteConfig = {
  name: 'PPC',
  description: 'Professional Security Services',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://campaign-appsite.netlify.app',
  ogImage: '/og.jpg',
  author: 'uniga',
  links: {
    twitter: 'https://twitter.com/username'
  }
} as const