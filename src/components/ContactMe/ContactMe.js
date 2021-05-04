import React from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_h4xcskk', 'template_cdtgiwj', e.target, 'user_3AtvRWKOixo5xVh0iWjnF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const alertMsg  = () => {
        alert("Message Sent Successfully")
    }
    return (
      <section id="contact" style={{backgroundColor:'rgb(212,244,255', height:'650px'}}>
          <h3 className= " pt-5 text-center">Get in Touch</h3>
        <div className="container">
        
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto text-center">
                        <input onClick={alertMsg} type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
        </section>
    );
};

export default ContactMe;
