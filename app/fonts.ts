import { Kablammo } from 'next/font/google'

const kablamo = Kablammo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kablamo',
})

export const fonts = {
  kablamo,
}