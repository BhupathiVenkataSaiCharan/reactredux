import React from 'react';
import Modal from "react-modal";
// import Final from './Final';
import FinalCart from "./FinalCart";


export default function Pay() {
    const[modalIsOpen, setModalIsOpen] = React.useState(false);
    return (
        <div>
        <button className="btn btn-success" 
                        style={{width:"100px",
                                fontSize:"10px",
                                textAlign:"center",
                                marginLeft:"30%",
                                float:"left"
                                    }}
                                    onClick={()=>setModalIsOpen(true)}>
                                    Razor Pay
                                    </button>

                <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                <form style={{paddingTop:"20px"}}>
                    {/* <input type="number" placeholder="Enter your MObile Number" style={{paddingTop:"15px", justifyContent:"center",marginLeft:"40%"}}/> */}
                    <FinalCart/>
                    {/* <p><Final/></p> */}
                </form>
                    <button 
                    className="btn btn-success" 
                        style={{width:"100px",
                                fontSize:"10px",
                                textAlign:"center",
                                marginLeft:"45%",
                                float:"left"
                                    }}
                    onClick={()=>setModalIsOpen(false)}>close</button>
                </Modal>
        </div>
    )
}
