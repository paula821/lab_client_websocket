import React from 'react'
 
export default function Header({title = 'Currency IUD'}) {
  return (
    <nav className="navbar bg-light">
    <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
    </div>
    </nav>
  )
}
 

