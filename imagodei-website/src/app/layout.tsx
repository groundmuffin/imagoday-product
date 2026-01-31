import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Imago Dei 2.0",
  description: "Imago Dei 2.0 Conference",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
