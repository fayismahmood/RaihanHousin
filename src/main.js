import React from "react"
import reactdom from "react-dom"
import "./main.scss"

import Header from "./comp/header"
import Home from "./comp/home"
import AboutUs from "./comp/AboutUs"
import Results from './comp/Results'

function Main(){
    return(
        <div id="content">
            <Header/>
            <Home/>
            <AboutUs/>
            <Results/>
        </div>
    )
}


reactdom.render(<Main/>,document.querySelector(".cont"))

