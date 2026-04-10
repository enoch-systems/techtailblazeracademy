'use client'
import React from 'react'
import Image from 'next/image'

const Join = () => {
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
        <div id="join-section" className="w-full px-8 py-16 md:px-8 lg:px-16 bg-white">
            <div className="mx-auto max-w-4xl">
                {/* Top Row Images */}
                <div className="flex justify-between items-center mb-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform -rotate-6">
                        <Image
                            src="/stud1.jpeg"
                            alt="Learner 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform rotate-6">
                        <Image
                            src="/stud2.jpeg"
                            alt="Learner 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-black mb-4" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        JOIN 8,000+ LEARNERS<br />TODAY!
                    </h2>
                    <p className="text-lg text-gray-700 mb-6" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        Start your learning journey now!
                    </p>
                    <a href="https://t.me/techblazeracademy" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3 text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2 relative animate-[zoomSmoke_3s_ease-in-out_infinite] hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.04.01-.18-.07-.26s-.2-.05-.29-.03c-.12.03-2.13 1.36-6.01 4.17-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.22-.52-.89-.28-1.6-.43-1.54-.91.03-.25.38-.5 1.04-.76 4.08-1.78 6.8-2.95 8.16-3.52 3.89-1.62 4.69-1.9 5.29-1.91.12 0 .37.03.54.17.14.12.18.28.2.45-.01.06 0 .22-.01.35z"/>
                        </svg>
                        Join our Telegram
                    </a>
                </div>

                {/* Bottom Row Images */}
                <div className="flex justify-between items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform rotate-6">
                        <Image
                            src="/stud3.jpeg"
                            alt="Learner 3"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden transform -rotate-6">
                        <Image
                            src="/stud4.jpeg"
                            alt="Learner 4"
                            fill
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
