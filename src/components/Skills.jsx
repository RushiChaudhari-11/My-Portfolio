import { motion } from "framer-motion";

export const Skills = () => {

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "JavaScript",
    "MySQL",
    "HTML",
    "CSS",
    "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};