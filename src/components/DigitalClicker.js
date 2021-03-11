import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    changeTimes = () => {
        const newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    }

    render() {
        return(
            <button onClick={this.changeTimes}>{this.state.timesClicked}</button>
        )
    }
} 
