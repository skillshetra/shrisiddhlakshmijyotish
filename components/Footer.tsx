// Importing Neccessary Packages //
import Image from "next/image";
import { userDetails } from "@/app/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Exporting Default Function for Footer //
export default function Footer() {
  // Returning TSX //
  return (
    <footer className="flex flex-col justify-center items-center gap-5 md:gap-10 p-4 md:py-10 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-32 select-none" style={{ boxShadow: "-5px 5px 30px 5px #999999" }}>
      {/* <strong className="py-5 text-lg">&copy; Copyright 2004 - 2025, All Rights Reserved, {userDetails.name}</strong> */}
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-3">
          <Image width={100} height={100} src="/website-logo.jpg" alt={userDetails.name} className="rounded-full" />
          <i><strong>{userDetails.name}</strong> accolades include multiple awards for being the best astrologer in India, including the prestigious title in 2018. Her unwavering dedication to her craft and unwavering commitment to client satisfaction continue to propel her towards greater heights of success and popularity.</i>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="text-primary text-lg">Contact Info</h3>
          <div className="flex flex-col w-fit gap-2">
            <a href={`tel:${userDetails.mobileNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition duration-300">📞 Call {userDetails.mobileNumber}</a>
            <a href={`mailto:${userDetails.email}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition duration-300">✉ Email {userDetails.email}</a>
            <div className="text-gray-500 hover:text-gray-900 transition duration-300">📍{userDetails.address}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-5">
        <p className="text-gray-600">Copyright &copy; {new Date().getFullYear()} {userDetails.name}. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl hover:scale-110 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-3xl hover:scale-110 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl hover:scale-110 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}