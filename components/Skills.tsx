import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

// type Props = {}
type Props = {
    directionLeft?: boolean,

}

const Skills = ({ directionLeft }: Props) => {
    
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 max-auto items-center overflow-hidden'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3>
            <motion.div 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-3 md:grid-cols-4 gap-5 mx-auto">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </motion.div>
        </motion.div>
    )
}

export default Skills