'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    // Initialize Facebook Pixel only once
    if (!initialized.current && typeof window !== 'undefined') {
      // Load Facebook Pixel script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.onload = () => {
        if (window.fbq) {
          window.fbq('init', '808967788955487');
          window.fbq('track', 'PageView');
          lastTrackedUrl.current = window.location.href;
        }
      };
      document.head.appendChild(script);
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    // Track page view on route changes
    if (initialized.current && typeof window !== 'undefined' && window.fbq) {
      const currentUrl = window.location.href;

      // Guard pattern to prevent duplicate tracking
      if (lastTrackedUrl.current !== currentUrl) {
        window.fbq('track', 'PageView');
        lastTrackedUrl.current = currentUrl;
      }
    }
  }, [pathname, searchParams]);

  return null;
}
