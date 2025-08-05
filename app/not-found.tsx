// Importing Neccessary Packages //
import Image from "next/image";
import Link from "next/link";
import { userDetails } from "@/app/constants";

// Exporting Default Function for HomePage //
export default function notfound() {
    return (
        <main className="flex flex-col justify-center items-center bg-primary p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32 rounded-b-xl">
            <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Astrological Services by {userDetails.name}</h2>
            <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
            <p className="mt-10 text-base leading-relaxed tracking-normal text-justify text-gray-800 max-w-prose">Sorry, the page you&apos;re looking for could not be found. It might have been removed, renamed, or it never existed. Please check the URL or return to the homepage.</p>
            <div className="flex justify-center items-center mt-10"><Image width={400} height={400} src="/website-logo.jpg" alt="Shri Siddh Lakshmi Jyotish" className="animate-updown rounded-full" /></div>
            <Link href="/" className="inline-block mt-10 p-6 py-3 bg-emerald-600 text-white font-medium text-base shadow-md rounded hover:bg-emerald-700 transition duration-300">GO Back</Link>
        </main>
    )
}