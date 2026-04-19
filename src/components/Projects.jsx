import { motion } from "framer-motion";

export const Projects = () => {

  const projects = [
    {
      title: "DentCare Management System",
      description: "A web app to manage patient records and appointments.",
      tech: " HTML, CSS, Bootstrap, JavaScript, PHP, MySQL,",
      link: "https://github.com/RushiChaudhari-11/dentcare-management-system#"
    },
    {
      title: "Online Bookstore",
      description: "An e-commerce platform for buying and selling books.",
      tech: " Java, Spring Boot, MySQL",
      link: "https://github.com/RushiChaudhari-11/Online-BookStore-Management"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>

              <p className="text-gray-400 mb-2">
                {project.description}
              </p>

              <p className="text-sm text-purple-400 mb-4">
                {project.tech}
              </p>

              <a
                href={project.link}
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};