import React from 'react';
import "./Skills.css"
import SkillBar from 'react-skillbars';
// import reactlogo from "../../images/React.js_logo-512.png"

let Skills = () => {
    
    Skills = [
        {
          "type": "React",
          "level": 60
        },
        {
          "type": "Javascript",
          "level": 45
        },
        {
          "type": "Nodejs",
          "level": 45
        },
        {
          "type": "mongodb",
          "level": 50
        },
        {
          "type": "Css",
          "level": 65
        },
        {
          "type": "HTML",
          "level": 75
        },
        {
          "type": "express js",
          "level": 40
        }
        
      ]
    return (
       

     <div id="skills" className="container">
<SkillBar skills={Skills}></SkillBar>
     </div>

     
    //         <div class="grid-container pt-5 mr-5">
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
    //     <div>
    //         <img src={reactlogo} className="skills-img" alt=""/>
    //     </div>
        
    
    // </div>
       

        


        //   <div style={{backgroundColor:'#d9f3e5', height:'180px'}} className="container">
        //   <h3 className="mt-4">Skills</h3>
        //       <div className="row m-5">
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //            <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //          {/* <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>
        //           <div className="col-md-2"><button className="btn btn-success rounded mr-2 mb-2">JavaScript</button></div>   */}
        //       </div>
        //   </div>
    );
};

export default Skills;