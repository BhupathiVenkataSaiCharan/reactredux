import React, { Component } from 'react'
import Final from "./Final";

export default class FinalCart extends Component {
    constructor(props){
        super(props);
        this.state=({
            cartItems: localStorage.getItem("cartItems") 
                ? JSON.parse(localStorage.getItem("cartItems"))
                :[]
        })
    }
    render() {
        return (
            <div>
                <p>order has been placed successfully</p>
                    <p><Final cartItems={this.state.cartItems}/> </p>
                    
            </div>
        )
    }
}
