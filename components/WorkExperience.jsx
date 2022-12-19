import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

function WorkExperience({ }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
             className='min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 md:px-10 justify-evenly mx-auto items-center '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll py-10 px-5 snap-x snap-mandatory pt-44 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin scrollbar-thumb-rounded">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />

            </div>



        </motion.div>
    )
}

export default WorkExperience