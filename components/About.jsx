import { motion } from 'framer-motion'

function About({ profileImg, description }) {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{ once: true }}
        transition={{duration:1.5}}
        className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 md:justify-evenly mx-auto items-center min-h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.img
                src={profileImg.url}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='-mb-20 mt-44 md:mt-0 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
            />

            <div className="space-y-10 px-0 mt-44 md:mt-0 md:px-10">
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little </span>background </h4>

                
                <p className='text-base'> {description} </p>
            </div>



        </motion.div>
    )
}

export default About