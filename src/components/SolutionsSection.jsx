import React from 'react'
import {
    FaCogs,
    FaPaintBrush,
    FaChartLine,
    FaUserFriends,
  } from "react-icons/fa";
  

const SolutionsSection = () => {
  return (
    <section className="border-gray-700 border-y" id='features'>
        <div className="px-6 py-32">
          <h2 className="text-center text-2xl font-bold mb-10">
            AI-Powered Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="p-6 bg-[#1e293b] rounded-lg transform transition duration-300 hover:scale-[1.02] hover:bg-[#24314a] hover:shadow-lg cursor-pointer">
              <div className="flex flex-col gap-1 mb-2">
                <FaCogs className="text-blue-400 text-2xl" />
                <h3 className="text-xl font-semibold text-blue-400">
                  AI Strategy
                </h3>
              </div>
              <p>
                Harness the power of artificial intelligence to conduct
                environmental scanning, analyze product performance, assess
                current market status, and forecast precise steps to enhance
                brand equity and sales. Our IITian-engineered algorithms deliver
                predictive insights, enabling data-driven decisions with
                unmatched accuracy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#1e293b] rounded-lg transform transition duration-300 hover:scale-[1.02] hover:bg-[#24314a] hover:shadow-lg cursor-pointer">
              <div className="flex flex-col gap-1 mb-2">
                <FaPaintBrush className="text-cyan-300 text-2xl" />
                <h3 className="text-xl font-semibold text-cyan-300">
                  Brand Optimization
                </h3>
              </div>
              <p>
                Elevate your brand with AI-optimized identity creation—framing
                comprehensive brand manuals, building high-performing websites,
                and optimizing social channels. Our tech-first approach ensures
                every element is tailored for maximum visibility and engagement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#1e293b] rounded-lg transform transition duration-300 hover:scale-[1.02] hover:bg-[#24314a] hover:shadow-lg cursor-pointer">
              <div className="flex flex-col gap-1 mb-2">
                <FaChartLine className="text-sky-300 text-2xl" />
                <h3 className="text-xl font-semibold text-sky-300">
                  Performance Marketing
                </h3>
              </div>
              <p>
                Unlock AI-driven performance with precision-targeted PPC
                campaigns, programmatic advertising, and social media
                strategies. We build optimized sales funnels, enhance lead
                generation, and execute e-commerce campaigns, all powered by
                real-time analytics.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-[#1e293b] rounded-lg transform transition duration-300 hover:scale-[1.02] hover:bg-[#24314a] hover:shadow-lg cursor-pointer">
              <div className="flex flex-col gap-1 mb-2">
                <FaUserFriends className="text-cyan-200 text-2xl" />
                <h3 className="text-xl font-semibold text-cyan-200">
                  AI Media Solutions
                </h3>
              </div>
              <p>
                Revolutionize your outreach with AI-powered influencer
                marketing, testimonial campaigns, experimental strategies, and
                targeted women’s marketing. Our algorithms identify the best
                influencers and craft compelling narratives.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SolutionsSection
