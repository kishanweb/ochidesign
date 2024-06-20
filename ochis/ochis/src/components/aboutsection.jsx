import React from "react";

function Aboutsection() {
  return (
    <div className="w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-5xl leading-[4.2vw] tracking-tighter">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex border-t-[1px] border-[#a1b562]">
        <p className="w-1/2 py-10">What you can expect:</p>
        <p className="w-1/2 py-10 flex ">
          <p className="w-1/2">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether its live or digital,
            delivered for one or a hundred people. <br /> <br />
            <span className="w-1/2 ">
              We believe the mix of strategy and design with a bit of coffee is
              what makes your message clear, convincing, and captivating.
            </span>
          </p>
          <p className="w-1/2 py-20 px-40 ">
            S: <br />
            <br />
            Instagram <br />
            Behance <br />
            Facebook <br />
            Linkedin
          </p>
        </p>
      </div>
      <div className="w-full py-10 flex border-t-[1px] border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-5xl">Our approach:</h1>
        <button className="rounded-full flex gap-5 items-center py-2 px-5 bg-zinc-900 text-white mt-10">Read More
        <div className="w-1 h-1 rounded-full bg-white"></div>
        </button></div>
        <div className="w-1/2 h-[60vh]  " >
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className="rounded-xl"/>

        </div>

      </div>

    </div>
  );
}

export default Aboutsection;
