import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Image, Button, ConfigProvider, Carousel, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { GiCctvCamera } from "react-icons/gi";
import { BsHddNetworkFill } from "react-icons/bs";
import { BsPcDisplay } from "react-icons/bs";
import { SlCamrecorder } from "react-icons/sl";
import { LuRouter } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import makeinindia from "../images/india/image (8).jpg";
import workflow from "../images/india/image.jpg";
import workflow2 from "../images/india/image (2).jpg";
import workflow3 from "../images/india/image (4).jpg";
import image1 from "../images/india/image (10).jpg";
import image2 from "../images/india/image (11).jpg";
import image3 from "../images/india/image (12).jpg";
import aboutbanner1 from "../images/aboutbanner1.png";
import aboutbanner2 from "../images/aboutbanner2.png";
import aboutbanner3 from "../images/aboutbanner3.png";
import aboutbanner4 from "../images/aboutbanner4.png";
import aboutwhychooseimage from "../images/india/aboutwhychooseimage.jpeg";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import WhyChooseUs from "../components/who_we_are";

const About = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fhd-camera_1731581599675_cf3898084427.png&w=96&q=75",
      heading: "HD Camera",
      description:
        "A high-definition surveillance camera provides crystal-clear video for enhanced security monitoring.",
      icon: <GiCctvCamera size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fwifi-smart_1731581622608_3f0dc5045a9e.png&w=96&q=75",
      heading: "WiFi Smart",
      description:
        "Smart WiFi-enabled security system with mobile integration for remote monitoring and control.",
      icon: <LuRouter size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Finteractive-display_1731581646212_8facec83168a.png&w=96&q=75",
      heading: "Network Switches",
      description:
        "Efficient network switches optimizing connectivity for large-scale security system deployments.",
      icon: <BsHddNetworkFill size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fvideo-recorder_1731581653628_74d3cc9237f5.png&w=96&q=75",
      heading: "Interactive Display",
      description:
        "Touch-enabled display with real-time interaction, ideal for control and security monitoring systems.",
      icon: <BsPcDisplay size={40} />,
    },
  ];

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const groupedFeatures = chunkArray(features, 4);

  const trinaiImageUrl =
    "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/About%20Page/ChatGPT%20Image%20Feb%2027,%202026,%2004_44_58%20PM.png";

  const bannerImages = [
    "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/About%20Page/made%20in%20(3).png",
    aboutbanner2,
    aboutbanner3,
    aboutbanner4,
  ];

  return (
    <div className="w-full bg-white text-black pt-20">
      {/* Banner Section */}
      <div
        className="w-full relative overflow-hidden group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Dark overlay for better control visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 pointer-events-none" />

        <Carousel
          ref={carouselRef}
          autoplay={!isHovering}
          autoplaySpeed={2000}
          infinite
          dots={false}
          beforeChange={(_, next) => setActiveSlide(next)}
          adaptiveHeight
          swipeToSlide
          draggable={false}
        >
          {bannerImages.map((img, index) => (
            <div key={index} className="w-full">
              <motion.img
                src={img}
                alt={`About Slide ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto block select-none"
                draggable={false}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </Carousel>

        {/* ===== PROFESSIONAL CONTROLS ===== */}
        <div className="absolute bottom-6 left-0 w-full z-20 px-4">
          {/* Desktop Navigation Arrows ONLY (Hidden on Mobile) */}
          {/* <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between pointer-events-none">
            <button
              onClick={() => carouselRef.current?.prev()}
              className={`pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white text-2xl border-2 border-white/30 hover:bg-white hover:text-black hover:border-black transition-all duration-300 shadow-lg ${
                isHovering
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => carouselRef.current?.next()}
              className={`pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white text-2xl border-2 border-white/30 hover:bg-white hover:text-black hover:border-black transition-all duration-300 shadow-lg ${
                isHovering
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
              aria-label="Next slide"
            >
              ›
            </button>
          </div> */}

          {/* ✅ MOBILE ARROWS REMOVED HERE - Users will swipe instead */}

          {/* Clickable Indicator Dots - Visible on ALL Devices */}
          <div className="flex justify-center items-center gap-3">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselRef.current?.goTo(index)}
                className={`relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00ADE7] focus:ring-offset-2 focus:ring-offset-black/50 rounded-full ${
                  activeSlide === index
                    ? "w-10 h-1.5 bg-[#00ADE7] shadow-lg shadow-[#00ADE7]/50"
                    : "w-2.5 h-2.5 bg-white/90 hover:bg-white hover:scale-125 shadow-lg shadow-black/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : "false"}
              >
                {/* Animated pulse effect for active dot */}
                {activeSlide === index && (
                  <span className="absolute inset-0 rounded-full bg-[#00ADE7] animate-ping opacity-40" />
                )}
              </button>
            ))}
          </div>

          {/* Slide counter */}
          {/* <div className="text-center mt-3">
            <span className="text-white/90 text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              {activeSlide + 1} / {bannerImages.length}
            </span>
          </div> */}
        </div>
      </div>

      {/* ================= MAKE IN INDIA ================= */}
      <div className="p-5">
        <div className="lg:grid grid-cols-2 gap-10 border rounded-xl shadow-md p-8 items-center">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <img
              src="https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/About%20Page/Make%20in.png?tr=w-600,q-90"
              alt="Make in India - Trinai"
              loading="lazy"
              className="rounded-xl max-w-md w-full"
            />
          </motion.div>

          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              Make in India
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Indian Innovation. Global Impact.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              TRINAI was established with a vision to place Indian smart
              surveillance systems on the global map, aligning with the core
              principle of <strong>Atmanirbhar Bharat</strong>. Our solutions
              comply with both <strong>Make in India</strong> and{" "}
              <strong>Digital India</strong> initiatives.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              With one of the most modern manufacturing facilities near{" "}
              <strong>Hyderabad</strong>, TRINAI designs, develops, and
              manufactures advanced video security products that meet Indian
              standards and real-world customer requirements.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our in-house R&D center and continuous technology innovation
              enable us to deliver scalable, affordable, and future-ready
              security solutions while empowering Indian technology and jobs.
            </p>

            {/* VISION & MISSION */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group rounded-xl p-[2px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:-translate-y-1">
                <div className="bg-white rounded-xl p-5 h-full transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Vision
                  </h3>
                  <p className="text-gray-600">
                    To be a global leader in surveillance and security
                    solutions, made in India for the world.
                  </p>
                </div>
              </div>
              <div className="group rounded-xl p-[2px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:-translate-y-1">
                <div className="bg-white rounded-xl p-5 h-full transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Mission
                  </h3>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside">
                    <li>Build OEM / ODM global partnerships</li>
                    <li>Manufacture 2M+ units in India</li>
                    <li>Deliver scalable & affordable solutions</li>
                    <li>Empower Indian technology & jobs</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= COMPACT HEADING SECTION ================= */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-4 lg:mb-6 px-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Advanced Security and{" "}
          <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
            Surveillance Solutions
          </span>
        </h2>
      </motion.div>

      {/* ================= TRINAI INDUSTRIES CONTENT CARD ================= */}
      <div className="lg:p-6">
        <div className="py-4 px-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
                <div className="relative p-[3px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00ADE7] to-[#305292] shadow-2xl">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white">
                    <img
                      src={trinaiImageUrl}
                      alt="Innovative Security Solutions by Trinai"
                      className="w-full h-auto max-h-[240px] sm:max-h-[280px] lg:max-h-[320px] object-contain p-3 sm:p-4 transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white shadow-xl rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 hidden md:block z-10">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">
                    100% Make in India
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Trusted Nationwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="tickGradient"
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
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3 sm:mb-4">
                Trinai Industries
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Innovative Security Solutions by Trinai
              </h3>

              <div className="mt-6 space-y-5 text-gray-600 text-base sm:text-lg">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 group-hover:scale-110 transition-transform duration-300">
                    <TiTick size={18} style={{ fill: "url(#tickGradient)" }} />
                  </div>
                  <p>
                    <span className="font-semibold text-gray-800">
                      AI & IoT-Powered Surveillance –
                    </span>{" "}
                    Smarter systems that think, detect, and respond instantly.
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 group-hover:scale-110 transition-transform duration-300">
                    <TiTick size={18} style={{ fill: "url(#tickGradient)" }} />
                  </div>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Proudly Made in India Technology –
                    </span>{" "}
                    Ensuring quick service, better control, and reliable
                    execution.
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 group-hover:scale-110 transition-transform duration-300">
                    <TiTick size={18} style={{ fill: "url(#tickGradient)" }} />
                  </div>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Customizable & Scalable Systems –
                    </span>{" "}
                    Designed to adapt to unique and growing security needs.
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 group-hover:scale-110 transition-transform duration-300">
                    <TiTick size={18} style={{ fill: "url(#tickGradient)" }} />
                  </div>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Next-Gen Performance –
                    </span>{" "}
                    Advanced technology delivering powerful, future-ready
                    protection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Section - Welcome to Trinai */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden">
            <img
              src="https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/About%20Page/Red%20and%20White%20Modern%20Home%20Security%20Services%20Promotion%20Instagram%C2%A0Post%20(Presentation)%20(1).png"
              alt="Trinai Security"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-3 md:p-4 flex flex-col justify-center text-center md:text-left max-w-lg">
          <h1 className="text-2xl md:text-4xl font-bold">Welcome to Trinai</h1>
          <p className="text-sm md:text-base leading-relaxed mt-3">
            We are leaders in advanced surveillance solutions, ensuring security
            and peace of mind.
          </p>
          <div className="mt-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#00ADE7] transition-colors duration-300 bg-gray-100 rounded-lg p-3 shadow-sm">
                <span className="w-3 h-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full inline-block"></span>
                Bullet Camera
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#00ADE7] transition-colors duration-300 bg-gray-100 rounded-lg p-3 shadow-sm">
                <span className="w-3 h-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full inline-block"></span>
                Dome Camera
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#00ADE7] transition-colors duration-300 bg-gray-100 rounded-lg p-3 shadow-sm">
                <span className="w-3 h-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full inline-block"></span>
                PTZ Camera
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#00ADE7] transition-colors duration-300 bg-gray-100 rounded-lg p-3 shadow-sm">
                <span className="w-3 h-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full inline-block"></span>
                Smart GPU
              </li>
            </ul>
            <div className="mt-5">
              <Link to="/viewproducts">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#00ADE7",
                    },
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className="font-semibold shadow-md border-0 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #00ADE7 0%, #305292 50%, #27AAE1 100%)",
                      borderRadius: "10px",
                    }}
                  >
                    <span className="text-white">View Products</span>
                  </Button>
                </ConfigProvider>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container mx-auto p-4">
        {/* ================= CAROUSEL SECTION ================= */}
        <div className="p-6 bg-slate-200">
          <Carousel autoplay dots>
            {groupedFeatures.map((group, index) => (
              <div key={index} className="p-5">
                <Row gutter={[16, 16]} justify="center">
                  {group.map((feature, idx) => (
                    <Col key={idx} xs={24} sm={12} md={6} lg={6}>
                      <div className="relative w-full h-72 bg-white shadow-md rounded-lg p-5 text-center flex flex-col items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:text-white group cursor-pointer">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                          <img
                            src={feature.picture}
                            alt={feature.heading}
                            className="absolute w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                            loading="lazy"
                          />
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            {feature.icon}
                          </div>
                        </div>
                        <h2 className="mt-3 text-lg font-bold">
                          {feature.heading}
                        </h2>
                        <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Single Image Section - In House Manufacturing - FULLY RESPONSIVE */}
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="relative w-full rounded-xl overflow-hidden group">
          {/* Responsive image container with aspect ratio */}
          <div className="relative w-full">
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv-_1729858389940_16243449d9c8.png&w=750&q=75"
              alt="In House Manufacturing"
              className="w-full h-auto object-cover"
              style={{
                // Maintain aspect ratio across all devices
                aspectRatio: "16/9",
                minHeight: "300px",
              }}
              loading="lazy"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
          </div>

          {/* Content overlay - perfectly centered and responsive */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-4xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                In House Manufacturing
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto drop-shadow-md px-2">
                Our CCTV cameras are meticulously crafted through in-house
                manufacturing with an eye for detail by the best engineers,
                enabling complete control over quality, innovation, and
                precision.
              </p>
            </div>
          </motion.div>

          {/* Optional: Hover effect indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Top */}
      {/* <div>
        <ScrollTop
          target="window"
          threshold={100}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:from-[#305292] hover:to-[#00ADE7] transition-all duration-300"
        >
          <span className="text-white text-xl font-sans">↑</span>
        </ScrollTop>
      </div> */}
      <div>
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
    </div>
  );
};

export default About;
