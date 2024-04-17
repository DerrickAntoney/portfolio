import Image from "next/image"

const CircularText = () => {
  return (
    <div>
        <Image src='/circulartext.svg' width={120} height={120} className="animate-spin-slow"/>
    </div>
  )
}

export default CircularText