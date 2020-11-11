import React, { Component } from 'react'

export default class resultBar extends Component {
    constructor(props){
        super(props)
        this.data=props.data
        this.state={data:null}

    }
    componentDidMount(){
        let data={...this.data.winner}
        fetch("./Pic", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(ew=>ew.json()).then(ew=>{
            //let data=JSON.parse(e)
        
            this.setState({data:ew},()=>{
               
            })
            
        });
    }
    render() {
        return (
            
            <div>
                {this.state.data&&
                    <>
                    <div className="ProgramName">{this.data.prog}</div>
                    <div>
                        <div className="_pic" style={{backgroundImage:`url(${this.state.data[0].img})`}}></div>
                        <div>
                            {this.state.data[0].name}
                        </div>
                        <div className="_grade">
                            {this.data.winner.f.grade}
                        </div>
                    </div>

                    <div>
                        <div className="_pic" style={{backgroundImage:`url(${this.state.data[1].img})`}}></div>
                        <div>
                            {this.state.data[1].name}
                        </div>
                        <div className="_grade">
                            {this.data.winner.s.grade}
                        </div>
                    </div>

                    <div>
                        <div className="_pic" style={{backgroundImage:`url(${this.state.data[2].img})`}}></div>
                        <div>
                            {this.state.data[2].name}
                        </div>
                        <div className="_grade">
                            {this.data.winner.t.grade}
                        </div>
                    </div>
                    {this.data.grades&&
                        <div>
                            {this.data.grades.map(e=>{
                                return(
                                    <div>
                                        <span>{e.adno}</span>
                                        <b>{e.grade}</b>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    
                    
                    
                    </>
                
                }
                
            </div>
        )
    }
}
