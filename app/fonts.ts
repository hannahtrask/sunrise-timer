import { Kablammo } from 'next/font/google'

const copse = Kablammo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-copse',
})

export const fonts = {
  copse,
}
