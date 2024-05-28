'use client'
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import EngageMe from "./engageMe";

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();
    const text = 'Say Hello'

    const [disable, setDisable] = useState(true);

    function handleChange(event) {
        setDisable(event.target.value === '');
    }

    const sendEmail = (e) => {
      e.preventDefault();
      setError(false);
      setSuccess(false);
  
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        })
        .then(
          (result) => {
            setSuccess(true);
            form.current.reset
          },
          (error) => {
            setError(true);
          },
        );

    
    }
  return (
    <div id="contact" className="px-4 sm:px-8 md:px-12 lg:px-20 bg-backcolor dark:bg-bluish">
    <h1 className='font-bold text-xl md:text-4xl p-10 text-cyan dark:text-blukish'>Let's talk about your project!</h1>
      <motion.div
    className='h-full'
    initial={{ y: '200vh' }}
    animate={{ y: "0%" }}
    transition={{ duration: 1}}
    >
        <div className='h-full flex flex-col md:flex-row md:py-5 pb-8'>
            <div className='h-1/2 md:h-full md:w-1/2 flex flex-col items-center justify-between text-2xl md:text-3xl lg:text-6xl py-8 md:py-48'>
                <div>
                    {text.split('').map((letter, index)=>(
                        <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay: index*0.1, }} className='text-darkish dark:text-light'>
                            {letter}
                        </motion.span>
                    ))} 😊
                </div>
                <EngageMe/>
            </div>
            <form onSubmit={sendEmail} ref={form} className='h-1/2 md:h-full md:w-1/2 bg-bluen rounded-xl text-xl flex flex-col gap-8 justify-center p-8 md:p-8 lg:p-24'>
                <span>Dear Derrick,</span>
                <textarea rows={6} name='user_message' onChange={handleChange} className="bg-transparent border-b-2 border-b-darkish outline-none resize-none"/>
                <span>My Email Address is:</span>
                <input name="user_email" onChange={handleChange} type='email'className="bg-transparent border-b-2 border-b-darkish outline-none"/>
                <span>Regards</span>
                <button className="bg-cyan2 rounded font-semibold text-gray-600 p-4" disabled={disable}>Send</button>
                {success && <span className="text-green font-semibold">Your message has been sent succefully!</span>}
                {error && <span className="text-red font-semibold">Something went wrong!</span>}
            </form>
        </div>
    </motion.div>
    </div>
  )   
}
export default Contact