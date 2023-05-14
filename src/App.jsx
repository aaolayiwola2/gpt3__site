/* eslint-disable no-unused-vars */
import { CTA, Brand, Navbar } from './components/main'
import { Blog, Features, Footer, Header, WhatGPT3, Possibility } from './container/main'
import './App.css'
import './index.css'
import React from 'react'

const App = () =>{
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
