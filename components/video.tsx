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
                    <a href="https://t.me/techblazeracademy" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3 text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2 relative animate-[zoomSmoke_3s_ease-in-out_infinite] hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.04.01-.18-.07-.26s-.2-.05-.29-.03c-.12.03-2.13 1.36-6.01 4.17-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.22-.52-.89-.28-1.6-.43-1.54-.91.03-.25.38-.5 1.04-.76 4.08-1.78 6.8-2.95 8.16-3.52 3.89-1.62 4.69-1.9 5.29-1.91.12 0 .37.03.54.17.14.12.18.28.2.45-.01.06 0 .22-.01.35z"/>
                        </svg>
                        Join our Telegram
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
