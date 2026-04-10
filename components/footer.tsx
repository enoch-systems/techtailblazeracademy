'use client'
import React from 'react'

const Footer = () => {
    const footerLinks = {
        'Quick Links': ['Home', 'Courses', 'FAQ']
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToFeaturedCourses = () => {
        const featuredCourses = document.getElementById('featured-courses')
        if (featuredCourses) {
            featuredCourses.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToFAQ = () => {
        const faqSection = document.getElementById('faq-section')
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="w-full px-4 py-12 md:px-8 lg:px-16 text-gray-800" style={{background: 'linear-gradient(180deg, #ffffff 70%, #ccffeb 100%)'}}>
            <div className="w-full">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto text-center md:text-left">
                    {/* Logo */}
                    <div className="md:col-span-1 flex flex-col items-center text-center">
                        <button 
                            onClick={() => window.location.reload()}
                            className="flex flex-col items-center text-center bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src="/rad.jpeg" 
                                alt="Tech Blaze" 
                                className="h-8 mb-4"
                            />
                              <span className="text-[10px] font-bold text-black tracking-wide" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                Tech Trailblazer Academy
                            </span>
                        </button>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold text-gray-600 mb-4" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => {
                                    const handleClick = () => {
                                        switch(link) {
                                            case 'Home':
                                                scrollToTop()
                                                break
                                            case 'Courses':
                                                scrollToFeaturedCourses()
                                                break
                                            case 'FAQ':
                                                scrollToFAQ()
                                                break
                                            default:
                                                break
                                        }
                                    }
                                    return (
                                        <li key={link}>
                                            <button 
                                                onClick={handleClick}
                                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm bg-transparent border-none cursor-pointer"
                                                style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}
                                            >
                                                {link}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-center items-center max-w-2xl mx-auto">

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright below socials */}
                <div className="flex justify-center mt-6">
                    <span className="text-xs font-bold z-[200] bg-gradient-to-r from-black via-blue-600 to-blue-400 bg-clip-text text-transparent tracking-wide" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        Tech Trailblazer Academy 2026
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
