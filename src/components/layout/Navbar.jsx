import React from 'react'
import { ImProfile } from 'react-icons/im'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const Navbar = ({title}) => {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container max-auto">
                <div className=" px-2 mx-2" style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                    <img src='/logoTesting.png' width='40' className="m-1"/>
                    <Link to="/" className="text-lg font-bold align-middle">
                        {title}
                    </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </Link>
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                            About
                        </Link>
                        <Link to="/github/search" className="btn btn-ghost btn-sm rounded-btn">
                            Github-Search
                        </Link>
                        <Link to="/leetcode/search" className="btn btn-ghost btn-sm rounded-btn">
                            Leetcode-Search
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.defaultProps = { title: 'Competitive Finder' }

Navbar.propTypes = { 
    title:PropTypes.string
}

export default Navbar