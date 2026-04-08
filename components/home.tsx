'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Stat from './stat'

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
    
    const images = [
        '/a1.png',
        '/a2.png', 
        '/a3.png',
        '/a4.png',
        '/a5.png',
        '/a6.png'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroIndex((prev) => {
                return (prev + 1) % 4
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
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
                        <div className="flex flex-row items-center mt-3 gap-2">
                            <Image src="/logo.png" alt="E-Lab Logo" width={80} height={32} className="h-8 w-auto" priority />
                            <span className="text-xs font-bold z-[200] bg-gradient-to-r from-black via-blue-600 to-blue-400 bg-clip-text text-transparent tracking-wide" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Tech Trailblazer<br />Academy
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="#" className="z-50 text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors flex items-center gap-1 bg-gray-200/80 backdrop-blur-md" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Pages
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <a href="#" className="z-50 text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors flex items-center gap-1 bg-gray-200/80 backdrop-blur-md" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Courses
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <a href="#" className="z-50 text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors bg-gray-200 border border-gray-500" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>About us</a>
                            <a href="#" className="z-50 text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors bg-gray-200 border border-gray-500" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Reviews</a>
                            <a href="#" className="z-50 text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors bg-gray-200 border border-gray-500" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Blog</a>
                            <a href="#" className="z-50 text-black hover:text-white px-3 py-1 rounded-full hover:bg-black transition-colors bg-gray-200 border border-gray-500" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Contact</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
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
                                <span className="text-sm font-medium" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Menu</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[100vh] opacity-100 pb-96' : 'max-h-0 opacity-0'}`} style={{background: 'linear-gradient(180deg, #f0fffa 0%, #ffffff 50%, #f0fff4 100%)'}}>
                    <div className="px-4 py-4 space-y-3">
                        <div className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white font-semibold text-lg">
                            <span>Pages</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white font-semibold text-lg">
                            <span>Courses</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white text-left font-semibold text-lg">About us</a>
                        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white text-left font-semibold text-lg">Reviews</a>
                        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white text-left font-semibold text-lg">Blog</a>
                        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl border border-gray-300 bg-white text-left font-semibold text-lg">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center rounded-bl-3xl rounded-br-3xl mx-0 lg:px-0 overflow-x-hidden" style={{background: 'linear-gradient(180deg, #f0fffa 0%, #ccffeb 10%)'}}>
                {/* Stats Overlay - Desktop Only */}
                <div className="hidden lg:block absolute bottom-8 left-0 right-0 z-10 px-8">
                    <Stat />
                </div>
                
                <div className="max-w-9xl mx-0 px-4 sm:px-6 lg:px-0 w-full overflow-x-hidden">
                    <div className="grid grid-cols-1 -mt-46 mx-0 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="text-center space-y-4 relative z-[10]">
                            <div className="absolute left-0 -inset-x-4 -inset-y-46 flex items-center justify-center opacity-5 overflow-hidden lg:opacity-5">
                                <Image src="/a3.png" alt="Background" width={1000} height={750} className="object-contain transform translate-y-0 md:-translate-y-8 lg:translate-y-32 w-[300px] h-[250px] md:w-[350px] lg:w-[600px] lg:h-[400px]" />
                                {/* Green vertical line where images slide out from */}
                                <div className="absolute right-0 top-0 bottom-0 w-3 bg-green-100 backdrop-blur-lg hidden lg:block"></div>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 mt-56 lg:mt-4 mx-4 text-center relative select-none pointer-events-none" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '-0.005em'}}>
                                LEARN.  GROW.<br/>
                                SUCCEED.
                            </h1>
                            <p className="text-lg md:text-xl text-black max-w-lg mx-auto select-none pointer-events-none" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Learn from industry experts and gain the skills to advance your career.
                            </p>
                            <button className="z-[500] relative bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-medium rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mx-auto lg:ml-auto" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Explore courses
                            </button>
                        </div>

                        {/* Hero Image */}
                        <div className="z-[1] relative flex justify-center -mt-8 lg:-mt-8 mb-0 lg:mb-0">
                            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
                                <div className="absolute inset-y-0 -left-8 w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                <Image
                                    src="/so1.jpeg"
                                    alt="Professional woman"
                                    width={700}
                                    height={800}
                                    className={`rounded-lg object-cover select-none pointer-events-none absolute inset-0 transition-opacity duration-1000 scale-110 ${currentHeroIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                                    priority
                                />
                                <Image
                                    src="/so4.jpeg"
                                    alt="Professional woman 2"
                                    width={700}
                                    height={800}
                                    className={`rounded-lg object-cover select-none pointer-events-none absolute inset-0 transition-opacity duration-1000 scale-110 ${currentHeroIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                                    priority
                                />
                                <Image
                                    src="/so3.jpeg"
                                    alt="Professional woman 3"
                                    width={700}
                                    height={800}
                                    className={`rounded-lg object-cover select-none pointer-events-none absolute inset-0 transition-opacity duration-1000 scale-110 lg:top-0 top-14 ${currentHeroIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
                                    priority
                                />
                                <Image
                                    src="/so2.jpeg"
                                    alt="Professional woman 4"
                                    width={700}
                                    height={800}
                                    className={`rounded-lg object-cover select-none pointer-events-none absolute inset-0 transition-opacity duration-1000 scale-110 ${currentHeroIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
