// Importing Neccessary Packages //
import { userDetails } from "@/app/constants";
import FAQS from "@/components/FAQ";
import SendMessageForm from "@/components/SendMessageForm";
import Header from "@/components/Header";

// Exporting Default Function for Contact //
export default async function Contact() {
  // Returning TSX //
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5">
        <section className="flex lg:grid flex-col grid-cols-2 justify-center items-start bg-primary gap-5 md:gap-8 p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-gray-4xl xl:text-gray-5xl text-primary pb-2 border-b-2 border-emerald-500">Here&rsquo;s a clear and professional guide you can use for booking an appointment with {userDetails.name}:</h1>
            <ul className="flex flex-col gap-5 mt-5">
              <li><h3 className="text-2xl text-primary">🌍 Available Globally:</h3><p className="text-gray-600"><strong>{userDetails.name}</strong> provides consultations to clients across India, USA, UK, UAE, Canada, Australia, and more.</p></li>
              <li><h3 className="text-2xl text-primary">🔮 Expert in Vedic Astrology:</h3><p className="text-gray-600"><strong>{userDetails.name}</strong> specializes in Vedic astrology, offering accurate insights into your past, present, and future through ancient astrological principles.</p></li>
              <li><h3 className="text-2xl text-primary">❤️ Love & Marriage Guidance:</h3><p className="text-gray-600">Get precise and effective remedies for love problems, relationship compatibility, and marriage issues with <strong>{userDetails.name}</strong>&apos;s deep astrological expertise.</p></li>
              <li><h3 className="text-2xl text-primary">💼 Career & Business Solutions:</h3><p className="text-gray-600">Facing career blocks or business hurdles? <strong>{userDetails.name}</strong> offers personalized astrology consultations to help you make confident decisions for professional success.</p></li>
              <li><h3 className="text-2xl text-primary">👶 Kundli Matching & Childbirth Predictions:</h3><p className="text-gray-600">With years of experience in Kundli Milan and childbirth forecasting, <strong>{userDetails.name}</strong> provides guidance for marital harmony and family planning.</p></li>
              <li><h3 className="text-2xl text-primary">🪔 Pooja & Ritual Recommendations:</h3><p className="text-gray-600"><strong>{userDetails.name}</strong> recommends personalized Poojas and rituals for health, wealth, peace of mind, and spiritual growth.</p></li>
              <li><h3 className="text-2xl text-primary">🕉️ Dosha Identification & Remedies:</h3><p className="text-gray-600">From Mangal Dosha to Kaal Sarp Dosha, <strong>{userDetails.name}</strong> accurately identifies astrological imbalances and offers effective, time-tested remedies.</p></li>
              <li><h3 className="text-2xl text-primary">📅 Muhurat Selection:</h3><p className="text-gray-600">Choose the most auspicious date and time for weddings, business launches, housewarmings, and other important life events with <strong>{userDetails.name}</strong>&apos;s expert guidance.</p></li>
              <li><h3 className="text-2xl text-primary">🌑 Horoscope & Annual Forecasts:</h3><p className="text-gray-600"><strong>{userDetails.name}</strong> provides detailed daily, monthly, and yearly horoscope readings personalized as per your birth chart and planetary positions.</p></li>
              <li><h3 className="text-2xl text-primary">🧿 Protection from Evil Eye & Black Magic:</h3><p className="text-gray-600">Safeguard yourself and your family with proven astrology-based remedies to ward off negativity and remove the effects of black magic or nazar dosha with <strong>{userDetails.name}</strong>.</p></li>
            </ul>
          </div>
          <div className="flex flex-col w-full gap-8 md:gap-10">
            <div className="flex flex-col text-base gap-5"><h3 className="text-3xl md:text-gray-4xl font-semibold text-primary w-fit">📞 Contact for Assistance:</h3><a href={`tel:${userDetails.mobileNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-700">📞 Call {userDetails.mobileNumber}</a><a href={`mailto:${userDetails.email}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 w-fit">✉ Email {userDetails.email}</a></div>
            <SendMessageForm />
          </div>
        </section>
        <FAQS />
      </main>
    </>
  );
}