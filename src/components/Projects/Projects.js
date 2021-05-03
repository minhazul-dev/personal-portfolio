import React from 'react';
import unique from "../../images/unique.png"
import expGrocery from "../../images/exp grocery.png"
import movieBank from "../../images/movieBank.png"
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
        description: '"Express Grocery" is an online grocery store with variety of products. You can buy as well as add products to this website. For all this you must have to log in with google to enjoy all this facilities. This is a full stack project which is connected to database (Mongodb).',
        technologies: 'FrontEnd: React, Bootstrap,firebase. BackEnd: Nodejs,Express. DataBase: Mongodb.',
        img: expGrocery,
        website: 'https://express-grocery-3fd86.web.app/',
        github: 'https://github.com/minhazul-dev/express-grocery'
    },
    {
        name: 'Movie Bank ',
        description: 'A fully responsive website having a lots of movies. Clicking on show details button redirects to a new page and shows specific movie details. All the data are being loaded from TMBD Api.',
        technologies: 'React, Bootstrap.',
        img: movieBank,
        website: 'https://movie-bank01.netlify.app/',
        github: 'https://github.com/minhazul-dev/movie-bank'
    },
    {
        name: 'Premiere league team details ',
        description: 'This is a full responsive dynamic website. It consists of a home page of team logos, names with an "Explore" button which redirects to a different page to show specific details of the selected team',
        technologies: 'React, Bootstrap, React router. Icons: Fontawesome',
        img: unique,
        website: 'https://premiere-league-teams.netlify.app/',
        github: 'https://github.com/minhazul-dev/premire-league-details'
    },

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