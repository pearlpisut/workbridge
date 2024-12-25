import { bitter, dmSans, outfit, sourceSerif4 } from '@/components/ui/font'

export default function Hero() {
    return (
      <div className="relative bg-white" id="hero">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="hero-sub">
         <div className="text-center">
           <h1 className={`${bitter.className} text-4xl text-emerald-700 sm:text-5xl md:text-6xl font-bold`}>HelpPool</h1>
           <h1 className={`${bitter.className} mt-5 text-2xl tracking-tight text-stone-800 sm:text-3xl md:text-4xl`}>
             <span className="block font-bold">We match aspiring helpers - paid projects</span>
           </h1>
           <p className={`${dmSans.className} mt-3 max-w-md mx-auto text-base text-stone-600 sm:text-lg md:mt-5 md:text-lg md:max-w-3xl`}>
             Connecting Hong Kong's talents with local projects.<br /> 
             From students to professionals, tiny to big projects - we'll help you find each other'.
           </p>
         </div>
       </div>
     </div>
      // <div className="text-center">
      //   <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      //     <span className="block">Match aspiring helpers</span>
      //     <span className="block text-emerald-600">to paid projects</span>
      //   </h1>
      //   <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      //     Connect with top freelancers or find your next project. Fast, reliable, and secure.
      //   </p>
      //   <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      //     <div className="rounded-md shadow">
      //       <a
      //         href="/freelancer"
      //         className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
      //       >
      //         I am a Helper
      //       </a>
      //     </div>
      //     <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
      //       <a
      //         href="/client"
      //         className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
      //       >
      //         I need Help
      //       </a>
      //     </div>
      //   </div>
      // </div>
    )
}
