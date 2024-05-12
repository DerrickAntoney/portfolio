'use client'
import Image from 'next/image'
import React from 'react'
import Brain from './brain'
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher';


const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const About = () => {

    const [mode, setMode] = useThemeSwitcher();

    const containerRef = useRef();
    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef);//

    const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <div id='about' className='lg:flex dark:bg-bluish dark:text-light bg-backcolor'>
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-12 md:gap-16 lg:gap-24 lg:w-2/3 xl:1/2'>
            <div className='flex flex-col gap-12 justify-center mt-20'>
                <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                <p className='text-lg'>As a designer, I love to create design which speaks, keep it clean, minimal and simple. I design web and mobile applications</p>
                <p className='text-lg'>As a developer, I value business or brand for which i'm creating.</p>
                <div className='self-end'>
                    {mode === 'dark' ? (<Image src='/signlight.svg' alt='signature' width={100} height={100}/>) :
                    (<Image src='/sign.svg' alt='signature' width={100} height={100}/>)}
                </div>
                <div>
                    {
                        mode === "dark" ?  (
                            <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#ffffff"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="rgb(255,255,255)" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#ffffff"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                        ) : (
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>) 
                    }
                        
                </div>
            </div>
            <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
                <motion.h1 initial={{x:'-300px'}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className='font-bold text-2xl'>SKILLS</motion.h1>
                <motion.div initial={{x:'-300px'}} animate={isSkillRefInView ? {x:0} : {}} className='flex gap-4 flex-wrap'>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Javascript
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Typescript
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Ruby
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        React.Js
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Next.Js
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        NextAuth
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Next S.E.O
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Ruby on Rails
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        SCSS
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Tailwind CSS
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        MongoDB
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Firebase
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Superbase
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        PostgreSQL
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Node.js
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Express.js
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Mongoose.js
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        GraphQL
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Django
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Redux
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Zustand
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Framer Motion
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Three.js
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Stripe
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Mailgun
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Tanstack Query
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Web Design
                    </div>
                    <div className='rounded p-2 text-sm cursor-pointer dark:bg-light dark:text-darkish dark:hover:bg-darkish dark:hover:text-light bg-darkish text-light hover:bg-light hover:text-darkish'>
                        Mobile Design
                    </div>
                </motion.div>
                <div className='mb-0'>
                {
                        mode === "dark" ?  (
                            <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#ffffff"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="rgb(255,255,255)" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#ffffff"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                        ) : (
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>) 
                    }
                </div>
            </div>
            <div className='flex flex-col gap-12 justify-center mt-0'>
                
            </div>
        </div>
        <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0'>
            <Brain scrollYProgress={scrollYProgress}/>
        </div>
    </div>
  )
}

export default About