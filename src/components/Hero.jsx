import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile1.png'
export const Hero = () => {
  return (
    <div>
        <motion.div
         initial={{opacity:0,y:50}}
         whileInView={ {opacity:1,y:0}}
         transition={{duration:0.6, ease:"easeOut"}}
         viewport={{once:true}}
         id='home'
         className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] to-[#333333] top-[#1a1a1a]'
         >
        <div className='container mx-auto px-6 flex flex-col items-center justify-between '>
                {/* left side contain */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                    Hi, I'm <span className='text-purple'>Rushikesh Chaudhari</span>
                </h1>
                <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
                    Full Stack Developer
                </h2>
                <p className='text-lg md:text-xl text-gray-300 mb-8'>
                    I build scalable and high-performance web applications using Java, Spring Boot, React.js, and MySQL. 
                </p>
                <div className='flex space-x-4'>
                    <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                        View Work
                    </a>
                    <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300'>
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
            {/* right side IMG */}
            <div className='md:w-1/2 flex justify-center items-center'>
                <motion.div className='relative w-64 h-64 md:w-80 md:h-80'
                    animate={{y: [0, -30, 0]}}
                    transition={{duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}}
                >
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse-slow opacity-70 blur-lg'></div>
                    {/* mask the photo so it always stays circular */}
                    <div className='absolute inset-0 rounded-full overflow-hidden'>
                        <img 
                            className='w-full h-full object-cover object-top z-10'
                            src={profileImg}
                            alt="Profile"
                        />
                    </div>
                </motion.div>
            </div>

        </motion.div>
    </div>
  )
}
