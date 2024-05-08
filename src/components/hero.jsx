'use-client'
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LinkArrow from "./linkArrow";

const quote = {
  initial: {
    opacity:1,
  },
  animate: {
    opacity:1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  }
}

const singleWord = {
    initial: {
      opacity:0,
      y:50
    },
    animate: {
      opacity:1,
      y:0,
      transition: {
        duration: 1,
      },
    }
  }

const Hero = () => {
    const text="Hi there, I'm Derrick Antoney!"
  return (
    <div className="h-full flex flex-col md:flex-row gap-10 px-4 sm:px-8 md:px-12 dark:bg-bluish dark:text-light lg:px-20">
        <div className="">
          <Image src='/profile.png' alt="profile picture" width={300} height={300} className="object-contain rounded-full mx-8 sm:mx-12 md:mx-16 lg:mx-20"/>
        </div>
        <div className=" md:w-[50%] flex flex-col gap-4 md:justify-center">
          <motion.h1 className="font-bold text-xl md:text-4xl"
          variants={quote}
          >
           {
            text.split(' ').map((word, index) => {
              return (
                <motion.span key={word+''+index}
                variants={singleWord}
                initial="initial"
                animate="animate"
                >
                  {word}&nbsp;
                </motion.span>
              )
            })
           }
          </motion.h1>
          <p className="">
            I'm a professional Fullstack Developer and UX Designer. 
            I help businesses to craft user-centered interfaces that meet business needs. 
          </p>
          <p>
            I thrive in collaborative environments and love tackling complex challenges that 
            reflect user needs and piques consumers' grow interests.
            Let's connect and chat about your design and development needs!
          </p>
          <div className="flex flex-row gap-4">
            <Link download={true} href='/Derrick Antoney-Resume.pdf' className="flex items-center justify-center p-2 px-6 text-md md:text-lg font-semibold hover:bg-white hover:text-black rounded-lg ring-1 ring-white bg-black text-white">Resume<LinkArrow className='w-4 ml-1'/></Link>
            <Link href='/#' className="flex items-center text-sm justify-center p-2.5 px-6 text-md md:text-lg font-semibold hover:bg-black hover:text-white rounded-lg ring-1 ring-black bg-white text-black">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero