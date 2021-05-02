import React from 'react';
import unique from "../../images/unique.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleProject from '../SingleProject/SingleProject';
import "./Projects.css"

const projectData = [
    {
        name: 'Unique Templates ',
        description: '"UNIQUE TEMPLATE" is an online template buying site for your website or product. For all this you must have to log in with google to enjoy all this facilities. In this project Some functionality is protected for admins. Different dashboard for users and admin',
        technologies: 'React Js, React Router, Node.js, MongoDB, Firebase Authentication, Bootstrap',
        img: unique,
        website: 'https://unique-templates.web.app/',
        github: 'https://github.com/minhazul-dev/unique-templates-client'
    },
    {
        name: 'Express Grocery ',
        description: '"UNIQUE TEMPLATE" is an online template buying site for your website or product. For all this you must have to log in with google to enjoy all this facilities. In this project Some functionality is protected for admins. Different dashboard for users and admin',
        technologies: 'React Js, React Router, Node.js, MongoDB, Firebase Authentication, Bootstrap',
        img: unique,
        website: 'https://unique-templates.web.app/',
        github: 'https://github.com/minhazul-dev/unique-templates-client'
    },
    {
        name: 'Movie Bank ',
        description: '"UNIQUE TEMPLATE" is an online template buying site for your website or product. For all this you must have to log in with google to enjoy all this facilities. In this project Some functionality is protected for admins. Different dashboard for users and admin',
        technologies: 'React Js, React Router, Node.js, MongoDB, Firebase Authentication, Bootstrap',
        img: unique,
        website: 'https://unique-templates.web.app/',
        github: 'https://github.com/minhazul-dev/unique-templates-client'
    },
    {
        name: 'Premiere league team details ',
        description: '"UNIQUE TEMPLATE" is an online template buying site for your website or product. For all this you must have to log in with google to enjoy all this facilities. In this project Some functionality is protected for admins. Different dashboard for users and admin',
        technologies: 'React Js, React Router, Node.js, MongoDB, Firebase Authentication, Bootstrap',
        img: unique,
        website: 'https://unique-templates.web.app/',
        github: 'https://github.com/minhazul-dev/unique-templates-client'
    },
    {
        name: 'Unique Templates ',
        description: '"UNIQUE TEMPLATE" is an online template buying site for your website or product. For all this you must have to log in with google to enjoy all this facilities. In this project Some functionality is protected for admins. Different dashboard for users and admin',
        technologies: 'React Js, React Router, Node.js, MongoDB, Firebase Authentication, Bootstrap',
        img: unique,
        website: 'https://unique-templates.web.app/',
        github: 'https://github.com/minhazul-dev/unique-templates-client'
    }

]


const Projects = () => {
    console.log(projectData);
    return (
        <div id="projects" className="section section__contact section--fullheight mb-5 ">
            <div className="container">
                <h1 className="pt-5 text-white">Projects</h1>
                <div className="row">
                <OwlCarousel className="owl-carousel owl-theme" loop margin={10} nav items={1}>
                    {
                        projectData.map(project => <SingleProject project={project}></SingleProject>)
                    }
                </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;