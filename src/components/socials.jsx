import Image from "next/image"
import Link from "next/link"


const Socials = ({className}) => {
  return (

        <div className={className}>
            <Link href="https://github.com/DerrickAntoney" target="_blank"
            rel="noopener noreferrer">
              <Image src='/github.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://x.com/deriz_antoney" target="_blank"
            rel="noopener noreferrer">
              <Image src='/twitter.svg' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://www.linkedin.com/in/derrick-omondi-9342ba159/" target="_blank"
            rel="noopener noreferrer">
              <Image src='/linkedin.png' alt='' width={24} height={24}/>
            </Link>
            <Link href="https://www.youtube.com/@DerrickOsano" target="_blank"
            rel="noopener noreferrer">
              <Image src='/youtube.svg' alt='' width={30} height={30}/>
            </Link>
            <Link href="https://www.behance.net/derrickomondi20" target="_blank"
            rel="noopener noreferrer">
              <Image src='/behance.svg' alt='' width={24} height={24}/>
            </Link>
    </div>
  )
}

export default Socials