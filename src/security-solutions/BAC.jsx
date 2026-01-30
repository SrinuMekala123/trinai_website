import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  UserCheck,
  Eye,
  Shield,
  Building,
  Home,
  Server,
  Guitar as Hospital,
  BookOpen,
  ArrowRight,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
  Lock,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Fingerprint, Facial, Iris, and Palm Recognition",
    desc: "Multiple biometric options for secure access with advanced AI recognition algorithms.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Fast & Contactless Verification",
    desc: "Quick entry without physical contact or delays, perfect for high-traffic areas.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Secure User Database",
    desc: "Encrypted storage for all biometric data with military-grade security protocols.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: UserCheck,
    title: "Integration with CCTV & Attendance",
    desc: "Seamless connection to monitoring and HR systems for complete visibility.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    desc: "Layered security combining biometrics with additional verification methods.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Activity,
    title: "Real-Time Access Logs & Notifications",
    desc: "Instant alerts and complete audit trails with detailed reporting capabilities.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Building,
    title: "Corporate Offices & IT Companies",
    desc: "Secure workspaces and protect intellectual property",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: BookOpen,
    title: "Educational Institutions",
    desc: "Control access to classrooms, labs, and administrative areas",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Hospital,
    title: "Hospitals & Research Labs",
    desc: "Protect sensitive medical data and research facilities",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Airports & Transport Hubs",
    desc: "Secure critical transportation infrastructure",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Home,
    title: "Residential Complexes & Smart Homes",
    desc: "Modern access control for residential communities",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Data Centers & Critical Infrastructure",
    desc: "Maximum security for mission-critical facilities",
    color: "from-violet-500 to-purple-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Registration",
    desc: "Biometric data is captured and securely stored in encrypted database",
    icon: Fingerprint,
  },
  {
    step: "2",
    title: "Authentication",
    desc: "Live biometric scan is compared against stored templates",
    icon: Eye,
  },
  {
    step: "3",
    title: "Verification",
    desc: "AI algorithms verify identity with high accuracy and speed",
    icon: Cpu,
  },
  {
    step: "4",
    title: "Access Grant",
    desc: "Authorized users gain instant access with complete audit logging",
    icon: UserCheck,
  },
];

export default function BAC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[400px]  border bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww')] bg-cover bg-center
 "
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
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
              <Fingerprint className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Advanced Biometric Security
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 bg-clip-text">
                Biometric Access Control (BAC)
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Effortless, secure entry with advanced biometric authentication
              technology
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
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's fast-moving world, security systems must be both
              intelligent and effortless. Biometric Access Control provides
              seamless, secure entry by using unique human traits like
              fingerprints, facial features, or iris scans. Control who enters
              and exits with just a glance or a touch, all while monitoring
              remotely.
            </p>
          </div>
        </motion.section>

        {/* What is BAC */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-purple-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is BAC?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Biometric Access Control (BAC) uses unique physical traits to
              grant or deny access to secure areas. Only verified individuals
              can enter, making it difficult for unauthorized people to bypass
              security measures.
            </p>
          </div>
        </motion.section>

        {/* Why BAC is Important */}
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
              Why is Biometric Access Control Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Traditional keys and cards can be lost, stolen, or duplicated.
              Biometrics are unique and nearly impossible to fake, ensuring only
              authorized individuals gain access and enhancing safety and
              accountability across all access points.
            </p>
          </div>
        </motion.section>

        {/* How BAC Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How BAC Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Biometric systems capture and store data during registration. When
              a user tries to access an area, the system matches their live data
              with stored records. If there's a match, access is granted
              instantly—no PINs, no cards, just secure identification.
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
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
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

        {/* CTA Section */}
        {/* <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto text-lg"
          >
            Get Started with BAC
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.section> */}
      </div>

      <div className="bg-white">
        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" lg:p-20 p-5 bg-gradient-to-br from-blue-50 to-teal-50 "
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
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#00ADE7] to-[#305292] mb-6`}
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
          className="lg:p-20 p-5"
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
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 text-center text-white relative overflow-hidden">
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
                TRINAI's BAC systems combine AI and precision for top-tier
                protection with minimal effort. From high-traffic offices to
                sensitive government sites, your entry points stay smart,
                secure, and always under control.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
