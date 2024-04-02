import React from 'react'

const Navbar = () => {

    return (
        <div className='nav-container'>
            <div className='nav-child'>
                <a className='nav-elements' href="/">Home</a>
                <a className='nav-elements' href="/">About</a>
                <a className='nav-elements' href="/">Project</a>
                <a className='nav-elements' href="/">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;