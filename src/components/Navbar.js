import React, { Component } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

class Navbar extends Component {
    render() {
        return (
            // NAVbar
            <nav className="navbar navbar-light sticky-top navbar-expand-sm" style={{ backgroundColor: "black" }}>
                <div className="container my-2">
                    <Link to="/MAS_portfolio" className="navbar-barnd brnd">MAS</Link>
                </div>
                <div
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#collapseNav"
                >
                    <div className="container anime">
                        <i className="fas fa-bars clr"></i>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                    <div className="navbar-nav">
                        <Link to="/MAS_portfolio" className="nav-item nav-link text-light font-weight-bolt h6 mx-1 my-auto">
                            BLOGS</Link>
                        <Link to="/MAS_portfolio" className="nav-item nav-link text-light font-weight-bolt h6 mx-1 my-auto">
                            PROJECTS</Link>
                        <Link to="/MAS_portfolio" className="nav-item nav-link text-light font-weight-bolt h6 mx-1 my-auto">
                            CERTIFICATES</Link>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;