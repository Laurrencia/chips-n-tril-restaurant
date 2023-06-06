import React, { Component } from "react";
import BtnOne from "./BtnOne";



class Navigation extends Component {
  state = { clicked: false };
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <>
        <nav className="nav">
            <h2 className="logo">Chips <i>'N'</i> Trill</h2>
            <div >
            <ul 
            id="nav-links" 
            className={this.state.clicked ? "#nav-links active" : "#nav-links"}
            >
             <li className="navList active">Home</li>
             <li className="navList">About</li>
             <li className="navList">Menu</li>
             <li className="navList">Testimonials</li>
             <li className="navList">Contact</li>
             <BtnOne/>
            </ul>
          
            </div>
            
            <div id="mobile" onClick={this.handleClick}>
              <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              
              ></i>
            </div>
        </nav>
    </>
   
    

  )
};
}

export default Navigation;
