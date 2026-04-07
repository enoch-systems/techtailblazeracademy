'use client'
import React from 'react'
import Image from 'next/image'

const Join = () => {
    return (
        <div className="w-full px-4 py-16 md:px-8 lg:px-16 bg-white">
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
                    <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-medium rounded-full transition-colors" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                        See all courses
                    </button>
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
    )
}

export default Join
