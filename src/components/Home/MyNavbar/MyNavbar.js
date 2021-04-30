import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./MyNavbar.css"

const MyNavbar = () => {
    return (
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">Navbar</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Link</a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               Dropdown
    //             </a>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li><a className="dropdown-item" href="#">Action</a></li>
    //               <li><a className="dropdown-item" href="#">Another action</a></li>
    //               <li><hr className="dropdown-divider" /></li>
    //               <li><a className="dropdown-item" href="#">Something else here</a></li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    <Navbar id="navbar" collapseOnSelect expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#aboutMe">About Me</Nav.Link>
        <Nav.Link href="#myPortfolio">Portfolio</Nav.Link>
        <Nav.Link href="#blogs">Blogs</Nav.Link>
        <Nav.Link href="#skills">Abilities</Nav.Link>
        <Nav.Link href="#getInTouch">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
};

export default MyNavbar;