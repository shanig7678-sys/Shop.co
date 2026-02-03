import React from 'react'
import '../App.css'

const Topbar = () => {

    return (

        <div className='topbar'>
            <div></div>
            <p>
                Sign up and get 20% off to your first order.
                <span><a href="#">Sign Up Now</a></span>
            </p>
            <img src="./cancel.svg" alt="cancel" className='cancel' />
        </div>

    )
}

export default Topbar
