import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 left-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,            
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* {Social Icons} */}
            <SocialIcon 
            url='https://www.linkedin.com/in/bill-hooker-4b557225b/'
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://github.com/bHooker014'
            fgColor='gray'
            bgColor='transparent'
            />            
        </motion.div>
        <motion.div 
        initial={{
            x: +500,
            opacity: 0,
            scale: 0.5,            
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </motion.div>
    </header>
  )
}