import HeroCarousel from '@/app/components/HeroCarousel'
import ServicesSection from '@/app/components/ServicesSection'
import PricingSection from '@/app/components/PricingSection'
import ContactSection from '@/app/components/ContactSection'
import FooterSection from '@/app/components/FooterSection'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroCarousel />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
