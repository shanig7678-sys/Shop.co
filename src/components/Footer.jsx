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
            <div className="main-footer">


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
                        <div className="column-paragraph">
                            <p>About</p>
                            <p>Features</p>
                            <p>Works</p>
                            <p>Career</p>
                        </div>
                    </div>
                    <div className="column">
                        <h1>Help</h1>
                        <div className="column-paragraph">
                            <p>Customer Support</p>
                            <p>Delivery Details</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                    </div>
                    <div className="column">
                        <h1>FAQ</h1>
                        <div className="column-paragraph">
                            <p>Account</p>
                            <p>Manange Delivers</p>
                            <p>Orders</p>
                            <p>Payments</p>
                        </div>
                    </div>
                    <div className="column">
                        <h1>RESOURCES</h1>
                        <div className="column-paragraph">
                            <p>Free eBooks</p>
                            <p>Development Tutorials</p>
                            <p>How to - Blog</p>
                            <p>Youtube Playlist</p>
                        </div>

                    </div>
                </div>

                <div className="logo-vertical-footer">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="footer-card">
                        <div className="card">
                            <img src="./G-Pay.svg" alt="gpay" />
                        </div>
                        <div className="card">
                            <img src="./Mastercard.svg" alt="svg" />
                        </div>
                        <div className="card">
                            <img src="./Paypal.svg" alt="paypal" />
                        </div>
                        <div className="card">
                            <img src="Visa.svg" alt="visa" />
                        </div>
                        <div className="card">
                            <img src="./Pay.svg" alt="pay" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )

}

export default Footer
