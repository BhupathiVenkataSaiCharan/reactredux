import React, { Component } from 'react'

export default class Condition extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    Increment(){
        this.setState({
            count:this.state.count + 1
        });
    }
    Decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        
        if(this.state.count === 0){

            return (
                <div style={{textAlign:"center"}}>
                    <p>{this.state.count}</p>     
                    <button className="btn btn-primary" style={{width:"100px"}} onClick={()=>this.Increment()}>+</button>        
                </div>
       
        )
        }
        else{
            return(
                <div style={{textAlign:"center"}}>
                <p>Count is {this.state.count}</p>
                <button className="btn btn-primary" style={{width:"100px"}} onClick={()=>this.Decrement()}>-</button>
                <button className="btn btn-primary" style={{width:"100px"}} onClick={()=>this.Increment()}>+</button> 
            </div>
            )
            
        }
    }
}
