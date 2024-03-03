import {Inter, Lusitana} from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  weight: ['400', '700'],
})
