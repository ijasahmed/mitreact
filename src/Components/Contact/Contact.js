import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div>
             <div className="contact py-5 pb-3 bg-light aos-init aos-animate" data-aos="fade-right" id="contact">
        <div className="container">
            <div className="text-h3 text-center">
                <h3>CONTACT US</h3>
            </div>
            <div className="row">
                <div className="col-md-6 content-left">
                    <h4>CONTACT FORM</h4>
                    <form action="#" method="post">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="inputtext" placeholder="Name" required=""/>
                            </div>
                            <div className="form-group col-md-12">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required=""/>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text Hear" required=""></textarea>
                            </div>
                            <input type="submit" className="form-button" value="SUBMIT"/>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 content-right">
					<h4>ADDRESS</h4>
                    
                    <div className="add-info">
                        
                        <p><span className="contact-right-icons"><i className="fas fa-map-marker"></i></span> abcd Street, abcdefg, USA.</p>
                    </div>
                    <div className="add-info">
                        
                        <p><span className="contact-right-icons"><i className="fas fa-phone"></i></span> +917034455704</p>
                    </div>
                    <div className="add-info">
                        
                        <p><span className="contact-right-icons"><i className="fas fa-envelope"></i></span> <a href="mailto:info@example.com">mit@example.com</a></p>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    
        </div>
    )
}

export default Contact
