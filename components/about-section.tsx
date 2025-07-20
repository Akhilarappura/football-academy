import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/about-bg.png" alt="Football field background" fill className="object-cover opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">About Football</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Football is more than just a game—it's a passion that unites people across cultures, backgrounds, and
              generations. At our academy, we believe in the transformative power of football to build character,
              discipline, and teamwork.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our mission is to nurture young talent and instill the values of sportsmanship, dedication, and
              excellence. We provide world-class training facilities and expert coaching to help players reach their
              full potential both on and off the field.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Join us in this beautiful journey where dreams meet reality, and every kick of the ball brings you closer
              to greatness.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-green-600 rounded-lg p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Philosophy</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Excellence in Training
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Character Development
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Team Spirit
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  Professional Growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
