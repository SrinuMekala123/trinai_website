import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Factory,
  Building,
  Guitar as Hospital,
  Users,
  ArrowRight,
  Monitor,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
  Camera,
  Settings,
  CheckCircle,
  FileText,
  Flame,
  Lock,
  Timer,
  Radio,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Instant Response Time",
    desc: "No time lost responding to threats with immediate automated actions.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Settings,
    title: "System Integration",
    desc: "Compatible with alarms, fire suppression, and access control systems.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Cpu,
    title: "AI Verification",
    desc: "Advanced algorithms minimize false alarms through intelligent verification.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Layers,
    title: "Scalable Deployment",
    desc: "Configurable for single locations or multi-campus setups.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Comprehensive Protection",
    desc: "Guards against threats to employees, residents, and visitors.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Radio,
    title: "Multi-Channel Alerts",
    desc: "Automated notifications via multiple channels and emergency protocols.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Factory,
    title: "Industrial Facilities",
    desc: "Instant response to fire, leaks, or workplace accidents",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Building,
    title: "Corporate Offices & IT Parks",
    desc: "Activate lockdowns and access controls during emergencies",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    desc: "Enable quick safety measures for patients and staff",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Public Venues",
    desc: "Automated alerts and crowd management during events",
    color: "from-orange-500 to-red-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "AI identifies emergency situations in real-time using advanced analytics",
    icon: Eye,
  },
  {
    step: "2",
    title: "Verification",
    desc: "Validates incidents through AI algorithms to eliminate false alarms",
    icon: CheckCircle,
  },
  {
    step: "3",
    title: "Response Activation",
    desc: "Performs pre-programmed actions like alerts, sirens, and system controls",
    icon: Zap,
  },
  {
    step: "4",
    title: "Notification",
    desc: "Automatically notifies security staff and emergency responders",
    icon: Bell,
  },
];

const emergencyTypes = [
  {
    icon: Flame,
    title: "Fire & Smoke Detection",
    desc: "Detection of fire, smoke, or hazardous gas emissions",
  },
  {
    icon: Lock,
    title: "Unauthorized Access",
    desc: "Unauthorized access to restricted or dangerous areas",
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    desc: "Intruder or security threat identification",
  },
  {
    icon: Activity,
    title: "Workplace Accidents",
    desc: "Occupational accidents or environmental dangers",
  },
];

const benefits = [
  "Faster Reaction Time – Acts instantly, without human delay",
  "Reduced Risk – Restricts damage to people, property, and operations",
  "Coordinated Safety – Syncs with multiple emergency systems simultaneously",
  "Improved Preparedness – Creates a proactive, not reactive, safety framework",
  "Compliance & Reliability – Helps meet industry safety regulations and standards",
];

export default function Automated_emergency_response() {
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
        {/* <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" /> */}

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
              <Zap className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                AI-Powered Emergency Response
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                Automated Emergency Response
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Intelligent CCTV surveillance that automatically initiates safety
              measures the instant an emergency is detected
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
              <Monitor className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Emergencies require quick response, but human reaction is
              sometimes delayed by low awareness or slow communication.
              Automated Emergency Response (AER) in CCTV surveillance fills this
              gap by leveraging intelligent video analytics and system
              integration to initiate pre-programmed safety measures the instant
              an event is identified. Ranging from fire and smoke detectors to
              intrusions and workplace dangers, automation guarantees quicker
              response, reduces risks, and overall safety improvement.
            </p>
          </div>
        </motion.section>

        {/* What is AER */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-red-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="w-8 h-8 text-blue-400 mr-3" />
              What is Automated Emergency Response?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Automated Emergency Response is the next generation of features in
              intelligent surveillance systems that combines detection with
              automated response. Rather than sitting back and waiting for
              manual action, the system responds immediately to critical events
              including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyTypes.map((emergency, index) => (
                <motion.div
                  key={emergency.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-white/50 rounded-xl p-4"
                >
                  <emergency.icon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {emergency.title}
                    </h4>
                    <p className="text-sm text-gray-600">{emergency.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why it Matters */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              Why Does Automated Emergency Response Matter?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white/50 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
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
              Trinai's AER-enabled CCTV systems continuously monitor
              environments using AI-driven analytics. When a critical event is
              detected, the system triggers a chain of automated actions
              delivering prompt, accurate, and coordinated responses with
              minimal human involvement.
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
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ADE7] to-[#305292]  rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
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
        {" "}
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
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <Zap className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Trinai's Automated Emergency Response solutions bring together
                AI-based detection and immediate, automated response to offer
                unparalleled safety and effectiveness. Our solutions reduce
                response time to a minimum, minimize risks, and integrate easily
                with existing emergency infrastructure. When you choose Trinai,
                you have the confidence that in case of an emergency, your
                surveillance system will react in an instant—safeguarding
                people, assets, and operations.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
