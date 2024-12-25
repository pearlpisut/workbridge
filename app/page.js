import Hero from '@/components/home/Hero'
// import Features from '@/components/home/Features'
import WhoAreYou from '@/components/home/WhoAreYou'
import HowItWorks from '@/components/home/HowItWorks'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
        <Head>
          <title>HelpPool</title>
          <meta name="description" content="HelpPool is a platform for connecting helpers with clients." />
        </Head>
        <Hero />
        <WhoAreYou />
        <HowItWorks />
        {/* <Features /> */}
      </main>
    </div>
  )
}