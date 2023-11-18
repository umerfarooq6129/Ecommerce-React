import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <>
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe To Our NewsLetter for New Update</p>
            <div>
                <input type="email" placeholder='Enter your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default NewsLetter