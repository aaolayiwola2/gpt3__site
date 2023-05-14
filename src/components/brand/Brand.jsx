// eslint-disable-next-line no-unused-vars
import React from "react";
import './Brand.css';
import { google, atlassian, dropbox, shopify, slack } from './imports.js';

const Brand = () => {
    return (
        <div className="section__padding flex flex-1 flex-wrap justify-center items-center">
            <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex items-center justify-center"><img src={google} alt="google" /></div>
            <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex items-center justify-center"><img src={atlassian} alt=""/></div>
            <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex items-center justify-center"><img src={shopify} alt="" /></div>
            <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex items-center justify-center"><img src={slack} alt="" /></div>
            <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex items-center justify-center"><img src={dropbox} alt="" /></div>
        </div>
    )

}

export default Brand;