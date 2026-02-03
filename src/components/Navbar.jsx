import React from 'react'
import '../App.css'

const Navbar = () => {

    return (

        <header className='header'>
            <div className="logo">
                <img src="./logo.svg" alt="logo" />
            </div>
            <nav>
                <ul className='nav-bar'>
                    <li>
                        <a href="#">
                            Shop <img src="./drop-down.svg" alt="dropdown" className='dropdown' />
                        </a>
                    </li>
                    <li>
                        <a href="#">On Scale</a>
                    </li>
                    <li>
                        <a href="#">New Arrivals</a>
                    </li>
                    <li>
                        <a href="#">
                            Brands
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="search-container">
                <img src="./search.svg" alt="search" />
                <input type="text"
                    className='search-field'
                    placeholder="Search for products..."
                />
            </div>
            <div className="header-icons">
                <img src="./cart.svg" alt="cart" className='cart' />
                <img src="./user.svg" alt="user" className='user' />
            </div>
            <img src="./big-star.svg" alt="star" className='big-star' />
            <img src="./small-star.svg" alt="star" className='small-star' />
        </header>

    )

}

export default Navbar
