import React from 'react'
import CircularText from './circularText'
import Link from 'next/link'

const EngageMe = () => {
  return (
    <div className='fixed md:left-4 md:bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className=' fill-black '/>
            <Link href='mailto:derrickantoney@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm bg-black text-white'>Mail Me</Link>
        </div>
    </div>
  )
}

export default EngageMe