'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navLink'
import { motion } from 'framer-motion'
import Socials from './socials'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const navbar = () => {

    const MotionLink = motion(Link)

    const links = [
        {url: "/", title:"Home"},
        {url: "#about", title:"About"},
        {url: "#project", title:"Portfolio"},
        {url: "#contact", title:"Contact"}
    ]

    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor:'rgb(255,255,255)'
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor:'rgb(255,255,255)'
        }
    }

    const listVariants = {
        closed: {
            x: '100vw',
        },
        opened: {
            x: 0,
            transition: {
                when:'beforeChildren',
                staggerChildren: 0.2,
            },
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

  return (
    <div className='h-full flex items-center bg-backcolor dark:bg-bluish dark:text-light justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
       <div className='hidden md:flex gap-4 w-1/3 text-md lg:text-xl'>
        {links.map(link=>(
            <NavLink link={link} key={link.url} className='text-darkish dark:text-light hover:text-gray dark:hover:text-graywhite'>
                {link.title}
            </NavLink>
        ))}
       </div>
       <div className='sm:hidden md:flex w-1/3 justify-center'>
        <MotionLink href="/" 
        className='text-bold bg-darkish p-3 text-light rounded-full border border-solid border-backcolor dark:border-light'
        whileHover={{backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1, repeat:Infinity}
    }}
        >
            DA
        </MotionLink>
       </div>
       <Socials className={'hidden md:flex gap-4 w-1/3 justify-end items-center'}/>
       <div className='md:hidden'>
            <button className='z-50 relative justify-between w-10 h-8 flex flex-col' onClick={()=> setOpen((prev)=>!prev)}>
                <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className='w-10 h-1 bg-darkish dark:bg-gray rounded-md origin-left'></motion.div>
                <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className='w-10 h-1 bg-darkish dark:bg-gray rounded-md'></motion.div>
                <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className='w-10 h-1 bg-darkish dark:bg-gray rounded-md origin-left'></motion.div> 
            </button>
            {open && (
                <motion.div variants={listVariants} initial='closed' animate='opened' className='absolute top-0 left-0 w-screen h-[90%] text-darkish dark:text-light bg-darkish rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-graywhite flex flex-col items-center justify-center gap-8 text-4xl '>
                    {links.map(link =>
                    <motion.div className='' variants={listItemVariants} key={link.url}>
                        <a href={link.url} className='p-3 text-light rounded-full'>
                        {link.title}
                        </a>
                    </motion.div>
                    )
                    }
                    <Socials className={'flex gap-4 bg-white p-1 rounded-sm'}/>
                </motion.div>
            )}
            
       </div>
    </div>
  )
}

export default navbar