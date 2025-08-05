// Importing Neccessary Packages //
import Image from "next/image";

const services = [
    {
        "title": "Vastu Shastra",
        "description": "Known as Vastu Shastra, this timeless wisdom offers guidance on how to build spaces that harmonize with nature and promote well-being...",
        "image": "/services/vastu.svg"
    },
    {
        "title": "Birth Journal",
        "description": "Among the most crucial astrological documents in this sacred tradition is the Birth Journal, which captures the planetary positions at the moment of birth...",
        "image": "/services/Birth-Journal.svg"
    },
    {
        "title": "Marriage Compatibility",
        "description": "Marriage is one of the most significant and sacred bonds, and Vedic astrology offers insights into compatibility for a harmonious union...",
        "image": "/services/ManglikDosh.svg"
    },
    {
        "title": "Lal Kitab",
        "description": "Among the leading experts of Lal Kitab in India, Acharya Devraj Ji stands out for his profound knowledge and accurate predictions...",
        "image": "/services/LalKitab.svg"
    },
    {
        "title": "Crystal Ball",
        "description": "A crystal ball is a spherical object, typically made of clear quartz or other minerals, used for scrying and gaining spiritual insights...",
        "image": "/services/CrystalBall.svg"
    },
    {
        "title": "Kundli Dosh",
        "description": "At the heart of this science lies the Kundli or birth chart, a detailed map that may reveal doshas or planetary flaws affecting life events...",
        "image": "/services/KundliDosh.svg"
    },
    {
        "title": "Tarot Reading",
        "description": "Tarot Reading in Love, Relationships, and Career: A Comprehensive Guide to understanding the symbolism and meaning of each card...",
        "image": "/services/TarotReading.svg"
    },
    {
        "title": "Palm Reading",
        "description": "Palm reading, also known as palmistry or chiromancy, is an ancient practice of interpreting a person’s character and future through the lines of their hand...",
        "image": "/services/Palmreading.svg"
    }
]

// Exporting Default Function for Services Section //
export default function ServicesSection() {
    // Returning TSX //
    return (
        <section className="flex flex-col justify-center items-center p-4 sm:px-8 md:px-14 lg:px-20 xl:py-10 2xl:py-20 xl:px-28 2xl:px-32">
            <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Astrological Consultation</h2>
            <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
            <p className="text-gray-500">Core Astrology Services Vedic Astrology (Janam Kundli Analysis) Deep analysis of your birth chart (kundli) Guidance on life purpose, career, marriage, health, and education Dasha and planetary transit analysis for timing life events</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-10 max-w-[1300px]">
                {services.map((service, key) => {
                    return (
                        <div key={key} className="flex flex-col justify-center items-center bg-gray-50 p-5 rounded-md shadow hover:scale-105 transition duration-300 group cursor-pointer">
                            <div className="relative w-20 h-20 p-2">
                                <div className="hidden group-hover:block absolute inset-0 border-2 border-dotted border-[#974b66] rounded-full animate-[spin_6s_linear_infinite]" />
                                <div className="w-full h-full p-2 shadow rounded-full bg-[#974b66] z-10 relative"><Image src={service.image} alt="Shri Siddh Lakshmi Jyotish" width={100} height={100} className="w-full h-full object-contain" /></div>
                            </div>
                            <h3 className="text-lg my-1">{service.title}</h3>
                            <p className="text-justify text-gray-500">{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}