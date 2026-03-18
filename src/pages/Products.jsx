// src/pages/Products.jsx
import React, { useEffect } from "react";
import bgpng from "../images/acam.png";
import bullet1 from "../images/bullet1.png";
import dom1 from "../images/dom1.png";
import eyeball1 from "../images/eyeball1.png";
import ptz1 from "../images/ptz1.png";
import nvr1 from "../images/nvr1.png";
import server1 from "../images/server1.png";
import adnvr1 from "../images/adnvr1.png";
import face1 from "../images/face1.png";
import display2 from "../images/display2.png";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";
import { motion } from "framer-motion";
// ✅ Optional: Import slugify if you want dynamic generation
// import { slugify } from "../utils/slugify";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  // ✅ Optional helper: Use this if you want to generate slugs dynamically
  // const categorySlug = (name) => slugify(name);

  return (
    <div className="bg-slate-100">
      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* LEFT SIDE: CAMERA IMAGE */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00ADE7]/20 blur-3xl rounded-full"></div>
                <img
                  src={bgpng}
                  alt="Security Camera"
                  className="relative w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* RIGHT SIDE: TEXT CONTENT */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full mx-auto lg:mx-0 mb-6" />
              <span className="text-sm lg:text-base font-semibold uppercase tracking-widest text-white/90 block mb-3">
                Explore
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                  Our
                </span>{" "}
                <span className="text-white">Products</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover cutting-edge surveillance solutions engineered for
                security, performance, and peace of mind.
              </p>
              <div className="w-12 lg:w-20 h-0.5 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="relative z-2 -mt-20 sm:-mt-32 lg:-mt-44 lg:p-20 md:p-10 p-5">
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 p-5 bg-white lg:p-20 rounded-2xl shadow-xl">
          {/* Bullet Cameras */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            // ✅ Your current approach (RECOMMENDED for fixed categories):
            onClick={() => navigate(`/products/bullet-cameras`)}
            // ✅ OR dynamic with slugify (optional):
            // onClick={() => navigate(`/products/${slugify('Bullet Cameras')}`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={bullet1}
                  alt="Bullet Camera"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Bullet Cameras
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Long-range clarity for outdoor security.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Dome Cameras */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/dome-cameras`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={dom1}
                  alt="Dome Camera"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Dome Cameras
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Discrete indoor surveillance with wide coverage.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Eyeball Cameras */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/eyeball-cameras`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={eyeball1}
                  alt="Eyeball Camera"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Eyeball Cameras
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Flexible angle coverage; reliable visual monitoring.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* PTZ Cameras */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/ptz-cameras`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={ptz1}
                  alt="PTZ Camera"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                PTZ Cameras
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                360° pan-tilt-zoom for full surveillance.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Server */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/server`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={server1}
                  alt="Server"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Server
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Central backend processing and data storage.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Hybrid Video Recorder */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/smart-gpu-with-ai-camera`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={adnvr1}
                  alt="Hybrid Video Recorder"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Hybrid Video Recorder
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Mixed analog/IP recording for flexible systems.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Trinai Facial Biostand */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/ai-based-face-recognition`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={face1}
                  alt="Trinai Facial Biostand"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Trinai Facial Biostand
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Smart identity detection for secure access.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Display */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group"
            onClick={() => navigate(`/products/display`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={display2}
                  alt="Display"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Display
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                High-definition screens for live monitoring and control.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Network Video Recorder */}
          <div
            className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group col-span-2 lg:col-span-1"
            onClick={() => navigate(`/products/network-video-recorder`)}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  src={nvr1}
                  alt="Network Video Recorder"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors">
                Network Video Recorder
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Securely record and store surveillance footage.
              </p>
              <div className="mt-4 flex justify-center items-center gap-1.5">
                <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                  View More
                </span>
                <svg
                  className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Top */}
      <ScrollTop
        target="window"
        threshold={100}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
        icon={
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        }
      />
    </div>
  );
};

export default Products;
