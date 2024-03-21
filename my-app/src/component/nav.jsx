import React from 'react'
import { NavLink , Navigator } from 'react-router-dom'

const nav_links = [
  {
    path:'html',
    display:'Html'
  },
  {
    path:'css',
    display:'Css'
  },
  {
    path:'javascript',
    display:'Java Script'
  },
  {
    path:'reactjs',
    display:'React'
  },
  {
    path:'headless',
    display:'Sanity and headless CMS'
  }
]

const nav = () => {
  return (
    <nav>
      <ul>
        {
          nav_links.map((item,index) =>(

          <li key={index} >
            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'active_a_nav' : '' }>
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default nav