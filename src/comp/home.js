import React, { Component,useEffect } from 'react'
import Rellax from "rellax"
import Icon from "../icons"


let rellax=new Rellax(".rellax")
export default class Home extends Component {
    componentDidMount() {
       let rellax=new Rellax(".rellax",{wrapper:"#content"})
    }
    render() {
        return (
            <div id="#" className="Home">
                <div className="iconDiv">
                    <div svgf="charcoal" style={{top:"60px",left:"150px",opacity:".5"}} data-rellax-speed="-5" className="rellax">
                        <Icon  style={{width:"50px"}} ico="paintBrush"></Icon>
                    </div>
                    <div svgf="persian-green" style={{top:"30vh",left:"50px",opacity:".8"}} data-rellax-speed="8" className="rellax">
                        <Icon  style={{width:"40px"}} ico="brush"></Icon>
                    </div>
                    <div svgf="orange-yellow-crayola" style={{top:"40vh",left:"50%",opacity:".8"}} data-rellax-speed="4" className="rellax">
                        <Icon  style={{width:"40px"}} ico="doc"></Icon>
                    </div>
                    <div svgf="charcoal" style={{top:"150px",left:"20%",opacity:".8"}} data-rellax-speed="5" className="rellax">
                        <Icon  style={{width:"40px"}} ico="plain"></Icon>
                    </div>
                    <div svgf="orange-yellow-crayola" style={{top:"20vh",left:"50px",opacity:".8"}} data-rellax-speed="-3" className="rellax">
                        <Icon  style={{width:"40px"}} ico="book"></Icon>
                    </div>
                    <div svgf="persian-green" style={{top:"40vh",left:"20%",opacity:".8"}} data-rellax-speed="-2" className="rellax">
                        <Icon  style={{width:"40px"}} ico="comp"></Icon>
                    </div>
                    <div svgf="charcoal" style={{top:"30vh",left:"90%",opacity:".8"}} data-rellax-speed="-1" className="rellax">
                        <Icon  style={{width:"40px"}} ico="cardBoard"></Icon>
                    </div>
                    <div svgf="orange-yellow-crayola" style={{top:"25vh",left:"80%",opacity:".8"}} data-rellax-speed="4" className="rellax">
                        <Icon  style={{width:"40px"}} ico="sound"></Icon>
                    </div>
                    <div svgf="persian-green" style={{top:"45vh",left:"70%",opacity:".8"}} data-rellax-speed="2" className="rellax">
                        <Icon  style={{width:"40px"}} ico="mic"></Icon>
                    </div>
                    <div svgf="charcoal" style={{top:"15vh",left:"60%",opacity:".8"}} data-rellax-speed="3" className="rellax">
                        <Icon  style={{width:"40px"}} ico="compass"></Icon>
                    </div>
                </div>
                <div>
                    
                </div>
                <div  data-rellax-speed="-8" className="_cont rellax">
                    <div className="__head">
                        RAIHAN<br></br> HOUSING
                    </div>
                    <div>
                        Manhaj 11th batch union housing
                    </div>
                    <div>
                        <a href="#Result"><button>
                            <i>
                                <Icon style={{width:"20px",marginRight:"10px",display:"inline-block"}} ico="paintBrush"></Icon>
                            </i>
                            <span style={{textTransform:"uppercase"}}>
                                show Results
                            </span>
                        </button></a>
                    </div>
                </div>
            </div>
        )
    }
}
