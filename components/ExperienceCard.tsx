import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


type Props = {}

function ExperienceCard(props: Props) {
    console.log()
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img 
            initial={{
                opacity: 0,
                y: -100,
            }}
            transition={{ duration:1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='rounded-10 xl:w-[500px] xl:h-[60px] object-cover object-center' 
            src="/BL_LOGO-201x26.png" 
            alt="Company logo" 
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Job Title</h4>
                <p className='font-bold text-2xl mt-1'>Company Name </p>
                <div className='flex space-x-2 my-2'>
                    <Image src="" alt="tech logo" />
                    {/* {Tech used } */}
                    {/* {Tech used } */}
                    {/* {Tech used } */}
                    {/* {Tech used } */}
                </div>
                <p className='uppercase py-5 text-gray-300'>DATES GO HERE</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
            
        </article>
    )
}

export default ExperienceCard