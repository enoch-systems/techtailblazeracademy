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
                        Our platform is designed to support our learning journey and help you excel in your career with confidence.
                    </p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-black font-normal px-6 py-3 rounded-full text-sm transition-colors" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        See all courses
                    </button>
                </div>

                {/* Right Image with Mockup */}
                <div className="relative order-1 lg:order-2 bg-black p-9 md:p-8 rounded-3xl">
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
