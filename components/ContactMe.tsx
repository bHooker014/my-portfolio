import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const ContactMe = (props: Props) => {
    return (
        <div className='h-screen flex flex-col relative space-y-8 items-center justify-evenly text-center md:flex-row max-w-7xl px-10 mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I heave the skills and drive that you need. {" "}

                </h4>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='decoration-[#87ceeb]/50 underline'> Lets Talk</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#87ceeb] h-7 w-7 animate-pulse' />
                        <p>(623)-301-1917</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#87ceeb] h-7 w-7 animate-pulse' />
                        <p>Peoria, AZ</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#87ceeb] h-7 w-7 animate-pulse' />
                        <p>bhooker014@gmail.com</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className='contactInput' type="text" />
                        <input placeholder='Email' className='contactInput' type="text" />
                    </div>
                    <input placeholder='Subject' className='contactInput' type="text" />
                    <textarea placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#87ceeb] py-5 px-10 rounded-md text-black font-bold text-lg'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe