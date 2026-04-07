'use client'
import React from 'react'
import Image from 'next/image'

const WhatYouGet = () => {
    const courses = [
        {
            title: "Design principles essentials",
            description: "Master core design principles and techniques to create visually compelling and user-friendly interfaces.",
            price: "₦295,000",
            lessons: "40 Lessons",
            hours: "8.5 Hours",
            image: "/vado.jpg"
        },
        {
            title: "Advanced Web Development",
            description: "Learn modern web development techniques and build scalable applications with industry best practices.",
            price: "₦267,000",
            lessons: "32 Lessons",
            hours: "12 Hours",
            image: "/fola.png"
        },
        {
            title: "Design systems and libraries",
            description: "Enhance design efficiency, consistency, and long-term scalability with structured pattern libraries.",
            price: "₦295,000",
            lessons: "28 Lessons",
            hours: "6 Hours",
            image: "/lapo.png"
        }
    ]

    return (
        <div className="w-full px-4 py-12 md:px-8 lg:px-16 bg-gray-200 rounded-3xl">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center font-sf-display">
                    FEATURED COURSES
                </h2>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <div key={index} className={`rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow ${index === 2 ? 'bg-black text-white' : 'bg-white'}`}>
                            {/* Course Image */}
                            <div className="relative w-full h-64 mb-4 rounded-2xl overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Badges */}
                            <div className="flex gap-2 mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${index === 2 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
                                    {course.lessons}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${index === 2 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
                                    {course.hours}
                                </span>
                            </div>

                            {/* Course Info */}
                            <h3 className={`text-2xl font-semibold mb-2 font-sf-display ${index === 2 ? 'text-white' : 'text-black'}`}>
                                {course.title}
                            </h3>
                            <p className={`mb-4 ${index === 2 ? 'text-gray-300' : 'text-gray-700'}`}>
                                {course.description}
                            </p>
                            <p className={`text-xl font-semibold font-sf-display ${index === 2 ? 'text-white' : 'text-black'}`}>
                                {course.price}
                            </p>
                        </div>
                    ))}
                </div>

                {/* See all courses button */}
                <div className="text-center mt-12">
                    <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium rounded-full transition-colors">
                        See all courses
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatYouGet
