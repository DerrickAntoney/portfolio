'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navLink'

const navbar = () => {

    const links = [
        {url: "/", title:"Home"},
        {url: "/about", title:"About"},
        {url: "/portfolio", title:"Portfolio"},
        {url: "/contact", title:"Contact"}
    ]

    const [open, setOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
       <div className='hidden md:flex gap-4 w-1/3 text-xl'>
        {links.map(link=>(
            <NavLink link={link} key={link.url} className='text-gray-900 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200'>
                {link.title}
            </NavLink>
        ))}
       </div>
       <div className='sm:hidden md:flex w-1/3 justify-center'>
        <Link href="/" className='text-bold bg-black p-3 text-white rounded-full'>
            DA
        </Link>
       </div>
       <div className='hidden md:flex gap-4 w-1/3 justify-end'>
            <Link href="https://github.com/DerrickAntoney">
              <Image src='/github.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://x.com/deriz_antoney">
              <Image src='/twitter.svg' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://www.linkedin.com/in/derrick-omondi-9342ba159/">
              <Image src='/linkedin.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://www.youtube.com/@DerrickOsano">
              <Image src='/youtube.svg' alt='' width={30} height={30}/>
            </Link>
            <Link href="https://www.behance.net/derrickomondi20">
              <Image src='/behance.svg' alt='' width={24} height={24}/>
            </Link>
       </div>
       <div className='md:hidden'>
            <button className='z-50 relative text-black' onClick={()=> setOpen((prev)=>!prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            {open && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl '>
                    {links.map(link =>
                    <Link href={link.url} key={link.url} className='p-3 text-white rounded-full'>
                        {link.title}
                    </Link>)
                    }
                </div>
            )}
            
       </div>
    </div>
  )
}

export default navbar