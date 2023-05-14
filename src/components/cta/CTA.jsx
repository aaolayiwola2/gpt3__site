// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from "react";
import './CTA.css';

const CTA = () => {
return (
    <div className="flex flex-row justify-between items-center p-8 bg-gradient-custom from-[#AE67FA] from[1.84%] to-[#F49867] to-[102.67%] m-16 rounded-[1rem] xm:flex-col xs:flex-col xs:mx-8 xs:my-16">
        <div className="flex flex-col text-left text-white">
            <p className="font-family text-xs leading-[30px] font-bold">Request Early Access</p>
            <h3 className="font-family text-white leading-medium font-heavy mt-4 text-[24px] xs:text-[18px] xs:leading-[32px]">Register Today & start exploring the possibilities</h3>
        </div>
        <div className="flex justify-center items-center m-8 xm:mt-8 xm:mx-0 xm:mb-0">
            <button type="button" className="bg-black text-white font-family rounded-[2rem] font-[700] leading-[30px] text-[18px] py-2 px-4 min-w-[150px] cursor-pointer xs:text-[14px] xs:leading-[28px]">
                Get Started
            </button>
        </div>   
  </div>
 
)

}

export default CTA;