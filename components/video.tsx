'use client'
import React, { useState, useRef, useEffect } from 'react'

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const togglePlayPause = () => {
        // For now just toggle the state - basic YouTube embed controls itself
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Post message to control video playback
                    if (entry.isIntersecting) {
                        iframe.contentWindow?.postMessage(
                            JSON.stringify({ event: 'command', func: 'playVideo' }),
                            '*'
                        )
                    } else {
                        iframe.contentWindow?.postMessage(
                            JSON.stringify({ event: 'command', func: 'pauseVideo' }),
                            '*'
                        )
                    }
                })
            },
            { threshold: 0.5 }
        )

        observer.observe(iframe)
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
                    <a href="https://wa.me/2349162919586?text=Hello!%20I'm%20interested%20in%20inquiring%20about%20a%20specific%20course.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2 relative animate-[zoomSmoke_3s_ease-in-out_infinite] hover:scale-110 hover:shadow-2xl hover:shadow-black/50" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.327-1.682a9.86 9.86 0 005.26 1.483h.004c5.45 0 9.884-4.434 9.884-9.884 0-2.64-1.03-5.122-2.898-6.988z"/>
                        </svg>
                        Join our WhatsApp
                    </a>
                </div>

                {/* Custom Video Player */}
                <div className="relative order-1 lg:order-2 bg-black p-4 md:p-8 rounded-3xl z-[200] -mt-40 lg:-mt-0">
                    {/* Dark device frame */}
                    <div className="bg-[#1a1a1a] rounded-3xl p-2 md:p-6 relative">
                        {/* Video container with visible iframe */}
                        <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden">
                            <iframe
                                ref={iframeRef}
                                id="youtube-player"
                                src="https://www.youtube.com/embed/5mC2FOt9BXI?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&iv_load_policy=3&autohide=1&cc_load_policy=3&autoplay=1&loop=1&playlist=5mC2FOt9BXI&enablejsapi=1"
                                className="w-full h-full rounded-2xl"
                                allowFullScreen
                                title="YouTube video player"
                            />
                            {/* Overlay to hide hover popups - covers bottom area */}
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none"></div>
                            {/* Top overlay to hide title popup */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Video
