// Importing Neccessary Packages //
import Testimonials from "@/components/Testimonials";
import FAQS from "@/components/FAQ";
import ServicesSection from "@/components/ServicesSection";
import Header from "@/components/Header";

// Exporting Default Function for Services //
export default function Services() {
  // Returning TSX //
  return (<><Header /><main className="flex flex-col gap-5 md:gap-10"><ServicesSection /><Testimonials /><FAQS /></main></>);
}