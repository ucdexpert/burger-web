import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theburgerhouse.com"),
  title: {
    default: "The Burger House | Luxury Gourmet Burgers",
    template: "%s | The Burger House",
  },
  description: "Experience the ultimate burger experience with our premium gourmet burgers, premium ingredients, and a cinematic dining atmosphere.",
  keywords: ["gourmet burgers", "luxury burger restaurant", "burger delivery", "premium burgers"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Burger House | Luxury Gourmet Burgers",
    description: "Experience the ultimate burger experience with our premium gourmet burgers.",
    url: "https://theburgerhouse.com",
    siteName: "The Burger House",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "The Burger House - Luxury Gourmet Burgers",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Burger House | Luxury Gourmet Burgers",
    description: "Premium burgers and an unforgettable dining experience.",
    images: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=630&fit=crop&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f5f5f4]">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "The Burger House",
              url: "https://theburgerhouse.com",
              telephone: "+1234567890",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Gourmet Lane",
                addressLocality: "Luxury City",
                addressRegion: "FL",
                postalCode: "90210",
                addressCountry: "US",
              },
              servesCuisine: "American",
              priceRange: "$$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "11:00",
                  closes: "22:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
