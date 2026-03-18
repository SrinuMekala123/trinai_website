// src/pages/Categories.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsall from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ScrollTop } from "primereact/scrolltop";
import { ChevronRight } from "lucide-react";
import trinai5 from "../images/trinai-5.jpg";
import { slugify } from "../utils/slugify";

const Categories = () => {
  const { category } = useParams(); // ✅ This is already "bullet-cameras", "dome-cameras", etc.
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 Filter products by category from URL
  useEffect(() => {
    if (!category) return;

    const categoryKeywords = {
      "bullet-cameras": "Bullet",
      "eyeball-cameras": "Eyeball",
      "dome-cameras": "Dome",
      "ptz-cameras": "PTZ",
      "thermal-cameras": "Thermal",
      "network-video-recorder": "Network",
      server: "Server",
      "smart-gpu-with-ai-camera": "Smart GPU",
      "trinai-facial-biostand": "Ai",
      display: "Display",
      "ai-based-face-recognition": "Ai",
    };

    const keyword = categoryKeywords[category] || category;

    const filtered = productsall.filter((product) => {
      const productCategory = product.cameraType || "";
      return productCategory.toLowerCase().includes(keyword.toLowerCase());
    });

    setProducts(filtered);
  }, [category]);

  const getPageTitle = () => {
    const titles = {
      "bullet-cameras": "Bullet Cameras",
      "eyeball-cameras": "Eyeball Cameras",
      "dome-cameras": "Dome Cameras",
      "ptz-cameras": "PTZ Cameras",
      "thermal-cameras": "Thermal Cameras",
      "network-video-recorder": "Network Video Recorder",
      server: "Server",
      "smart-gpu-with-ai-camera": "Smart GPU with AI Camera",
      "trinai-facial-biostand": "Trinai Facial BioStand",
      display: "Display",
      "ai-based-face-recognition": "Trinai Facial BioStand",
    };
    return titles[category] || category?.replace(/-/g, " ");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${trinai5})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold tracking-wide">
            {getPageTitle()}
          </h1>
        </div>
      </div>

      {/* Smart PDF Section */}
      {category?.includes("smart") || category?.includes("gpu") ? (
        <div className="bg-slate-50 p-10">
          <div className="w-full -mt-40 flex justify-center">
            <Viewer
              fileUrl={`${import.meta.env.BASE_URL}smartgpu.pdf`}
              className="w-full h-screen"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 gap-8 p-10">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                // ✅ FIXED: Use category from URL params (already slugified correctly)
                onClick={() => {
                  // ✅ Priority: category param > product.cameraType
                  const categorySlug = category || slugify(product.cameraType);
                  const productSlug = slugify(product.name);
                  navigate(
                    `/products/${categorySlug}/${productSlug}/${product.id}`,
                  );
                }}
                className="group border rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 bg-white"
              >
                {/* Image */}
                <div className="min-h-52 flex justify-center items-center overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${product.picture?.replace(
                      /^\/+/,
                      "",
                    )}`}
                    alt={product.model || product.name}
                    className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <hr className="my-3" />
                <div className="text-gray-800 font-semibold text-center">
                  {product.model}
                </div>

                {/* Product Info */}
                <div className="text-center space-y-2">
                  <div className="text-gray-600 font-medium">
                    {product.productType}
                  </div>

                  {/* View More Button */}
                  <div className="flex justify-center pt-2">
                    <div className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] shadow-md transition-all duration-300 group-hover:scale-110">
                      View More
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      )}

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

export default Categories;
