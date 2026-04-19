import { motion } from 'framer-motion'
import profileImg from "../assets/profile1.png";
import resume from "../assets/Chaudhari_Rushikesh_ResumE.pdf";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id='about'
      className='py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b]'
    >

      <div className='container mx-auto px-6'>

        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-lg'>
          About <span className='text-purple-500'>Me</span>
        </h2>

        {/* MAIN */}
        <div className='flex flex-col md:flex-row items-center gap-16'>

          {/* IMAGE */}
          <motion.div 
            className='md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={profileImg} 
              alt="About Me"
              className='w-72 h-80 object-cover object-top rounded-2xl shadow-2xl border-2 border-purple-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition duration-300'
            />
          </motion.div>

          {/* TEXT */}
          <motion.div 
            className='md:w-1/2 text-gray-300 text-center md:text-left'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className='mb-6 text-lg leading-relaxed'>
              I am a <span className='text-purple-400 font-semibold'>Full Stack Developer</span> with a strong foundation in both frontend and backend technologies.
            </p>

            <p className='mb-6 text-lg leading-relaxed'>
              I have experience working with <span className='text-purple-400'>Java, Spring Boot, React.js, and MySQL</span> to build scalable and efficient web applications.
            </p>

            <p className='mb-6 text-lg leading-relaxed'>
              I am passionate about learning new technologies and solving complex problems while creating user-friendly applications.
            </p>

            {/* Skills Box */}
            <div className='mt-6 p-4 bg-gray-800 rounded-lg shadow-lg border border-purple-500 inline-block'>
              <p className='text-purple-400 font-semibold'>
                Skills:
              </p>
              <p className='text-sm mt-1'>
                Java, Spring Boot, React.js, JavaScript, MySQL, HTML, CSS
              </p>
            </div>

            {/* 🔥 Resume Button */}
            <div className="mt-8">
              <a
                href={resume}
                target="_blank"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white 
                hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition duration-300"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  )
}

export default About