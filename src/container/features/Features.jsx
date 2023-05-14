// eslint-disable-next-line no-unused-vars
import React from "react";
import './Features.css';
import Feature from '../../components/features/Features';


const Features = () => {
    // eslint-disable-next-line no-unused-vars
    const featuresData = [
        {
            title: 'Improving end distrusts instantly',
            text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
        },
        {
            title: 'Become the tended active',
            text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Message or am nothing',
            text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
        },
        {
            title: 'Really boy law county',
            text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
        },
    ];

return (
    <div className="w-full flex justify-between flex-row section__padding cl:flex-col" id="features">
        <div className= "flex-1 flex justify-start items-start flex-col text-left mr-20 cl:mt-0 cl:mx-0 cl:mb-4" >
            <h1 className="text-[34px] sm:text-[28px] leading-[45px] sm:leading-[38px] font-heavy font-family gradient__text">
                The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen</h1>
            <p className="text-[--color-subtext] font-sm leading-[30px] text-bold font-family mt-8"> Request Early Access to Get Started </p>
        </div>
        <div className="flex-[1.5] flex justify-start items-center flex-col">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key= {item.title+index} />
            ))}
        </div>
    </div>
)

}

export default Features;