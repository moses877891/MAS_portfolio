import React from "react";

function About() {
    return (<div className="bg-light w-100">
        <div className="container text-center py-5">
            <h1 className="font-weight-light text-center">
                <span className="text-danger">About</span> me
            </h1>
        </div>
        <div className="container text-center">
            <div className="row pb-5">
                <div className="col-12 col-md-6 pb-5">
                    <h4 className="font-weight-bold">What Am I good at?</h4>
                    <p>
                        JAVASCRIPT, Working with React, SQL, Firebase, Redux, Communicating with others, English
                        and also I tend to be a bit Motivational & Enthusiastic.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="font-weight-bold">What am I doing currently?</h4>
                    <p>
                        I am pursuing my 3rd Year B.E-Electronics and communication
                        Engineering in R.M.K.Engineering college.
                    </p>
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-12 col-md-6 pb-5">
                    <h4 className="font-weight-bold">What do i believe in?</h4>
                    <p>
                        I believe in hard-work not luck, not time but hard-work. i do believe
                        if someone want to succeed in life it requires nothing but a 100%
                        hard-work
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="font-weight-bold">My Hobbies</h4>
                    <p>Working with react(The fun part), listening to music,
                        reading books mostly about business.</p>
                </div>
                <div className="row py-4">
                    <div className="col-12 col-md-6">
                        <h4 className="font-weight-bold">My Academic</h4>
                        <p>I am currently in my 6th-SEM with a CGPA of 7.92,
                        I had two History of arrears but i cleared both of them,
                        <br />SSLC- 91%<br />HSC - 71.3% </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className="font-weight-bold">My Certificates</h4>
                        <p>Lean SIX Sigma(Green belt), Full Stack in Internshala, React in Udemy ,English Intermediate in British Council</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default About;