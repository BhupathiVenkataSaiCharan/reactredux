import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';

export default class Products extends Component {
    constructor(props){
        super();
        this.state={
            showMe:false
        }
    }

    operation(){
        this.setState({
            showMe:!this.state.showMe
        })
    }

    render() {
        const {cartItems} = this.props;

        if(cartItems.length === 0){
        
            return (
                <div style={{paddingTop:"none",marginLeft:"10px"}}>
                <Scrollbars style={{width:"350px",height:"200px"}}>
                    <ul>
                        {this.props.products.map(product =>(
                            <li key={product.id} >
                                <div className="card bg-opacity-40" style={{
                                                alignItems:"center",padding:"5px 10px"}}>
                                    
                                        <img src={product.image} alt={product.name} width="30px" ></img>
                                        <p>{product.type}</p>
                                        
                                    <p>{product.name} Rs. {product.price}</p>
                                    <div>
                                        <div style={{textAlign:"center",display:"flex"}}>
                                            {/* Rs. {product.price} */}

                                                <div style={{textAlign:"center",display:"flex"}}>
                                                    {/* <button className="btn btn-light" 
                                                            onClick={()=>this.props.removeFromCart(product)}
                                                            style={{width:"10px",fontSize:"10px",color:"green",
                                                            border:"1px solid green"}}>-</button> */}
                                                            
                                                    <button className="btn btn-light" 
                                                            onClick={()=>this.props.addToCart(product)}
                                                            style={{width:"70px",fontSize:"10px",color:"green",
                                                            border:"1px solid green"}}>ADD</button>
                                                </div>
                                            
    
                                        {/* <button className="btn btn-light" 
                                            onClick={()=>this.operation()}
                                            style={{width:"45px",fontSize:"8px",color:"green",
                                                    border:"1px solid green"}}>Add</button> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                                        {/* {cartItems.map(item=>(
                                                            <li key={item.id}>{item.count}</li>
                                                        ))} */}
                    </ul>  
                    </Scrollbars>
                </div>
    
            )
            
        }
     else{
         return(
            <div style={{marginLeft:"130px",paddingTop:"none"}}>
                <Scrollbars style={{width:"350px",height:"200px"}}>
                    <ul>
                        {this.props.products.map(product =>(
                            <li key={product.id} >
                                <div className="card bg-opacity-40" style={{
                                                alignItems:"center",padding:"5px 10px"}}>
                                    
                                        <img src={product.image} alt={product.name} width="30px" ></img>
                                        <p>{product.type}</p>
                                        
                                    <p>{product.name} Rs. {product.price}</p>
                                    <div>
                                        <div style={{textAlign:"center",display:"flex"}}>
                                            {/* Rs. {product.price} */}
                                                <div style={{textAlign:"center",display:"flex"}}>
                                                    <button className="btn btn-light" 
                                                            onClick={()=>this.props.removeFromCart(product)}
                                                            style={{width:"10px",fontSize:"10px",color:"green",
                                                            border:"1px solid green"}}>-</button>
                                                            0
                                                    <button className="btn btn-light" 
                                                            onClick={()=>this.props.addToCart(product)}
                                                            style={{width:"30px",fontSize:"10px",color:"green",
                                                            border:"1px solid green"}}>+</button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                                        {/* {cartItems.map(item=>(
                                                            <li key={item.id}>{item.count}</li>
                                                        ))} */}
                    </ul>  
                    </Scrollbars>
                </div>         )
     }   
    }
}

