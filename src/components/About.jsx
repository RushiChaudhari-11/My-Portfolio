import { motion } from 'framer-motion'
import profileImg from "../assets/profile1.png";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='about'
      className='py-24 bg-gray-900'
    >

      <div className='container mx-auto px-6'>

        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6'>
          About <span className='text-purple-500'>Me</span>
        </h2>

        {/* MAIN CONTENT */}
        <div className='flex flex-col md:flex-row items-center gap-16 mt-12'>

          {/* LEFT IMAGE */}
          <div className='md:w-1/2 flex justify-center'>
            <img 
              src={profileImg} 
              alt="About Me"
              className='w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-xl shadow-lg'
            />
          </div>

          {/* RIGHT TEXT */}
          <div className='md:w-1/2 text-gray-300 text-center md:text-left max-w-xl'>

            <p className='mb-4'>
              I am a dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies.
            </p>

            <p className='mb-4'>
              I have experience working with Java, Spring Boot, React.js, and MySQL to build scalable and efficient web applications.
            </p>

            <p className='mb-4'>
              I am passionate about learning new technologies and solving complex problems.
            </p>

            <p className='text-purple-400 font-medium mt-4'>
              Skills: Java, Spring Boot, React.js, JavaScript, MySQL, HTML, CSS
            </p>

          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default About