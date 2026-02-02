import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Imago Dei 2.0",
  description: "Conferință internațională despre inteligența artificială, etică și teologie",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Imago Dei 2.0",
  },
  other: {
    "msapplication-TileColor": "#1A3A3A",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
