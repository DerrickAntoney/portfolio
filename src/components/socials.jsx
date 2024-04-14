import Image from "next/image"
import Link from "next/link"


const Socials = ({className}) => {
  return (

        <div className={className}>
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
  )
}

export default Socials