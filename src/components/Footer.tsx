import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Heart,
  Linkedin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const serviceAreas = [
  "Guwahati",
  "Tinsukia",
  "Dibrugarh",
  "Jorhat",
  "Silchar",
  "Tezpur",
  "Itanagar",
  "Namsai",
  "Tezu",
  "Pasighat",
  "Upper Assam",
  "Arunachal Pradesh",
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-100 via-white to-orange-50 border-t border-yellow-200 text-stone-700 mt-20 relative font-inter">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo and About */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img
            src="/logo.png"
            alt="PM Design Logo"
            className="w-14 h-14 mb-4 rounded-lg shadow"
          />
          <div className="font-montserrat font-bold text-lg mb-2 text-orange-500">
            Interiors By Preyashi
          </div>
          <div className="text-sm text-stone-700 mb-4">
            Premium Interior Design for Assam &amp; North East India <br />
            Tinsukia, Dibrugarh, Guwahati, Arunachal Pradesh and beyond.
          </div>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.instagram.com/interiorsbypreyashi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-orange-500 hover:text-orange-600"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/pmdesignsss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-orange-600 hover:text-orange-700"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/preyashi-birmiwal-8a058a15b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-yellow-800 hover:text-orange-600"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <div className="font-montserrat font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-orange-600 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="md:col-span-1">
          <div className="font-montserrat font-semibold mb-3">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="text-orange-500" size={18} />
              <a href="tel:8486076075" className="hover:text-orange-600">
                +91 8486076075
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-orange-500" size={18} />
              <a href="mailto:contact@pmdesign.co.in" className="hover:text-orange-600">
                contact@pmdesign.co.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-orange-500" size={18} />
              <span>
                Manav Kalyan Road, Parbatia, Namgarh Path-03,
                <br />
                Tinsukia, Assam - 786125
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="text-orange-500" size={18} />
              <span>
                Mon – Sat: 10 AM – 7 PM
                <br />
                Sun: Appointment Only
              </span>
            </li>
          </ul>
        </div>

        {/* Service Areas */}
        <div className="md:col-span-1">
          <div className="font-montserrat font-semibold mb-3">Service Areas</div>
          <ul className="space-y-2 text-[13px]">
            {serviceAreas.map((area) => (
              <li key={area}>
                <Link to="/" className="hover:text-orange-700 transition">
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-200 py-7 flex flex-col md:flex-row items-center justify-between px-4 bg-yellow-50">
        <div className="text-sm mb-2 md:mb-0 text-stone-700">
          &copy; 2025 Interiors By Preyashi. All rights reserved.
        </div>
        <div className="flex items-center gap-1 text-xs">
          Built with <Heart className="text-orange-500 mx-[2px]" size={14} /> by{" "}
          <a
            href="https://www.nirvian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-700 hover:text-orange-600"
          >
            NIRVIAN
          </a>
        </div>
        <div className="text-xs font-montserrat text-orange-700 ml-2 text-center md:text-right">
          Your dream space awaits. Share your vision with us — together we’ll make it a reality.
        </div>
      </div>

      <noscript>
        <div className="text-center py-4 text-stone-600 font-semibold">
          Please enable JavaScript for full site functionality. For direct queries, call +91 8486076075 or email contact@pmdesign.co.in
        </div>
      </noscript>
    </footer>
  );
};

export default Footer;
