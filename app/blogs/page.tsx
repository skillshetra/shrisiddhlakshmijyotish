// Importing Neccessary Packages //
import Image from "next/image";
import FAQS from "@/components/FAQ";
import { blogs, userDetails } from "@/app/constants";
import Header from "@/components/Header";

// Exporting Default Function for Blogs //
export default function Blogs() {
  // Retunring TSX //
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5">
        <section className="flex flex-col justify-center items-center bg-gray-100 gap-5 p-4 sm:px-8 md:px-14 xl:py-10 lg:px-20 xl:px-28 2xl:px-32">
          <h2 className="text-xl text-primary md:text-2xl xl:text-3xl my-1">Blogs Written by {userDetails.name}</h2>
          <Image width={300} height={100} src="/hr.webp" alt="Shri Siddh Lakshmi Jyotish" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-5 md:mt-10">
            {blogs.map((blog) => (
              <div key={blog.permalink} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1">
                <Image width={500} height={500} src={`/blogs/${blog.permalink}.jpg`} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <a href={`/${blog.permalink}`} className="text-indigo-600 font-medium hover:underline">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <FAQS />
      </main>
    </>
  );
}