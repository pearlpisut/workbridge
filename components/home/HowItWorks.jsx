export default function HowItWorks() {
    return (
    <div className="bg-white py-6" id="how-it-works">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
           Our way of working
         </h2>
         <div className="grid md:grid-cols-3 gap-8">
           <div className="text-center">
             <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl">1</span>
             </div>
             <h3 className="text-xl font-semibold mb-2">Personal Matching</h3>
             <p className="text-gray-600">
               We personally review each project and helper to ensure the best fit - no fancy AI.
             </p>
           </div>
           <div className="text-center">
             <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl">2</span>
             </div>
             <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
             <p className="text-gray-600">
               All helpers and clients are from Hong Kong, making communication and meetups easier.
             </p>
           </div>
           <div className="text-center">
             <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl">3</span>
             </div>
             <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
             <p className="text-gray-600">
               We verify all parties and ensure fair treatment for both helpers and project owners.
             </p>
           </div>
         </div>
       </div>
     </div>
    )
}   