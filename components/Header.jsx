import React from 'react'
import {AiOutlineGithub,AiOutlineWhatsApp,AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {motion} from 'framer-motion'

function Header({ }) {
    return (
        <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center bg-[rgb(36,36,36)] shadow-md rounded-lg p-5 '>
            <motion.div 
            initial={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex space-x-2 flex-row items-center">
                <AiOutlineGithub
                    className='icon '
                />
                <BsInstagram
                    className='icon'
                />
                <AiOutlineWhatsApp
                    className='icon'
                />
                <AiFillLinkedin
                    className='icon'
                />
            </motion.div>

            <motion.div
            initial={{
                x:500,
                opacity:0,
                scale:1
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{duration:1.5}}

            className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2">
                <AiOutlineMail
                    className='icon'
                />

                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In touch</p>

            </motion.div>


        </header>
    )
}

export default Header