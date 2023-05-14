/* eslint-disable no-unused-vars */
import React from "react";
import './Header.css';
// @ts-ignore
import people from '../../assets/people.png';
// @ts-ignore
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        /* Header container */
        <div className="section__padding flex flex-row lg:flex-col" id="home">
            {/* Content cotainer */}
            <div className="flex flex-1 flex-col justify-center items-start mr-20 lg:mt-0 lg:mx-0 lg:mb-12">

                 {/* Text */}
                <h1 className="gradient__text font-family font-heavy text-[62px] leading-x-loose tracking-[-0.04em] xm:text-lg xm:leading-loose xs:text-bg xs:leading-medium ">
                    Let&apos;s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p className="font-family font-bold leading-[28px] tracking-[-0.04em] text-[--color-text] text-white mt-6 xm:text-sm xm:leading-relaxed xs:text-[14px] xs:leading-relaxed">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alterati on boisterous the attachment. Party we years to order allow asked of.</p>
                
                {/* Email */}
                <div className ="flex flex-row w-[100%] my-8 mr-0 ml-4">
                    <input className="flex-2 w-[100%] min-h-[50px] font-bold text-white text-md leading-[28px] border-solid bg-[var(--color-footer)] py-0 px-4 outline-none rounded-tl-md rounded-bl-md xm:text-sm xm:leading-relaxed xs:text-xs xs:leading-relaxed" type="email" placeholder="Your Email" />
                    <button className="flex-0.6 w-[100%] min-h-[50px] font-bold text-white text-md leading-[28px] bg-[--color-style] border-style py-0 px-4 outline-none rounded-tl-md rounded-bl-md xm:text-sm xm:leading-relaxed xs:text-xs xs:leading-relaxed" type="button">Get Started</button>
                </div>

                {/* People */}

                <div className = "flex w-full justify-start items-center flex-row mt-8 xm:flex-col" >
                    <img className= "w-[181.79px] h-[38px]" src={people} alt="People"/>
                     
                    <p className= "my-0 ml-4 mr-0 font-family text-xs font-bold text-white text-center leading-[38px] xm:m-0">1,600 people requested access a visit in last 24 hours</p>
                </div>


            </div>
                {/* AI Image */}
                <div className="flex flex-1 justify-center items-center" >
                    <img className="w-full h-full" src={ai} alt="ai" />
                </div>
        </div>
    )

} 

export default Header;