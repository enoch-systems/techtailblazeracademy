'use client'

import Home from '@/components/home'
import Video from '@/components/video'
import WhatYouGet from '@/components/whatyouget'
import Join from '@/components/join'
import FAQ from '@/components/faq'
import TelegramButton from '@/components/tele'
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
        <TelegramButton />
      </div>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349162919586?text=Hello!%20I'm%20reaching%20out%20from%20the%20Tech%20Trailblazer%20Academy%20website.%20I'm%20interested%20in%20your%20courses%20and%20would%20love%20to%20learn%20more%20about%20your%20programs.%20Could%20you%20please%20provide%20more%20information%20about%20enrollment%20and%20course%20details?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[10000000] bg-white rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        style={{
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        <img src="/ceoo.png" alt="CEO" className="w-14 h-14 rounded-full" />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-green-600 font-semibold text-xs whitespace-nowrap">
          Reach us
        </div>
      </a>
      
      {/* Floating Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </main>
  );
}
