import About from "@/components/about";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-full flex flex-col md:flex-row gap-10 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="">
          <Image src='/profile.png' alt="profile picture" width={300} height={300} className="object-contain rounded-full mx-8 sm:mx-12 md:mx-16 lg:mx-20"/>
        </div>
        <div className=" md:w-[50%] flex flex-col gap-4 md:justify-center">
          <h1 className="font-bold">
           Hi there, I'm Derrick Antoney!
          </h1>
          <p className="">
            I'm a professional Software Engineer and UX Designer. 
            I help businesses to craft user-centered interfaces that meet business needs. 
            <br/>I thrive in collaborative environments and love tackling complex challenges that 
            reflect user needs and piques consumers' grow interests.
            Let's connect and chat about your design and development needs!
          </p>
          <div className="flex flex-row gap-4">
            <button className="p-4 rounded-lg ring-1 ring-white bg-black text-white">My Resume</button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">Contact Me</button>
          </div>
        </div>
      </div>
      <About/>
    </main>
  );
}
