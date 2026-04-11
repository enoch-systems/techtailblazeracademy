'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import TelegramButton from './tele'

const Join = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.2 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style jsx>{`
                @keyframes zoomSmoke {
                    0%, 100% {
                        transform: scale(1);
                        filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.2));
                    }
                    25% {
                        transform: scale(1.05);
                        filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
                    }
                    50% {
                        transform: scale(1.1);
                        filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
                    }
                    75% {
                        transform: scale(1.05);
                        filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
                    }
                }
            `}</style>
            <style jsx>{`
                @keyframes zoomIn {
                    0% {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        <div ref={sectionRef} id="join-section" className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-16 bg-white">
            <div className="mx-auto max-w-4xl px-4 md:px-0">
                {/* Top Row Images */}
                <div className="flex justify-between items-center mb-6 md:mb-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform -rotate-6">
                        <Image
                            src="/stud1.jpeg"
                            alt="Learner 1"
                            fill
                            sizes="160px"
                            quality={80}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform rotate-6">
                        <Image
                            src="/stud2.jpeg"
                            alt="Learner 2"
                            fill
                            sizes="160px"
                            quality={80}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className={`text-center mb-6 md:mb-8 ${isVisible ? 'animate-[zoomIn_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        JOIN 8,000+ LEARNERS<br />TODAY!
                    </h2>
                    <p className="text-lg text-gray-700 mb-6" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        Start your learning journey now!
                    </p>
                    <TelegramButton />
                </div>

                {/* Bottom Row Images */}
                <div className="flex justify-between items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform rotate-6">
                        <Image
                            src="/stud3.jpeg"
                            alt="Learner 3"
                            fill
                            sizes="160px"
                            quality={80}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform -rotate-6">
                        <Image
                            src="/stud4.jpeg"
                            alt="Learner 4"
                            fill
                            sizes="160px"
                            quality={80}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Join
