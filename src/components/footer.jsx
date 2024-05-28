import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-darkish dark:border-light bg-backcolor dark:bg-bluish font-medium text-lg'>
      <layout className='flex flex-col items-center justify-center py-6 '>
        <div>
          <span className='dark:text-light'>{new Date().getFullYear()}</span>
          <span className='dark:text-light'>&copy;</span>
          <span className='dark:text-light'>All rights reserved</span>
        </div>
        <div className='flex items-center dark:text-light'>Made with  <img src="/love.png" alt="Love Icon" className='h-6 w-5'/>  by Derrick</div>
      </layout>
    </footer>
  )
}

export default Footer