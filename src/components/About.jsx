import { motion } from 'framer-motion'
import profileImg from "../assets/profile1.png";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
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
          <div className='md:w-1/2 flex justify-center'>
            <img 
              src={profileImg} 
              alt="About Me"
              className='w-72 h-80 object-cover object-top rounded-2xl shadow-2xl border-2 border-purple-500 hover:scale-105 transition duration-300'
            />
          </div>

          {/* TEXT */}
          <div className='md:w-1/2 text-gray-300 text-center md:text-left'>

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

          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default About