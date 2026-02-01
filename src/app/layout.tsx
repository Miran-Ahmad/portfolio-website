import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Md Miran Ahmad | Web & MERN StacK Developer | DevOps Engineer",
  description:
    "Explore my portfolio featuring everything about me, my projects and my Contact information.",
  keywords: [
    "web developer",
    "MERN stack",
    "Next.js",
    "portfolio",
    "React",
    "DevOps",
  ],
  openGraph: {
    title: "Md Miran Ahmad | Web & MERN StacK Developer | DevOps Engineer",
    description:
      "Explore my portfolio featuring everything about me, my projects and my Contact information.",
    url: "miranahmad.in",
    siteName: "Md Miran Ahmad Portfolio",
    images: [
      {
        url: "https://miranahmad.in/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Md Miran Ahmad Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Miran Ahmad | Web & MERN StacK Developer | DevOps Engineer",
    description:
      "Explore my portfolio featuring everything about me, my projects and my Contact information.",
    images: ["https://miranahmad.in/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Person Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Miran Ahmad",
              alternateName: "Miran Ahmad",
              url: "https://www.miranahmad.in",
              sameAs: [
                "https://github.com/Miran-Ahmad",
                "https://www.linkedin.com/in/mdmiranahmad",
              ],
              jobTitle: "Web Developer",
              knowsAbout: ["React", "Next.js", "MERN Stack", "DevOps"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
