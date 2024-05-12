'use client'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref})
    const x = useTransform(scrollYProgress,[0,1],['0%','-65%'])
  return (
    <motion.div
    className='h-full'
    initial={{ y: '200vh' }}
    animate={{ y: "0%" }}
    transition={{ duration: 1}}
    >
        <div className='h-[600vh] relative' ref={ref}>
            <motion.h1 className='font-bold text-2xl'>Portfolio</motion.h1>
            <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                <motion.div style={{ x }} className='flex'>
                    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300'>
                        <div className='flex flex-col text-white'>
                            <Image src='/project.jpg' alt='project' width={100} height={100}/>
                            <p>My long desc</p>
                        </div>
                    </div>
                    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300'>
                        <div className='flex flex-col text-white'>
                            <Image src='/project.jpg' alt='project' width={100} height={100}/>
                            <p>My long desc</p>
                        </div>
                    </div>
                    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300'>
                        <div className='flex flex-col text-white'>
                            <Image src='/project.jpg' alt='project' width={100} height={100}/>
                            <p>My long desc</p>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Portfolio