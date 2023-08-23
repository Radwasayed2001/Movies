import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div id='contact'>
        <div className='contactForm'>
            <h3 className='fs-5'>contact</h3>
            <h1>CONTACT<span> US </span></h1>
            <div className='row'>
            <div className='col-6'>
                <h4>PHONE</h4>
                <h2>(255) 352-6258</h2>
            </div>
            <div className='col-6'>
                <h4>ADDRESS</h4>
                <h2>5678 Extra Rd. #123 San Francisco, CA 96120.</h2>
            </div>
            <div className='col-6'>
                <h4>EMAIL</h4>
                <h2>hello@divitheater.com</h2>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Contact
