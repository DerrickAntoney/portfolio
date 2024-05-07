import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg mt-5'>
      <layout className='flex flex-col items-center justify-center py-6'>
        <div>
          <span>{new Date().getFullYear()}</span>
          <span>&copy;</span>
          <span>All rights reserved</span>
        </div>
        <div className='flex items-center'>Made with  <img src="/love.png" alt="Love Icon" className='h-6 w-5'/>  by Derrick</div>
      </layout>
    </footer>
  )
}

export default Footer