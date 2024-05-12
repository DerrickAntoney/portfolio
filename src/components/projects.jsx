import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import socialmui from '../../public/socialmui.png'
import hudson from '../../public/hudson.png'
import flixxmovies from '../../public/FlixMovies.png'
import dashboard from '../../public/next-dashboard.png'
import staarab from '../../public/Staarab.png'
import cryptotales from '../../public/crypto-tales.png'
import { useInView, motion } from 'framer-motion'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return (
        <article className='w-full relative flex flex-col md:flex-row md:p-8 rounded-2xl xs:rounded-br-3xl lg:p-12 items-center justify-between md:rounded-3xl border border-solid border-darkish dark:border-blukish bg-bluen dark:bg-bluish rounded-br-2xl shadow-xl p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-darkish rounded-br-3xl'>
            </div>
            <Link href={link} target='_blank' className='md:w-1/2 cursor-pointer overflow-hidden rounded-lg w-full'>
                <Image src={img} alt={title} className='w-full h-auto'/> 
            </Link>
            <div className='md:w-1/2 flex flex-col items-start justify-between md:pl-6 w-full pl-0 sm:pt-6'>
                <span className=' dark:text-blukish font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left md:text-2xl text-lg font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black md:text-base text-sm'>{summary}</p>
                <div className='mt-2 flex items-center w-full justify-around'>
                  <Link href={github} target='_blank' className='md:w-10 w-6 bg-light rounded-full'><img src="/github.png" alt="" /></Link>
                  <Link href={link} target='_blank' className='ml-4 rounded-lg dark:bg-light dark:text-darkish bg-darkish text-light p-2 px-6 text-base md:text-lg font-semibold'>Visit Site</Link>
                </div>
            </div>
        </article>

)
    }

const Project = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-darkish dark:border-blukish bg-bluen dark:bg-bluish p-4 md:p-6 relative'>
            {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-darkish dark:bg-light rounded-br-3xl'>
            </div> */}
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/> 
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className=' dark:text-blukish  font-medium text-lg md:text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-lg md:text-xl font-bold'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center justify-between w-full'>
                  <Link href={link} target='_blank' className='text-base md:text-lg font-semibold underline'>View Demo</Link>
                  <Link href={github} target='_blank' className='md:w-8 w-6 bg-light rounded-full'><img src="/github.png" alt="" /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {

    const projectsRef = useRef();
    const isProjectsRefInView = useInView(projectsRef);
  return (
    <div id='project' className='px-4 sm:px-8 md:px-12 lg:px-20 bg-backcolor dark:bg-bluish dark:text-light'>
    <motion.h1 className='font-bold text-2xl mb-5' initial={{x:'-300px'}} ref={projectsRef} animate={isProjectsRefInView ? {x:0} : {}} transition={{delay:0.2}}>Portfolio Projects</motion.h1>
    <div className='grid grid-cols-12 md:gap-24 gap-12 md:gap-y-32 lg:gap-x-16 md:gap-x-8 gap-y-24 gap-x-0'>
        <div className='col-span-12'>
            <FeaturedProject
            title='Cabinet Manufacturer Website'
            img={hudson}
            summary='A multi-page Manufacturer website using, NextJs, Tailwind CSS, React Context API, NextJs File based routing and Next SEO. It show case the factory services as well as featured projects. It acts as a landing page for new and returning customer.'
            link='https://hudsonka-binetry.com/'
            github='#'
            type='Featured Project'
            />
        </div>
        <div className='md:col-span-6 col-span-12'>
            <Project
                title='Social Media Application'
                img={socialmui}
                link='https://socialmui.vercel.app/'
                github='https://github.com/DerrickAntoney/socialmui'
                type='Featured Project'
                />
        </div>
        <div className='md:col-span-6 col-span-12'>
            <Project
                    title='Customers Transaction Dashboard'
                    img={dashboard}
                    link='https://dashboardnextapp.vercel.app/dashboard'
                    github='https://github.com/DerrickAntoney/next-dashboard'
                    type='Featured Project'
                    />
        </div>
        <div className='col-span-12'>
            <FeaturedProject
                title='Cryptotales cryptocurrency watch website'
                img={cryptotales}
                summary='The website utilizes latest react features for data fetching and caching. Cryptotales gives crypto ethusiasts an opportunity to observe prices for different cryptos in the world. It provides current and historical information on cryptocurrencies'
                link='https://crypto-tales.netlify.app/'
                github='https://github.com/DerrickAntoney/cryptocurrent'
                type='Featured Project'
                />
        </div>
        <div className='md:col-span-6 col-span-12'>
            <Project
                    title='Popular Movies Website'
                    img={flixxmovies}
                    link='https://flixxmovies.vercel.app/'
                    github='https://github.com/DerrickAntoney/movieapp'
                    type='Featured Project'
                    />
        </div>
        <div className='md:col-span-6 col-span-12'>
            <Project
                    title='Web Development Agency Website'
                    img={staarab}
                    link='https://staarab-web.vercel.app/'
                    github='https://github.com/DerrickAntoney/staarab'
                    type='Featured Project'
                    />
        </div>
    </div>
    </div>)
}

export default projects