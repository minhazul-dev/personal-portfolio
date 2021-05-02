import React from 'react';

const SingleProject = ({project}) => {
    console.log(project);
    return (
        <div className="item mt-5">
            <div className="col-md-12">
                <div className="row shadow-lg py-5 px-3 rounded">
                    <div className="col-md-8">
                        <h5 className="card-title font-weight-bold text-white">{project?.name}</h5>
                        <p className="card-text text-white">{project?.description}</p>
                        <p className="text-white"><span className="text-success font-weight-bold ">Technologies:  </span>{project?.technologies}</p>
                    </div>
                    <div className="col-md-4">
                        <img className="card-img-top w-100 mb-5" src={project?.img} alt={project?.img} />
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <a href={project?.website} target="_blank" type="button" class="btn btn-success rounded mr-2">Website</a>
                            <a href={project?.github} target="_blank" type="button" class="btn btn-secondary rounded mr-2">GitHub</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default SingleProject;