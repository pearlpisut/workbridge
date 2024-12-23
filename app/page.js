import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Hero />
        <Features />
      </main>
    </div>
  )
}