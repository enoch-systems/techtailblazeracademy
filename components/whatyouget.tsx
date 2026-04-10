'use client'
import React from 'react'
import Image from 'next/image'

const WhatYouGet = () => {
    const courses = [
        {
            title: "Cybersecurity",
            description: "Learn to protect systems, networks, and data from digital attacks and security breaches.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "40 Lessons",
            hours: "12 Hours",
            size: "Advanced",
            image: "/cybersecurity_course.jpeg"
        },
        {
            title: "Data science",
            description: "Analyze complex data, build predictive models, and extract insights from large datasets.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "35 Lessons",
            hours: "10 Hours",
            size: "Intermediate",
            image: "/data_science_course.jpeg"
        },
        {
            title: "AI automation",
            description: "Build intelligent automated systems using machine learning and advanced AI techniques.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "42 Lessons",
            hours: "14 Hours",
            size: "Advanced",
            image: "/ai_course.jpeg"
        },
        {
            title: "Computer networking",
            description: "Master network protocols, infrastructure, and system connectivity fundamentals.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "30 Lessons",
            hours: "9 Hours",
            size: "Intermediate",
            image: "/neti.jpeg"
        },
        {
            title: "Ethical hacking",
            description: "Learn penetration testing and security assessment to protect systems from vulnerabilities.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "38 Lessons",
            hours: "13 Hours",
            size: "Advanced",
            image: "/ethical_hack.jpeg"
        },
        {
            title: "Graphic Design",
            description: "Create stunning visual content using industry-standard design tools and principles.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "28 Lessons",
            hours: "8 Hours",
            size: "Beginner",
            image: "/graphic_design_course.jpeg"
        },
        {
            title: "UI/UX design",
            description: "Design beautiful and intuitive user interfaces with modern design principles.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "32 Lessons",
            hours: "9 Hours",
            size: "Beginner",
            image: "/uiux_course.jpeg"
        },
        {
            title: "3D animation",
            description: "Create stunning 3D animations and visual effects using professional animation software.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "45 Lessons",
            hours: "15 Hours",
            size: "Intermediate",
            image: "/3d.jpeg"
        },
        {
            title: "Full stack development",
            description: "Master both frontend and backend development to build complete web applications.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "40 Lessons",
            hours: "12 Hours",
            size: "Intermediate",
            image: "/fullstack_course.jpeg"
        },
        {
            title: "Frontend development",
            description: "Build responsive and interactive user interfaces with modern frontend technologies.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "35 Lessons",
            hours: "10 Hours",
            size: "Beginner",
            image: "/fronti.jpeg"
        },
        {
            title: "Backend development",
            description: "Develop robust server-side applications and APIs with modern backend technologies.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "36 Lessons",
            hours: "11 Hours",
            size: "Intermediate",
            image: "/backend_course.jpeg"
        },
        {
            title: "Web development",
            description: "Learn fundamental web technologies to build modern websites and web applications.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "30 Lessons",
            hours: "8 Hours",
            size: "Beginner",
            image: "/webi.jpeg"
        },
        {
            title: "Digital Marketing",
            description: "Master digital marketing strategies including SEO, social media, and online advertising.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "25 Lessons",
            hours: "7 Hours",
            size: "Beginner",
            image: "/digital_marketing_couse.jpeg"
        },
        {
            title: "Cloud computing",
            description: "Learn cloud architecture, deployment, and management using major cloud platforms.",
            price: "₦50,000",
            originalPrice: "₦400,000",
            lessons: "38 Lessons",
            hours: "12 Hours",
            size: "Intermediate",
            image: "/cloud_course.jpeg"
        }
    ]

    return (
        <div id="featured-courses" className="w-full px-2 lg:px-40 py-8 md:py-10 lg:py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-x-hidden">
            <div className="mx-auto max-w-8xl lg:mx-auto md:mx-auto sm:mx-auto">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 text-center font-sf-display bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                    FEATURED COURSES
                </h2>

                {/* Course Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 overflow-x-hidden">
                    {courses.map((course, index) => (
                        <div key={index} className={`rounded-xl p-2 md:p-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-black text-white hover:bg-gray-900`}>
                            {/* Course Image */}
                            <div className="relative w-full h-24 md:h-32 mb-2 rounded-lg overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            
                            {/* Course Info */}
                            <h3 className="text-base md:text-lg font-bold mb-2 font-sf-display text-green-200">
                                {course.title}
                            </h3>
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-gray-400 line-through font-sf-display">
                                    {course.originalPrice} <span className="text-xs text-green-400 font-semibold">(Bootcamp Price)</span>
                                </span>
                                <p className="text-base md:text-lg font-bold font-sf-display text-green-200">
                                    {course.price}
                                </p>
                            </div>
                            <a 
                                href={`https://t.me/belloxxi_01?text=Hello!%20I%20found%20your%20${course.title}%20course%20on%20your%20website.%20I'm%20interested%20in%20enrolling.%20Could%20you%20please%20share%20more%20details%20about%20the%20course%20curriculum%20and%20enrollment%20process?`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-3 px-3 py-1 md:py-3 rounded-3xl text-xs md:text-sm font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 bg-gradient-to-r from-[#0088cc] to-[#006699] text-white hover:from-[#006699] hover:to-[#004466] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border-2 border-[#0088cc] relative overflow-hidden group animate-pulse hover:animate-bounce"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.04.01-.18-.07-.26s-.2-.05-.29-.03c-.12.03-2.13 1.36-6.01 4.17-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.22-.52-.89-.28-1.6-.43-1.54-.91.03-.25.38-.5 1.04-.76 4.08-1.78 6.8-2.95 8.16-3.52 3.89-1.62 4.69-1.9 5.29-1.91.12 0 .37.03.54.17.14.12.18.28.2.45-.01.06 0 .22-.01.35z"/>
                                </svg>
                                <span className="relative z-10">Inquire on Telegram</span>
                                <svg className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                            </div>
        </div>
    )
}

export default WhatYouGet
