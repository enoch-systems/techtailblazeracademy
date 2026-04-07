'use client'
import React, { useState } from 'react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "What types of courses do you offer?",
            answer: "We offer a wide range of courses including web development, design, data science, marketing, and business skills. Our courses are designed by industry experts to help you advance your career."
        },
        {
            question: "Can I access the courses on my mobile device?",
            answer: "Yes! All our courses are fully responsive and can be accessed on any device including smartphones, tablets, and desktops. Learn on the go, anytime, anywhere."
        },
        {
            question: "Do you provide certificates upon course completion?",
            answer: "Absolutely. Upon successfully completing any course, you'll receive a verified digital certificate that you can share on your LinkedIn profile or add to your resume."
        },
        {
            question: "Are the courses self-paced or live?",
            answer: "Our courses are primarily self-paced, allowing you to learn at your own convenience. However, we also offer live sessions and webinars for certain programs."
        },
        {
            question: "Is there a money-back guarantee?",
            answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your learning experience, contact us within 30 days for a full refund."
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
