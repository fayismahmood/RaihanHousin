import React, { Component,createRef } from 'react'
import {motion,useViewportScroll} from 'framer-motion'

export default class AboutUs extends Component {
    constructor(){
        super()
        this._dom=createRef()
        this.state={
            active:false
        }
    }
    componentDidMount(){
        let obs=new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                    this.setState({active:false})
                    console.log(entry.isIntersecting);
               if(entry.isIntersecting){
                    this.setState({active:true})
                    console.log(entry.isIntersecting);
                
            }
            })
            
        })
        obs.observe(this._dom.current)
    }
    render() {
        const img = {
            open: { opacity: 1, x:0,scale:1 },
            closed: { opacity: 0, x:"500px",scale:0},
          }
          const cont = {
            open: { opacity: 1, x:0,scale:1 },
            closed: { opacity: 0, x:"-500px",scale:0},
          }
        return (
            <div  ref={this._dom} id="AboutUs">
                <motion.div >
                   <motion.div transition={{ duration: 1}} variants={cont} initial="closed" animate={this.state.active?"open":"closed"} className="cont">
                        <div className="__icon"></div>
                        <h1>
                            AboutUs
                        </h1>
                        <p>
                            loremfasd dsgasdgdfagsdgdgsdag
                        </p>
                    </motion.div>
                    <motion.div transition={{ duration: 1}} variants={img} initial="closed" animate={this.state.active?"open":"closed"} className="sidePic"></motion.div>
                </motion.div>
            </div>
        )
    }
}





