import React from 'react'
import Logo from './Logo.png'
export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container">
    <a className="navbar-brand d-flex align-item-center" href="#"><img src={Logo} alt="Logo" width={30} className='mx-2'/>Knowledge Hub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Designing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Programming</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dropshipping</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
            <li><a className="dropdown-item" href="#">React</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Project Management</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
       
        <button className="btn btn-outline-success">Subscribe</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
