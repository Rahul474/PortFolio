'use client'

import { SocialIcon } from 'react-social-icons'

type Props = {}

function SocialIcons({}: Props) {
  return (
    <div className='flex mt-6 gap-4 justify-center'>
      <SocialIcon network='email' url='mailto:ujjvalpriyadarshi06@gmail.com' />
      <SocialIcon
        network='github'
        url='https://github.com/Rahul474'
        target='_blank'
      />
      <SocialIcon
        network='linkedin'
        url='https://www.linkedin.com/in/rahul-arora-a17452193/'
        target='_blank'
      />
      <SocialIcon
        network='instagram'
        url='https://www.instagram.com/rahul_arora41/'
        target='_blank'
      />
    </div>
  )
}

export default SocialIcons
