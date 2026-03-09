import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mainproducts from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ScrollTop } from "primereact/scrolltop";
import { ChevronLeft, ChevronRight } from "lucide-react";
import trinai5 from "../images/trinai-5.jpg";

const Categories = () => {
  const { type, name } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function formatCameraTitle(input) {
    if (!input || typeof input !== "string") return "";

    const abbreviations = ["mp", "hd", "ptz", "ir", "poe"];
    let replaced = input;

    abbreviations.forEach((abbr) => {
      const regex = new RegExp(abbr, "gi");
      replaced = replaced.replace(regex, abbr.toUpperCase());
    });

    return replaced
      .split("-")
      .map((word) => {
        if (abbreviations.some((abbr) => word === abbr.toUpperCase()))
          return word;
        if (/^\d+[A-Z]+$/.test(word)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  useEffect(() => {
    if (!name && !type) return;

    const keyword = name?.split(" ")[0];
    const typekeyword = formatCameraTitle(type)?.split(" ")[0];
    const thermalkeyword = formatCameraTitle(name)?.split(" ")[0];
    const facerecognition = formatCameraTitle(name)?.split(" ")[0];

    if (name) {
      if (
        name.endsWith("ras") ||
        name.endsWith("Recorder") ||
        name.endsWith("recognition")
      ) {
        const filteredProducts = mainproducts
          .filter(
            (product) =>
              product.cameraType ===
              formatCameraTitle(
                `${
                  thermalkeyword === "Thermal"
                    ? thermalkeyword
                    : facerecognition === "Ai"
                      ? facerecognition
                      : keyword
                }`,
              ),
          )
          .sort((a, b) => a.mp - b.mp);

        setProducts(filteredProducts);
      } else {
        const filtered = mainproducts.filter(
          (product) => product.name === formatCameraTitle(name),
        );
        setProducts(filtered);
      }
    } else if (type) {
      const filteredProducts = mainproducts
        .filter((product) => product.cameraType === typekeyword)
        .sort((a, b) => a.mp - b.mp);
      setProducts(filteredProducts);
    }
  }, [name, type]);

  const customTitles = {
    "ai-based-face-recognition": "Trinai Facial Biostand",
  };

  const pageTitle =
    customTitles[type] ||
    (name
      ? name === "mdvr"
        ? formatCameraTitle(name).toUpperCase()
        : formatCameraTitle(name)
      : formatCameraTitle(type));

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
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Smart PDF Section */}
      {formatCameraTitle(name).startsWith("Smart") ||
      formatCameraTitle(type).startsWith("Smart") ? (
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
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(
                  `/cemaradetails?query=${encodeURIComponent(product.id)}`,
                )
              }
              className="group border rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 bg-white"
            >
              {/* Image */}
              <div className="min-h-52 flex justify-center items-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${product.picture.replace(
                    /^\/+/,
                    "",
                  )}`}
                  alt={product.model}
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
          ))}
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
