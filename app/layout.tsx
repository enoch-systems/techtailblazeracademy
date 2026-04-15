import type { Metadata } from "next";
import "./globals.css";
import FacebookPixel from "@/components/facebook-pixel";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tech Trailblazer Academy - We Tech Different",
  description: "Join Tech Trailblazer Academy and master cutting-edge tech skills through practical, hands-on online learning. From coding to cybersecurity, we teach tech differently with real-world projects, expert mentors, and career-focused training that actually works.",
  keywords: "tech academy, online tech courses, coding bootcamp, web development, cybersecurity, data science, practical tech training, hands-on learning, tech skills, programming courses, tech education, career development",
  authors: [{ name: "Tech Trailblazer Academy" }],
  creator: "Tech Trailblazer Academy",
  publisher: "Tech Trailblazer Academy",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/logo.png", sizes: "any", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techtrailblazeracademy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tech Trailblazer Academy - We Tech Different",
    description: "Master cutting-edge tech skills through practical, hands-on online learning. Real projects, expert mentors, career-focused training.",
    url: "https://techtrailblazeracademy.com",
    siteName: "Tech Trailblazer Academy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tech Trailblazer Academy - We Tech Different",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Trailblazer Academy - We Tech Different",
    description: "Master cutting-edge tech skills through practical, hands-on online learning. Real projects, expert mentors.",
    images: ["/logo.png"],
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Tech Trailblazer Academy",
  "description": "Master cutting-edge tech skills through practical, hands-on online learning. Real projects, expert mentors, career-focused training.",
  "url": "https://techtrailblazeracademy.com",
  "logo": "https://techtrailblazeracademy.com/logo.png",
  "sameAs": [
    "https://twitter.com/techtrailblazer",
    "https://linkedin.com/company/techtrailblazer-academy"
  ],
  "offers": {
    "@type": "EducationalOccupationalProgram",
    "name": "Tech Skills Training Programs",
    "description": "Comprehensive online tech education with hands-on projects",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Tech Trailblazer Academy"
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Disable browser scroll restoration
                window.history.scrollRestoration = 'manual';
                
                // Scroll to top immediately
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                
                // Also scroll after a short delay to ensure it works
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 100);
              }
            `,
          }}
        />
        <meta name="facebook-domain-verification" content="duxa7kyhhskwb27009uj5ns45kvc9o" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
