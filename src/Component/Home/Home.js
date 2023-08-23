import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='Home' id='myHome'>
      <div id="carouselExample" className=" carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='d-block w-100 darkened-image three d-flex align-items-center flex-column justify-content-center'>
      <div className='container p-5'>
      <h1 className='text-white fw-bold fs-1'>
      PRE ORDER REFRESHMENTS
      </h1>
      <p className='text-white fs-5 mt-5 mb-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <a className='btn btn-danger fs-4'>Menu</a>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    
    <div className='d-block w-100 darkened-image one d-flex align-items-center flex-column justify-content-center'>
    <div className='container p-5'>
    <h1 className='text-white fw-bold fs-1'>
    MOVIE PASS CLUB
      </h1>
      <p className='text-white fs-5 mt-5 mb-5'>
      Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tinci.
      </p>
      <a className='btn btn-danger fs-4'>Join Today</a>
    </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className='d-block w-100 darkened-image two d-flex align-items-center flex-column justify-content-center'>
    <div className='container p-5'>
    <h1 className='text-white fw-bold fs-1'>
    WELCOME TO DIVI THEATER
      </h1>
      <p className='text-white fs-5 mt-5 mb-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <a className='btn btn-danger fs-4'>Show</a>
    </div>
    </div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true">
    </span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Home
