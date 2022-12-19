import React from 'react'
import { motion } from 'framer-motion'


function Skill({ directionLeft , img, percent }) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{x:directionLeft? -200 : 200, opacity:0}}
        transition={{duration:1}}
        viewport={{ once: true }}
        whileInView={{opacity:1 , x:0 }}
        src={img} alt="" 
        className='rounded-full border border-gray-500 object-cover w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className='font-bold text-2xl lg:text-3xl text-black opacity-100'> {percent}% </p>
            </div>
        </div>

    </div>
  )
}

export default Skill