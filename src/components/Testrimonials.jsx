import React from 'react'

const Testrimonials = () => {
  return (
    <section className="border-gray-700 border-b" id='testimonials'>
        <div className="px-6 py-32">
          <h2 className="text-center text-2xl font-bold mb-10">
            What They Say
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <div className="flex gap-3 items-center mb-2">
                <div className="p-6 w-2 rounded-full bg-gray-600" />
                <div className="text-sm mb-2 font-bold">
                  <p>John Doe</p>
                  <p className="text-blue-400">Rumpup CEO</p>
                </div>
              </div>
              <p>
                "PrimeReach doubled our ROI with AI precision. Their innovative
                approach to digital marketing has transformed our business
                completely."
              </p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <div className="flex gap-3 items-center mb-2">
                <div className="p-6 w-2 rounded-full bg-gray-600" />
                <div className="text-sm mb-2 font-bold">
                  <p>Jane Smith</p>
                  <p className="text-blue-400">Woolmark CMO</p>
                </div>
              </div>
              <p>
                "A game-changer for our campaigns. The AI-driven insights have
                helped us reach new markets and achieve unprecedented growth."
              </p>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Testrimonials
