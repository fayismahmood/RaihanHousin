import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <a href="#"><div className="Btns">Home</div></a>
                <a href="#AboutUs"><div className="Btns">AboutUs</div></a>
                <a href="#Results"><div className="Btns">Result</div></a>
            </div>
        )
    }
}
