// Declaring Client Component //
"use client"

// Importing Neccessary Packages //
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Entrepreneur",
    image: "/testimonials/01.jpg",
    text: "The guidance I received was truly transformative. I was struggling with both business and personal decisions, but the clarity I got here was beyond expectations. Their deep insights helped me regain focus, restructure my path, and grow with confidence. Highly recommended!",
  },
  {
    name: "Meera Joshi",
    role: "Marketing Manager",
    image: "/testimonials/02.jpg",
    text: "I always felt uncertain about the future and constantly second-guessed my career moves. But after my session here, I felt calm, centered, and empowered. The advice was clear, practical, and felt deeply aligned with what I was going through. It’s an experience I’d gladly repeat.",
  },
  {
    name: "Rohan Patel",
    role: "Startup Founder",
    image: "/testimonials/03.jpg",
    text: "Navigating a startup is tough, and I needed a guiding light. The predictions I received were spot-on and helped me avoid several pitfalls. More importantly, I felt heard and understood. I don’t make major decisions anymore without first checking in here.",
  },
  {
    name: "Neha Deshmukh",
    role: "UX Designer",
    image: "/testimonials/04.jpg",
    text: "From personal issues to professional dilemmas, I’ve received support every step of the way. What makes the experience special is the emotional depth and spiritual intelligence they bring. Every consultation feels like a gentle reset of my inner compass.",
  },
  {
    name: "Karan Verma",
    role: "Software Developer",
    image: "/testimonials/05.jpg",
    text: "As someone who believes in logic and code, I was skeptical at first. But what I found was astonishing. The advice was not only spiritually grounded but also deeply logical and actionable. I’ve since recommended them to my closest friends and family.",
  },
  {
    name: "Shruti Mahajan",
    role: "Event Planner",
    image: "/testimonials/06.jpg",
    text: "The energy, accuracy, and compassion here are unmatched. I’ve planned events based on timing suggestions and seen amazing results. Beyond that, I always leave feeling lighter, more positive, and aligned with my purpose. It’s like therapy for the soul.",
  },
  {
    name: "Devansh Iyer",
    role: "Financial Analyst",
    image: "/testimonials/07.jpg",
    text: "My sessions here have provided tremendous clarity in both personal and financial matters. Each reading is layered with wisdom, helping me see what’s hidden beneath the surface. I always walk away feeling grounded and prepared for whatever comes next.",
  },
  {
    name: "Ritika Bansal",
    role: "Interior Architect",
    image: "/testimonials/08.jpg",
    text: "I was at a crossroads in my life, unsure of which direction to choose. The insight I received was eye-opening. It not only affirmed my path but gave me the courage to move forward with intention. This place is a beacon of light and clarity.",
  },
  {
  name: "Saanvi Kapoor",
  role: "Wellness Coach",
  image: "/testimonials/09.jpg",
  text: "As someone deeply involved in holistic healing, I’m very selective about where I seek guidance. This experience felt sacred and grounding. I received insights that were not only accurate but profoundly healing. Each session has helped me realign with my higher purpose and serve my clients better. It’s now an essential part of my personal growth journey.",
}
]

// Testimonial Slider //
const TestimonialSlider = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16 relative">
            <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 1500, disableOnInteraction: false }} className="rounded-md">
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-50 shadow-xl rounded-lg p-5 flex flex-col items-center text-center gap-4">
                            <Image width={60} height={60} src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full border-4 border-gray-200 shadow-md" />
                            <h3 className="text-xl font-semibold text-emerald-500 mt-2">{testimonial.name}</h3>
                            <p className="text-gray-700 italic text-lg max-w-xl px-10 sm:px-5 md:px-0">{testimonial.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

// Exporting Default Function for Testimonials //
export default function Testimonials() {

    // Returning TSX //
    return (
        <section className="flex flex-col justify-center items-center bg-primary px-6 py-12 sm:px-10 md:px-20 xl:px-28 rounded-b-3xl">
            <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">What Our Clients Say</h2>
            <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
            <i className="text-gray-500 my-2">Trusted by people across all walks of life</i>
            <TestimonialSlider />
        </section>

    )
}