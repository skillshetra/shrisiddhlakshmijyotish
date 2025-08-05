// Importing Neccessary Packages //
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { userDetails } from "@/app/constants";
import Testimonials from "@/components/Testimonials";
import FAQS from "@/components/FAQ";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";

// Exporting Default Function for HomePage //
export default function HomePage() {
  // Returning TSX //
  return (
    <>
    <Header />
      <main className="w-full">
        <section className="flex md:grid md:min-h-[95dvh] flex-col-reverse grid-cols-2 xl:grid-cols-5 gap-5 pb-20 select-none bg-primary p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32 rounded-b-xl">
          <div className="flex flex-col justify-center xl:col-span-2 gap-8 animate-slide-in-left">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-xl text-primary md:text-2xl">Trust our experience</h3>
              <h1 className="font-semibold text-3xl md:text-4xl xl:text-5xl">Most trusted and Accurate Astrologer in India</h1>
            </div>
            <p className="text-gray-500">Meet One of The Most Trusted and Accurate Career Astrologer in India – {userDetails.name}</p>
            <a href={`https://wa.me/${userDetails.mobileNumber}`} target="_blank" rel="noopener noreferrer" className="w-fit inline-flex items-center gap-2 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"><FontAwesomeIcon icon={faWhatsapp} className="text-xl" />Chat on WhatsApp</a>
          </div>
          <div className="hidden xl:block"></div>
          <div className="flex justify-center items-center xl:col-span-2 relative overflow-hidden">
            <Image width={350} height={350} src="/pen.webp" alt="Shri Siddh Lakshmi Jyotish" className="animate-rect" />
            <Image width={500} height={500} src="/wheel.webp" alt="Shri Siddh Lakshmi Jyotish" />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32">
          <Image width={400} height={400} src="/002.png" alt="Shri Siddh Lakshmi Jyotish" className="w-[600px] animate-updown" />
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Know About the Best Astrologer in India {userDetails.name}</h2>
            <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
            <p className="mt-10 text-base leading-relaxed tracking-normal text-justify text-gray-800 max-w-prose"><strong>{userDetails.name}</strong> is one of the <strong>trusted</strong> and <strong>respected</strong> best astrologer in India, known for his accurate predictions and life-transforming guidance. With over 20+ years of experience in Vedic astrology, Nadi astrology, and numerology, he has helped thousands of people across India and around the world find clarity in their careers, relationships, health, and finances. His approach blends ancient astrological wisdom with modern insight, offering <strong>practical remedies</strong> and personalized solutions. Clients from the <strong>USA, UK, UAE, Canada, and Australia</strong> regularly consult him for his deep expertise and honest advice. Whether you&rsquo;re facing life challenges or seeking the right direction, <strong>{userDetails.name}</strong> provides clarity with compassion. Book your consultation today and experience the power of authentic astrology from India&rsquo;s most trusted astrologer.</p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-primary p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32 rounded-b-xl">
          <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Choose Your zodiac Sign</h2>
          <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
          <i className="text-gray-500 my-2">Choose Your Zodiac Sign Online</i>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5 md:mt-10">
            {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map((sign, key) => {
              return (
                <Link href="/horoscope" key={key} className="flex flex-col justify-center items-center bg-gray-50 p-5 rounded-md shadow hover:scale-105 transition duration-300">
                  <Image width={100} height={100} src={`/sunsigns/${sign.toLowerCase()}.svg`} alt="Shri Siddh Lakshmi Jyotish" className="max-w-16 max-h-16 min-w-16 min-h-16 p-2 shadow rounded-full" />
                  <h3 className="text-lg font-medium my-1 hover-text-primary transition duration-300">{sign}</h3>
                  <p className="text-gray-500 hover:text-gray-900 transition duration-300">Daily Horoscope</p>
                </Link>
              )
            })}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center p-4 sm:px-8 md:px-14 lg:px-20 xl:py-10 xl:px-28 2xl:px-32">
          <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Why Consider Top Astrologer in World</h2>
          <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
          <p className="mt-10 text-base leading-relaxed tracking-normal text-justify text-gray-800 max-w-prose">When it comes to life&rsquo;s biggest questions—career, finances, relationships, health, or destiny—you need more than just predictions. You need clarity, guidance, and real solutions. That&rsquo;s where <strong>{userDetails.name}</strong> stands apart. A Trusted Name in Astrology With over two decades of experience, <strong>{userDetails.name}</strong> is recognized as one of the leading astrologers in India and globally. Known for his accurate predictions and deep spiritual insight, he has guided thousands of individuals toward success, stability, and personal growth. What Makes Him Unique? Master of Multiple Systems Acharya Ji is proficient in: Vedic Astrology Nadi Astrology (without palm leaves) Numerology KP Astrology Palmistry This multi-dimensional approach ensures every analysis is deep, detailed, and uniquely accurate. Specialist in Life-Changing Areas Career & Job Guidance Business and Financial Growth Marriage & Relationship Compatibility Health & Wellness Timing Property, Travel & Legal Matters Global Recognition Clients from across USA, UK, UAE, Australia, Singapore, and Europe consult him regularly for his insights and practical remedies. Ethical, Compassionate, and Solution-Focused <strong>{userDetails.name}</strong> stands out not only for his accuracy but for his honesty and integrity. He offers remedies that are simple, effective, and affordable, without fear-based tactics. His approach is spiritual yet scientific, always focused on empowering the individual.</p>
        </section>
        <ServicesSection />
        <section className="flex flex-col justify-center items-center bg-primary p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32 rounded-b-xl">
          <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Astrological Services by {userDetails.name}</h2>
          <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
          <p className="mt-10 text-base leading-relaxed tracking-normal text-justify text-gray-800 max-w-prose"><strong>{userDetails.name}</strong> is a highly acclaimed astrologer in India, offering a wide range of astrological services that combine ancient Vedic wisdom with modern-day insight. With over two decades of experience, he is known for providing accurate predictions, practical solutions, and life-changing guidance to individuals worldwide.</p>
        </section>
        <FAQS />
        <Testimonials />
      </main>
    </>
  )
}