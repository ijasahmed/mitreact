import React from 'react'
import  "./Services.css"
function Services() {
    return (
        <div>
        <div className="serives py-5" id="services">
        <div className="container py-xl-5 py-lg-3">
            <div className="text-h3 text-center">
                <h3>OUR SERVICES</h3>
            </div>
            <div className="row justify-content-center " id="web">
                <div className="col-md-6 order-1 p-3 bg-light aos-init aos-animate" data-aos="fade-right">
                    <h3 style={{fontWeight: "700px;",color:'rgb(202, 49, 49)'}}>Web Application Development</h3><hr/>
                    <p style={{textAlign: "justify;"}}>We follow robust industry processes in order to deliver best services to our clients
                         for their software Development needs. We make sure our processes are strictly followed and at same time are flexible 
                         enough to accommodate each of our client’s application requirements. Your website is the face of your business. Our professional
                          web designers can make the unique and creative website which shows the credibility of your business and narrates your brand story</p>
                </div>
                        <div className="col-md-6 order-2  bg-light">
                            <img className="p-3 pt-5" src="https://cdn.mindbowser.com/wp-content/uploads/2020/12/05200922/Custom-Web-Development-Company_1_.svg" alt="web" style={{width: "400px;" , height:"400px"}}/>
                        </div>
           </div>
           <div className="row justify-content-center " id="mobile">
               <div className="col-md-6 order-3  bg-light">
                   <img className="p-2 pt-5" src="https://www.geeksscan.com/wp-content/uploads/2020/12/Android-App-Development-1.png" alt="web" style={{width: "400px;" , height:"400px"}}/>
                </div>
                <div className="col-md-6 order-4 p-3 bg-light aos-init aos-animate" data-aos="fade-right">
                    <h3 style={{fontWeight: "700px;",color:'rgb(202, 49, 49)'}}>Android Application Development</h3><hr/>
                    <p style={{textAlign: "justify;"}}>Apps are now a conventional, trusted way to deliver content and services. But in a crowded 
                        market, how does a mobile app become useful, relevant, and valued so it enchant and retains users? 
                        Apps provide opportunities to build around user needs and grow long-term and healthy relationships with loyal customers. 
                        Our inclusive range of custom Android app development services boosts your business with advanced technology and affordable
                         cost and helps you to accomplish your goals.</p>
                </div>
            </div>
        <div className="row justify-content-center " id="web">
            <div className="col-md-6 order-1 p-3 bg-light aos-init aos-animate" data-aos="fade-right">
                <h3 style={{fontWeight: "700px;",color:'rgb(202, 49, 49)'}}>E-commerce Web Development</h3><hr/>
                <p style={{textAlign: "justify;"}}>We develop and design scalable websites with personalized and user-friendly features. 
                    These websites can give you a wide exposure for your business. By aligning to your business objectives, we aspire 
                    to deliver a solution that is dynamic, functional and tailored to your needs. 
                    Bring to us your most intricate business challenges, and we will turn them into real digital commerce breakthroughs.</p>
            </div>
                    <div className="col-md-6 order-2  bg-light">
                        <img className="p-3 pt-5" src="https://www.technoiconic.com/assets/images/e-Commerce-development.png" alt="web" style={{width: "400px;" , height:"400px"}}/>
                    </div>
       </div>
       <div className="row justify-content-center " id="mobile">
           <div className="col-md-6 order-3  bg-light">
               <img className="p-2 pt-5" src="https://neilpatel.com/wp-content/uploads/2021/07/digital-marketing_featured-image.png" alt="web" style={{width: "400px;" , height:"400px"}}/>
            </div>
            <div className="col-md-6 order-4 p-3 bg-light aos-init aos-animate" data-aos="fade-right">
                <h3 style={{fontWeight: "700px;",color:'rgb(202, 49, 49)'}}>Digital marketing</h3><hr/>
                <p style={{textAlign: "justify;"}}>Digital marketing is the component of marketing that utilizes internet and online based digital 
                     technologies such as desktop computers,mobile phones and other digital media and platforms to promote products and 
                      services. Its development during the 1990s and 2000s changed the way brands and businesses use technology for marketing. 
                       As digital platforms became increasingly incorporated into marketing plans and everyday life, and as people 
                       increasingly use digital devices instead of visiting physical shops.</p>
            </div>
       </div>
    </div>
 </div>
 </div>
    )
}

export default Services
