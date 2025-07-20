import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/hero-video.mp4" type="video/mp4" />

      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Edu Sports Academy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light max-w-2xl mx-auto">
            Where Champions Are Made
          </p>
          {/* <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Now
          </Button> */}
        </div>
      </div>
    </section>
  )
}
