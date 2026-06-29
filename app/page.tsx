'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HistoryTimeline from '@/components/HistoryTimeline'
import Categories from '@/components/Categories'
import FamousFirearms from '@/components/FamousFirearms'
import TechnologyEvolution from '@/components/TechnologyEvolution'
import SafetyResponsibility from '@/components/SafetyResponsibility'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <HistoryTimeline />
      <Categories />
      <FamousFirearms />
      <TechnologyEvolution />
      <SafetyResponsibility />
      <FAQ />
      <Footer />
    </main>
  )
}
