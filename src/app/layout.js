import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import WhatsAppBtn from "./_components/WhatsAppBtn";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Desire Div",
  description: "Desire Div - Web Development, Design, and SEO Services Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
        <WhatsAppBtn />
        <Footer />
      </body>
    </html>
  );
}
