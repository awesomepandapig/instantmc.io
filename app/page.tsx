import Image from 'next/image'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection/>
      <InfoSection/>
      <Footer/>
    </main>
  )
}
