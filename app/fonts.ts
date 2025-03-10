import { Borel, Noto_Sans } from 'next/font/google'

const borel = Borel({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-borel',
})

const notoSans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

export const fonts = {
  borel,
  notoSans,
}
