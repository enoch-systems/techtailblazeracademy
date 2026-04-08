'use client'
import React, { useState } from 'react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "Are your courses self paced or live?",
            answer: "Live"
        },
        {
            question: "Can I access the courses on my mobile device?",
            answer: "Yes"
        },
        {
            question: "Do you provide certification upon course completion?",
            answer: "Yes"
        },
        {
            question: "Are there refund requests?",
            answer: "No"
        },
        {
            question: "What types of courses do you offer?",
            answer: "A real time job opportunity tech skills"
        },
        {
            question: "Can I pay by installment?",
            answer: "No"
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full px-4 py-16 md:px-8 lg:px-16 bg-white">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 font-sf-display">
                    FREQUENTLY ASKED<br />QUESTIONS
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-100 rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-200"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg md:text-xl font-semibold text-black pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Answer */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-700">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
