import Hero from '../../components/Hero/Hero'
import BrandMarquee from '../../components/BrandMarquee/BrandMarquee'
import AboutSection from '../../components/AboutSection/AboutSection'
import VideoSection from '../../components/VideoSection/VideoSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import ThreeDSection from '../../components/ThreeDSection/ThreeDSection'
// import AISection from '../../components/AISection/AISection'
import BeforeAfterSection from '../../components/BeforeAfterSection/BeforeAfterSection'
import ProcessSection from '../../components/ProcessSection/ProcessSection'
import WhyAtharSection from '../../components/WhyAtharSection/WhyAtharSection'
import LocationSection from '../../components/LocationSection/LocationSection'
import ContactSection from '../../components/ContactSection/ContactSection'

const Home = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <Hero />
        <BrandMarquee />
        <AboutSection />
        <VideoSection />
        <ServicesSection />
        <BeforeAfterSection />
        <ThreeDSection />
        {/* <AISection /> */}
        <ProcessSection />
        <WhyAtharSection />
        <LocationSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home
