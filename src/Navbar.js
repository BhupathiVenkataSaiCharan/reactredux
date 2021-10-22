import React from "react";
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Modal from './Components/Modal';
import SignIn from './Components/SignIn';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




export default function Navbar() { 

  return (
    <>
      <AppBar
        variant="outlined"
        style={{ background: 'white', border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"70px",minHeight:"70px" }}
        className="color"
        position="fixed"
      >
        <Toolbar>
        
          <IconButton
            style={{
              marginLeft: "10%",
              fontWeight: "1000",
              fontSize: "20px",
              outline:"none"
            }}
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"                      
          >
         <Link to="/" style={{outline:"none"}}><img width="122px" height="28px" alt="img" src='assets/images/logo.png'/></Link>
          </IconButton>
          <Modal />
          <Button
            style={{
              marginLeft: "15%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black',
              fontWeight:"bolder"
              
            }}
            color="inherit"
          >
            Donego for Partners{" "}
          </Button>
          <Button
            style={{
              marginLeft: "3%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black',
              fontWeight:"bolder"
              
            }}
            color="inherit"
          >
            Donego for Business{" "}
            <ExpandMoreIcon/>
          </Button>

         <Link style={{
              marginLeft: "5%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black'
              
            }}> 
            <SearchIcon/>
            <p style={{position:"absolute",left:"74%",top:"35px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"10px",marginLeft:'2%',
                            fontSize:"12px",outline:"none"}}>Search</p>
            </Link>

          <IconButton color="black" aria-label="add to shopping cart" 
                    style={{outline:"none",marginLeft:'40px'}}>
          <Link to='/cart' >
            <ShoppingCartOutlinedIcon fontSize="medium" style={{
              marginLeft: "5%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black'}} />{/*style={{position:"relative",color:"black",outline:"none", marginLeft:'4%'}} */}
                      {/* <p style={{position:"absolute",left:"5px",top:"30px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"10px",
                            fontSize:"12px",outline:"none"}}>Cart</p> */}
                            <p style={{position:"absolute",left:"5px",top:"30px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"10px",marginLeft:'2%',
                            fontSize:"12px",outline:"none"}}>Cart</p>
          </Link>
          </IconButton>
          <SignIn/>
        </Toolbar>
      </AppBar>      
        </>    
  );
}
