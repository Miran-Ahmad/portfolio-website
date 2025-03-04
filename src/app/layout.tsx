import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Md Miran Ahmad | Web Developer & MERN Stack Expert",
  description: "Explore my portfolio featuring web development projects, including real estate and e-commerce applications.",
  keywords: ["web developer", "MERN stack", "Next.js", "portfolio", "React"],
  openGraph: {
    title: "Md Miran Ahmad | Web Developer & MERN Stack Expert",
    description: "Explore my portfolio featuring web development projects, including real estate and e-commerce applications.",
    url: "https://yourportfolio.com",
    siteName: "Md Miran Ahmad Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Md Miran Ahmad Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Miran Ahmad | Web Developer & MERN Stack Expert",
    description: "Explore my portfolio featuring web development projects, including real estate and e-commerce applications.",
    images: ["https://yourportfolio.com/preview.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
