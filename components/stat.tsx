'use client'
import React, { useState, useEffect } from 'react'

const Stat = () => {
    const [coursesCount, setCoursesCount] = useState(0)
    const [studentsCount, setStudentsCount] = useState(0)
    const [startCounting, setStartCounting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartCounting(true)
        }, 2000) // 2 seconds delay

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!startCounting) return

        // Courses counter (1 to 56)
        const coursesDuration = 2000 // 2 seconds
        const coursesInterval = 50 // Update every 50ms
        const coursesSteps = coursesDuration / coursesInterval
        const coursesIncrement = 56 / coursesSteps

        const coursesTimer = setInterval(() => {
            setCoursesCount(prev => {
                const next = prev + coursesIncrement
                return next >= 56 ? 56 : next
            })
        }, coursesInterval)

        // Students counter (0 to 800)
        const studentsDuration = 2000 // 2 seconds
        const studentsInterval = 50 // Update every 50ms
        const studentsSteps = studentsDuration / studentsInterval
        const studentsIncrement = 800 / studentsSteps

        const studentsTimer = setInterval(() => {
            setStudentsCount(prev => {
                const next = prev + studentsIncrement
                return next >= 800 ? 800 : next
            })
        }, studentsInterval)

        return () => {
            clearInterval(coursesTimer)
            clearInterval(studentsTimer)
        }
    }, [startCounting])
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full -mt-20 lg:-mt-43">
            <div className="flex flex-col items-start justify-center rounded-4xl bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm h-14 lg:h-[7.5rem] animate-[slideUp_0.6s_ease-out_0.9s_forwards]">
                <h3 className="text-4xl font-bold text-gray-800 tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>{Math.floor(coursesCount)}</h3>
                <p className="text-gray-600 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Online courses</p>
            </div>
            <div className="flex flex-col items-start justify-center rounded-4xl bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm h-14 lg:h-[7.5rem] animate-[slideUp_0.6s_ease-out_1.0s_forwards]">
                <h3 className="text-4xl font-bold text-gray-800 tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>{Math.floor(studentsCount)}+</h3>
                <p className="text-gray-600 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Happy students</p>
            </div>
            <div className="flex flex-col items-start justify-center rounded-4xl bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm h-14 lg:h-[7.5rem] animate-[slideUp_0.6s_ease-out_1.1s_forwards]">
                <h3 className="text-4xl font-bold text-gray-800 tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>24<span className="font-light">/7</span></h3>
                <p className="text-gray-600 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Learning access</p>
            </div>
            <div className="flex flex-col items-start justify-center rounded-4xl bg-blue-600 py-4 px-6 shadow-sm h-14 lg:h-[7.5rem] animate-[slideUp_0.6s_ease-out_1.2s_forwards]">
                <h3 className="text-4xl font-bold text-white tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>98%</h3>
                <p className="text-gray-200 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Satisfaction rate</p>
            </div>
        </div>
    )
}

export default Stat
