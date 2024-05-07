import { DM_Sans } from "next/font/google";
import "./globals.css";


import Navbar from "../components/navbar";
import SmoothScrolling from "@/components/smoothScrolling";
import Footer from "@/components/footer";
import EngageMe from "@/components/engageMe";

const dmSan = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Derrick's Portfolio",
  description: "Summary of experience and past projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32*32" />
      </head>
      <body className={dmSan.className}>
        <SmoothScrolling>
            <div className="w-screen h-full bg-gradient-to-b from-blue-100 to-red-100">
              <div className="h-24">
                <Navbar/>
              </div>
              <div className="">
                {children}
              </div>
              <div>
                <Footer/>
              </div>
            </div>
            <EngageMe/>
        </SmoothScrolling>
        
      </body>
    </html>
  );
}
