import Link from 'next/link'

const navbar = () => {

    const links = [
        {url: "/", title:"Home"},
        {url: "/about", title:"About"},
        {url: "/portfolio", title:"Portfolio"},
        {url: "/contact", title:"Contact"}
    ]


  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
       <div className=''>
        <Link href="/" className='text-bold bg-black p-3 text-white rounded-full'>
            DA
        </Link>
       </div>
       <div className=''>
            <button className='z-50 relative text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl '>
                {links.map(link =>
                <Link href={link.url} key={link.url} className='p-3 text-white rounded-full'>
                    {link.title}
                </Link>)
                }
            </div>
       </div>
    </div>
  )
}

export default navbar