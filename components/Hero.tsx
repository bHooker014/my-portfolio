import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, My name is Bill Hooker',
      'Life is Simple',
      'Live, Love, and <Code />'
    ],
    loop: true,
    delaySpeed: 2000,

  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full mx-auto object-cover'
        src="/meNtisa.jpg"
        alt="Picture of the author"
        width={100}
        height={50}

      />
      {/* <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="/ftw.jpg"
        alt="Picture of the Author" /> */}
      <div className='z-20'>
        <h2 className='text-sm uppercase text-[#87ceeb] pb-2 tracking-[15px] '>Software Engineer</h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experiance">

            <button className='heroButton'>Experiance</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>

          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>

          </Link>
        </div>
      </div>

    </div>
  )
}

