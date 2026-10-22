import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageEffects } from "@/components/layout/page-effects";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { JsonLd } from "@/components/ui/json-ld";
import { effectsScript } from "@/lib/effects-script";
import { organizationLd, websiteLd } from "@/lib/jsonld";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Deventhous: Websites that get found and get paid",
    template: "%s · Deventhous",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} light`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: effectsScript }} />
      </head>
      <body className="flex min-h-dvh flex-col overflow-x-clip antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <PageEffects />
          <WhatsAppFab />
        </ThemeProvider>
        <JsonLd data={[organizationLd, websiteLd]} />
      </body>
    </html>
  );
}
