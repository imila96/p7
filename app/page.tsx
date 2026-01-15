import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StoreShowcase from '@/components/StoreShowcase'
import BuiltInFeatures from '@/components/BuiltInFeatures'
import ChooseBuildMethod from '@/components/ChooseBuildMethod'
import AppShowcase from '@/components/AppShowcase'
import CustomizationSection from '@/components/CustomizationSection'
import BuildFastSection from '@/components/BuildFastSection'
import DragDropSection from '@/components/DragDropSection'
import ThemesSection from '@/components/ThemesSection'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StoreShowcase />
      <BuiltInFeatures />
      <ChooseBuildMethod />
      <AppShowcase />
      <CustomizationSection />
      <BuildFastSection />
      <DragDropSection />
      <ThemesSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
