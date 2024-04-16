'use client'
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();
    const text = 'Say Hello'

    const sendEmail = (e) => {
      e.preventDefault();
      setError(false)
      setSuccess(false)
  
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
          publicKey: 'LAyOUSIJ6IGkc_FGF',
        })
        .then(
          () => {
            setSuccess(true);
            form.current.reset
          },
          (error) => {
            setError(true);
          },
        );

    
    }
  return (
    <motion.div
    className='h-full'
    initial={{ y: '200vh' }}
    animate={{ y: "0%" }}
    transition={{ duration: 1}}
    >
        <div className='h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 md:mt-5 '>
            <div className='h-1/2 md:h-full md:w-1/2 flex items-center justify-center text-2xl md:text-6xl py-8 md:py-48'>
                <div>
                    {text.split('').map((letter, index)=>(
                        <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay: index*0.1, }} className='text-gray-900 dark:text-gray-100'>
                            {letter}
                        </motion.span>
                    ))} 😊
                </div>
            </div>
            <form onSubmit={sendEmail} ref={form} className='h-1/2 md:h-full md:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 md:p-24'>
                <span>Dear Derrick,</span>
                <textarea rows={6} name='user_message' className="bg-transparent border-b-2 border-b-black outline-none resize-none"/>
                <span>My Email Address is:</span>
                <input name="user_email" type='text'className="bg-transparent border-b-2 border-b-black outline-none"/>
                <span>Regards</span>
                <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
                {success && <span className="text-green-600 font-semibold">Your message has been sent succefully!</span>}
                {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
            </form>
        </div>
    </motion.div>
  )
}

export default Contact