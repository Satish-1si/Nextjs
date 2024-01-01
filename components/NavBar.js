import React from 'react'
import Link from 'next/link'
import {v4} from "uuid"
const NavBar = ({navDetails}) => {
  return (
     <div className="navcontainer">
        {
          navDetails.map(({text,route})=>{
               return   <li key={v4()}><Link href={route}>{text}</Link></li>
          })
        }
     </div>
  )
}

export default NavBar