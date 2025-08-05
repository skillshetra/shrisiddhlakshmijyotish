// Importing Neccessary Packages //
import FAQS from "@/components/FAQ";
import { notFound } from "next/navigation";
import { blogs } from "@/app/constants";
import type { Metadata } from "next";
import Header from "@/components/Header";

// Generate Metadata for Each Blog Page //
export async function generateMetadata({ params }: { params: Promise<{ permalink: string }> }): Promise<Metadata> {
    const { permalink } = await params;
    const blog = blogs.find((b) => b.permalink === permalink);
    if (!blog) return {};
    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: [`/blogs/${blog.permalink}.jpg`],
        },
    };
}

// Exporting Default Function for BlogsSpecific //
export default async function BlogsSpecific({ params }: { params: Promise<{ permalink: string }> }) {
    const { permalink } = await params;
    const blog = blogs.find((b) => b.permalink === permalink);
    if (!blog) return notFound();
    // Returning JSX //
    return (
        <>
            <Header />
            <main className="max-w-[1200px] bg-gray-100 min-h-screen p-6 mx-auto">
                <div className="text-gray-700 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: blog.content }} />
                <div className="mt-12">
                    <FAQS />
                </div>
            </main>
        </>
    );
}

// Generating Static Pages //
export async function generateStaticParams() { return blogs.map((blog) => ({ permalink: blog.permalink })) }