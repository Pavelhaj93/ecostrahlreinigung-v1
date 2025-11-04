import localFont from 'next/font/local'

export const industry = localFont({
  src: [
    {
      path: '../public/fonts/IndustryTest-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/IndustryTest-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/IndustryTest-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-industry',
  display: 'swap',
})
