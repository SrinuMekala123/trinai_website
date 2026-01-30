import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Ticket,
  Monitor,
  Smartphone,
  Bell,
  Eye,
  ArrowRight,
  Building,
  Guitar as Hospital,
  Banknote,
  CalendarCheck,
  Store,
  Globe,
  AlertTriangle,
  Activity,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Ticket,
    title: "Token-Based or Virtual Queue",
    desc: "Organize queues with physical tokens or virtual tickets for seamless customer flow.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Monitor,
    title: "Real-Time Queue Status",
    desc: "Live updates on digital displays or mobile apps with instant notifications.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Facial Recognition",
    desc: "Identify registered or repeat visitors for personalized service experiences.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "AI-Based Crowd Density Analysis",
    desc: "Monitor and predict crowding patterns for better flow management.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Bell,
    title: "Voice/Text Announcements",
    desc: "Guide customers with automated announcements and clear directions.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Smartphone,
    title: "Integration with Appointment & Feedback",
    desc: "Connects with booking and feedback systems for seamless customer experience.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Banknote,
    title: "Banks & Financial Institutions",
    desc: "Streamline banking services with efficient queue management",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    desc: "Organize patient flow and reduce waiting times in healthcare",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building,
    title: "Government Service Centers",
    desc: "Improve citizen services with organized queue systems",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: CalendarCheck,
    title: "Airports & Ticket Counters",
    desc: "Manage passenger flow and reduce congestion at checkpoints",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Store,
    title: "Retail & Service Outlets",
    desc: "Enhance customer experience in retail and service environments",
    color: "from-yellow-500 to-orange-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Registration",
    desc: "Customers receive tokens or virtual tickets upon arrival",
    icon: Ticket,
  },
  {
    step: "2",
    title: "Monitoring",
    desc: "AI cameras track queue length, movement, and waiting patterns",
    icon: Eye,
  },
  {
    step: "3",
    title: "Analysis",
    desc: "System predicts wait times and optimizes counter assignments",
    icon: Activity,
  },
  {
    step: "4",
    title: "Notification",
    desc: "Automated announcements guide customers to available counters",
    icon: Bell,
  },
];

const QMS = () => {
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
        {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
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
              <Ticket className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Smart Queue Management Solutions
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                Queue Management System (QMS)
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Smart surveillance for organized, efficient service and enhanced
              customer experience
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
          <div className="bg-gradient-to-br  from-blue-50 to-teal-50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every day, countless people stand in queues—at banks, hospitals,
              government offices, and airports. Managing these queues
              efficiently is crucial for better customer experience and
              operational flow. A Queue Management System (QMS) powered by smart
              surveillance ensures organized service, reduced wait times, and
              improved crowd control through intelligent tracking and analytics.
            </p>
          </div>
        </motion.section>

        {/* What is QMS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br  from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Monitor className="w-8 h-8 text-blue-400 mr-3" />
              What is a Queue Management System?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Queue Management System is a digital solution that organizes,
              monitors, and controls customer queues in real-time. It provides
              ticketing, display systems, and announcements to guide customers
              to service counters efficiently.
            </p>
          </div>
        </motion.section>

        {/* Why QMS is Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br  from-blue-50 to-teal-50 rounded-3xl p-8 border border-indigo-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why Is QMS Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Long, unmanaged queues lead to frustration, miscommunication, and
              inefficiency. With QMS, you streamline foot traffic, reduce
              crowding, and enhance service delivery. It helps institutions
              provide fair and fast service, especially during peak hours or
              high-demand situations.
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
              Surveillance cameras and sensors monitor queue length, movement,
              and waiting time. The system assigns token numbers, directs
              individuals to available counters, and provides real-time updates
              via digital displays. Advanced AI can predict wait times and
              redirect overflow to alternate counters or branches.
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
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#00ADE7] to-[#305292]
 mb-6`}
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
                <Monitor className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                TRINAI's Queue Management System transforms waiting lines into
                well-managed service flows. With AI-powered analytics and
                real-time updates, it ensures faster, safer, and more satisfying
                customer experiences — reducing frustration and optimizing
                operational efficiency.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default QMS;
