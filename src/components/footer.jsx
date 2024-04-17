import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg mt-5'>
      <layout className='flex items-center justify-center py-2'>
        <span>Copyright</span>
        <span>&copy;</span>
        <span>Derrick {new Date().getFullYear()}</span>
      </layout>
    </footer>
  )
}

export default Footer