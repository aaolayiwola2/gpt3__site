/* eslint-disable no-unused-vars */
import React from "react";
import './article.css';

const Article = ({ imgUrl, date, text }) => (

    <div className="w-full h-full flex flex-col bg-[--color-footer]">
        <div className="w-full h-full flex flex-col bg-[--color-bg] ">
            <img src={imgUrl} alt="blog" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between py-4 px-6 h-full">
            <div>
                <p className="font-family text-[11.65px] font-[700] leading-[35px] text-white">{date}</p>
                <h3 className="font-family text-[25.11px] font-heavy leading-[30.30px] text-white mb-20 cursor-pointer sm:text-[18px] sm:leading-relaxed">{text}</h3>
            </div>
            <p className="cursor-pointer font-family text-[11.65px] font-[700] leading-[35px] text-white">Read Full Article</p>

        </div>
    </div>
);

export default Article;