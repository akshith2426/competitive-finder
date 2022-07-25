import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <footer className="footer p-7 bg-gray-800 text-primary-content footer-center">
            <div>
                <Link to="https://github.com/akshith2426/competitive-finder" target="_blank">View source code 🚀 </Link>
            </div>
        </footer>
    )
}

export default Footer