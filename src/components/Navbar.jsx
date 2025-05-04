import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between items-center px-6 py-4 border-b border-gray-700 backdrop-blur bg-[#0b1120]/80 z-50">
        <h1 className="text-xl font-bold cursor-pointer">PrimeReach</h1>
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="cursor-pointer hover:text-cyan-400"><a href="#about">About</a></li>
          <li className="cursor-pointer hover:text-cyan-400"><a href="#features">Features</a></li>
          <li className="cursor-pointer hover:text-cyan-400"><a href="#clients">Clients</a></li>
          <li className="cursor-pointer hover:text-cyan-400"><a href="#testimonials">Testimonials</a></li>
        </ul>
        <a className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 text-sm cursor-pointer" href='#footer'>
          Contact Us
        </a>
      </div>
  )
}

export default Navbar
