import React from 'react'

const InnovatorsSections = () => {
  return (
    <section id='clients'>
        <div className="py-18 px-6 text-center border-b border-gray-900">
          <h2 className="text-2xl font-bold mb-6">Trusted Innovators</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Rumpup", "Amieut", "Duty Free", "Woolmark"].map((name) => (
              <div
                key={name}
                className="bg-[#1e293b] px-8 py-4 rounded text-white transform transition duration-300 hover:bg-cyan-500 hover:shadow-md cursor-pointer font-bold"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default InnovatorsSections
