import {ClipboardListIcon, ClockIcon} from '@heroicons/react/outline'
import Information from "./about-us"
import Features from "./features"
import Testimonials from './testimonials'

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-900">

      <div className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="text-center container mx-auto px-6">
          
          <h2 className="text-4xl font-bold mb-2 text-white">
            Here's an opportunity you can't resist!
          </h2>

          <h3 className="text-2xl mb-8 text-gray-200">
            Make money by doing what you love.
          </h3>

          {/* Component on About us*/}
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            About Us
          </button>

        </div>
      </div>

      {/* Video */}
      <div className="mt-10 mb-10 flex justify-center">
        <iframe src="https://www.youtube.com/embed/zEYIMsV6Wk4" width="640" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>

      <Features />

      <div className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="text-center container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            OUR USP
          </h2>
          <div className="mt-12 flex justify-center">
          <div className="flex px-16 sm:px-8">
            <ClipboardListIcon classNameName='sm:w-14 sm:h-14 lg:w-8 lg:h-8'></ClipboardListIcon>
            <h3 className="text-2xl ml-4 text-gray-200">
            Short-term committments
          </h3>
          </div>
          <div className="flex px-16 sm:px-8">
            <ClockIcon classNameName='sm:w-14 sm:h-14 lg:w-8 lg:h-8'></ClockIcon>
            <h3 className="text-2xl ml-4 text-gray-200">
            Minimal skill requirements
          </h3>
          </div>
          </div>
        </div>
      </div>

      <Testimonials/>

    </div>
  )
}