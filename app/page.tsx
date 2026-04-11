'use client'

import Home from '@/components/home'
import Video from '@/components/video'
import WhatYouGet from '@/components/whatyouget'
import Join from '@/components/join'
import FAQ from '@/components/faq'
import WhatsAppButton from '@/components/whatsapp'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Home />
      <Video />
      <WhatYouGet />
      <Join />
      <FAQ />
      <div className="flex justify-center py-8">
        <WhatsAppButton />
      </div>
      <Footer />
    </main>
  );
}

