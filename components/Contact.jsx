import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MailIcon, MapIcon } from '@heroicons/react/solid'
import {useForm, SubmitHandler} from 'react-hook-form'
function Contact({ }) {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        window.location.href = `mailto:jcasaresguerra@gmail?subject=${data.subject}&body= Hi, my name is ${data.name}, ${data.message}`
    };


    return (
        <motion.div className='min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

            <div className="flex flex-col space-y-10 pt-44 pb-10">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                    I have just what you need. {' '}
                    <span className='decoration-[#f7ab0a] underline'>Lets Talk</span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className="2xl">+53 56931759</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MailIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className="2xl"> jcasaresguerra@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className="2xl"> 94 Perucho Figueredo Vigia/Camaguey/Cuba </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto'>
                    <div className="flex space-x-2">
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
                    <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
                </form>

            </div>

        </motion.div>
    )
}

export default Contact