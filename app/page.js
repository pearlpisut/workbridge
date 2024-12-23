'use client'

import { useState } from 'react'
import FreelancerForm from '@/components/forms/FreelancerForm'
import ClientForm from '@/components/forms/ClientForm'

export default function Home() {
  const [activeTab, setActiveTab] = useState('freelancers')

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Connect with Top Freelancers
        </h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border rounded-lg overflow-hidden">
            <button
              className={`px-6 py-2 ${
                activeTab === 'freelancers' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700'
              }`}
              onClick={() => setActiveTab('freelancers')}
            >
              For Freelancers
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === 'clients' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700'
              }`}
              onClick={() => setActiveTab('clients')}
            >
              For Clients
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'freelancers' ? (
            <FreelancerForm />
          ) : (
            <ClientForm />
          )}
        </div>
      </div>
    </main>
  )
}