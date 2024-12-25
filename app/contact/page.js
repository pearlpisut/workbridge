import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <div className="text-left">
        <h2 className="text-2xl font-semibold mb-4">About us</h2>
        <h3 className='text-xl font-medium mb-2'>HelpPool</h3>
        <p className="text-gray-600 mb-4">
          Many times, I come across either people who are looking for help someone to work 
          with on their projects, like a student looking for another student, OR
          people who are looking to practice their skills so that they can get more experience before applying
          for jobs / internships or simply making some extra money. I beleive this platform could
          help these people connect and help each other grow.
          <br /><br />
          HelpPool now only <span className="underline">focuses on helpers and projects in Hong Kong</span> to ensure great communications,
          collaboration, and safety for both sides.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
        <h3 className="text-xl font-medium mb-2">Phutanate Pisutsin (Pearl)</h3>
        <h4 className="text-sm font-medium mb-2">Computer Science Year-4, CUHK</h4>
        <p className="text-gray-600 mb-4">
          If you interested in working together or have any question, please reach out to me!
        </p>
        <div className="flex flex-col items-start gap-4">
          <a 
            href="https://www.linkedin.com/in/phutanate/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-800"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:pearlphutanate@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-800"
          >
            Email
          </a>
          {/* <div className="bg-gray-50 p-6 rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>
            <form className="space-y-4 w-full">
                <div className="flex justify-between gap-4">
                    <div className="w-1/2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </div>
                </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>
              <div className="mt-12">
                <a
                  href="mailto:pearlphutanate@gmail.com"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
                >
                  Send Message
                </a>
              </div>
            </form>
          </div> */}
        </div>
      </div> 
    </div>
  )
}
