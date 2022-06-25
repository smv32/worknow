import { UserIcon, AdjustmentsIcon, LinkIcon, AnnotationIcon} from '@heroicons/react/outline'

const features = [
    {
      name: 'Profile Tracker',
      description:
        'Profile page to update your information and track your progress',
      icon: UserIcon,
    },
    {
      name: 'Filters',
      description:
        'Filters to search through categories and find suitable opportunities',
      icon: AdjustmentsIcon,
    },
    {
      name: 'Useful resources',
      description:
        'Links to useful online resources',
      icon: LinkIcon,
    },
    {
      name: 'Recommendations',
      description:
        'Personalised recommendation system',
      icon: AnnotationIcon,
    },
  ]
  
  export default function Features() {
    return (
        <div className="mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center lg:text-center">
            <h2 className="flex justify-center text-3xl leading-8 text-blue-300 font-semibold tracking-wide sm:text-4xl">FEATURES</h2>
            <p className="mt-4 max-w-4xl text-xl text-white lg:mx-auto">
              A one-stop platform where you can learn & earn, anytime & anywhere!
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
                  <dd className="ml-16 text-gray-300">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
}