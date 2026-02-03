import React from 'react'

const Hero = () => {

    return (

        <section className='hero-section'>
            <div className="hero-content">
                <h1 className='title'>
                    FIND CLOTHES <br />
                    THAT MATCHES <br />
                    YOUR STYLE
                </h1>
                <p>
                    Browse through our diverse range of meticulously crafted garments, designed <br />
                    to bring out your individuality and cater to your sense of style.
                </p>
                <button>
                    Shop Now
                </button>
            </div>
            <div className='hero-quality'>
                <div>
                    <h2>200+</h2>
                    <p>Internation Brands</p>
                </div>
                <img src="./line.svg" alt="line" />
                <div>
                    <h2>2,000+</h2>
                    <p>High-Quality Products</p>
                </div>
                <img src="./line.svg" alt="line" />
                <div>
                    <h2>30,000+</h2>
                    <p>Happy Customers</p>
                </div>
            </div>
        </section>

    )

}

export default Hero
