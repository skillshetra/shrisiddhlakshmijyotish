// Declaring Client Component //
"use client"

// Importing Neccessary Packages //
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Exporting Default Function for FAQS //
export default function FAQS() {
    // State Variable for Indexing //
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const FAQ_Questions = [
        {
            "question": "Who is Shri Siddh Lakshmi Jyotish?",
            "answer": "Shri Siddh Lakshmi Jyotish is a renowned Vedic astrologer and numerologist with over 20 years of experience. He is highly respected for his accurate predictions and expertise in various systems of astrology including Vedic, Nadi, KP, and Numerology. He offers consultations globally and is trusted by individuals from all walks of life."
        },
        {
            "question": "What services does Shri Siddh Lakshmi Jyotish offer?",
            "answer": "Shri Siddh Lakshmi Jyotish provides a wide range of astrological services, including: Vedic astrology consultations, Numerology and name corrections, Nadi astrology (without palm leaves), Career, finance, and business astrology, Relationship and marriage compatibility analysis, Health and medical astrology insights."
        },
        {
            "question": "How accurate are his predictions?",
            "answer": "Clients across the world praise Shri Siddh Lakshmi Jyotish for his highly accurate, logical, and life-changing predictions. He uses precise birth chart analysis, advanced techniques, and practical remedies that have proven effective for thousands."
        },
        {
            "question": "Can I consult Shri Siddh Lakshmi Jyotish from outside India?",
            "answer": "Yes. Shri Siddh Lakshmi Jyotish offers online consultations through WhatsApp, Zoom, or phone for clients in the USA, UK, UAE, Canada, Australia, and other countries. All services are accessible worldwide."
        },
        {
            "question": "How can I book a consultation with him?",
            "answer": "You can book an appointment through his official website:👉 www.astrologyexperts.in. Visit the “Appointment” section, fill out the form, and follow the instructions for payment. You’ll receive a confirmation with your consultation schedule."
        },
        {
            "question": "Are the remedies suggested by Shri Siddh Lakshmi Jyotish effective?",
            "answer": "Yes. His remedies are simple, personalized, and rooted in Vedic traditions—such as mantras, gemstones, yantras, or spiritual practices. Many clients have reported positive results and real-life improvements after following his guidance."
        }
    ]

    // Returning TSX //
    return (
        <section className="flex flex-col justify-center items-center gap-8 p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32">
            <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Frequently Asked Questions</h2>
            <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
            <div className="w-full max-w-4xl space-y-4 mt-5">
                {FAQ_Questions.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border border-gray-200 rounded-xl shadow-md transition-all duration-300 bg-white">
                            <button onClick={() => setOpenIndex(isOpen ? null : index)} className="flex items-center justify-between w-full px-6 py-4 text-left text-base font-semibold text-primary hover:bg-gray-50 transition-all duration-300 cursor-pointer"><span>{faq.question}</span><FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-primary w-4 h-4" /></button>
                            {isOpen && (<div className="px-6 py-4 text-gray-700 bg-gray-50 border-t border-gray-200 rounded-b-xl">{faq.answer}</div>)}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}