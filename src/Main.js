import React, { Component } from 'react'
import meerkats from './images/meerkats.jpeg'

export default class Main extends Component {

    state = {
        imgNumber: 0,
        imgArray: ["https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg",
                    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F80b8c7d4-ac66-11e8-8404-0bee60a6f70d.jpg?crop=2000%2C1333%2C0%2C40",
                    "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424"]
    }

    handleClick = () => {
        // 1. increminet img number 
        // 2. unless its two then we reset to 0
        // console.log(("yo"))
        let newNumber = this.state.imgNumber + 1
        if (newNumber > 2){
            newNumber = 0
        }
        this.setState({imgNumber: newNumber})
    }
    render() {
        return (
            <div>
                <img id="image" src={this.state.imgArray[this.state.imgNumber]} alt="meerkats" onClick={this.handleClick}/>
            </div>
        )
    }
}
