import { motion } from "framer-motion";
import dentcareImg from "../assets/dentcare.jpg";
import bookstoreImg from "../assets/bookstore.png";

export const Projects = () => {

  const projects = [
    {
      title: "DentCare Management System",
      description: "A web app to manage patient records and appointments.",
      tech: "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
      image: dentcareImg,
      link: "https://github.com/RushiChaudhari-11/dentcare-management-system"
    },
    {
      title: "Online Bookstore",
      description: "An e-commerce platform for buying and selling books.",
      tech: "Java, Spring Boot, MySQL",
      image: bookstoreImg,
      link: "https://github.com/RushiChaudhari-11/Online-BookStore-Management"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-purple-500">Projects</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
  key={index}
  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2 }}
  viewport={{ once: true }}
>

  {/* IMAGE (VERTICAL FIX) */}
  <div className="w-full h-95 overflow-hidden flex items-center justify-center bg-gray-800">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover object-center"
  />
</div>

  {/* CONTENT */}
  <div className="p-6">

    <h3 className="text-xl font-bold mb-2">
      {project.title}
    </h3>

    <p className="text-gray-400 mb-2">
      {project.description}
    </p>

    <p className="text-sm text-purple-400 mb-4">
      {project.tech}
    </p>

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-500 hover:underline"
    >
      View Project →
    </a>

  </div>

</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};