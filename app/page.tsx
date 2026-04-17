import { Header }      from '@/components/layout/Header'
import { Footer }      from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { HeroBannerCarousel } from '@/components/home/HeroBannerCarousel'
import { TickerBanner } from '@/components/home/TickerBanner'
import { ProductsSection } from '@/components/home/ProductsSection'
import { ManifestoSection } from '@/components/home/ManifestoSection'
import { EverclubSection } from '@/components/home/EverclubSection'
import { EvercoinsSection } from '@/components/home/EvercoinsSection'
import { NewArrivalsSection } from '@/components/home/NewArrivalsSection'
import { PromotionsSection } from '@/components/home/PromotionsSection'
import { KitsSection } from '@/components/home/KitsSection'
import { SocialProofSection } from '@/components/home/SocialProofSection'
import { NewsletterSection } from '@/components/home/NewsletterSection'
import { AgeGate } from '@/components/layout/AgeGate'

export default function HomePage() {
  return (
    <>
      <AgeGate />
      <Header />
      <main>
        <HeroSection />
        <HeroBannerCarousel />
        <TickerBanner />
        <ProductsSection />
        <PromotionsSection />
        <ManifestoSection />
        <EverclubSection />
        <EvercoinsSection />
        <NewArrivalsSection />
        <KitsSection />
        <SocialProofSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
