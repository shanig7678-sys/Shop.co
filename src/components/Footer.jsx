import React from 'react'

const Footer = () => {

    return (

        <footer>
            <div className='footer-input-field'>
                <h1>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h1>
                <div className='footer-input'>
                    <div className="email-field">
                        <img src="./email.svg" alt="email" />
                        <input
                            type="email"
                            placeholder='Enter your email address'
                        />
                    </div>
                    <button>
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
            <div className="footer-content">
                <div className='logo-column'>
                    <img src='./logo.svg' alt='logo' />
                    <p>
                        We have clothes that suits your style and
                        which you’re proud to wear. From women to men.
                    </p>
                    <div className='social-media-icon'>
                        <div className='circle' id='twitter'>
                            <img src='./twitter.svg' alt='twitter' />
                        </div>
                        <div className='circle' id='facebook'>
                            <img src='./facebook.svg' alt='facebook' />
                        </div>
                        <div className='circle' id='instagram'>
                            <img src='./instagram.svg' alt='instagram' />
                        </div>
                        <div className='circle' id='github'>
                            <img src='./github.svg' alt='github' />
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <h1>Company</h1>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="column">
                    <h1>Help</h1>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="column">
                    <h1>FAQ</h1>
                    <p>Account</p>
                    <p>Manange Delivers</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                
            </div>
        </footer>

    )

}

export default Footer
