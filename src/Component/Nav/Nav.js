import React from 'react'
import './Nav.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  var Fav = useSelector((state)=>state.productSlice.Fav);
  var cart = useSelector((state2)=>state2.productSlice2.cart);
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-white  w-100 ">
  <div className="first d-flex justify-content-between w-100 ms-5 me-5">
    <NavLink to='/' className="navbar-brand fs-2 align-self-start">Movie</NavLink>
    <button className="navbar-toggler align-self-start" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#main" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0 "
     id="main">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-white "style={{width:"fit-content",padding:"0 2rem"}}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active fs-4 fw-bold ms-3" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="movies" className="nav-link fs-4 ms-3" >Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="fav" className="nav-link fs-4 ms-3" style={{position:'relative'}} >Fav<div id='fav' className='bg-black text-warning'style={{width:"fit-content"}}>{Fav.length}</div></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="contact" className="nav-link fs-4 ms-3" >Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="about" className="nav-link fs-4 ms-3" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='cart' className="nav-link fs-5 ms-3"><i className="bi bi-cart-fill fs-4"></i><div id='cart' className='bg-success text-white'style={{width:"fit-content"}}>{cart.length}</div></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
