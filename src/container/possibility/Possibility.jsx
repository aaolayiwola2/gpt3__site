/* eslint-disable no-unused-vars */
import React from "react";
import './Possibility.css';
// @ts-ignore
import possibility from '../../assets/possibility.png'
const Possibility = () => {
return (
    // @ts-ignore
    <div className="flex flex-row section__padding cl:flex-col" id="possibility">
        <div className="flex-1 flex justify-start items-center mr-8 cl:my-4 cl:mx-0">
            <img src={possibility} alt="possibility" className="w-full h-full cl:w-[unset] cl:h-[unset] md:w-full md:h-full" />
        </div>
        <div className="flex-1 flex justify-end items-start flex-col cl:mt-8">
            <h4 className=" font-family text-bold text-sm leading-[30px] text-[#71E5FF] ">Request Early Access to Get Started</h4>
            <h1 className="gradient__text font-family text-heavy text-[34px] leading-[45px] my-4 mx-0 ">
                The possibilities are <br /> beyond your imagination         
            </h1>
            <p className="text-[--color-text] font-family text-x-bold text-sm leading-[30px] mb-8">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <h4 className="text-[--color-subtext]">Request Early Access to Get Started</h4>
        </div>
    </div>
)

}

export default Possibility;