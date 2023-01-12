import React from "react"
import Info from "./InfoComponent"
import About from "./AboutComponent"
import Interests from "./InterestsComponent"
import Footer from "./FooterComponent"

export default function Card(){
   return (
      <div className="card">
         <Info />
         <About />
         <Interests />
         <Footer />
      </div>
   )
}