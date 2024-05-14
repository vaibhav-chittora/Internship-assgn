import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
    const [theme, setTheme] = useState('light')

    function themeChanger(theme) {
        var element = document.body;
        element.dataset.bsTheme =
            element.dataset.bsTheme === "light" ? "dark" : "light";

    }

    return (
        <nav className="navbar navbar-expand-lg border-bottom text-light bg-light " >
            <div className="container-fluid   ">
                <Link className="navbar-brand" href="/"><span className='badge text-success bg-white fs-3'>Ecoyaan</span></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" collapse navbar-collapse " id="navbarNav" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold fs-5" aria-current="page" to="/"
                            >Home</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to="/about-us"
                                className={({ isActive }) =>`nav-link text-dark fw-bold fs-5
                             ${isActive ? "text-successs" : "text-dark"}`}
                            // className="nav-link text-dark fw-bold fs-5" 
                            >About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold fs-5" to="/sell-On-Ecoyaan">Sell On Ecoyaan</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold fs-5" to="/careers" aria-disabled="true">Careers</NavLink>
                        </li>
                    </ul>
                    </div>

                <div className="form-check  form-switch  mx-4 text-dark d-none d-lg-block ">
                    Change Theme
                    <input className="form-check-input p-2" id="flexSwitchCheckChecked" role="switch" type="checkbox"
                        onClick={themeChanger} />

                </div>
               
            </div>
        </nav>
    )

}


export default Navbar;