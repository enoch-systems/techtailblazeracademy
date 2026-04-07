'use client'
import React from 'react'

const Stat = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full -mt-20 lg:-mt-43">
            <div className="flex flex-col items-start justify-center rounded-4xl bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm h-14 lg:h-[7.5rem]">
                <h3 className="text-4xl font-bold text-gray-800 tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>56</h3>
                <p className="text-gray-600 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Online courses</p>
            </div>
            <div className="flex flex-col items-start justify-center rounded-4xl bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm h-14 lg:h-[7.5rem]">
                <h3 className="text-4xl font-bold text-gray-800 tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>8,000+</h3>
                <p className="text-gray-600 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Happy students</p>
            </div>
            <div className="flex flex-col items-start justify-center rounded-4xl bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm h-14 lg:h-[7.5rem]">
                <h3 className="text-4xl font-bold text-gray-800 tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>24<span className="font-light">/7</span></h3>
                <p className="text-gray-600 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Learning access</p>
            </div>
            <div className="flex flex-col items-start justify-center rounded-4xl bg-blue-600 py-4 px-6 shadow-sm h-14 lg:h-[7.5rem]">
                <h3 className="text-4xl font-bold text-white tabular-nums" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>98%</h3>
                <p className="text-gray-200 font-normal" style={{fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'}}>Satisfaction rate</p>
            </div>
        </div>
    )
}

export default Stat
