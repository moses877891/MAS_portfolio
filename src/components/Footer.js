import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div
                className="container-fluid text-center mt-3"
                style={{ backgroundColor: "black" }}
            >
                <p className="text-light pt-3">CONTACT ME @</p>
                <a href="mailto:mosesantonymas@gmail.com"
                    style={{ textDecoration: "none", color: "white", }}>
                    <i className="fas fa-envelope mail"></i>
                </a>&emsp;&ensp;
                <a href="tel:+91 8778919958"
                    style={{ textDecoration: "none", color: "white" }}>
                    <i className="fas fa-phone mail "></i>
                </a>
                <div className="row py-2">
                    <div className="col-12 col-md-4">
                        <h5 className="text-info">more links</h5>
                        <Link to="/MAS_portfolio" className="text-light d-block">HOME</Link>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="text-light my-2">
                            The way to get started is to quit talking and being done.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5 className="text-info">social</h5>
                        <a
                            href="https://www.instagram.com/nightmare_moses/?hl=en"

                        ><i className="fab fa-instagram trans"></i>
                        </a><br />
                        <a
                            href="https://www.facebook.com/moses.moses.71066?__tn__=%3C"

                        ><i className="fab fa-facebook-square trans"></i>
                        </a><br />
                        <a
                            href="https://in.linkedin.com/in/moses-antony-shankar-s-4573671a7"

                        ><i className="fab fa-linkedin trans"></i>
                        </a><br />
                        <a
                            href="https://github.com/moses877891"
                        >
                            <i className="fab fa-github trans"></i>
                        </a>
                    </div>
                </div>
                <p className="align-items-center py-2 text-muted">
                    copyright @ moses antony shankar 2020
                </p>
            </div>
        </footer >
    );
}

export default Footer;