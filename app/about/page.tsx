// Importing Neccessary Packages //
import Testimonials from "@/components/Testimonials";
import { userDetails } from "@/app/constants";
import FAQS from "@/components/FAQ";
import Image from "next/image";
import Header from "@/components/Header";

// Exporting Default Function for About //
export default function About() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5">
        <section className="flex md:grid flex-col grid-cols-2 justify-center items-center gap-5 md:gap-8 p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32">
          <div className="flex justify-center items-center"><Image width={400} height={400} src="/001.png" alt="Shri Siddh Lakshmi Jyotish" className="animate-updown rounded" /></div>
          <div className="flex max-w-[600px] flex-col mx-auto gap-10"><h3 className="w-fit text-primary text-xl md:text-2xl lg:text-3xl border-b-2 border-emerald-500 pb-2">{userDetails.name}: A Guiding Light in Modern Vedic Astrology</h3><p className="text-gray-600">In a world full of uncertainty, where individuals seek direction in love, career, finance, and health, astrology has served as a timeless tool for clarity and guidance. At the forefront of this ancient science in the modern era stands <strong>{userDetails.name}</strong>, widely regarded as one of India’s most trusted and Genuine Famous Astrologer in the World. With over 20 years of experience, <strong>{userDetails.name}</strong> has empowered thousands of individuals through his profound understanding of Vedic astrology, Nadi astrology, numerology, and related spiritual sciences.</p></div>
        </section>
        <section className="flex flex-col gap-5 p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32 text-justify">
          <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">A Journey Rooted in Spiritual Wisdom</h2>
          <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
          <p>{userDetails.name}&rsquo;s path into the realm of astrology was guided by deep spiritual calling and traditional learning. Trained in the sacred texts of Jyotish Shastra, he cultivated a rare expertise in decoding the mysteries of planetary movements, karmic patterns, and human destiny. His unique approach blends time-tested Vedic principles with contemporary life challenges, offering practical and transformative solutions.</p>
          <p>What sets {userDetails.name} apart is not only his knowledge but also his integrity and compassion. He approaches every consultation with honesty, empathy, and a desire to genuinely help individuals lead better lives.</p>
          <ol className="flex flex-col list-decimal list-inside text-base gap-3">
            <h3 className="text-xl">Areas of Specialization</h3>
            <p className="text-gray-600">{userDetails.name} provides a wide spectrum of astrological services, customized to address the individual needs of his diverse clientele:</p>
            <li className="pl-5"><h5 className="inline">Vedic Astrology (Janam Kundli Analysis)</h5><p className="block pl-3 text-gray-600">At the heart of his practice is classical Vedic astrology. By analyzing one&rsquo;s Janam Kundli (birth chart), {userDetails.name} uncovers the cosmic blueprint that shapes a person&rsquo;s life path. His readings include deep insights into past karmas, present circumstances, and future potentials.</p></li>
            <li className="pl-5"><h5 className="inline">Advanced Nadi Astrology</h5><p className="block pl-3 text-gray-600">Unlike traditional palm leaf-based Nadi astrology, {userDetails.name} applies advanced Nadi techniques using planetary degrees, nakshatras, and sub-lords. This approach allows him to deliver highly specific and timely predictions regarding career changes, financial fluctuations, and health cycles.</p></li>
            <li className="pl-5"><h5 className="inline">Numerology and Name Correction</h5><p className="block pl-3 text-gray-600">A master numerologist, {userDetails.name} helps clients understand the vibrational power of their birth numbers and names. His precise name corrections and business branding strategies have benefited entrepreneurs, professionals, and public figures alike.</p></li>
            <li className="pl-5"><h5 className="inline">Career and Business Astrology</h5><p className="block pl-3 text-gray-600">Whether someone is choosing a career path or planning a business launch, {userDetails.name} provides valuable guidance based on astrological timing, dashas, and planetary strengths. Many clients have credited him for turning around their professional lives and achieving financial growth.</p></li>
            <li className="pl-5"><h5 className="inline">Marriage and Relationship Compatibility</h5><p className="block pl-3 text-gray-600">{userDetails.name} offers thorough Kundli Milan (horoscope matching) and relationship analysis, helping couples understand their compatibility and emotional alignment. His remedies have helped many resolve long-standing marital issues and attract fulfilling partnerships.</p></li>
            <li className="pl-5"><h5 className="inline">Medical and Health Astrology</h5><p className="block pl-3 text-gray-600">By identifying planetary influences on health, {userDetails.name} can foresee potential illnesses and advise preventive measures. His holistic view of well-being includes guidance on diet, meditation, and spiritual practices.</p></li>
          </ol>
          <div className="text-base"><h3 className="text-xl">Trusted by Clients Worldwide</h3><p>With a clientele spanning across the <strong>USA, UK, UAE, Canada, Australia, and Singapore,</strong> {userDetails.name} is truly a global astrologer. His consultations are available both in-person and online via phone or video call, making his services accessible to people all over the world.</p> <p>Many NRIs (Non-Resident Indians) and international clients trust his predictions for major decisions such as immigration timing, foreign education, job relocation, and cross-cultural relationships.</p></div>
          <div className="text-base"><h3 className="text-xl">Personalized Remedies That Work</h3><p><strong>{userDetails.name}</strong> believes that while destiny may be written in the stars, the right knowledge and remedies can empower individuals to improve their outcomes. He prescribes simple yet powerful solutions including: <strong>Gemstones Mantras and chants Pujas and rituals Vastu corrections Spiritual counseling</strong>. Unlike commercial practitioners, he avoids fear-based tactics and focuses on uplifting and empowering his clients.</p></div>
          <div className="text-base"><h3 className="text-xl">Final Thoughts</h3><p>In today&rsquo;s fast-paced and unpredictable world, having access to genuine astrological wisdom can make all the difference. {userDetails.name} is not just an astrologer—he is a compassionate guide, a spiritual mentor, and a trusted advisor.</p><p>If you&rsquo;re looking for honest, accurate, and deeply insightful astrological guidance, <strong>{userDetails.name}</strong> is the name you can rely on.</p></div>
        </section>
        <Testimonials />
        <FAQS />
      </main>
    </>
  );
}