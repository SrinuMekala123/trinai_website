import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Eye,
  Shield,
  Siren,
  ArrowRight,
  MapPin,
  Video,
  Search,
  CalendarCheck,
  Music,
  Star,
  Globe,
  AlertTriangle,
  Activity,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Crowd Monitoring & Heatmap Analysis",
    desc: "Track crowd density and movement in real time with advanced AI analytics.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Eye,
    title: "Real-Time Threat Detection & Alerts",
    desc: "Instantly identify suspicious activity and notify security teams with precision.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Search,
    title: "Facial Recognition for Blacklisted Individuals",
    desc: "Detect flagged persons at entry points and within crowds automatically.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Siren,
    title: "Integration with Loudspeakers & Emergency Systems",
    desc: "Trigger sirens and announcements for rapid emergency response protocols.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Video,
    title: "Remote Monitoring from Control Room",
    desc: "Centralized surveillance dashboard for quick decision-making and coordination.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: MapPin,
    title: "License Plate Recognition (LPR)",
    desc: "Monitor and track vehicle access at event entry points with high accuracy.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: CalendarCheck,
    title: "Political & Cultural Gatherings",
    desc: "Secure rallies, campaigns, and cultural events with comprehensive monitoring",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Music,
    title: "Sports Arenas & Stadiums",
    desc: "Protect large-scale sporting events with crowd management systems",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Music,
    title: "Concerts, Exhibitions & Trade Fairs",
    desc: "Monitor entertainment venues and commercial gatherings effectively",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Star,
    title: "Religious Festivals & Public Parades",
    desc: "Ensure safety during religious celebrations and public processions",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Marathons, Protests & Rallies",
    desc: "Secure outdoor events with dynamic crowd monitoring capabilities",
    color: "from-yellow-500 to-orange-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Deployment",
    desc: "Strategic placement of AI-powered cameras at entry points and crowd zones",
    icon: Video,
  },
  {
    step: "2",
    title: "Monitoring",
    desc: "Continuous crowd density analysis and behavioral pattern recognition",
    icon: Eye,
  },
  {
    step: "3",
    title: "Detection",
    desc: "Real-time identification of suspicious activities and security threats",
    icon: Search,
  },
  {
    step: "4",
    title: "Response",
    desc: "Instant alerts and automated emergency system activation",
    icon: Siren,
  },
];

const PublicEventSecurity = () => {
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
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-indigo-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
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
              <Users className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Smart Event Security Solutions
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text">
                Public Event Security with Smart Surveillance
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              AI-powered safety solutions for crowds, venues, and every moment
              that matters
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
              Thousands of public events take place every year — from rallies
              and concerts to sports matches and festivals. With large crowds
              and open venues, safety is a top priority. TRINAI's advanced
              surveillance helps monitor and manage security with smart
              technologies that detect threats in real time.
            </p>
          </div>
        </motion.section>

        {/* What is Public Event Security */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-indigo-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              What is Public Event Security?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Public Event Security means deploying surveillance, access
              control, and emergency response systems during large gatherings
              such as festivals, concerts, rallies, sports events, and
              exhibitions.
            </p>
          </div>
        </motion.section>

        {/* Why is Public Event Security Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-yellow-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why Is Public Event Security Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Crowded events are vulnerable to risks like stampedes,
              unauthorized entry, vandalism, and even terrorist threats. Strong
              surveillance prevents incidents, supports crowd control, and
              ensures rapid emergency response, keeping everyone safe.
            </p>
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
              High-resolution CCTV cameras with PTZ, AI analytics, and facial
              recognition are placed at entry points, crowd zones, and
              perimeters. These systems detect unusual behavior, monitor crowd
              density, and instantly alert security teams to suspicious
              activity.
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

      <div className=" bg-white">
        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5 bg-gradient-to-br from-blue-50 to-teal-50 "
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
          className="lg:p-20 p-5"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <Users className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                TRINAI's public event security combines AI surveillance,
                real-time alerts, and smart crowd analytics for unmatched
                safety. From entry management to threat detection, every event
                remains under watchful, intelligent eyes.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PublicEventSecurity;
