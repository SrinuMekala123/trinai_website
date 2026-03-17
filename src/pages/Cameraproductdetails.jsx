// src/pages/Cameraproductsdetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsall from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Download, ArrowUp, Eye, Camera, FileText } from "lucide-react";
import { pdfjs } from "react-pdf";
import { slugify } from "../utils/slugify";

// Set the PDF worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Cameraproductsdetails() {
  // ✅ Extract category, product name slug, and ID from NEW URL format
  // URL: /products/:category/:product/:id
  const { category, product: productSlug, id } = useParams();
  const navigate = useNavigate();

  const [preview, setPreview] = useState(true);
  const [download, setDownload] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ✅ Find product by ID - handle both string and number IDs from your data
  const product = productsall.find((p) => String(p.id) === String(id));

  // ✅ SEO: Update document title on product load
  useEffect(() => {
    if (product) {
      document.title = `${product.model} - ${product.name} | Trinai`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  // Scroll listener for "back to top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ 404 Handling - show friendly error if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center px-4">
          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested product could not be found or may have been removed.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 rotate-180" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // ✅ Fallback for typo in some products: documnet vs document
  const pdfPath = product.document || product.documnet;
  const imagePath = product.picture;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* Header Section */}
        <div className="lg:grid grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <img
              src={`${import.meta.env.BASE_URL}${imagePath?.replace(
                /^\/+/,
                "",
              )}`}
              alt={product.model || product.name}
              className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-4 object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-black mb-4">
              {product.model} - {product.name}
            </h1>
            <h2 className="text-xl font-semibold mt-4 text-black">
              Key Features:
            </h2>
            <ul className="list-disc ml-6 mt-5 space-y-2">
              {product.keyFeatures?.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-600 flex items-start gap-2"
                >
                  <span className="text-[#00ADE7] mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] px-8 py-6">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Product Details
            </h3>
          </div>

          {/* Toggle Buttons */}
          <div className="bg-slate-100 px-4 sm:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  preview
                    ? "bg-white text-[#07518a] shadow-md transform -translate-y-0.5"
                    : "text-gray-600 hover:bg-white/50"
                }`}
                onClick={() => {
                  setDownload(false);
                  setPreview(true);
                }}
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#07518a]" />
                <span className="whitespace-nowrap">Show Preview</span>
              </button>
              <button
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  download
                    ? "bg-white text-[#07518a] shadow-md transform -translate-y-0.5"
                    : "text-gray-600 hover:bg-white/50"
                }`}
                onClick={() => {
                  setPreview(false);
                  setDownload(true);
                }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Download</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="py-6 sm:py-8 px-4 sm:px-8 lg:px-12">
            {/* PDF Viewer */}
            {preview && !download && pdfPath && (
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden shadow-inner">
                <div className="w-full min-h-[600px]">
                  <Viewer
                    fileUrl={`${
                      import.meta.env.BASE_URL
                    }${pdfPath.replace(/^\/+/, "")}`}
                  />
                </div>
              </div>
            )}

            {/* Download Section */}
            {download && !preview && pdfPath && (
              <div className="text-center py-8 sm:py-12">
                <div className="max-w-md mx-auto space-y-6 sm:space-y-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#07518a] to-[#0ea5e9] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Download className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Ready to Download
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 px-2">
                      Click the button below to download the product
                      documentation for{" "}
                      <span className="font-semibold text-[#07518a]">
                        {product.model}
                      </span>
                      .
                    </p>
                  </div>
                  <a
                    href={`${import.meta.env.BASE_URL}${pdfPath.replace(/^\/+/, "")}`}
                    download={`trinai-${slugify(product.model)}.pdf`}
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#07518a] to-[#0ea5e9] hover:from-[#0565b0] hover:to-[#07518a] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                    Download Documentation
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] hover:from-[#305292] hover:to-[#00ADE7] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Cameraproductsdetails;
