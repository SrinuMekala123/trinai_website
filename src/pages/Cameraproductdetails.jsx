import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { IoMdDownload } from "react-icons/io";
import { Button } from "antd";
import { ScrollTop } from "primereact/scrolltop";
import { pdfjs } from "react-pdf";

// Set the PDF worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Cameraproductsdetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("query");
  const product = products.find((p) => p.id === parseInt(id));

  const [preview, setPreview] = useState(true);
  const [download, setDownload] = useState(false);

  const HandlePreview = () => {
    setDownload(false);
    setPreview(true);
  };

  const HandleDownload = () => {
    setPreview(false);
    setDownload(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 pt-20 bg-white text-gray-700">
      {/* Product Display */}
      <div className="lg:grid grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={`${import.meta.env.BASE_URL}${product.picture.replace(
              /^\/+/,
              ""
            )}`}
            alt={product.model}
            className={` ${
              id === "44" ? "h-96 " : "w-full md:w-1/2"
            }  mx-auto rounded-lg shadow-lg mt-4`}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-4">Key Features:</h2>
          <ul className="list-disc ml-6 mt-5">
            {product.keyFeatures.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Preview & Download Toggle */}
      <div>
        <div className="text-black text-3xl font-bold mt-8">Details</div>
        <div className="flex gap-6 pt-3 px-5 bg-slate-200 my-5 rounded-md">
          <div
            className={`cursor-pointer font-semibold h-10 p-2 rounded-t-md ${
              preview ? "bg-white text-orange-600" : ""
            }`}
            onClick={HandlePreview}
          >
            Show Preview
          </div>
          <div
            className={`cursor-pointer font-semibold h-10 p-2 rounded-t-md ${
              download ? "bg-white text-orange-600" : ""
            }`}
            onClick={HandleDownload}
          >
            Download
          </div>
        </div>

        {/* PDF Viewer */}
        {preview && !download && (
          <div className="bg-slate-50 h-[calc(100vh-200px)] overflow-auto hide-scrollbar text-gray-600">
            <div className="w-full  h-full ">
              <Viewer
                fileUrl={`${import.meta.env.BASE_URL}${product.document.replace(
                  /^\/+/,
                  ""
                )}`}
              />
            </div>
          </div>
        )}

        {/* Download Button */}
        {download && !preview && (
          <div className="w-full flex justify-center items-center">
            <a href={product.document} download={`trinai-${product.model}`}>
              <Button className="px-20 py-5 font-bold text-xl flex gap-2 items-center">
                <IoMdDownload />
                Download
              </Button>
            </a>
          </div>
        )}
      </div>

      {/* Scroll to Top */}
      <ScrollTop
        target="window"
        threshold={100}
        className="w-3rem h-3rem border-round bg-orange-600"
        icon="pi pi-arrow-up text-white text-xl"
      />
    </div>
  );
}

export default Cameraproductsdetails;
