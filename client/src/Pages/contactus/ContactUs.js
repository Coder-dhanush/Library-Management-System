import React from 'react'
import './ContactUs.scss'
import { useNavigate } from 'react-router-dom'

function ContactUs() {
  const navigate = useNavigate();
  function handleSubmit(){
   navigate('/');
  }
  return (
    <div className='ContactUs'>
      <div className="container">
        
        <div className="upper-part">
        <h1 className='heading'>REQUEST A FREE QUOTE</h1>
         <h3 className="subheading">Or Call Us:+91-9350679141 </h3>
        </div>
        <div className="down-part">
        <form className='form' onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your name' id="name" />
          <input type="email" placeholder='Enter your email' id='email'/>
          <input type="text" placeholder='Enter your message' id='message'/>
          <button className='btn-submit' onClick={handleSubmit}>Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs