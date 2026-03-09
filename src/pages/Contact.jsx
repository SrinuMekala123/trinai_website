import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdMail } from "react-icons/io";
import { TiSupport } from "react-icons/ti";
import { MdCall, MdPrecisionManufacturing } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { ScrollTop } from "primereact/scrolltop";
import Threads from "./Threads";

const Contact = () => {
  // 🟢 State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🟢 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (submitted) validateField(name, value);
  };

  const validateField = (field, value) => {
    let error = "";
    if (field === "name" && !value.trim()) error = "Name is required";
    if (field === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is not valid";
    }
    if (field === "phone") {
      if (!value) error = "Mobile number is required";
      else if (!/^\d{10}$/.test(value))
        error = "Mobile number should be 10 digits";
    }
    if (field === "message" && !value.trim()) error = "Message is required";
    if (field === "subject" && !value.trim()) error = "Subject is required";

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number should be 10 digits";
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // 🟢 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoader(true);

    const valid = validateForm();
    if (!valid) {
      setLoader(false);
      return;
    }

    try {
      const response = await fetch("https://183.82.0.94:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
        setErrors({});
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    } finally {
      setLoader(false);
    }
  };

  // 🎨 Shared styles for TextField with gradient focus
  const gradientFocusStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#00ADE7",
        borderWidth: "2px",
      },
      "&:hover fieldset": { borderColor: "#305292" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00ADE7" },
    "& .MuiInputBase-input": { color: "#1e293b" },
    "& .MuiOutlinedInput-root.Mui-focused": {
      boxShadow:
        "0 0 0 3px rgba(0, 173, 231, 0.2), 0 0 0 6px rgba(48, 82, 146, 0.1)",
      transition: "box-shadow 0.3s ease",
    },
  };

  // 🔷 FIXED: Clean banner image URL (removed extra spaces)
  const bannerImageUrl =
    "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(1).jpg";

  return (
    <div className="relative">
      {/* 🔷 Hidden SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ADE7" />
            <stop offset="100%" stopColor="#305292" />
          </linearGradient>
        </defs>
      </svg>

      {/* 🔷 Global CSS for gradient icons */}
      <style>{`
        .gradient-icon {
          display: inline-flex;
          fill: url(#iconGradient) !important;
          color: transparent !important;
          transition: all 0.3s ease;
        }
        .gradient-icon-hover {
          transition: all 0.3s ease;
        }
        .gradient-icon-hover:hover svg,
        .gradient-icon-hover:active svg {
          fill: url(#iconGradient) !important;
          color: transparent !important;
        }
        .gradient-icon-hover svg {
          transition: fill 0.3s ease;
        }
      `}</style>

      {/* 🔷 Hero Banner - FIXED IMAGE URL */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image - URL properly encoded */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('${bannerImageUrl}')`,
          }}
        >
          {/* Optional: Fallback if image fails to load */}
          <img
            src={bannerImageUrl}
            alt="Contact Banner"
            className="hidden"
            onError={(e) => {
              e.target.onerror = null;
              // Optional: Set a fallback background color
              document
                .querySelector(".banner-fallback")
                ?.classList.remove("hidden");
            }}
          />
        </div>

        {/* Fallback overlay if image fails */}
        <div className="banner-fallback hidden absolute inset-0 bg-gradient-to-r from-[#00ADE7] to-[#305292]"></div>

        {/* Dark Overlay (optional - uncomment if needed) */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 font-sans">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Contact Our Team
          </h1>
          <p className="text-white text-sm md:text-lg max-w-3xl leading-relaxed drop-shadow-md">
            Contact Trinai today for customized, high-quality security and
            surveillance solutions.
          </p>
        </div>
      </div>

      {/* 🔷 Main Content: Left Form (Page-like) + Right Cards */}
      <div className="bg-slate-50 py-12 px-4 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* 🔷 LEFT: Form Section - Page-like Full Width Feel */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-slate-100">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Please let us know if you have a question or want to leave a
              comment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <TextField
                  error={!!errors.name}
                  label="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  sx={gradientFocusStyle}
                  InputLabelProps={{ className: "font-sans" }}
                  inputProps={{ className: "font-sans" }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm -mt-4">{errors.name}</p>
                )}

                <TextField
                  error={!!errors.email}
                  label="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  sx={gradientFocusStyle}
                  InputLabelProps={{ className: "font-sans" }}
                  inputProps={{ className: "font-sans" }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm -mt-4">{errors.email}</p>
                )}

                <TextField
                  error={!!errors.phone}
                  label="Phone number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  sx={gradientFocusStyle}
                  InputLabelProps={{ className: "font-sans" }}
                  inputProps={{ className: "font-sans" }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm -mt-4">{errors.phone}</p>
                )}
              </div>

              <TextField
                error={!!errors.message}
                label="Message*"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                fullWidth
                sx={gradientFocusStyle}
                InputLabelProps={{ className: "font-sans" }}
                inputProps={{ className: "font-sans" }}
              />
              {errors.message && (
                <p className="text-red-500 text-sm -mt-4">{errors.message}</p>
              )}

              <div className="flex justify-end pt-2">
                {loader ? (
                  <button
                    type="submit"
                    disabled
                    className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white py-3 px-10 rounded-lg opacity-70 cursor-not-allowed transition-all duration-300 shadow-md font-sans"
                  >
                    Submitting...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white py-3 px-10 rounded-lg hover:from-[#305292] hover:to-[#00ADE7] active:opacity-90 transition-all duration-300 shadow-md font-sans"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* 🔷 RIGHT: Contact Cards Section */}
          <div className="space-y-6">
            {/* 📍 Address Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4 flex items-center gap-2">
                <FaLocationDot className="gradient-icon" size={20} />
                Our Locations
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">
                    Registered Office
                  </p>
                  <p className="text-gray-600 text-sm mt-1 pl-6">
                    #501,#508-510, Shangrila Plaza, Park View Enclave, Banjara
                    Hills, Hyderabad, Telangana-500034
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">
                    Manufacturing Unit
                  </p>
                  <p className="text-gray-600 text-sm mt-1 pl-6">
                    Sy No. 340, Plot No.198/2, 201-204, Tuniki Bollaram,
                    Siddipet, TS-502279
                  </p>
                </div>
              </div>
            </div>

            {/* 📧 Email Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3 flex items-center gap-2">
                <IoMdMail className="gradient-icon" size={20} />
                Email Us
              </h3>
              <a
                href="mailto:trinai@brihaspathi.com"
                className="text-gray-700 hover:text-[#00ADE7] transition-colors font-medium"
              >
                trinai@brihaspathi.com
              </a>
            </div>

            {/* 📞 Phone Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3 flex items-center gap-2">
                <MdCall className="gradient-icon" size={20} />
                Call Us
              </h3>
              <a
                href="tel:+919885888835"
                className="text-gray-700 hover:text-[#00ADE7] transition-colors font-medium"
              >
                +91 9885888835
              </a>
            </div>

            {/* 🌐 Social Media Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <SocialIcon
                  href="https://www.facebook.com/profile.php?id=61574150717517"
                  Icon={FaFacebookF}
                  label="Facebook"
                />
                <SocialIcon
                  href="https://x.com/trinai_official"
                  Icon={FaTwitter}
                  label="Twitter"
                />
                <SocialIcon
                  href="https://www.instagram.com/trinai_cctv/"
                  Icon={AiFillInstagram}
                  label="Instagram"
                />
                <SocialIcon
                  href="https://www.linkedin.com/company/trinai/"
                  Icon={FaLinkedinIn}
                  label="LinkedIn"
                />
                <SocialIcon
                  href="https://in.pinterest.com/trinai_official/"
                  Icon={FaPinterest}
                  label="Pinterest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 Google Maps */}
      <div className="bg-slate-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <iframe
            className="rounded-xl w-full h-80 border-0 shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.711194228244!2d78.417589310894!3d17.425642201632733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee53f272eb%3A0x9d0e4f397c0bbaa9!2sBrihaspathi%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1742625400376!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </div>

      {/* 🔷 Scroll to Top */}
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

      {/* <ScrollTop
        target="window"
        threshold={100}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:from-[#305292] hover:to-[#00ADE7] transition-all duration-300 fixed bottom-6 right-6 z-50"
      >
        <span className="text-white text-xl">↑</span>
      </ScrollTop> */}
    </div>
  );
};

// 🔷 Reusable Social Icon Component
// 🔷 Reusable Social Icon Component - Updated
const SocialIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Added 'group' class here so child elements can react to hover
    className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] transition-all duration-300"
    aria-label={label}
  >
    <Icon
      // Changed to 'group-hover:text-white' to target icon when parent is hovered
      className="text-[#00ADE7] group-hover:text-white transition-colors duration-300"
      size={18}
    />
  </a>
);

export default Contact;
