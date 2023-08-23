import React from 'react'
import './About.css'
function About() {
  return (<div style={{overflowX:"hidden"}}>
    <div id='about'>
    <div className='container ps-5'>
      <h3>OUR THEATER</h3>
      <h1>About<span> Us </span></h1>
      
    </div>
    </div>
    <div id='secSection'>
    <div className="row h-100">
        <div className='col-3'>
        <h4>About us</h4>
        <h1>
        <span>All the </span>Perks
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        </div>
        <div className='col-9 h-100' id='box'>
          <div className='row'>
            <div className='col-6'>
              <h4>Amazing Theaters</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='col-6'>
              <h4>Pre Order Food</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='col-6'>
              <h4>Comfort Amenities</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='col-6'>
              <h4>Movie Go'er Rewards</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='col-6'>
              <h4>Artisan Snacks</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            
        </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default About
