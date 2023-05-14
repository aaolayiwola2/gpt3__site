/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Features.css';

const Feature = ({title, text}) => {
    return (
        <div className="w-full flex justify-between items-start flex-row m-4 sm:my-4 sm:mx-0">
            <div className= "flex-1 max-w-[180px] mr-8">
                <div className="gradient-bar" />
                <h1 className="font-family font-heavy text-[18px] leading-relaxed tracking-[-0.04em] text-white sm:text-m sm:leading-[22px]">{title}</h1>
            </div>
            <div className="flex-2 max-w-[390px] flex"><p className="font-family font-bold text-[14px] leading-relaxed text-[--color-text] sm:text-xs sm:leading-[20px]">{text}</p>
            </div>
        </div>
    );
}

export default Feature;