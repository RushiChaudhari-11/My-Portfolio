import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 drop-shadow-lg">
          My <span className="text-purple-500">Experience</span>
        </h2>

        {/* Card */}
        <motion.div
          className="relative bg-gray-900 p-8 rounded-xl shadow-lg max-w-3xl mx-auto border-l-4 border-purple-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Icon */}
          <div className="absolute -left-5 top-6 bg-purple-500 p-3 rounded-full shadow-lg">
            <FaBriefcase className="text-white text-lg" />
          </div>

          {/* Role */}
          <h3 className="text-2xl font-bold mb-2">
            Java Developer Intern
          </h3>

          {/* Company */}
          <p className="text-purple-400 font-medium mb-1">
            Dgpsoft Solutions Pvt. Ltd., Pune
          </p>

          {/* Duration */}
          <p className="text-gray-400 text-sm mb-6">
            1 Dec 2025 – 28 Feb 2026 (3 Months)
          </p>

          {/* Points */}
          <ul className="text-gray-300 space-y-3 leading-relaxed">
            <li>• Developed and maintained web applications using Core Java and Spring Boot.</li>
            <li>• Designed and implemented RESTful APIs for efficient data handling.</li>
            <li>• Performed CRUD operations using MySQL database.</li>
            <li>• Collaborated with team members to debug and improve application performance.</li>
            <li>• Used Git and GitHub for version control and project management.</li>
            <li>• Tested APIs using Postman to ensure functionality and reliability.</li>
          </ul>

        </motion.div>

      </div>
    </section>
  );
};