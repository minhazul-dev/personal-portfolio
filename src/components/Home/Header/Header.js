import React from 'react';
import Particles from 'react-particles-js';
import Typical from "react-typical";
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faFile } from '@fortawesome/free-solid-svg-icons';



const styles = {
    part: {
        height: "100%",
        width: "100%",
        position: "absolute",
    },
};

const Header = () => {
    return (

        <header id="header">
            <div style={styles.part}>
                <Particles
                    params={{
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                    }}
                    height="550px"
                />
            </div>
            <div className="header-text w-100 w-lg-75 py-4 ">
                <h4 className="main-title mt-5">Hi, I am</h4>
                <h1>MD. MINHAZUL ALAM</h1>
                <br />
                <h2 className="text-white">Front-End Developer</h2>
                <br />
                <h3 className="text-white">
                    I Work in{" "}
                    <span className="typewriter-span">
                        <Typical
                            steps={[ 
                                "React.js",
                                2000,
                                "JavaScript(ES6)",
                                2000,
                                "Web Design",
                                2000,
                                "Web-Development"
                            ]}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </span>
                </h3>
                <br />
            </div>
            {/* <div className="d-flex justify-content-center">
                <a href="https://github.com/minhazul-dev">
                    <FontAwesomeIcon className="mr-3" icon={faGithub} size='4x' />
                </a>

                <a href="">
                    <FontAwesomeIcon className="ml-3" icon={faLinkedinIn} size='4x' />
                </a>
                <a href="">
                    <FontAwesomeIcon className="ml-3" icon={faFacebook} size='4x' />
                </a>
            </div> */}
            <div>
        <div className="d-none d-lg-block">
          <div className="d-flex flex-column sticky-icon-container ">
            <a href="https://drive.google.com/file/d/1A4s3SQwKXhWgBs-tVl47TsZJhciF6EW_/view?usp=sharing" target="_blank" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="ml-3 sticky-icon" icon={faFile} size='4x' />
            </a>
            <a href="https://github.com/minhazul-dev" target="_blank" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="ml-3 sticky-icon" icon={faGithub} size='4x' />
            </a>
            <a href="" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="ml-3 sticky-icon" icon={faLinkedin} size='4x' />
            </a>
            
            <a href="" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="ml-3 sticky-icon" icon={faFacebook} size='4x' />
            </a>
            <div className="line" />
          </div>
        </div>
        {/* <button href="#navbar" className="fixed-button">
        <FontAwesomeIcon className="ml-3 sticky-icon" icon={faArrowUp}/>
        </button> */}
      </div>

        </header>

    );
};

export default Header;