// import React from 'react'


// function LandingPage() {
//   return (
//     <div className='w-full h-screen pt-1'>
//         <div className='textstructure mt-52 px-20'>
//             <div className='masker'>
//                 <h1 className='text-7xl uppercase font-semibold leading-[5.5vw]'> <span >We Create </span></h1>
//             </div>
//             <div className='masker'>
//                 <h1 className='text-7xl uppercase font-semibold leading-[5.5vw]'>Eye Opening</h1>
//             </div>
//             <div className='masker'>
//                 <h1 className='text-7xl uppercase font-semibold leading-[5.5vw]'>Presentations</h1>
//             </div>
//         </div>
//         <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
//             {["For public and private companies", "From the first pitch of IPO"].map((item,index)=>(
//                 <p className='text-md '>{item}</p>
//             ))}
//             <div className='start'>
//                 <div className='px-4 py-2 border-[1px] border-zinc-700 rounded-full'> start the project</div>

//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default LandingPage
import {motion} from "framer-motion"
function LandingPage() {    
    return (
        <div  >
        <div className='bg-gray-100' >
            
            <div className="px-8 py-[130px]">
                
                {["We Create"].map((item, index) => (
                    <div key={index} >
                        
                        <a className={'uppercase text-black  mt-16 font-black font-["FoundersGrotesk-Semibold"]  text-[6.5vw]  leading-[6vw] tracking-tighter'}>{item}</a>
                        
                    </div>
                ))}
                {["EYe Opening"].map((item, index) => (
                    <div key={index} style={{display:"flex"}} >
                        <motion.div initial={{width:0}} animate={{width:"12vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}}>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className="w-40 rounded "></img>
                        </motion.div>
                        <a className={'uppercase text-black   font-black font-["FoundersGrotesk-Semibold"]   text-[6.5vw] leading-[6vw] tracking-tighter'}>{item}</a>
                    </div>
                ))}
                {["Presentations"].map((item, index) => (
                    <div key={index} >
                        
                        <a className={'uppercase text-black  mt-16 font-black font-["FoundersGrotesk-Semibold"]  text-[6.5vw]  leading-[6vw] tracking-tighter'}>{item}</a>
                        
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <div className="border-t-[1px] border-zinc-800 mt-2 flex justify-between items-center px-20 py-5 " >
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                        <div key={index}>
                            <p className="text-md text-black tracking-tight leading-none">{item}</p>
                        </div>
                    ))}
                    <div className="start flex items-center gap-2 ">
                        <div className="px-5 py-2 border-[1px] boder-zinc-500 rounded-full">start the project</div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-zinc-400 ">
                            <span className="rotate-[45deg]  ">
                            </span>
                            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#1a1c1e",}} /> */}
                            <i className="btn_icon btn_icon--append icon-arrow-right-up "></i>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
        
    )
}
export default LandingPage
