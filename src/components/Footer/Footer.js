import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faTwitterSquare, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faFile, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className="my-5">
        <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>
          <section className="d-flex justify-content-between p-4 text-white" style={{backgroundColor: '#21D192'}}>
            <div className="me-5">
              <p className="mt-4">Get connected with me on social networks: </p>
            </div>
            <div>
              <a href className="text-white me-4">
              <FontAwesomeIcon className="ml-3" icon={faGithub} size='3x' />
              </a>
              <a href className="text-white me-4">
              <FontAwesomeIcon className="ml-3" icon={faFacebook} size='3x' />
              </a>
              <a href className="text-white me-4">
              <FontAwesomeIcon className="ml-3" icon={faLinkedin} size='3x' />
              </a>
              <a href className="text-white me-4">
              <FontAwesomeIcon className="ml-3" icon={faTwitter} size='3x' />
              </a>
              <a href className="text-white me-4">
              <FontAwesomeIcon className="ml-3" icon={faInstagram} size='3x' />
              </a>
              <a href className="text-white me-4">
              <FontAwesomeIcon className="ml-3" icon={faWhatsapp} size='3x' />
              </a>
            </div>
          </section>
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Minhazul Alam</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                  I am a passionate Web Developer looking forward to bringing that passion to a full-time role. Always interested in learning and doing new things.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Services</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-dark">React Website</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Javascript</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Bootstrap </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Node.js</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="">Recent Works</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="https://github.com/minhazul-dev" className="text-dark">All works</a>
                  </p>
                  <p>
                    <a href="https://unique-templates.web.app/" className="text-dark">A full stack website</a>
                  </p>
                  <p>
                    <a href="https://premiere-league-teams.netlify.app/" className="text-dark">A dynamic website with Public API</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">A movie Bank</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p><FontAwesomeIcon className="ml-3" icon={faLocationArrow} size='1x' /> Dhaka. 1212, Bangladesh</p>
                  <p><FontAwesomeIcon className="ml-3" icon={faEnvelope} size='1x' /> minhazul.dev@gmail.com</p>
                  <p><FontAwesomeIcon className="ml-3" icon={faPhone} size='1x' /> +88 01303119674</p>
                  {/* <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p> */}
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2021 Copyright:
            <a className="text-dark" href="">Minhazul Alam</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    );
};

export default Footer;