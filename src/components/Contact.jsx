import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:rushidchaudhari11@gmail.com?subject=Portfolio Message from ${name}&body=${message} (${email})`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">

      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Feel free to reach out for any opportunities!
        </p>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

          {/* Name */}
          <div className="relative mb-6">
            <FaUser className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full pl-12 p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full pl-12 p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Message */}
          <div className="relative mb-6">
            <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
              className="w-full pl-12 p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition duration-300"
          >
            Send Message 🚀
          </button>

        </motion.form>

        {/* SOCIAL LINKS */}
        <div className="mt-10 flex justify-center space-x-8">

          <a 
            href="https://github.com/RushiChaudhari-11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 text-2xl transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/rushikesh-chaudhari-3a21872b5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 text-2xl transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
};