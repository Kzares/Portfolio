import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgoundCircles from './BackgoundCircles'


function Hero({ img }) {

    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Jorge Casares", 'Guy-who-loves-Caffee.tsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <BackgoundCircles />
            <img src={img.url} alt="" className='relative rounded-full w-32 h-32 mx-auto object-cover' />
           
                <h2 className='text-sm uppercase z-20 text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-4xl z-20 lg:text-6xl font-semibold px-10'>
                    <span className='mr-3' > {text} </span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className="pt-5 flex z-20 ">
                    <Link href='#about'>
                        <div className="heroButton">About</div>
                    </Link>
                    {/* 
                    <Link href='#experience'>
                        <div className="heroButton">Experience</div>
                    </Link>
                     */}
                    <Link href='#skills'>
                        <div className="heroButton">Skills</div>
                    </Link>
                    <Link href='#projects'>
                        <div className="heroButton">Projects</div>
                    </Link>
                    <Link href='#contact'>
                        <div className="heroButton">Contact</div>
                    </Link>
                </div>
            

        </div>
    )
}

export default Hero