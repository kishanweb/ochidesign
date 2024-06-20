import { motion } from "framer-motion";
import React from "react";

function Featured() {
 
  return (
    <div className="w-full py-20">
      <div className="w-full border-b-[1px] border-zinc-700 pb-20 px-20 ">
        <h1 className="text-7xl tracking-tight ">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative rounded-lg w-1/2 h-[80vh] ">
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] -pb-20 leading-none tracking-tighter font-semibold text-7xl">
              {/* FYDE */}
            </h1>
            {"FYDE".split("").map((item, index) => (
              <span>{item}</span>
            ))}
            <div className="w-full h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover rounded-xl hover:scale-90 ease-linear duration-700"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className=" flex gap-2 mt-3">
              <button class="relative py-1 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                AUDIT
              </button>
              <button class="relative py-2  text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                COPYWRITING
              </button>
              <button class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                SALES DECK
              </button>
              <button class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                SLIDES DESIGN
              </button>
            </div>
          </div>
          <div className="cardcontainer relative rounded-lg w-1/2 h-[80vh]">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] -pb-20 leading-none tracking-tighter font-semibold text-7xl">
              VISE
            </h1>
            {"VISE".split("").map((item, index) => (
              <span>{item}</span>
            ))}

            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl hover:scale-90 ease-linear duration-700"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-3 mt-3">
              <button class="relative py-2 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                AGENCY
              </button>
              <button class="relative py-1 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                COMPANY PRESENTATIONS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 py-32">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative rounded-lg w-1/2 h-[80vh] ">
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] -pb-20 leading-none tracking-tighter font-semibold text-7xl">
              {/* TRAWA */}
            </h1>
            {"TRAWA".split("").map((item, index) => (
              <span>{item}</span>
            ))}
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl hover:scale-90 ease-linear duration-700"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-2 mt-3">
              <button class="relative py-2 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                BRAND IDENTITY
              </button>
              <button class="relative py-2 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                DESIGN REASEARCH
              </button>
              <button class="relative py-2 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                INVESTOR DECK
              </button>
            </div>
          </div>
          <div className="cardcontainer relative rounded-lg w-1/2 h-[80vh]">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] -pb-20 leading-none tracking-tighter font-semibold text-7xl">
              PREMIUM BLEND
            </h1>
            {"PREMIUM BLEND".split("").map((item, index) => (
              <span>{item}</span>
            ))}

            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl hover:scale-90 ease-linear duration-700"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="flex gap-2 mt-3">
              <button class="relative py-2 px-6 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                BRANDED TEMPLATE
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className="py-20 flex justify-center items-center">
          <button class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
 
  VIEW ALL CASE STUDIES
</button>
          </div>
    </div>
  );
}

export default Featured;
