import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Recoda Intelligence — Cloud Digital Signage CMS",
  description:
    "One cloud dashboard. Every screen, intelligently controlled. Manage digital signage across hundreds of locations — design, schedule, monitor, and launch campaigns in minutes.",
  keywords: [
    "digital signage",
    "cloud CMS",
    "screen management",
    "signage software",
    "Recoda Intelligence",
    "digital display",
    "content management",
  ],
  authors: [{ name: "Recoda Intelligence" }],
  creator: "Recoda Intelligence",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://recodaintelligence.com",
    siteName: "Recoda Intelligence",
    title: "Recoda Intelligence — Cloud Digital Signage CMS",
    description:
      "One cloud dashboard. Every screen, intelligently controlled. Power 1,200+ screens across 80+ cities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recoda Intelligence — Cloud Digital Signage CMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recoda Intelligence — Cloud Digital Signage CMS",
    description: "One cloud dashboard. Every screen, intelligently controlled.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-white antialiased" style={{ cursor: "none" }}>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
