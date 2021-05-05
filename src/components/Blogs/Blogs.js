import React from 'react';
import blog1 from "../../images/blog1.png"
import Zoom from 'react-reveal/Zoom';
import blogCovered from "../../images/blog cover.png"

const Blogs = () => {
    return (
        <Zoom>
        <main style={{backgroundColor:'#379683'}} id="blogs">
            
        <div className="container">
        <h3 className=" pt-4 text-center text-white">Blogs</h3>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="card mb-3">
                        <img src={blogCovered} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Some fundamentals of Javascript</h5>
                            <p className="card-text">In this blog i have tried to explain some basic fundamentals of Javascript.</p>
                            <a target="_blank" href="https://minhazul-dev.medium.com/some-fundamentals-of-javascript-780b25e23b64">
                           <button type="button" className="btn btn-info">Read in medium</button>
                           </a>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mt-5">
                    <div className="card mb-3">
                        <img src={blog1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">title of the blog</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* <Link to="https://minhazul-dev.medium.com/some-fundamentals-of-javascript-780b25e23b64">
                            <button type="button" className="btn btn-info">Read in medium</button>
                            </Link> */}
                           <a target="_blank" href="https://minhazul-dev.medium.com/some-fundamentals-of-javascript-780b25e23b64">
                           <button type="button" className="btn btn-info">Read in medium</button>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
        </Zoom>
    );
};

export default Blogs;