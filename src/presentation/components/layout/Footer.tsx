import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faTiktok, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                L
              </div>
              <span className="font-serif font-bold text-lg">LENSA MEDIA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lembaga Pers Mahasiswa Lensa Media
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#beranda" className="hover:text-secondary transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#majalah" className="hover:text-secondary transition">
                  Baca Majalah
                </Link>
              </li>
              <li>
                <Link href="#organisasi" className="hover:text-secondary transition">
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link href="#kerjasama" className="hover:text-secondary transition">
                  Info Iklan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary mt-1" />
                <span>Universitas Islam Nahdlatul Ulama Jepara</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-secondary" />
                <span>lensamedia.unisnu@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-secondary" />
                <span>+62 822-4448-2470</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <SocialIcon href="https://www.instagram.com/lpmlensamedia/" icon={faInstagram} hoverColor="hover:bg-pink-600" />
              {/* <SocialIcon href="#" icon={faTiktok} hoverColor="hover:bg-black hover:border-white border-transparent" />
              <SocialIcon href="#" icon={faFacebookF} hoverColor="hover:bg-blue-600" />
              <SocialIcon href="#" icon={faYoutube} hoverColor="hover:bg-red-600" /> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LPM Lensa Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for consistency
const SocialIcon = ({ href, icon, hoverColor }: { href: string; icon: any; hoverColor: string }) => (
  <a
    href={href}
    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition duration-300 border border-gray-800 ${hoverColor} text-white`}
  >
    <FontAwesomeIcon icon={icon} className="text-xl" />
  </a>
);
