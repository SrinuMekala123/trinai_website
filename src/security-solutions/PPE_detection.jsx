import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Building,
  Home,
  Server,
  Radio,
  ArrowRight,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Real-Time Monitoring",
    desc: "for Real-time PPE compliance detection.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Bell,
    title: "Comprehensive Recognition",
    desc: "for Recognizes helmets, safety vests, gloves, masks, and more.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Versatile Environments",
    desc: "for Works in industrial, construction, and medical environments.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Smart Integration",
    desc: "for Integration with alarms, access control, and reporting systems.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Efficiency Boost",
    desc: "for Reduces manual supervision burden.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Cpu,
    title: "Scalable Deployment",
    desc: "for Scalable across multiple locations.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Building,
    title: "Construction Safety",
    desc: "for Construction sites",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Manufacturing Protection",
    desc: "for Manufacturing plants",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Home,
    title: "Smart Warehousing",
    desc: "for Warehouses & logistics hubs",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "Oil & Gas Security",
    desc: "for Oil & gas facilities",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Healthcare Compliance",
    desc: "for Hospitals & healthcare environments",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Laboratory Safety",
    desc: "for Laboratories & research centers",
    color: "from-purple-500 to-pink-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "AI cameras analyze movement patterns and detect intrusion attempts",
    icon: Eye,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "Advanced algorithms classify threats and filter false alarms",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Instant notifications sent to security teams with precise location data",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated systems activate lighting, alarms, and emergency protocols",
    icon: Zap,
  },
];

export default function PPE_detection() {
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
        className="relative overflow-hidden h-[400px]  border bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww')] bg-cover bg-center "
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" /> */}

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
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Advanced Perimeter Security
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                PPE Detection Camera in Smart Surveillance{" "}
              </span>
            </h1>
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
              Every day, workers enter hazardous environments where wearing
              proper Personal Protective Equipment (PPE) is not just
              important—it’s essential for safety. TRINAI’s PPE Detection Camera
              ensures that safety protocols are followed in real-time by using
              AI-powered video surveillance to detect whether workers are
              wearing helmets, masks, vests, gloves, and other
              gear—automatically and instantly.
            </p>
          </div>
        </motion.section>

        {/* What is PID */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br  from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is PPE?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PPE stands for Personal Protective Equipment—specialized clothing
              or equipment worn to protect workers from hazards on the job.
              Common PPE includes helmets, safety vests, gloves, face masks,
              goggles, and protective footwear. It is mandatory in construction,
              manufacturing, healthcare, and other safety-critical industries.
            </p>
          </div>
        </motion.section>

        {/* Why PID is Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why Is PPE Detection Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Failure to wear PPE can lead to serious injuries, legal
              liabilities, or project shutdowns. Manual monitoring is
              time-consuming and prone to human error. Automated PPE detection
              ensures compliance and reduces the risk of workplace accidents.
            </p>
          </div>
        </motion.section>

        {/* How PID Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Using advanced AI algorithms, the PPE Detection Camera analyzes
              live video feeds to identify if personnel are properly equipped.
              If a worker is missing any required gear (like a helmet or
              reflective vest), the system triggers an alert, notifies
              supervisors, or even restricts access in smart-integrated systems.
            </p>
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
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto text-lg"
          >
            Get Started with PID
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
          className="lg:p-20 p-5 bg-gradient-to-br from-blue-50 to-teal-50"
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
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#00ADE7] to-[#305292] mb-6`}
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
          className="lg:p-20 p-5 "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                TRINAI’s PPE Detection Camera is a smart and reliable solution
                to enforce workplace safety without manual intervention. By
                ensuring workers follow safety standards every minute, you
                create a secure, compliant, and productive environment—powered
                by real-time AI surveillance.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
