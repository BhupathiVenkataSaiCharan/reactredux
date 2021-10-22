import React, { Component } from 'react'
import Scrollbars from 'react-custom-scrollbars';
// import {Link} from "react-router-dom";

export default class Cart1 extends Component {
    constructor(props){
        super(props);
        this.state = { 
            number:"",
            address:"",
            showCheckout:false 
        };
    }

    render() {
        const {cartItems} = this.props;
                return (
            <>
            {/* <div>
                {cartItems.length ===0?(<div>Cart is empty</div>
                ):(
                <div style={{textAlign:"center"}}>you have {cartItems.length} in the cart</div>
                )}
            </div> */}
            <div>
                <div>
                    <Scrollbars style={{width:"300px",height:"200px"}}>
                    <ul style={{wordSpacing:"2px"}}>
                        {cartItems.map(item=>(
                            <li key={item.id} style={{paddingTop:"15px", 
                                                        textAlign:"center",
                                                        display:"flex",
                                                        flexDirection:"row",
                                                        padding:"10px"
                                        }}>
                                {/* <div>
                                    <img src={item.image} alt={item.name} width="30px"></img>
                                </div> */}
                                <p>your ordered items are {item.name} x {item.count}</p>
                                 
                                {/* <button 
                                    className="btn btn-light"
                                    style={{width:"30px",fontSize:"10px",color:"green",
                                                        border:"1px solid green"}}
                                    onClick={()=>this.props.addToCart(item)}>+</button>
                                    {item.count}
                                <button 
                                    className="btn btn-light"
                                    style={{width:"30px",fontSize:"10px",color:"green",
                                                        border:"1px solid green"}}
                                    onClick={()=>this.props.removeFromCart(item)}>-</button> */}
                                    {/* <button 
                                    className="btn btn-light"
                                    style={{width:"70px",fontSize:"10px",color:"green",
                                                        border:"1px solid green",marginLeft:"5px"}}
                                    onClick={()=>this.props.removeFromCart(item)}>Remove</button> */}
                                
                            </li>
                        ))}
                    </ul>
                    </Scrollbars>
                </div>
                {/* {cartItems.length!==0 &&( */}
                    {/* <div>
                    <div style={{textAlign:"center"}}>
                        <div >
                            Total: Rs.{cartItems.reduce((a,c)=>a+c.price * c.count, 0)}
                        </div>
                       
                    </div> */}
                {/* {this.state.showCheckout &&(
                    <div>
                    <form onSubmit={this.createOrder} 
                            style={{display:"flex",flexDirection:"column",
                                        alignItems:"center"}}>
                        <ul>
                            <li style={{textAlign:"center"}}>
                                <label style={{fontSize:"15px",textAlign:"center"}}>Mobile Number</label><br/>
                                <input type="number" required 
                                        onChange={this.handleInput} min="10"></input>
                            </li>
                            <li style={{textAlign:"center"}}>
                                <label style={{fontSize:"15px"}}>Delivery Address</label>
                                <input type="text" required 
                                        onChange={this.handleInput}></input>
                            </li>
                            <li style={{paddingTop:"10px",textAlign:"center"}}>
                                <button 
                                        className="btn btn-primary"
                                        type="submit"
                                        style={{width:"100px",fontSize:"10px"}}
                                        >Checkout</button>
                            </li>
                        </ul>
                    </form>
                </div>
                )} */}
               
                {/* </div>
                )} */}
                
            </div>
            </>
        )
    }
}
