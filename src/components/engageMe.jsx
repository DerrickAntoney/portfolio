import React from 'react'
import CircularText from './circularText'
import Link from 'next/link'

const EngageMe = () => {
  return (
    <div className='flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className=' fill-darkish dark:fill-light '/>
            <Link href='mailto:derrickantoney@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm bg-darkish dark:bg-light h-20 w-20 rounded-full text-light dark:text-darkish'>Mail Me</Link>
        </div>
    </div>
  )
}

export default EngageMe