import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/footer";
import Header from "@/components/header";

const SITE_TITLE = "Bahá’ís of Trinidad and Tobago";
const SITE_DESCRIPTION =
  "The official website of the Bahá’ís of Trinidad and Tobago.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bahaitt.com"),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vramdhanie",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="content">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0VMY4L62K0"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0VMY4L62K0');
          `}
        </Script>
      </body>
    </html>
  );
}
