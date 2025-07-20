import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CoachSection from "@/components/coach-section"
import AchievementsSection from "@/components/achievements-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoachSection />
      <AchievementsSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}
