import Image from "next/image"

const CircularText = () => {
  return (
    <div>
        <Image src='/circulartext.svg' width={144} height={144} className="animate-spin-slow"/>
    </div>
  )
}

export default CircularText