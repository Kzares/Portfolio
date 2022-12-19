import React from 'react'
import { motion } from 'framer-motion'

function Projects({ projects }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>


            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-40 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin scrollbar-thumb-rounded">
                {projects.map((project, idx) => (
                    <div key={project.id} className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-20 md:pt-44 h-screen ">
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            src={project.image.url} alt="" className='border rounded-lg w-full max-w-[700px] object-cover' />

                        <div className="space-y-10 px-0 md:px-10 max-w-[800px]">
                            <h4 className='text-2xl lgtext-4xl font-semibold text-left'>
                                <span className='underline decoration-[#f7ab0a]/50'>Case Study {idx + 1} of {projects.length} :</span>
                                {project.name}
                            </h4>
                            <p className='text-lg text-left md:text-left'> {project.description} </p>
                            <h3 className='font-ligth text-gray-50 text-sm'> {project.tech} </h3>
                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default Projects