import Header from "./navigation"
import { Style } from "util"
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ]

export default function Home() {
    return (
        <div class="w-full h-full bg-gray-900">
            <Header />
            <div class="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div class="text-center container mx-auto px-6">
                    <h2 class="text-4xl font-bold mb-2 text-white">
                        Here's an opportunity you can't resist!
                    </h2>
                    <h3 class="text-2xl mb-8 text-gray-200">
                        Make money by doing what you love.
                    </h3>

                    <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        About Us
                    </button>
                </div>
            </div>

            <div class="mt-10 mb-10 flex justify-center">
                <iframe src="https://www.youtube.com/embed/zEYIMsV6Wk4" width="640" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <div className="mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center lg:text-center">
          <h2 className="flex justify-center text-3xl leading-8 text-blue-300 font-semibold tracking-wide sm:text-4xl">FEATURES</h2>
          <p className="mt-4 max-w-4xl text-xl text-white lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

            <div class="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div class="text-center container mx-auto px-6">
                    <h2 class="text-4xl font-bold mb-2 text-white">
                        Here's an opportunity you can't resist!
                    </h2>
                    <h3 class="text-2xl mb-8 text-gray-200">
                        Make money by doing what you love.
                    </h3>

                    <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        About Us
                    </button>
                </div>
            </div>
            <section class="bg-gray-900">
      <div class="container mx-auto px-6 py-20">
        <h2 class="text-4xl font-bold text-center text-gray-100 mb-8">
          Testimonials
        </h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-800 text-base px-6 mb-5">Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-800 text-base px-6 mb-5">As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere I go, even in the bathroom since it's waterproof.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-800 text-base px-6 mb-5">I don't regret buying this wearble gadget. One of the best gadgets I own!.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div> 
    )
}