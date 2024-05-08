import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import socialmui from '../../public/socialmui.png'
import hudson from '../../public/hudson.png'
import flixxmovies from '../../public/flixxmovies.png'
import dashboard from '../../public/next-dashboard.png'
import staarab from '../../public/Staarab.png'
import cryptotales from '../../public/crypto-tales.png'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return (
        <article className='w-full relative flex items-center justify-between rounded-3xl border border-solid border-black bg-white rounded-br-2xl shadow-xl p-12'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl'>
            </div>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/> 
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-red-500 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black'>{summary}</p>
                <div className='mt-2 flex items-center'>
                  <Link href={github} target='_blank' className='w-10'><img src="/github.png" alt="" /></Link>
                  <Link href={link} target='_blank' className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold'>View Demo</Link>
                </div>
            </div>
        </article>

)
    }

const Project = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex flex-col tems-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl'>
            </div>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/> 
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-red-500 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-xl font-bold'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center justify-between w-full'>
                  <Link href={link} target='_blank' className=' text-lg font-semibold underline'>View Demo</Link>
                  <Link href={github} target='_blank' className='w-8'><img src="/github.png" alt="" /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <div className='grid grid-cols-12 gap-24 px-4 sm:px-8 md:px-12 lg:px-20 '>
        <div className='col-span-12'>
            <FeaturedProject
            title='Cabinet Manufacturer Website'
            img={hudson}
            summary='A multi-page Manufacturer website using, NextJs, Tailwind CSS, React Context API, NextJs File based routing and Next SEO. It show case the factory services as well as featured projects. It acts as a landing page for new and returning customer.'
            link='/'
            github='/'
            type='Featured Project'
            />
        </div>
        <div className='col-span-6'>
            <Project
                title='Cabinet Manufacturer Website'
                img={socialmui}
                link='/'
                github='/'
                type='Featured Project'
                />
        </div>
        <div className='col-span-6'>
            <Project
                    title='Cabinet Manufacturer Website'
                    img={dashboard}
                    link='/'
                    github='/'
                    type='Featured Project'
                    />
        </div>
        <div className='col-span-12'>
            <FeaturedProject
                title='Cabinet Manufacturer Website'
                img={cryptotales}
                summary='A multi-page Manufacturer website using, NextJs, Tailwind CSS, React Context API, NextJs File based routing and Next SEO. It show case the factory services as well as featured projects. It acts as a landing page for new and returning customer.'
                link='/'
                github='/'
                type='Featured Project'
                />
        </div>
        <div className='col-span-6'>
            <Project
                    title='Cabinet Manufacturer Website'
                    img={flixxmovies}
                    link='/'
                    github='/'
                    type='Featured Project'
                    />
        </div>
        <div className='col-span-6'>
            <Project
                    title='Cabinet Manufacturer Website'
                    img={staarab}
                    link='/'
                    github='/'
                    type='Featured Project'
                    />
        </div>
    </div>
  )
}

export default projects