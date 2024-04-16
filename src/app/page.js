'use client'
import About from "@/components/about";
import Portfolio from "../components/portfolio";
import Contact from "@/components/contact";
import Hero from "@/components/hero";


export default function Home() {
  
  return (
    <main>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </main>
  );
}
