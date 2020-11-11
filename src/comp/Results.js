import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {EffectCoverflow} from 'swiper';
import ResBar from './resultBar'

import Rsvg from './svgSlid'

import 'swiper/swiper.scss';
SwiperCore.use([EffectCoverflow]);
export default class Results extends Component {
    constructor(){
        super()
        this.state={
            result:null
        }   
    }
    componentDidMount(){
        fetch("./api/results").then(e=>e.json())
        .then(e=>{
            this.setState({result:e})
        })
    }
    render() {
       
        let LatestWinners=this.state.result?this.state.result.slice(Math.max(this.state.result.length-5)):[];
        return (
            <div id="Results">
                <Swiper  className="Result_slide"
                spaceBetween={40}
                slidesPerView="auto"
                coverflowEffect= {
                   { rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,}
                  }
                effect="coverflow"
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        LatestWinners.map(e=>{
                            return(
                                <SwiperSlide><Rsvg prog={e.prog} winners={e.winner}/></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="FullResult">
                    <div className="__head">
                        <div>Program</div>
                        <div>First</div>
                        <div>Secound</div>
                        <div>Third</div>
                        <div>Grades</div>
                    </div>
                    <div className="ResCont">
                        {
                            this.state.result&&
                            <>
                            {this.state.result.map(e=>{
                                return(
                                    <ResBar data={e} />
                                )
                            })}
                            </>
                            
                        }
                    </div>
                </div>
            </div>
        )
    }
}
