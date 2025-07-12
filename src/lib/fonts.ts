import localFont from 'next/font/local';

export const futuraHeavy = localFont({
  src: '../fonts/futura/Futura URW Heavy Italic.ttf', 
  weight: '700',
  style: 'normal',
  display: 'swap',
  variable: '--font-futura-heavy',
});

export const futuraMedium = localFont({
  src: '../fonts/futura/Futura URW Medium.ttf',  
  weight: '500',
  style: 'normal',
  display: 'swap',
  variable: '--font-futura-medium',
});
