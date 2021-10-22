import React from 'react';
import Cart1 from "./Fvdata/components/Cart1";
import data from "./Fvdata/data.json";
import Pay from './Fvdata/Pay';

export default class Payment extends React.Component {

    constructor(){
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem("cartItems") 
                ? JSON.parse(localStorage.getItem("cartItems"))
                :[],
            // cartItems:[],
            type:"",
        };
    }
    removeFromCart=(product)=>{
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter(x=>x.id !== product.id),
        });
        localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x.id !==product.id)));
    }

    clearCart=()=>{
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter(cartItems)
        })
    }

    addToCart=(product)=>{
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item =>{
            if(item.id === product.id){
                item.count++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cartItems.push({...product, count: 1})
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    };

    render(){
        
    return (
        <>
            <div style={{ background: " rgb(247, 253, 250)" }}>
                    <div style={{ marginTop:'10%' }}>

                    <div className="row no-gutters">

{/*left-side */}

    <div className="col-md-6 no-gutters" 
            style={{height:"100vh"}}>
        <div className='left'>

                {/* for address-----card1 */}
        
        <div className="address" 
                style={{backgroundColor:"white",
                        boxShadow:"-1px 1px 2px 2px rgba(0,0,0,0.3)",
                        width:"70%",
                        height:"220px",
                        marginLeft:"25%",
                        border:"5px"    
                            }}>
            <h5 style={{margin:"10px"}}>Add deliver address</h5>
            <p style={{margin:"10px",color:"skyblue"}}>Choose your delivery address</p>
            <p style={{width:"200px",
                        backgroundColor:"white",
                        border:"1px solid gray",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        margin:"15px",
                        height:"65px",
                        color:"green",
                        fontWeight:"bold"
                        }}>+Add new address</p>
        </div>
        
        {/* for address-----card1 */}
        
        {/*for payment-----card2 */}
        
        <div className="payment"
                style={{backgroundColor:"white",
                        boxShadow:"-1px 1px 2px 2px rgba(0,0,0,0.3)",
                        width:"70%",
                        height:"100px",
                        marginTop:"35px",
                        marginLeft:"25%"}}>
            <h5 style={{fontSize:"18px"}}>Select payment method</h5>
            <p style={{fontSize:"15px"}}>select your payment method</p>
            {/* <button className="btn btn-success" 
                        style={{width:"100px",
                                fontSize:"10px",
                                textAlign:"center",
                                marginLeft:"30%",
                                float:"left"
                                    }}
                                >Razor Pay</button> */}
                                <Pay/>
            {/* <p style={{float:"right",marginRight:"40px"}}></p> */}
        </div>

        {/*for payment-----card2 */}

        </div>
    </div>

{/*right-side */}

    <div className="col-md-6 no-gutters" 
            style={{height:"100vh"}}>
        <div className='right'>

        {/*for cart items------card3 */}

        <div className="" style={{backgroundColor:"white",
                        boxShadow:"-1px 1px 2px 2px rgba(0,0,0,0.3)",
                        width:"55%",
                        height:"200px",
                        marginTop:"none",
                        marginLeft:"20%"}}>
        <Cart1 cartItems={this.state.cartItems}
                            addToCart={this.addToCart} 
                            removeFromCart={this.removeFromCart}
                                clearCart={this.clearCart}
                            />
        </div>
        
        {/* for cart items------card3*/}

        </div>
    </div>

</div>

                    </div>
                </div>
                
        </>
    )
}
}