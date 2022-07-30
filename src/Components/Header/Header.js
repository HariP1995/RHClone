import React from 'react'
import Logo from '../../Images/robinhood.svg'
import './header.css'

function Header() {
    return (
        <div className="header_wrapper">
            <div className="header_logo">
                <img src={Logo} width={25}></img>
            </div>
            <div className="header_search">
                <div className="header_searchContainer">
                    <input placeholder="Search" type="text"></input>
                </div>
            </div>
            <div className="header_menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
