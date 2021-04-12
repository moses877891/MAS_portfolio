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
            </nav>

        );
    }
}

export default Navbar;