import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "../components/navbar";
import SmoothScrolling from "@/components/smoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
            <div className="w-screen h-full bg-gradient-to-b from-blue-100 to-red-100">
              <div className="h-24">
                <Navbar/>
              </div>
              <div className="">
                {children}
              </div>
            </div>
        </SmoothScrolling>
        
      </body>
    </html>
  );
}
