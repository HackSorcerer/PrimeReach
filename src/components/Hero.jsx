import React from 'react'
import graph from "../assets/graph.jpg";

const Hero = () => {
  return (
    <section className="pt-10">
        <div
          className="w-full h-[300px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${graph})` }}
        >
        </div>
      </section>
  )
}

export default Hero
