import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <motion.div
         initial={{opacity:0,y:50}}
         whileInView={ {opacity:1,y:0}}
         transition={{duration:0.6, ease:"easeOut"}}
         viewport={{once:true}}
          id='about'
          className='py-20 bg-dark-200'
          >
            <div className='container mx-0 px-6'>
              <h2 className='text-3xl font-bold text-center mb-4 '>About <span className='text-purple'>Me</span></h2>
              <p className='max-w-2xl mx-auto text-center text-gray-400 mb-16'>
                Get to know more about my background and passion
              </p>
            </div>
    </motion.div>
  )
}

export default About