// eslint-disable-next-line no-unused-vars
import React from "react";
import './WhatGPT3.css';
import { Feature } from "../../components/main.jsx";

const WhatGPT3 = () => (
    <div className="gpt3__whatgpt3 section__margin flex flex-col p-8 bg-[--color-footer]" id="#gpt3" >
        <div className="flex child:m-0 nth-child-2:max-w-[700px] xm:nth-child-2:flex-col">
            <Feature title="What is GPT-3" text= "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>

        <div className = "flex flex-row justify-between items-center mt-16 mx-0 mb-8 bg:flex-col bg:items-start bg:mb-0 ">
            <h1 className="gradient__text text-[34px] leading-[45px] font-heavy font-family max-w-[510px] xm:text-[28px] xm:leading-[40px]">The possibilities are beyond imagination</h1>
            <p className = "font-family text-bold text-sm leading-[30px] text-[--color-subtext] cursor-pointer bg:mt-4">Explore The Library</p>
        </div>

        <div className="flex flex-wrap flex-row mt-8 child:flex-1 child:m-4 child:min-w-[210px] child:display-[unset] child:flex-col nth-child-2:mt-2 xm:child:flex-col xm:nth-child-2:mt-2 tn:child:my-4 tn:child:mx-0 tn:child:min-w-full">
            <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
            <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div>
    </div>
)

export default WhatGPT3;