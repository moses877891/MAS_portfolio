import React from "react";
import MOSES from "../assets/moses.jpg"
function Title(props) {
    const { firstName, lastName, leadText } = props;
    return (
        <div className="container mt-3">
            <div className="row text-center align-items-center my-5">
                <div className="col-12 col-md-6">
                    <img
                        className="img-fluid rounded-circle w-75"
                        src={MOSES}
                        alt="moses"
                    />
                </div>
                <div className="col-12 col-md-6 pt-5">
                    <div className="font-weight-light" style={{ fontSize: "35px" }}>
                        <span className="text-danger">{firstName}</span> {lastName}
                        <div>
                            <h4 className="font-weight-light">
                                I am a <span className="text-info">{leadText}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Title.defaultProps = {
    firstName: "MOSES",
    lastName: " Antony Shankar",
    leadText: "3rd year- B.E Student",
}

export default Title;