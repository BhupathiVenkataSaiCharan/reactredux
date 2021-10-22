import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            posts:[]
        };
    }
    componentDidMount(){
        fetch('../../data.json')
        .then(res=>res.json())
        .then(res=>this.setState({posts:res}))
    }

    render() {
        return (
            <div>
                <h1>Groceries and Essentials</h1>
                {this.state.posts.map(post=>
                    <div>
                        <ul>
                        <li key={post.id}>
                            <div className="card bg-opacity-50" style={{border:"1px solid black",
                                            alignItems:"center",padding:"5px 30px"}}>
                                
                                <a href>
                                    <img src={post.image} alt={post.name} width="50px" />
                                    <p>{post.type}</p>
                                    <p>{post.name} Rs.{post.price}</p>
                                    
                                </a>
                                                            <div style={{textAlign:"center",display:"flex"}}>
                                                <button className="btn btn-light" 
                                                        style={{width:"30px",fontSize:"10px"}}>-</button>
                                                        0
                                                <button className="btn btn-light" 
                                                        style={{width:"30px",fontSize:"10px"}}>+</button>
                                            </div>
                                    </div>
                                    </li>
                                    </ul>
                                    </div>)}
                                    </div>
        )
    }
}
