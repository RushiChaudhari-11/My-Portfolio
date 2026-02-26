import React from 'react'
import { motion } from 'framer-motion'
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
        <div className='container mx-auto px-6 flex flex-col items-center justify-betweewn '>
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1>
                    Hi, I'm <span className='text-[#00ff9d]'>Rushikesh Chaudhari</span>
                </h1>
                <h2>
                    Full Stack Developer
                </h2>
                <p>I build scalable and high-performance web applications using Java, Spring Boot, React.js, and MySQL. Passionate about developing secure backend systems and responsive frontend interfaces.</p>
            </div>
        </div>
            
        </motion.div>
    </div>
  )
}
