import React from 'react';
import logo from '../../images/Logo.png';
import Image from 'react-bootstrap/Image';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Image src={logo} alt="" fluid />
            <h1>Flexible Online Learning</h1>
            <h4>Expand Your Skills - Expand Your Opportunities</h4>
            
            <nav>
                <a href="/home">Home</a>
                <a href="course">My Courses</a>
                <a href="info">Course Information</a>
            </nav>
        </div>
    );
};

export default Header;