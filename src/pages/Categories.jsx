import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import mainproducts from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import background from "../images/triani-image-1.jpg";
import first from "../images/2.png";
import second from "../images/3.png";
import third from "../images/4.png";
import fourth from "../images/5.png";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ScrollTop } from "primereact/scrolltop";
import trinai5 from "../images/trinai-5.jpg";

const Categories = () => {
  const { type, name } = useParams();

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function formatCameraTitle(input) {
    if (!input || typeof input !== "string") return ""; // ✅ Prevent error

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

  // Example usage

  useEffect(() => {
    if (!name && !type) return;

    const keyword = name?.split(" ")[0];
    const typekeyword = formatCameraTitle(type)?.split(" ")[0];
    const thermalkeyword = formatCameraTitle(name)?.split(" ")[0];
    const facerecognition = formatCameraTitle(name)?.split(" ")[0];
    // alert(facerecognition);

    // alert(thermalkeyword);

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
                }`
              )
          )
          .sort((a, b) => a.mp - b.mp);
        console.log("kjhgfdfghj", filteredProducts);
        setProducts(filteredProducts);
      } else {
        const products = mainproducts.filter(
          (product) => product.name === formatCameraTitle(name)
        );
        setProducts(products);
      }
    } else if (type) {
      // alert(typekeyword);

      const filteredProducts = mainproducts
        .filter((product) => product.cameraType === typekeyword)
        .sort((a, b) => a.mp - b.mp);
      setProducts(filteredProducts);
    }
  }, [name, type]);

  return (
    <div>
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* Background image with fixed effect */}
        <div
          className="absolute inset-0 bg-fixed bg-center  bg-cover"
          style={{
            backgroundImage: `url(${trinai5})`,
          }}
        ></div>

        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Optional heading or text content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {name ? (
            <h1 className="text-white text-4xl font-bold">
              {formatCameraTitle(name)}
              {!(
                name?.endsWith("ras") ||
                name?.startsWith("smart") ||
                name?.startsWith("server") ||
                name?.startsWith("ai-based")
              ) && "'s"}
            </h1>
          ) : (
            <h1 className="text-white text-4xl font-bold">
              {formatCameraTitle(type)}
            </h1>
          )}
        </div>
      </div>
      {formatCameraTitle(name).startsWith("Smart") ||
      formatCameraTitle(type).startsWith("Smart") ? (
        <div className=" bg-slate-50 text-gray-500 p-10   ">
          <div className="w-full -mt-40 bg-red-50  items-center flex justify-center">
            <Viewer
              fileUrl={`${import.meta.env.BASE_URL}smartgpu.pdf`}
              className="w-full h-screen"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className=" bg-white  text-gray-500 grid lg:grid-cols-4 gap-7 p-5">
            {products.map((product, index) => (
              <div
                key={index}
                className=" border p-2 rounded-lg font-semibold "
              >
                {/* <div className=" text-center">{product.model}</div> */}
                <div className=" min-h-52 flex justify-center items-center">
                  <img
                    onClick={() =>
                      navigate(
                        `/cemaradetails?query=${encodeURIComponent(product.id)}`
                      )
                    }
                    src={`${import.meta.env.BASE_URL}${product.picture.replace(
                      /^\/+/,
                      ""
                    )}`}
                    className={`text-center ${
                      type?.startsWith("ai-based") ? "h-48 w-32" : ""
                    }   hover:scale-105 transition  cursor-pointer`}
                  ></img>
                </div>
                <hr />

                {type && (
                  <div className="bg-white text-orange-600 p-2">
                    {type === "network-video-recorder" ||
                    type === "server" ||
                    type === "ai-based-face-recognition" ? (
                      ""
                    ) : (
                      <span>{product.mp}MP</span>
                    )}
                    <span className="text-gray-500 ms-3 text-center">
                      {product.model}
                    </span>
                  </div>
                )}
                {name && (
                  <div className="bg-white text-orange-600 p-2">
                    {/* {!name.endsWith("nvr") &&
                      !name.endsWith("Recorder") &&
                      !name.startsWith("Thermal") &&
                      !name.startsWith("Server") && <span>{product.mp}MP</span>}
                    <span className="text-gray-500 ms-3 text-center">
                      {product.model}
                    </span> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-red-500">
        <ScrollTop
          target="window"
          threshold={100}
          className="w-3rem h-3rem border-round bg-orange-600"
          icon="pi pi-arrow-up text-white text-xl" // Apply orange color here
        />
      </div>
    </div>
  );
};

export default Categories;
