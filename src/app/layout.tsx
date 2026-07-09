import type { Metadata } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.companyName,
      alternateName: [siteConfig.name, siteConfig.nameEn],
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo-star.png`,
      founder: {
        "@type": "Person",
        name: siteConfig.founder,
      },
      email: siteConfig.email,
      description: siteConfig.description,
      slogan: siteConfig.slogan,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} ${siteConfig.nameEn}`,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "zh-CN",
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: pageMetadata.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: `${siteConfig.name} ${siteConfig.nameEn}`,
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} ${siteConfig.nameEn}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded">
          跳转到主要内容
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-16 md:pt-[72px]">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
