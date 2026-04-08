'use client'
import React from 'react'
import Image from 'next/image'

const Video = () => {
    return (
        <div className="w-full px-4 py-12 md:px-8 lg:px-16">
            <div className="mx-auto max-w-8xl grid gap-8 lg:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="space-y-6 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tighter leading-tight" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        A Platform Designed <br /> For Success
                    </h2>
                    <p className="text-lg text-black " style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        Our platform is designed to support your learning journey and help you excel in your career with confidence.
                    </p>
                    <a href="https://wa.me/2349012345678?text=Hello!%20I'm%20interested%20in%20joining%20your%20learning%20community.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg font-medium rounded-full transition-colors flex items-center justify-center gap-2 animate-[ring_2s_ease-in-out_infinite] hover:animate-none" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.327-1.682a9.86 9.86 0 005.26 1.483h.004c5.45 0 9.884-4.434 9.884-9.884 0-2.64-1.03-5.122-2.898-6.988z"/>
                        </svg>
                        Join our WhatsApp class
                    </a>
                </div>

                {/* Right Image with Mockup */}
                <div className="relative order-1 lg:order-2 bg-black p-9 md:p-8 rounded-3xl z-[200] -mt-40 lg:-mt-0">
                    {/* Dark device frame - now covers both image and stats */}
                    <div className="bg-[#1a1a1a] rounded-3xl p-4 md:p-6 relative">
                        {/* Inner image container */}
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src="/vado.jpg"
                                alt="Platform preview"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating stats card - now inside dark frame */}
                        <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-white rounded-2xl p-4 shadow-xl">
                            <div className="flex items-baseline gap-1 mb-2" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                <span className="text-3xl font-bold text-black">2</span>
                                <span className="text-xl text-gray-400">/</span>
                                <span className="text-xl text-gray-400">8</span>
                            </div>
                            {/* Bar chart */}
                            <div className="flex items-end gap-1 h-12" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                <div className="w-4 h-4 bg-amber-400 rounded-sm"></div>
                                <div className="w-4 h-6 bg-amber-400 rounded-sm"></div>
                                <div className="w-4 h-8 bg-amber-400 rounded-sm"></div>
                                <div className="w-4 h-12 bg-amber-500 rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
