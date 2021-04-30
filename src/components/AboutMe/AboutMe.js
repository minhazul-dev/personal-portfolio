import React from 'react';
import edit1 from "../../images/edit (1).png"
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <section className="mt-5 mb-5" id="aboutMe">
            <div className="container">
                <h2 className="fw-bolder">About Me</h2>
                <div className="row">
                    <div className="col-md-6 ">
                   <h3 className="aboutme-text"> I am a passionate Web Developer looking forward to bringing that passion to a full-time role. Always interested in learning and doing new things. </h3>
                    </div>
                    <div className="col-md-6">
                        
                    <img src={edit1} className="img-thumbnail" alt="..." />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;