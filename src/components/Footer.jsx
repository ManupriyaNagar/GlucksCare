import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500">
      {/* Top section: Social networks */}
      <div className="border-b border-gray-200 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between lg:px-16">
        <div className="text-center mb-2 md:mb-0">
          Get connected with us on social networks:
        </div>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-gray-800 transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-gray-800 transition-colors" />
          </Link>
          <Link href="#" aria-label="Google">
            <FaGoogle className="text-xl hover:text-gray-800 transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-gray-800 transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-gray-800 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Main footer section */}
      <div className="mx-auto py-10 px-6 md:px-12 lg:px-16 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center text-center md:text-left">
          {/* Company Name */}
          <div>
            <img src="/logo.png" alt="logo" className="w-48 mx-auto md:mx-0" />
            <p className="text-sm mt-4">
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Quick Links</h6>
            <p className="mb-4">
              <Link href="/our-business" className="text-gray-50 hover:text-gray-800 transition-colors">
                Our Business
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/privacy-policy" className="text-gray-50 hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/about-us" className="text-gray-50 hover:text-gray-800 transition-colors">
                About Us
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/contact-us" className="text-gray-50 hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </p>
          </div>

          {/* Useful links */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Our Business</h6>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Our Story
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Our Reach
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Our Services
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Our Team
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Contact</h6>
            <a href="https://www.google.com/maps/search/?api=1&query=T3-236+Golden-I+Techzone-IV+Bishrakh+Greater+Noida+West+Noida+Gautambuddha+Nagar+Uttar+Pradesh+201306"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300 inline-block">
              <p className="mb-4">
                T3-236, Golden-I, Techzone-IV, Bishrakh, Greater Noida West, Noida, Gautambuddha Nagar, Uttar Pradesh(201306) IN  </p>
            </a>
            <p className="mb-4">

              care@gluckscare.com
            </p>
            <p className="mb-4">
              +91 11696 58917
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 flex justify-between items-center px-4 py-4">
        <div className="text-left">
          Powered BY RBSH STUDIO
        </div>

        <div className="text-right">
          © 2025 Copyright:
          <Link href="https://mdbootstrap.com/" className="text-gray-500 font-semibold ml-1">
            GlucksCare
          </Link>
        </div>
      </div>
    </footer>
  );
}
