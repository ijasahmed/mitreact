import React from 'react'
import "./Team.css"

function Team() {
    return (
        <div>
           <div className="clients py-5" id="clients">
        <div className="container">
            <div className="text-h3 text-center">
                <h3>TEAM</h3>
            </div>
            <div className="wmuSlider example1 animated wow slideInUp" data-wow-delay=".5s" style={{height: "227.025px;"}}>
                <div className="wmuSliderWrapper">
                    <article style={{position: "absolute;" , width: "100%;", opacity:" 0;"}}>
                        <div className="banner-wrap">
                            <div className="row">

                                <div className="col-md-6 client-grids">
                                    <p> Web Developer</p>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3  col-6 c-img">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OJ-zP363wkxMjd5AhIECl1fA3ngG6vyS1MYT8U8MNuMMvH2qmVj0fhiBJYFZcIwf5UM&usqp=CAU" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-3  col-6 c-info">
                                            <h4>Victoria</h4>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 client-grids">
                                    <p>Software Developer</p>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3  col-6 c-img">
                                            <img src="http://alpharealtymarketing.com/assets/images/team.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-3  col-6 c-info">
                                            <h4>Oliver </h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article style={{position: "absolute;" , width: "100%;", opacity:" 0;"}}>
                        <div className="banner-wrap">
                            <div className="row">
                                <div className="col-md-6 client-grids">
                                    <p>Front-end Developer</p>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3  col-6 c-img">
                                            <img src="http://alpharealtymarketing.com/assets/images/team.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-3  col-6 c-info">
                                            <h4>Elizabeth</h4>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 client-grids">
                                    <p>Back-end Developer</p>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3  col-6 c-img">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OJ-zP363wkxMjd5AhIECl1fA3ngG6vyS1MYT8U8MNuMMvH2qmVj0fhiBJYFZcIwf5UM&usqp=CAU" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-6 c-info">
                                            <h4>Marley</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Team
