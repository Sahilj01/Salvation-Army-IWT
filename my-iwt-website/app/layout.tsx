import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'The Salvation Army | Indian Western Territory',
  description: 'Heart to God, Hand to Man',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakarta.variable}>
      <body
        className={`${plusJakarta.className} bg-iwt-bg text-iwt-dark antialiased font-body`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
