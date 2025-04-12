import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <Image src="/logo.png" width={140} height={50} alt="Logo" priority />
          </Link>
          <p className="text-sm max-w-xs">
            Hotel terbaik untuk kenyamanan dan liburanmu. Booking sekarang dan nikmati fasilitas terbaik bersama kami!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaYoutube className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500 transition">About</Link></li>
            <li><Link href="/rooms" className="hover:text-orange-500 transition">Rooms</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition">Legal Info</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition">Payment Method</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold text-lg mb-4">Newsletter</h4>
          <p className="text-sm mb-4 max-w-xs">
            Dapatkan update dan promo terbaru dari kami langsung ke emailmu.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <input
              type="email"
              placeholder="Email kamu"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md transition shadow-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        &copy; 2025 <span className="text-orange-500 font-semibold">Online Booking Hotel</span> | Farhanayantoo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
