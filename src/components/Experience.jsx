import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-800">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-purple-500">Experience</span>
        </h2>

        {/* Experience Card */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-3xl mx-auto hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

          <h3 className="text-xl font-bold mb-1">
            Java Developer Intern
          </h3>

          <p className="text-purple-400 mb-1">
            Dgpsoft Solutions Pvt. Ltd., Pune
          </p>

          <p className="text-gray-400 mb-4 text-sm">
            1 Dec 2025 – 28 Feb 2026 (3 Months)
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>• Developed and maintained web application features using Core Java and Spring Boot.</li>
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