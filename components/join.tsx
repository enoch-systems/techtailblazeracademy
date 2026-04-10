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
                    <a href="https://wa.me/2349162919586?text=Hello!%20I'm%20interested%20in%20joining%20your%20learning%20community.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2 relative animate-[zoomSmoke_3s_ease-in-out_infinite] hover:scale-110 hover:shadow-2xl hover:shadow-black/50" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.327-1.682a9.86 9.86 0 005.26 1.483h.004c5.45 0 9.884-4.434 9.884-9.884 0-2.64-1.03-5.122-2.898-6.988z"/>
                        </svg>
                        Join our WhatsApp
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
