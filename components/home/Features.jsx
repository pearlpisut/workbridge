export default function Features() {
 const features = [
   {
     title: "Find Work",
     description: "Browse through various projects and find the perfect match for your skills.",
     icon: (
       <path 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth={2} 
         d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
       />
     )
   },
   {
     title: "Hire Talent",
     description: "Connect with skilled freelancers ready to tackle your project needs.",
     icon: (
       <path 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth={2} 
         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
       />
     )
   },
   {
     title: "Secure Payments",
     description: "Safe and secure payment processing for all your transactions.",
     icon: (
       <path 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth={2} 
         d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
       />
     )
   }
 ]
  return (
   <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
     {features.map((feature, index) => (
       <div key={index} className="pt-6">
         <div className="flow-root bg-white rounded-lg px-6 pb-8">
           <div className="-mt-6">
             <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
               <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 {feature.icon}
               </svg>
             </div>
             <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
               {feature.title}
             </h3>
             <p className="mt-5 text-base text-gray-500">
               {feature.description}
             </p>
           </div>
         </div>
       </div>
     ))}
   </div>
 )
}
