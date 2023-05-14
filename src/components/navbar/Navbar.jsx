// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => {
    return (
        <>

            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4"><a href="#home">Home</a></p>
            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4"><a href="#gpt3">What Is GPT?</a></p>
            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4"><a href="#possibility">Open AI</a></p>
            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4"><a href="#features">Case Studies</a></p>
            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4"><a href="#blog">Library</a></p>
        </>

    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        /* Main Navbar container */
        <div className="flex justify-between items-center px-8 py-24 md:py-8 md:px-16 sm:p-8">

            {/* Navabar Items container */}
            <div className="flex flex-1 justify-start items-center">

                {/* Image container */}
                <div className="mr-8 ">
                    <img className="w-[62.56px] h-[16.02px]" src={logo} alt="logo" />
                </div>

                {/* Links container */}
                <div className=" lg:hidden flex flex-row ">
                    <Menu />
                </div>
            </div>
            {/* End of Navbar Items container */}

            {/*  Sign Up */}
            <div className="flex justify-end items-center sm:hidden">
                <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4">Sign In</p>
                <button className="py-2 px-4 text-white font-family text-bold text-[18px] leading-6 border-0 outline-0 cursor-pointer rounded-md bg-[#FF4820] " type="button">Sign Up</button>
            </div>

            {/* Menu Page */}
            <div className="hidden ml-4 relative lg:flex">

                {toggleMenu ? <RiCloseLine className="cursor-pointer" color="#fff" size={27} onClick={() => setToggleMenu(false)}> </RiCloseLine>
                    : <RiMenu3Line className="cursor-pointer" color="#fff" size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
                }
                {toggleMenu && (
                    <div className="flex justify-end items-end flex-col text-end bg-[--color-footer] p-8 absolute right-0 top-10 sm:top-5 mt-4 min-w-[210px] rounded-md shadow-[0_0_5px_rgba(0,0,0,0.2)] animate-scale-up-center ">
                        <div className="">
                            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-0"><a href="#home">Home</a></p>
                            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-0"><a href="#gpt3">What Is GPT?</a></p>
                            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-0"><a href="#possibility">Open AI</a></p>
                            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-0"><a href="#features">Case Studies</a></p>
                            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-0"><a href="#blog">Library</a></p>
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-white font-family font-[500] text-[18px] capitalize my-4 mx-4">Sign In</p>
                            <button className="py-2 px-4 text-white font-family font-bold text-[18px] leading-6 border-0 outline-0 cursor-pointer rounded-md bg-[#FF4820] " type="button">Sign Up</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar;