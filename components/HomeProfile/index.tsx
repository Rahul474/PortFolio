'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircle from '../BgCircle'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function HomeProfile({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Rahul Arora",
      'A Guy Who can center a <div />',
      '<LovesToCode />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='lg:h-screen min-h-screen flex justify-center items-center text-center flex-col space-y-6 overflow-hidden'>
      <BgCircle />
      <Image
        src={
          'https://res.cloudinary.com/da1qp92zl/image/upload/v1697263621/WhatsApp_Image_2023-10-13_at_11.05.59_PM_mjdomy.jpg'
        }
        alt='my-pic'
        width={80}
        height={80}
        className='rounded-full object-contain'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-blue-400 pb-2 tracking-[12px] text-center ml-1'>
         Senior Software Developer
        </h2>
        <h1 className='text-2xl lg:text-4xl font-semibold px-10 min-h-[70px]'>
          <span className='decorated-text'>{text}</span>
          <Cursor cursorColor='#0000eb' />
        </h1>
      </div>
      <div className='flex lg:gap-4 justify-center w-full z-20'>
        <Link href={'#about'} className='py-4'>
          <button className='homeBtn'>About</button>
        </Link>
        <Link href={'#skills'} className='py-4'>
          <button className='homeBtn'>Skills</button>
        </Link>
        <Link href={'#experience'} className='py-4'>
          <button className='homeBtn'>Experience</button>
        </Link>  
        <Link href={'/#project'} className='py-4'>
          <button className='homeBtn'>Project</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeProfile
