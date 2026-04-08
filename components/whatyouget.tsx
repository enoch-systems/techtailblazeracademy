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
        <div className="w-full px-2 lg:px-40 py-8 md:py-10 lg:py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-x-hidden">
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

                            {/* Badges */}
                            <div className="flex gap-1 mb-2 flex-wrap">
                                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                                    {course.lessons}
                                </span>
                                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                                    {course.hours}
                                </span>
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
                                href={`https://wa.me/2349162919586?text=Hello!%20I%20found%20your%20${course.title}%20course%20on%20your%20website.%20I'm%20interested%20in%20enrolling.%20Could%20you%20please%20share%20more%20details%20about%20the%20course%20curriculum%20and%20enrollment%20process?`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-3 px-3 py-1 md:py-3 rounded-3xl text-xs md:text-sm font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:from-[#128C7E] hover:to-[#0F5132] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border-2 border-[#25D366] relative overflow-hidden group animate-pulse hover:animate-bounce"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span className="relative z-10">Inquire on WhatsApp</span>
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
