import Link from 'next/link';

export default function WhoAreYou() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" id="who-are-you">
       <div className="grid md:grid-cols-2 gap-8">
         {/* For Helpers */}
         <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
           <h2 className="text-2xl font-bold text-stone-800 mb-4">Join as a Helper</h2>
           {/* <p className="text-stone-600 mb-4">
             Whether you're a student looking for experience or a professional seeking side projects
             - there's a place for you here.
           </p> */}
           <ul className="space-y-3 text-stone-600 mb-6">
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 text-emerald-600">✓</span>
               <span className="ml-2">Match with various projects in preferred areas</span>
             </li>
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 text-emerald-600">✓</span>
               <span className="ml-2">Gain practical experience while earning</span>
             </li>
           </ul>
           <Link 
             href="/helper" 
             className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
           >
             I am a Helper
           </Link>
         </div>
          {/* For Project Owners */}
         <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
           <h2 className="text-2xl font-bold text-stone-800 mb-4">Need Help?</h2>
           {/* <p className="text-stone-600 mb-4">
             Find reliable local talent for your projects - big or small. 
             From web development to content writing, design to data entry.
           </p> */}
           <ul className="space-y-3 text-stone-600 mb-6">
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 text-emerald-600">✓</span>
               <span className="ml-2">Match with local helpers: convenient and safe</span>
             </li>
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 text-emerald-600">✓</span>
               <span className="ml-2">Flexible project sizes and budgets</span>
             </li>
           </ul>
           <Link 
             href="/client" 
             className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
           >
             I need Help
           </Link>
         </div>
       </div>
     </div>
  );
}