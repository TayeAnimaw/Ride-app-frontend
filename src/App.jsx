import './App.css'
import { LanguageProvider } from './lib/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import RouteShowcase from './sections/RouteShowcase'
import Pricing from './sections/Pricing'
import Holiday from './sections/Holiday'
import Drivers from './sections/Drivers'
import Comparison from './sections/Comparison'
import Rewards from './sections/Rewards'
import FAQ from './sections/FAQ'
import DownloadCTA from './sections/DownloadCTA'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <RouteShowcase />
        <Pricing />
        <Holiday />
        <Drivers />
        <Comparison />
        <Rewards />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
