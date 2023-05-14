/* eslint-disable no-unused-vars */
import React from "react";
import Article from '../../components/articles/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => {
return (
      <div className="flex flex-col section__padding" id="blog">
        <div className="w-full text-left mb-20">
            <h1 className="gradient__text text-[62px] leading-x-loose font-family font-heavy">A lot is happening,<br/>We are blogging about it.</h1>
        </div>
        <div className="flex flex-row">
            <div className="flex-[0.75] mr-8">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
           </div>
      
            <div className="flex-1 grid grid-cols-2 gap-8">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
        </div>
      </div>
)

}

export default Blog;