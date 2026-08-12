import FounderHero from './components/FounderHero'
import StorySection from './components/StorySection'
import FounderTourSection from './components/FounderTourSection'
import PhilosophySection from './components/PhilosophySection'
import VisionToRealitySection from './components/VisionToRealitySection'
import TeamSection from './components/TeamSection'
import VisionSection from './components/VisionSection'
import SignatureSection from './components/SignatureSection'

const Founder = () => {
  return (
    <main className="bg-bg-primary">
      <FounderHero />
      <StorySection />
      <FounderTourSection />
      <PhilosophySection />
      <VisionToRealitySection />
      <TeamSection />
      <VisionSection />
      <SignatureSection />
    </main>
  )
}

export default Founder
