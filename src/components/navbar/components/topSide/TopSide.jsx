import React from 'react'
import "../../navbar.css"
import logoImage from "../../../../images/logo.png"

const TopSide = () => {
    return (
        <div className='sectionNav'>
            <div className='navbar'>
                <div className='contact'>
                    <a href='tel:123456789'>
                        <button className='borderBtn'>Call - 123 456 789</button>
                    </a>
                </div>
                <div className='logo'>
                    <img src={logoImage} alt="logo here" />
                </div>
                <div className='reservation'>
                    <button className='backBtn'>Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default TopSide