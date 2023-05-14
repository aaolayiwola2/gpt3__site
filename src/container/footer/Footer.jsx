/* eslint-disable no-unused-vars */
// @ts-ignore
import React from "react";
import './Footer.css';
// @ts-ignore
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
    <div className="section__padding flex flex-col justify-center items-center bg-[--color-footer]">
        <div className="w-full text-center mb-12">
            <h1 className="gradient__text font-family font-heavy text-xl leading-x-loose">
                Do you want to step in to the future before others
            </h1>
        </div>
        <div className="flex justify-center items-center p-4 border-solid border border-white text-center mb-40 cursor-pointer">
            <p className="font-family text-[18px] leading-relaxed text-white tracking-[2px]">
            Request Early Access
            </p>
        </div>
        <div className="flex flex-row justify-between items-start flex-wrap w-full text-left ">
            <div className="w-[250px]w-[250px] m-4 flex flex-col">
                <img src= {gpt3Logo} alt="gpt3" className="w-[118px] h-[30px] mb-4" />
                <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
                </p>
            </div>

                <div className="flex flex-col justify-start m-4 w-[250px]">
                    <h4 className="text-sm leading-[17px] font-family text-white mb-[0.9rem]">Links</h4>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Overons</p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Social Media</p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Counters</p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Contact</p>
                </div>
                <div className="flex flex-col justify-start m-4 w-[250px]">
                    <h4 className="text-sm leading-[17px] font-family text-white mb-[0.9rem]">Company</h4>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white"> Terms & Conditions </p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Privacy Policy</p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Contact</p>
                </div>
                <div className="flex flex-col justify-start m-4 w-[250px]">
                    <h4 className="text-sm leading-[17px] font-family text-white mb-[0.9rem]">Get in touch</h4>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">Crechterwoord K12 182 DK Alknjkcb</p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">085-132567</p>
                    <p className="my-[0.5rem] mx-0 text-xs leading-[15px] font-family text-white">info@payme.net</p>
                </div>
            </div>

            <div className="mt-8 text-center leading-[15px] text-white ">
                <p className="font=family text-xs leading-[15px] text-white">@2021 GPT-3. All rights reserved.</p>
            </div>
    </div>
)


export default Footer ; 