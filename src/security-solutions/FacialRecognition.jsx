import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Building,
  Plane,
  Users,
  MapPin,
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
  TrendingUp,
  Navigation,
  BarChart3,
  Clock,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI Facial Recognition.jpg";

const features = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    desc: "Instant notifications when crowd density reaches dangerous thresholds or congestion occurs.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Proactive Safety",
    desc: "Prevent overcrowding incidents before they escalate into dangerous situations.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Comprehensive insights and analytics for better planning and operational improvements.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Layers,
    title: "Scalable Monitoring",
    desc: "Adaptable solution for small venues to massive public areas and events.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Visitor Experience",
    desc: "Ensure safer and smoother people movement for better overall experience.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    desc: "Advanced algorithms analyze crowd patterns and predict potential issues.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Users,
    title: "Residential",
    desc: "Unlock doors and or log people visiting a home.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Plane,
    title: "Corporate",
    desc: "Employee time tracking and access for only authorized persons.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Building,
    title: "Public safety",
    desc: "Missing persons searches, or technologies detecting applicants with a flag.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Activity,
    title: "Retail",
    desc: "Ability to recognize VIP customers (with images stored) and existence of phrases—repeat offenders.",
    color: "from-[#00ADE7] to-[#305292]",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "AI cameras continuously analyze crowd density and movement patterns in real-time",
    icon: Camera,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "Advanced algorithms process crowd data and identify potential congestion points",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Instant notifications sent when crowd thresholds are exceeded or risks detected",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated crowd management protocols activated to ensure safety and flow",
    icon: Zap,
  },
];

const monitoringCapabilities = [
  {
    icon: Navigation,
    title: "Movement Patterns",
    desc: "Track crowd movement patterns and flow directions",
  },
  {
    icon: AlertTriangle,
    title: "Congestion Detection",
    desc: "Identify bottlenecks and potential crowd buildup areas",
  },
  {
    icon: Bell,
    title: "Threshold Alerts",
    desc: "Notify security when crowd density reaches critical levels",
  },
  {
    icon: MapPin,
    title: "Zone Density",
    desc: "Calculate and monitor crowd density in specific areas",
  },
];

const benefits = [
  "Early Warnings – Alerts when zones approach dangerous capacity levels",
  "Efficient Crowd Management – Facilitates smoother people flow and movement",
  "Safety & Compliance – Helps organizations meet safety regulations and standards",
  "Incident Prevention – Reduces risk of accidents in crowded environments",
  "Operational Insights – Provides data for future planning and improvements",
];

export default function FacialRecognition() {
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
        className="relative overflow-hidden h-[400px] border bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" /> */}

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
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Smarter Eyes, Stronger Security{" "}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Facial Recognition
              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Smarter Surveillance for Modern Security
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
              <Monitor className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Facial recognition technology provides security resolution using
              AI systems to identify and scan human faces in real-time video
              footage. This technology has opened up a huge gap in the world of
              CCTV and surveillance.
            </p>
          </div>
        </motion.section>

        {/* What is Crowd Monitoring */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is Facial Recognition?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Facial recognition is a biometric technology that analyzes facial
              features to identify or verify a person’s identity. Integrated
              into CCTV systems, it enables real-time detection, recognition,
              and tracking of individuals across monitored areas.
            </p>
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
              Why Facial Recognition?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Security has historically required humans to actively observe and
              monitor their surroundings. Facial recognition allows for
              identification of individuals through automation: faster access,
              threat identification, and even customer analysis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white/50 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5  text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
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
              How it works with CCTV
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The process for facial recognition systems is largely the same
              regardless of circumstances. Cameras will scan a person’s face and
              compare that image against a pre-existing stored database, and
              this is done in real-time. The system will then send out an alert
              if it either sees a match (threat) or experience an event it needs
              to track or identify. In simple terms, it can work in predicable
              crowds, overcast conditions, indoors and outdoors, from a variety
              of angles, speed and distance, based on strong contextual
              understanding of the objects being observed.
            </p>
          </div>
        </motion.section>
      </div>

      <div className="bg-white">
        {/* Applications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 lg:p-20 p-5 ">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100  "
              >
                <div
                  className={`bg-gradient-to-br ${app.color} rounded-xl p-4 w-fit mb-4`}
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
          className="p-10"
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
                <Users className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Facial recognition means to take passive surveillance and turn
                it into responsive or intelligent surveillance for the field of
                security. It is not enough to see something; it is critical to
                know what, who, where and why? TRINAI intelligent surveillance
                allows facial recognition to turn into predictive or proactive
                safety and smarter control.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
