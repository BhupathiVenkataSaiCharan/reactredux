import React, { Component } from 'react'
import Scrollbars from 'react-custom-scrollbars';
// import Modal from 'react-modal';
// import {Link} from "react-router-dom";

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { 
            number:"",
            address:"",
            showCheckout:false,
        };
    }

    createOrder=(e)=>{
        e.preventDefault();
        const order = {
            cartItems:this.props.cartItems,
            // total:this.props.total.reduce((a,c)=>a+c.price * c.count, 0),
        };
        this.props.createOrder(order);
    }

    // closeModal=()=>{
    //     this.props.clearOrder();
    // }

    render() {
        const {cartItems} = this.props;
                return (
            <>
            <div style={{paddingTop:"none"}}>
                {cartItems.length ===0?(<div>Cart is empty</div>
                ):(
                <div>you have {cartItems.length} in the cart</div>
                )}

                {/* {
                    order && <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <button className="btn-close" onClick={this.closeModal}>x</button>
                        <div>
                            <h3>your order is placed</h3>
                            <h2>order {order.id} </h2>
                        </div>
                        <div>
                            Ordered Items:
                        </div>
                        <div>
                            {order.cartItems.map((item)=>(
                                <div>
                                    {item.count} {" x "} {item.name}
                                </div>
                            ))}
                        </div>
                    </Modal>
                } */}
            </div>
            <div>
                <div>
                    <Scrollbars style={{width:"270px",height:"200px"}}>
                    <ul>
                        {cartItems.map(item=>(
                            <li key={item.id} style={{textAlign:"center"}}>
                                <div>
                                    <img src={item.image} alt={item.name} width="30px"></img>
                                </div>
                                <div>{item.name}</div>
                                Rs.{item.price} x 
                                <button 
                                    className="btn btn-light"
                                    style={{width:"30px",fontSize:"10px",color:"green",
                                                        border:"1px solid green"}}
                                    onClick={()=>this.props.addToCart(item)}>+</button>
                                    {item.count}
                                <button 
                                    className="btn btn-light"
                                    style={{width:"30px",fontSize:"10px",color:"green",
                                                        border:"1px solid green"}}
                                    onClick={()=>this.props.removeFromCart(item)}>-</button>
                                    <button 
                                    className="btn btn-light"
                                    style={{width:"70px",fontSize:"10px",color:"green",
                                                        border:"1px solid green",marginLeft:"5px"}}
                                    onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    </Scrollbars>
                </div>
                {cartItems.length!==0 &&(
                    <div>
                    <div>
                    <div style={{textAlign:"center"}}>
                        <div >
                            Total: Rs.{cartItems.reduce((a,c)=>a+c.price * c.count, 0)}
                        </div>
                        {/* <Link to="/payment"> */}
                        <button className="btn btn-primary"
                            style={{width:"105px",fontSize:"8.5px"}}>Proceed to Checkout</button>
                        {/* </Link> */}
                    </div>
                    </div>
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
               
                </div>
                )}
                
            </div>
            </>
        )
    }
}
