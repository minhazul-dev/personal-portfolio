import React from 'react';
import Particles from 'react-particles-js';
import Typical from "react-typical";
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


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
        <h1>name</h1>
        <br />
        <h2 className="text-secondary">designation</h2>
        <br />
        <h5 className="text-secondary">
          I Work in{" "}
          <span className="typewriter-span">
            <Typical
              steps={[
                "React.js",
                2000,
                "Node.js",
                2000,
                "JavaScript(ES6)",
                2000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </span>
        </h5>
        <br />
      </div>
      <div className="d-flex justify-content-center">

          <a href="">
          <FontAwesomeIcon className="mr-3" icon={faGithub} size = '4x' />
          </a>
          <a href="">
          <FontAwesomeIcon className="ml-3" icon={faLinkedinIn} size = '4x' />
          </a>
      
      

      </div>
        </header>
    );
};

export default Header;