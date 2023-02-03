import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {}

const Experiance = (props: Props) => {
  // The data will come from a api call
  // then will be passed to the ExperienceCard component
  // STATIC data is for development only

  const CardData = [
    {
      companyLogo: './BL_LOGO-201x26.png',
      companyName: 'Banyan Labs',

      techUsedIcons: [{/*ICONS URL*/}],
      datesEmployed: {/* Stirng representing the dates */},
      responsibilities:[/* String desrcibing my responsibilities with said company */]

    },
    {
      companyLogo: './Persevere-Logo-300x60.png',
      companyName: 'Perservere Now',
      techUsedIcons: [{/*ICONS URL*/}],
      datesEmployed: {/* Stirng representing the dates */},
      responsibilities:[/* String desrcibing my responsibilities with said company */]

    }
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>Work Experience</h3>

      <motion.div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {CardData.map((data, index) => ( <ExperienceCard key={index} /> ))}
      </motion.div>
    </motion.div>
  )
}

export default Experiance