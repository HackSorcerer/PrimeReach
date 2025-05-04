import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] px-6 py-10 text-center" id="footer">
        <p className="mb-2 font-bold text-xl">-----------</p>
        <p className="mb-2">------------</p>
        <p className="mb-4 text-sm">------------</p>
        <div className="flex justify-center gap-4 text-xl">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </footer>
  )
}

export default Footer
