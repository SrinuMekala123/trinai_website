import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  Download,
  ArrowUp,
  Eye,
  Camera,
  Zap,
  Shield,
  Battery,
  Image,
  FileText,
} from "lucide-react";
import { pdfjs } from "react-pdf";

// Set the PDF worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Cameraproductsdetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("query");
  const product = products.find((p) => p.id === parseInt(id));

  const [preview, setPreview] = useState(true);
  const [download, setDownload] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const HandlePreview = () => {
    setDownload(false);
    setPreview(true);
  };

  const HandleDownload = () => {
    setPreview(false);
    setDownload(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            The requested product could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* Header Section */}
        <div className="lg:grid grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <img
              src={`${import.meta.env.BASE_URL}${product.picture.replace(
                /^\/+/,
                "",
              )}`}
              alt={product.model}
              className={` ${
                id === "44" ? "h-96 " : "w-full md:w-1/2"
              }  mx-auto rounded-lg shadow-lg mt-4`}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4 text-black ">
              Key Features:
            </h2>
            <ul className="list-disc ml-6 mt-5">
              {product.keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white  rounded-2xl  shadow-xl overflow-hidden mt-4">
          {/* Section Header */}
          <div className="bg-gradient-to-r  from-[#00ADE7] to-[#305292] px-8 py-6">
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
                onClick={HandlePreview}
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
                onClick={HandleDownload}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Download</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="py-6 sm:py-8 px-4 sm:px-8 lg:px-12">
            {/* PDF Viewer */}
            {preview && !download && (
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden shadow-inner">
                <div className="w-full">
                  <Viewer
                    fileUrl={`${
                      import.meta.env.BASE_URL
                    }${product.document.replace(/^\/+/, "")}`}
                  />
                </div>
              </div>
            )}

            {/* Download Section */}
            {download && !preview && (
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
                      documentation for {product.model}.
                    </p>
                  </div>
                  <a
                    href={product.document}
                    download={`trinai-${product.model}`}
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
            onClick={scrollToTop}
            className="
      fixed bottom-8 right-8
      w-12 h-12
      rounded-full
      bg-gradient-to-r from-[#00ADE7] to-[#305292]
      hover:from-[#305292] hover:to-[#00ADE7]
      text-white
      shadow-lg hover:shadow-xl
      flex items-center justify-center
      transition-all duration-300
      transform hover:-translate-y-1 hover:scale-105
      z-50
    "
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Cameraproductsdetails;
