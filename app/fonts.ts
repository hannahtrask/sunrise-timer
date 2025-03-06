import { Kablammo, Noto_Sans } from 'next/font/google'

const kablamo = Kablammo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kablamo',
})

const notoSans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

export const fonts = {
  kablamo,
  notoSans,
}
