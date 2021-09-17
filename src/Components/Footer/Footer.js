import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <footer>
        <div>    
        <div className="w3ls-footer-grids pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 w3l-footer">
                        <h3 className="mb-sm-3 mb-2">About Us</h3>
                         <p className="para-w3-agileits">MIT is a global software solutions provider in software development, mobile application development, web designing, graphic designing and digital marketing</p>

                    </div>
                    <div className="col-md-4 w3l-footer my-md-0 my-4 text-center">
						<h2><a className="navbar-brand" href="index.html">MIT</a></h2>
                        <h6>IT SOLUTION</h6>
                    </div>
					
                    <div className="col-md-4 w3l-footer">
                        <h3 className="mb-sm-3 mb-2">Navigation</h3>
                        <div className="nav-w3-l">
                           
                                <li className="mt-2">
                                    <a href="#about" className="scroll">About</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#services" className="scroll">Services</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#clients" className="scroll">Team</a>
                                </li>
							
                        </div>
                    </div>
                </div>
                <div className="row border-top mt-4 pt-lg-4 pt-3 text-lg-left text-center">
                    <p className="col-lg-8 copy-right-grids mt-lg-1">© 2021 MIT I SOLUTION. All Rights Reserved | Design by
                        <a href="https://w3layouts.com/" target="_blank">W3layouts</a>
                    </p>
                    <div className="col-lg-4 agileinfo_social_icons mt-lg-0 mt-3">
                        <ul className="agileits_social_list">
                            <li>
                                <a href="#" className="w3_agile_facebook">
									<i className="fab fa-facebook-f"></i>
								</a>
                            </li>
                            <li>
                                <a href="#" className="agile_twitter">
									<i className="fab fa-twitter"></i>
								</a>
                            </li>
                            <li>
                                <a href="#" className="w3_agile_dribble">
									<i className="fab fa-dribbble"></i>
								</a>
                            </li>
                            <li>
                                <a href="#" className="w3_agile_google">
									<i className="fab fa-google-plus-g"></i>
								</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   
        </div>
        </footer>
    )
}

export default Footer
