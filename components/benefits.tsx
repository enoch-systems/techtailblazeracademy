'use client'
import React, { useState, useRef, useEffect } from 'react'

const Benefits = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    const benefits = [
        {
            title: "Get Hired Fast",
            description: "Direct job placement with partner tech companies. 85% of our students land jobs quickly after completing our programs.",
            icon: "briefcase"
        },
        {
            title: "Learn by Doing",
            description: "Build real projects, not just theory. Graduate with a portfolio that gets you hired.",
            icon: "code"
        },
        {
            title: "Industry Mentors",
            description: "Learn directly from tech professionals at Google, Meta, and top startups.",
            icon: "users"
        }
    ]

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
            { threshold: 0.1 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactElement } = {
            briefcase: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            'trending-up': (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            users: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            code: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            clock: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            globe: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
        return icons[iconName] || icons.code
    }

    return (
        <div ref={sectionRef} id="benefits-section" className="w-full px-4 py-16 md:py-20 bg-gray-50">
            <div className="mx-auto max-w-4xl">
                <div className={`text-center mb-12 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 font-sf-display">
                        Why Choose Tech Trailblazer Academy
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Real results, not just certificates
                    </p>
                </div>

                <div className="space-y-5">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`group flex items-start gap-5 p-5 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.2 + (index * 0.2)}s` }}
                        >
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                {getIcon(benefit.icon)}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 font-sf-display">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits
