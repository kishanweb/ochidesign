import React from 'react'
import Marquee from 'react-fast-marquee'
function Marq() {
  return (
  
    <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <Marquee speed={200}>
        <div className='flex gap-2 font-semibold border-t-2 border-b-2 border-zinc -300 overflow-x-hidden uppercase pr-10 '>
          <h1 className='text-[15vw] text-white leading-none overflow-hidden '>We are ochi</h1>
          <h1 className='text-[15vw] text-white leading-none overflow-hidden'>We are ochi</h1>
        </div>
      </Marquee>
  
    </div>
  )
}

export default Marq;
