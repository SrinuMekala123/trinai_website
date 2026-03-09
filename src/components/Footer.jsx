import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterestSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import blogo from "../images/highbtlogo.png";
import trinaiLogo from "../images/logo/logo6.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebookSquare size={18} />,
      href: "https://www.facebook.com/profile.php?id=61574150717517",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "https://x.com/trinai_official",
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/trinai_cctv/",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: "https://www.linkedin.com/company/106424439",
    },
    {
      icon: <FaPinterestSquare size={18} />,
      href: "https://in.pinterest.com/trinai_official/",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white pb-8 overflow-hidden">
      {/* Foreground content */}
      <div className="relative z-10">
        {/* MAIN FOOTER CONTENT */}
        <div className="max-w-screen-xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-24">
            {/* About Trinai */}
            <div className="max-w-sm">
              <img src={trinaiLogo} alt="Trinai Logo" className="w-40 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                About Trinai
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Trinai is a Manufacturing Unit specialized in security products,
                delivering the best solutions based on real-world scenarios.
                Using AI-Analytics, we empower our CCTV cameras to deliver the
                best results across every field.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:mx-auto text-left">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Quick Links
              </h3>

              <ul className="text-white/90">
                {["Home", "About", "Products", "Solutions", "Contact"].map(
                  (text) => (
                    <li key={text}>
                      <Link
                        to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                      >
                        <button className="hover:text-white hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out text-white/90">
                          {text}
                        </button>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            {/* Contact & Address */}
            <div className="lg:pl-10">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Contact Details
              </h3>

              <p className="text-white/90 text-sm mb-2">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:trinai@brihaspathi.com"
                  className="hover:text-white/70 transition-colors"
                >
                  trinai@brihaspathi.com
                </a>
              </p>

              <p className="text-white/90 text-sm mb-4">
                <strong className="text-white">Phone:</strong> +91 98858 88835
              </p>

              <p className="text-white/90 text-sm mb-3">
                <strong className="text-white">Corporate Office:</strong>
                <br />
                #501, #508-510, Shangrila Plaza,
                <br />
                Road No. 2, Park View Enclave,
                <br />
                Banjara Hills, Hyderabad,
                <br />
                Telangana – 500034
              </p>

              <p className="text-white/90 text-sm">
                <strong className="text-white">Manufacturing Unit:</strong>
                <br />
                Sy No. 340, Plot No. 198/2, 201–204,
                <br />
                Tuniki Bollaram, Siddipet,
                <br />
                Telangana – 502279
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-gradient-to-r from-[#008CC4] to-[#254375] text-white py-4 px-6 lg:px-20 mt-10 border-t border-white/20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-center md:text-left">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p>&copy; 2025 Trinai. All rights reserved.</p>
              <span className="hidden md:block">|</span>
              <Link
                to="/privacy-policy"
                className="hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="hidden md:block">|</span>
              <p>
                Email ID:{" "}
                <a
                  href="mailto:trinai@brihaspathi.com"
                  className="hover:text-white/70 transition-colors"
                >
                  trinai@brihaspathi.com
                </a>
              </p>
              <span className="hidden md:block">|</span>
              <p>+91 98858 88835</p>
            </div>

            {/* ✅ Keep your existing gradient definition */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <linearGradient
                  id="iconGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00ADE7" />
                  <stop offset="100%" stopColor="#305292" />
                </linearGradient>
              </defs>
            </svg>

            {/* ✅ Add this CSS */}
            <style>{`
  .icon-stroke-gradient:hover svg {
    stroke: url(#iconGradient) !important;
    transition: stroke 0.3s ease;
  }
  .icon-stroke-gradient:hover svg[fill]:not([fill="none"]) {
    fill: url(#iconGradient) !important;
  }
`}</style>

            {/* ✅ Your social links - only added 2 classes */}
            <div className="flex justify-center gap-3">
              {socialLinks.map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-stroke-gradient group bg-white/20 text-white hover:bg-white hover:text-[#305292] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
