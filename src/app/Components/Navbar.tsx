import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="2xl:w-[1440px] mx-auto bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className="text-[#3563e9] text-4xl font-bold">MORENT</h1>
        <div className="input relative w-full md:w-auto">
          <Image
            src={"/search-normal.png"}
            alt=""
            width={24}
            height={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
          />
          <input
            type="text"
            title="search"
            placeholder="Say something here"
            className="border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
          />
          <Image
            src={"/filter.png"}
            alt=""
            width={24}
            height={24}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div className="icons mt-4 md:mt-0 -[#C3D4E966] border: 1px solid flex items-center gap-[20px]">
        <Image src={"/heartO.png"} alt="" width={22} height={22} />
        <div className="h-10 w-10 border-solid 1 rounded-full flex-col justify-center" style={{border: 'solid 1px rgba(200,200,200,0.4)'}}>
        <Image src={"/Notif.jpg"} className="relative left-[28px]" alt="" width={7} height={7} />
        <Image src={"/notification.png"} className="relative top-0 left-[50%] translate-x-[-50%]" alt="" width={22} height={22} />
        </div>
        
        <Image src={"/heart-2.png"} alt="" width={22} height={22} />
        <Image src={"/heart-2.png"} alt="" width={22} height={22} />
      </div>
    </div>
  );
}
