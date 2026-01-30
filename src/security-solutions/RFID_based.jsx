import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Key,
  CreditCard,
  Users,
  Building,
  Home,
  BookOpen,
  Warehouse,
  ParkingMeter,
  CalendarCheck,
  ArrowRight,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
  Lock,
  Zap,
  Shield,
  Wifi,
  Database,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Contactless Card-Based Access",
    desc: "Fast, touch-free entry using RFID cards or tags with advanced encryption protocols.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "High-Speed Identification",
    desc: "Instant recognition for authorized users with sub-second response times.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Centralized Access Control",
    desc: "Manage permissions and access levels remotely through intuitive dashboards.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Activity,
    title: "Real-Time Access Logs",
    desc: "Track every entry and exit with detailed timestamps and user identification.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Layers,
    title: "Integration with Security Systems",
    desc: "Seamless connection with attendance tracking and surveillance systems.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Users,
    title: "Custom Access Levels",
    desc: "Flexible permission settings for staff, guests, contractors, and residents.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Building,
    title: "Office Buildings & Coworking Spaces",
    desc: "Streamline employee access and visitor management",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Home,
    title: "Apartments & Gated Communities",
    desc: "Secure residential access with resident convenience",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: BookOpen,
    title: "Schools, Colleges & Libraries",
    desc: "Control access to educational facilities and resources",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Warehouse,
    title: "Industrial Plants & Warehouses",
    desc: "Secure manufacturing and storage facilities",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ParkingMeter,
    title: "Parking Lots & Toll Systems",
    desc: "Automated vehicle access and payment processing",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: CalendarCheck,
    title: "Hotels & Event Venues",
    desc: "Guest access management and event security",
    color: "from-violet-500 to-purple-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Card Registration",
    desc: "RFID cards are programmed with unique identifiers and user permissions",
    icon: CreditCard,
  },
  {
    step: "2",
    title: "Proximity Detection",
    desc: "RFID reader detects the card when brought within scanning range",
    icon: Wifi,
  },
  {
    step: "3",
    title: "Authentication",
    desc: "System verifies card credentials against secure database",
    icon: Database,
  },
  {
    step: "4",
    title: "Access Grant",
    desc: "Authorized users gain instant access with complete activity logging",
    icon: Lock,
  },
];

export default function RFIDBased() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[400px]  border bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww')] bg-cover bg-center
"
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" /> */}

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Smart Access Technology
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                RFID-Based Entry in Smart Access Control
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Fast, secure, and contactless access for modern spaces with
              advanced tracking capabilities
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Smart access is essential for managing security in workplaces,
              residential complexes, and institutions. RFID technology enables
              fast, contactless entry using ID cards or tags, making access
              simple, secure, and efficient. Track movement and manage
              permissions remotely, all in real-time with comprehensive
              analytics and reporting.
            </p>
          </div>
        </motion.section>

        {/* What is RFID-Based Entry */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard className="w-8 h-8 text-blue-400 mr-3" />
              What is RFID-Based Entry?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              RFID-Based Entry uses contactless technology to grant access
              through radio frequency identification. Authorized users carry
              RFID tags or cards that, when scanned, allow entry to restricted
              areas. It's fast, secure, and ideal for offices, buildings, and
              gated premises with high traffic volumes.
            </p>
          </div>
        </motion.section>

        {/* Why RFID-Based Entry is Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why is RFID-Based Entry Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike traditional keys or manual registers, RFID ensures quick
              identification without physical contact. It reduces human error,
              increases security, and streamlines foot traffic in busy
              environments—especially where large groups enter and exit
              regularly. The technology provides audit trails and real-time
              monitoring capabilities.
            </p>
          </div>
        </motion.section>

        {/* How RFID Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How RFID Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              RFID systems consist of a tag (card or key fob) and a reader. When
              the tag nears the reader, it sends a signal with the user's ID.
              The system checks this ID against a database—if it matches, access
              is instantly granted. The process is quick, touch-free, and
              trackable with complete audit trails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {process.step}
                  </div>
                  <process.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <div className="bg-white">
        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5  bg-gradient-to-br from-blue-50 to-teal-50"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      feature.color.split(" ")[1]
                    }, ${feature.color.split(" ")[3]})`,
                  }}
                />

                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r 

from-[#00ADE7] to-[#305292] mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.desc}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Applications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 lg:p-20 p-5"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-xl p-4 w-fit mb-4`}
                >
                  <app.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Trinai Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="bg-gradient-to-r 

from-[#00ADE7] to-[#305292] rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                TRINAI's RFID-based entry solutions make managing access easier,
                faster, and smarter. With secure card authentication and
                real-time tracking, you control who enters your space—and keep a
                detailed log of every movement, all without lifting a finger.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
