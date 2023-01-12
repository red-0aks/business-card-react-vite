import React from "react"
import logo from "../assets/react.svg"

export default function Navbar(){
   return (
      <nav>
         <img src={logo} className="nav-icon" />
         <h3 className="nav-logo-text">Business Card</h3>
      </nav>
   )
}