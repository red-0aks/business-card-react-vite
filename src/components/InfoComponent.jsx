import React from 'react'
import userImg from '../assets/user-img.svg'
import mailLogo from '../assets/Mail.svg'
import linkedinLogo from '../assets/linkedin.svg'

export default function Info(){
   return (
      <div className="info">
         <img src={userImg}/>
         <h2>Laura Smith</h2>
         <span>Frontend Developer</span>
         <p>laurasmith.website</p>
         <div className="buttons">
            <a className='btn'>
               <img src={mailLogo}/>Email
            </a>
            <a className='btn'>
               <img src={linkedinLogo}/>LinkedIn
            </a>
         </div>
      </div>
   )
}