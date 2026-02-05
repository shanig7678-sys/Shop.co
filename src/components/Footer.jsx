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
                <div className='column'>
                    <img src='./logo.svg' alt='logo' />
                    <p>
                        We have clothes that suits your style and
                        which you’re proud to wear. From women to men.
                    </p>
                    <div>
                        <div className='circle' id='twitter'>
                            <img src='./twitter.svg' alt='twitter' />
                        </div>
                        <div className='circle' id='facbook'>
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
            </div>
        </footer>

    )

}

export default Footer
