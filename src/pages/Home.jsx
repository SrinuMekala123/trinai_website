import "../index.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";
import { Link } from "react-router-dom";

const STRAPI_BASE_URL = "http://localhost:1337";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ===== FETCH ALL DATA FROM STRAPI API =====
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${STRAPI_BASE_URL}/api/homehero?populate[what_we_offer][populate]=cards&populate[Products][populate][productcards][populate]=image&populate[TrinaiBusinessSolutionscards][populate]=BusinessSolutionscards&populate[VelocitySeries][populate]=velocity_image&populate[smartdata][populate]=smart_ip_image`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setHomeData(result.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching home ", err);
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchHomeData();
  }, []);

  // ===== HELPER: Get proper image URL from Strapi response =====
  const getImageUrl = (imageData) => {
    if (!imageData) return null;

    // If it's already a full URL (ImageKit or external)
    if (typeof imageData === "string" && imageData.startsWith("http")) {
      return imageData.trim();
    }

    // If it's a Strapi image object with url property
    if (imageData?.url) {
      if (imageData.url.startsWith("http")) {
        return imageData.url.trim();
      }
      // Relative URL from Strapi - prepend base URL
      return `${STRAPI_BASE_URL}${imageData.url}`.trim();
    }

    return null;
  };

  // ===== HELPER: Extract plain text from Strapi rich text field =====
  const extractRichText = (richTextArray) => {
    if (!richTextArray || !Array.isArray(richTextArray)) return "";

    return richTextArray
      .filter((item) => item?.type === "paragraph")
      .map((item) => {
        const textParts = item?.children
          ?.filter((child) => child?.type === "text" && child?.text?.trim())
          .map((child) => child.text.trim());
        return textParts?.join(" ") || "";
      })
      .filter((text) => text && text.trim() !== "")
      .join("\n\n");
  };

  // ===== LOADING STATE =====
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <div className="flex">
          <img
            src="https://media.tenor.com/kh1ED9iY26UAAAAm/cam-camera.webp"
            width={200}
            height={200}
            alt="CCTV Loader"
            className="w-auto h-auto object-contain"
          />
        </div>
        <p className="text-white text-lg mt-4 animate-pulse">
          Scanning... Please wait
        </p>
      </div>
    );
  }

  // ===== ERROR STATE =====
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <p className="text-white text-lg text-center px-4">
          Error loading content: {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  // ===== EXTRACT ALL DATA FROM API RESPONSE =====
  const hero = homeData || {};

  // Parse rich text for who_description
  const whoDescriptionText = extractRichText(hero.who_description);
  const whoDescriptionParagraphs = whoDescriptionText
    .split("\n\n")
    .filter((p) => p.trim());

  // What We Offer section (from API) - NOTE: lowercase with underscore
  const whatWeOfferSection = hero.what_we_offer?.[0] || {};
  const whatWeOfferCards = whatWeOfferSection.cards || [];

  // Products section
  const productsSection = hero.Products?.[0] || {};
  const productCards = productsSection.productcards || [];

  // Business Solutions section
  const businessSolutionsSection = hero.TrinaiBusinessSolutionscards?.[0] || {};
  const businessSolutionsCards =
    businessSolutionsSection.BusinessSolutionscards || [];

  // Velocity Series section
  const velocity = hero.VelocitySeries || {};

  // Smart IP Cameras section
  const smartData = hero.smartdata?.[0] || {};

  return (
    <div className="w-full bg-white">
      {/* ===== HERO VIDEO SECTION (100% FROM API) ===== */}
      <div className="relative w-full h-[430px] sm:h-[530px] lg:h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={hero.hero_video?.trim() || ""} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/0 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center text-white px-4 sm:px-8 md:px-14 lg:px-28">
          <motion.h2
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl"
          >
            {hero.hero_title}
          </motion.h2>
          <motion.p
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl mt-4 max-w-3xl text-gray-200"
          >
            {hero.hero_description}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              to={
                hero.hero_button_slug === "homehero"
                  ? "/solutions"
                  : `/${hero.hero_button_slug}` || "/solutions"
              }
            >
              <button className="bg-white text-black font-bold px-6 py-3 rounded-md border hover:bg-gray-100 transition">
                {hero.hero_button_text}
              </button>
            </Link>
            <Link
              to={
                hero.hero_button2_slug === "homehero"
                  ? "/about"
                  : `/${hero.hero_button2_slug}` || "/about"
              }
            >
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-md border border-white hover:bg-transparent hover:text-white">
                {hero.hero_button2_text}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== WHO WE ARE SECTION (100% FROM API) ===== */}
      <div className="bg-white py-12 sm:py-14 lg:p-10 px-5 relative z-10 mb-30">
        <div className="max-w-10xl mx-auto lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT COLUMN – TEXT */}
            <div className="space-y-4">
              <div className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                {hero.who_title}
              </div>
              {whoDescriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {/* RIGHT COLUMN – IMAGE */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <img
                  src={getImageUrl(hero.who_image)}
                  alt={hero.who_title}
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHAT WE OFFER (100% FROM API) ===== */}
      <div className="bg-slate-50 py-14 px-5">
        <div className="lg:px-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mb-12"
          >
            {/* Gradient Title - FROM API */}
            <div className="text-xl font-bold mb-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              {whatWeOfferSection.title}
            </div>
            {/* Description - FROM API */}
            <p className="text-gray-600 text-lg max-w-4xl">
              {whatWeOfferSection.description}
            </p>
          </motion.div>

          {/* CARDS - FROM API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOfferCards.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-xl p-6 shadow-lg text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== PRODUCTS CAROUSEL (100% FROM API) ===== */}
      <div className="bg-white py-14 px-5">
        <div className="lg:px-10">
          <div className="mb-10">
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              {productsSection.title}
            </div>
            <p className="text-gray-600 text-lg">
              {productsSection.description}
            </p>
          </div>
          <Carousel
            autoplay
            autoplaySpeed={1000}
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {productCards.map((item, index) => (
              <div key={item.id || index} className="px-3">
                <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.name}
                    className="h-32 object-contain mb-4"
                  />
                  <h4 className="text-gray-800 font-semibold text-lg text-center">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* ===== TRINAI BUSINESS SOLUTIONS (100% FROM API) ===== */}
      <div className="bg-slate-50 py-16 px-5">
        <div className="lg:px-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              {businessSolutionsSection.title}
            </div>
            <p className="text-gray-600 text-lg max-w-4xl">
              {businessSolutionsSection.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSolutionsCards.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: false }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image?.trim()}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== VELOCITY SERIES SECTION (100% FROM API) ===== */}
      <div className="p-5">
        <div className="lg:grid rounded-md grid-cols-2 p-8 shadow shadow-white border">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={getImageUrl(velocity.velocity_image)}
              alt={velocity.velocity_title1}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="m-2"
          >
            <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              {velocity.velocity_title1}
            </div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              {velocity.velocity_title2}
            </div>
            <p className="text-gray-600 text-lg max-w-xl">
              {extractRichText(velocity.velocity_description)}
            </p>
            <div className="mx-2 my-10">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#00ADE7",
                    colorPrimaryHover: "#305292",
                    colorPrimaryActive: "#27AAE1",
                  },
                }}
              >
                <Space>
                  <Link
                    to={velocity.velocity_button_link?.trim() || "/products"}
                  >
                    <Button
                      type="primary"
                      size="large"
                      icon={<AntDesignOutlined />}
                      className="font-semibold shadow-md bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] border-0 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, #00ADE7 0%, #305292 50%, #27AAE1 100%)",
                        borderRadius: "10px",
                      }}
                    >
                      <span className="text-white">
                        {velocity.velocity_button_text}
                      </span>
                    </Button>
                  </Link>
                </Space>
              </ConfigProvider>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== SMART IP CAMERAS SECTION (100% FROM API) ===== */}
      <div>
        <div className="lg:p-10 bg-slate-50">
          <div className="lg:grid mt-4 rounded-md grid-cols-2 p-8">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=""
            >
              <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                {smartData.smart_ip_title1}
              </div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                {smartData.smart_ip_title2}
              </div>
              <div className="text-start mx-2 mt-5 text-gray-700 text-xl">
                {extractRichText(smartData.smart_ip_description)}
              </div>
              <div className="mx-2 my-10">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#00ADE7",
                      colorPrimaryHover: "#305292",
                      colorPrimaryActive: "#27AAE1",
                    },
                  }}
                >
                  <Space>
                    <Link
                      to={smartData.smart_ip_button_link?.trim() || "/products"}
                    >
                      <Button
                        type="primary"
                        size="large"
                        icon={<AntDesignOutlined />}
                        className="font-semibold shadow-md bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] border-0 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(90deg, #00ADE7 0%, #305292 50%, #27AAE1 100%)",
                          borderRadius: "10px",
                        }}
                      >
                        <span className="text-white">
                          {smartData.smart_ip_button_text}
                        </span>
                      </Button>
                    </Link>
                  </Space>
                </ConfigProvider>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={getImageUrl(smartData.smart_ip_image)}
                alt={smartData.smart_ip_title1}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
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

export default Home;
