'use client'
import Link from 'next/link'
import { useState } from 'react'
import { bitter, dmSans } from './font'

export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
   <nav className="bg-white shadow-lg">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between h-16">
         <div className="flex">
           {/* Logo */}
           <div className={`${bitter.className} flex-shrink-0 flex items-center`}>
             <Link href="/" className="text-xl font-bold text-emerald-600">
               <div className="flex items-center">
                 <span>HelpPool</span>
                 <img src="/hkflag.jpg" alt="Hong Kong Flag" className="h-6 w-6 ml-2" />
               </div>
             </Link>
           </div>
         </div>
          {/* Desktop Navigation */}
         <div className={`${dmSans.className} hidden sm:flex sm:space-x-8 items-center`}>
           <Link 
             href="/helper"
             className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
           >
             I am a Helper
           </Link>
           <Link 
             href="/client"
             className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
           >
             I need help
           </Link>
           <Link 
             href="/contact"
             className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
           >
             Contact us
           </Link>
         </div>
          {/* Mobile menu button */}
         <div className="sm:hidden flex items-center">
           <button
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
           >
             <svg
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               {isMenuOpen ? (
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M6 18L18 6M6 6l12 12"
                 />
               ) : (
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M4 6h16M4 12h16M4 18h16"
                 />
               )}
             </svg>
           </button>
         </div>
       </div>
     </div>
      {/* Mobile menu */}
     {isMenuOpen && (
       <div className="sm:hidden">
         <div className="px-2 pt-2 pb-3 space-y-1">
           <Link
             href="/helper"
             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
           >
             I am helper
           </Link>
           <Link
             href="/client"
             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
           >
             I need help
           </Link>
           <Link
             href="/contact"
             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
           >
             Contact us
           </Link>
         </div>
       </div>
     )}
   </nav>
 )}
