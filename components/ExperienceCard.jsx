import React from 'react'
import { motion } from 'framer-motion'


function ExperienceCard({ }) {
    return (
        <article className='flex flex-col rounded-lg items-center flex-shrink-0 space-y-7 w-[400px] md:w-[500px] xl:w-[550px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="" alt="" className='rounded-full w-32 h-32 xl:w-[200px] xl:h-[200] object-cover object-center' />

            <div className="px-0 md:px-10">
                <h4 className='text-4xl font-light'>CEO of my ASS</h4>
                <p className='font-bold text-2xl mt-1' >ASS</p>
                <div className="flex space-x-2 ">
                    <img src="" alt="" className="h-10 w-10 rounded-full" />
                    <img src="" alt="" className="h-10 w-10 rounded-full" />
                    <img src="" alt="" className="h-10 w-10 rounded-full" />
                    <img src="" alt="" className="h-10 w-10 rounded-full" />

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... - Ended ...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg' >
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>

                </ul>
            </div>


        </article>
    )
}

export default ExperienceCard