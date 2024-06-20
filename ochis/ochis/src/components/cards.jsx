import React from 'react'

function Cards() {
  return (
    <div className='py-20 w-full h-screen bg-zinc-100 px-10 flex gap-5 '>
        <div className='cardcontainer h-[50vh] w-1/2 '>
            <div className='card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 border-[#CFEC6E] text-[#CFCE6e] left-10 bottom-10 '>&copy;2019-2020</button>
            </div>
        </div>
        <div className='cardcontainer relative w-1/2 h-[50vh] flex gap-5'>
        <div className='card relative  flex items-center justify-center rounded-lg w-full h-full bg-[#192826]'>
               <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
               <button className='absolute px-5 py-1 rounded-full border-2 border-[#CFEC6E] text-zinc-100 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative  flex items-center justify-center rounded-lg w-full h-full bg-[#192826]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 border-[#CFEC6E] text-zinc-100 left-10 bottom-10'>BUSINESSBOTCAMP ALUMINI</button>
        </div>
        </div>
      
    </div>
  )
}

export default Cards
