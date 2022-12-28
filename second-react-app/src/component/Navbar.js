import React from "react"
import navLogo from "../images/airbnb-logo.png"
import "../index.css" 

export default function Navbar() {
    return (
        <nav>
            <img src={navLogo}  alt="airbnb" className="nav--logo" />
        </nav>
    )
}  