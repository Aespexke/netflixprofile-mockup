import React  from "react";
import logo from './Logo/logo.png';

function Navbar() {
    return (
        <header className="Navbar">
            <img className ="netflix" src={logo} alt="LogoNetflix" />
        </header>
    );
}

export default Navbar