import React from 'react'
import twitter from "../assets/twitter-icon.svg"
import facebook from "../assets/facebook-icon.svg"
import instagram from "../assets/instagram-icon.svg"
import github from "../assets/github-icon.svg"

export default function Footer(){
   return (
      <div className="footer">
        <img src={twitter}/>
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={github}/>
      </div>
   )
}