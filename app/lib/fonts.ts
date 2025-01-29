import { Rufina, Poppins, Roboto_Slab } from 'next/font/google'

export const rufina = Rufina({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", '800', '900'],
  subsets: ["latin"],
  display: "swap",
});

export const roboto_Slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});