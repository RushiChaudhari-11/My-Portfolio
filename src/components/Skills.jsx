import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export const Skills = () => {

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-lg">
          My <span className="text-purple-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* ICON */}
              <div className="text-4xl text-purple-400 mb-3">
                {skill.icon}
              </div>

              {/* TEXT */}
              <p className="text-white font-medium">
                {skill.name}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};