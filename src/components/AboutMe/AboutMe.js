import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import edit1 from "../../images/edit (1).png"
import "./AboutMe.css"
// import "animate.css/animate.min.css";

const AboutMe = () => {
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <section className="mt-5 mb-5" id="aboutMe">
                <div className="container">
                    <h2 className="fw-bolder text-info">About Me</h2>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="container2 my-5">
                                {/* <span className="aboutme-text mt-5"> I am a passionate Web Developer looking forward to bringing that passion to a full-time role. Always interested in learning and doing new things. </span> */}
                                {/* <p class="gradient-border"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam quod provident voluptate hic similique reprehenderit illo ratione obcaecati id? Dolor inventore hic beatae tempore.</span></p> */}
                                {/* <div className="ani" resize>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quaerat saepe cum labore provident ratione eum soluta dolor! Error cupiditate autem odio quas, nisi quaerat quibusdam, repellendus atque veritatis perspiciatis rem ducimus hic, molestiae nostrum. 🎇</div> */}
                                <div className="container">
                                    <div className="wrapper container">
                                        <div className="border container"></div>
                                        <div className="main-element container mt-3">

                                            <p>I am a passionate Web Developer looking forward to bringing that passion to a full-time role. Always interested in learning and doing new things.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">

                            <img src={edit1} className="img-thumbnail photo-frame" alt="..." />
                        </div>
                    </div>

                </div>
            </section>
        </ScrollAnimation>
    );
};

export default AboutMe;