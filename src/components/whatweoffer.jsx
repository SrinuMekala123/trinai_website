import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  MapPin,
  Wifi,
  Monitor,
  Mic,
  Shield,
  Flame,
  Eye,
  Navigation,
  MessageSquare,
  AlertTriangle,
  Car,
} from "lucide-react";

const services = [
  {
    category: "Surveillance & Safety",
    items: [
      {
        icon: Camera,
        title: "Entry Camera",
        description:
          "Captures passengers boarding and alighting, improving security and tracking flow.",
        image:
          "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: Eye,
        title: "Blind Spot Camera",
        description:
          "Covers driver's invisible zones, reducing accident risks for pedestrians, cyclists, and nearby vehicles.",
        image:
          "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: Car,
        title: "Front & Road Cameras",
        description:
          "Record traffic conditions and driver responses while providing real-time collision detection and alerts.",
        image:
          "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: AlertTriangle,
        title: "Driver Monitoring Camera",
        description:
          "Uses AI to detect fatigue, distraction, and unsafe behavior, issuing instant alerts.",
        image:
          "https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: Shield,
        title: "Cabin Camera",
        description:
          "Ensures 24/7 passenger safety, prevents vandalism, and supports dispute resolution.",
        image:
          "https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    category: "Tracking & Connectivity",
    items: [
      {
        icon: MapPin,
        title: "GPS Tracking",
        description:
          "Enables real-time location monitoring, route adherence, geofencing, and driver behavior analysis. Provides accurate ETAs and improves emergency response.",
        image:
          "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: Wifi,
        title: "Onboard WiFi",
        description:
          "Offers passengers seamless internet access for work, entertainment, and communication, while enabling data-driven fleet operations.",
        image:
          "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    category: "Passenger Information Systems",
    items: [
      {
        icon: Monitor,
        title: "LED Signage Boards",
        description:
          "Internal and external LED displays share next-stop updates, routes, and safety alerts in multiple languages. Supports emergency broadcasting and real-time updates from control centers.",
        image:
          "https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: Mic,
        title: "Integrated PA System",
        description:
          "Ensures clear, instant communication through driver microphones or central control announcements.",
        image:
          "https://images.pexels.com/photos/7869090/pexels-photo-7869090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    category: "Safety Enhancements",
    items: [
      {
        icon: Navigation,
        title: "Breath Analyser System",
        description:
          "Prevents bus ignition if the driver is under the influence of alcohol, ensuring strict compliance with safety norms.",
        image:
          "https://images.pexels.com/photos/6214461/pexels-photo-6214461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        icon: Flame,
        title: "Foam Fire Suppression System",
        description:
          "Automated sensors detect heat or flames and release foam instantly, protecting passengers and assets with zero human dependency.",
        image:
          "https://images.pexels.com/photos/4427513/pexels-photo-4427513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
];

const categoryColors = {
  "Surveillance & Safety": "from-blue-600 to-blue-800",
  "Tracking & Connectivity": "from-emerald-600 to-emerald-800",
  "Passenger Information Systems": "from-purple-600 to-purple-800",
  "Safety Enhancements": "from-orange-600 to-orange-800",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ item, index }) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const CategorySection = ({ category, items, index }) => {
  const gradientClass = categoryColors[category];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <div
          className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${gradientClass} text-white font-semibold text-lg shadow-lg mb-4`}
        >
          {category}
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.map((item, itemIndex) => (
          <ServiceCard key={item.title} item={item} index={itemIndex} />
        ))}
      </motion.div>
    </motion.section>
  );
};

function Whatweoffer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6"
          >
            Why Choose Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive surveillance, safety, and connectivity solutions
            designed to transform modern transportation with cutting-edge
            technology and uncompromising safety standards.
          </motion.p>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full opacity-15 blur-2xl"
        />
      </motion.section>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {services.map((service, index) => (
          <CategorySection
            key={service.category}
            category={service.category}
            items={service.items}
            index={index}
          />
        ))}
      </div>

      {/* Call to Action */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 text-center bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Fleet?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Experience the future of transportation safety and efficiency with
            our comprehensive solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section> */}
    </div>
  );
}

export default Whatweoffer;
