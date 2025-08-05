"use server";

// Importing Necessary Packages
import Image from "next/image";
import axios from "axios";
import FAQS from "@/components/FAQ";
import Header from "@/components/Header";

// Exporting Default Function for Horoscope
export default async function Horoscope() {
    const horoscope: Record<string, string> = {};
    try {
        // Use Promise.all to wait for all API calls
        const responses = await Promise.all(
            [
                "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
                "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
            ].map(sign =>
                axios.get(`https://api.api-ninjas.com/v1/horoscope?zodiac=${sign.toLowerCase()}`, {
                    headers: { "X-Api-Key": "YOUR_API_KEY_HERE" }
                }).then(res => ({ sign, data: res.data }))
            )
        );
        // Populate the horoscope object
        responses.forEach(({ sign, data }) => {
            horoscope[sign] = data.horoscope;
        });
    } catch { }

    // Returning TSX
    return (
        <>
            <Header />
            <main className="flex flex-col gap-5 md:gap-10">
                <section className="flex flex-col justify-center items-center bg-primary p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32 rounded-b-xl">
                    <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Choose Your zodiac Sign</h2>
                    <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
                    <i className="text-gray-500 my-2">Choose Your Zodiac Sign Online</i>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5 md:mt-10">
                        {Object.entries(horoscope).map(([sign, prediction]) => {
                            return (
                                <div key={sign} className="flex flex-col justify-center items-center bg-gray-50 p-5 rounded-md shadow hover:scale-105 transition duration-300">
                                    <Image width={100} height={100} src={`/sunsigns/${sign.toLowerCase()}.svg`} alt="Shri Siddh Lakshmi Jyotish" className="max-w-16 max-h-16 min-w-16 min-h-16 p-2 shadow rounded-full" />
                                    <h3 className="text-lg font-medium my-1 hover-text-primary transition duration-300">{sign}</h3>
                                    <p className="text-gray-500 hover:text-gray-900 transition duration-300">{prediction}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <FAQS />
            </main>
        </>
    );
}