import React from "react";
import logo from '../Assets/logo.png';
import "../CSS/Nav.css";
import "../Script/navbar";



const NavBar = () =>{
    return(
       
           <>
           
           <div className="nav" id="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                   <a href="/"> <img src={logo} alt=".logo" /> </a>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span />
                    <span />
                    <span />
                    </label>
                </div>
                <div className="nav-links">
                    <a href= "/Work.jsx">Work</a>
                    <a href= "/Insights.jsx">Insights</a>
                    <a href= "/About.jsx">About</a>
                    <a href= "/Contact.jsx">Contact</a>
                </div>
            </div>


           
           
           
           </>
        
        
    );


};
export default NavBar;
