'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Stat from './stat'

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % 4)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    return (
        <>
            {/* Navigation Bar */}
            <nav className="shadow-sm" style={{background: '#f0fffa'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="E-Lab Logo" width={80} height={32} className="h-8 w-auto" priority />
                            <span className="text-xs font-bold bg-gradient-to-r from-black via-blue-600 to-blue-400 bg-clip-text text-transparent tracking-wide" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Tech Trailblazer<br />Academy
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {['Pages', 'Courses', 'About us', 'Reviews', 'Blog', 'Contact'].map((item, index) => (
                                <a key={item} href="#" className="text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors bg-gray-200/80 backdrop-blur-md border border-gray-500" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-700 hover:text-gray-900 p-2 px-4 flex items-center gap-2 border border-gray-300 rounded-full"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6h20" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 18h20" />
                                        </>
                                    )}
                                </svg>
                                <span className="text-sm font-medium">Menu</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t" style={{background: 'linear-gradient(180deg, #f0fffa 0%, #ffffff 50%, #f0fff4 100%)'}}>
                        <div className="px-4 py-4 space-y-3">
                            {['Pages', 'Courses', 'About us', 'Reviews', 'Blog', 'Contact'].map((item) => (
                                <a key={item} href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white text-left font-semibold text-lg">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center rounded-bl-3xl rounded-br-3xl overflow-hidden" style={{background: 'linear-gradient(180deg, #f0fffa 0%, #ccffeb 10%)'}}>
                {/* Stats Overlay - Desktop Only */}
                <div className="hidden lg:block absolute bottom-8 left-0 right-0 z-10 px-8">
                    <Stat />
                </div>
                
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-0 lg:ml-16 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="text-center lg:text-left mt-6 lg:-mt-75 space-y-6 relative z-10 px-4 sm:px-6 lg:px-0">
                            <h1 className="text-5xl lg:text-8xl font-semibold text-gray-900" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '-0.005em'}}>
                                <span className="inline-block animate-[slideUp_0.6s_ease-out_forwards]">LEARN.</span>{' '}
                                <span className="inline-block animate-[slideUp_0.6s_ease-out_0.15s_forwards]">GROW.</span><br/>
                                <span className="inline-block animate-[slideUp_0.6s_ease-out_0.3s_forwards]">SUCCEED.</span>
                            </h1>
                            <p className="text-lg md:text-xl lg:text-3xl text-black max-w-xl mx-auto lg:mx-0 animate-[slideUp_0.8s_ease-out_0.5s_forwards]" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Learn from industry experts and gain the skills to advance your career.
                            </p>
                            <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl font-medium rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mx-auto lg:mx-0 animate-[slideUp_0.8s_ease-out_0.7s_forwards]" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Explore courses
                            </button>
                        </div>

                        {/* Hero Image */}
                        <div className="relative flex justify-center">
                            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[750px] lg:h-[750px]">
                                {['/so1.jpeg', '/so4.jpeg', '/so3.jpeg', '/so2.jpeg'].map((src, index) => (
                                    <Image
                                        key={src}
                                        src={src}
                                        alt={`Professional woman ${index + 1}`}
                                        width={700}
                                        height={800}
                                        className={`rounded-lg object-cover absolute inset-0 transition-opacity duration-1000 scale-110 ${currentHeroIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                        priority
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
