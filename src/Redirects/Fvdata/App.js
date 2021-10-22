import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
// import Condition from './Condition';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
    constructor(){
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem("cartItems") 
                ? JSON.parse(localStorage.getItem("cartItems"))
                :[],
            // cartItems:[],
            type:""
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
            cartItems: cartItems.filter()
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

    filterProducts = (event) => {
        console.log(event.target.value);
        if(event.target.value === "All"){
            this.setState({type:event.target.value, product:data.products})
        }else{
            this.setState({
                type: event.target.value,
                products: data.products.filter(product=> !product.type.indexOf(event.target.value)),
            });
        }
    }


    render(){
        return(
            <>
                 {/* <section className="py-4 container">
                    <div className="row no-gutters">
                        <div className="col-md-6 no-gutters">
                            <div className="leftside" style={{height:'auto',width:'100%'}}>
                                <Filter count={this.state.products.length}
                                        type={this.state.type}
                                        filterProducts={this.filterProducts}
                                />
                                <Products products={this.state.products} addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                            cartItems={this.state.cartItems}
                                            />
                            </div>
                        </div>
                        <div className="col-md-6 no-gutters">
                            <div className="rightside" style={{paddingLeft:"100px",
                                paddingTop:"80px",height:'auto',width:'100%',position:'relative'}}>
                                    <Cart cartItems={this.state.cartItems}
                                            createOrder={this.createOrder}
                                            addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}/>
                            </div>
                        </div>
                    </div>
                </section> */}
                
                <div style={{width:"80%",height:"400px",marginLeft:"5%"}}>
                    <table border="1px solid black" cellSpacing="1" style={{width:"80%",marginBottom:"50px"}}>
                        {/* <tr>
                            <th colSpan="3" style={{textAlign:"center"}}>
                                search for an item which you want to order
                            </th>
                        </tr> */}
                        <hr/>
                        <tr >
                            <td colSpan="1">
                            <Filter count={this.state.products.length}
                                        type={this.state.type}
                                        filterProducts={this.filterProducts}
                                />
                            </td>
                            <td colSpan="1">
                            <Products products={this.state.products} addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                            cartItems={this.state.cartItems}
                                            />
                            </td>
                            <td colSpan="1">
                            <Cart cartItems={this.state.cartItems}
                                            createOrder={this.props.createOrder}
                                            addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                                clearCart={this.clearCart}
                                            />
                            </td>
                        </tr>
                    </table>
                </div>

                {/* <Condition/> */}

                {/* <div class="container">
                    <div class="row">
                        <div class="col">
                            <Filter count={this.state.products.length}
                                        type={this.state.type}
                                        filterProducts={this.filterProducts}
                                />
                        </div>
                        <div class="col">
                        <Products products={this.state.products} addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                            cartItems={this.state.cartItems}
                                            />
                        </div>
                        <div class="col">
                        <Cart cartItems={this.state.cartItems}
                                            createOrder={this.props.createOrder}
                                            addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                                clearCart={this.clearCart}
                                            />
                        </div>
                    </div>
                </div> */}

            </>
        );
    }
}

export default App;