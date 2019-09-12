import React from 'react';
import { Container, Row, Col,} from 'reactstrap';
import './features.css'
// import professionalavatars from "./img/professional-avatars.png";
// import businessPic from './img/professional.png';
// import domains from './img/domains.jpg'



const Features = () => {
    return (
        <section id = "features">
            <Container >
                <Row>
                    <Col><h3 className="text-center features-header"> FEATURES </h3></Col>
                </Row>
                <Row>
                    <section className="features py-5" id="features">
                        <div className="container py-sm-4">

                            <div className="row">
                                <div className="col-lg-4 mt-lg-0 col-md-6">
                                
                                    {/* <img  src={professionalavatars}  className="img-fluid" alt="" /> */}
                                    <div className="features-info">
                                        <h4 className="mb-3"> Promote Yourself.</h4>
                                        <p className="">A simple, yet professional place to showcase who you are and what you do.</p>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-md-0 mt-4 col-md-6">
                                    {/* <img src={businessPic} className="img-fluid" alt="" /> */}
                                    <div className="features-info">
                                        <h4 className="mb-3"> Get One link for everything you do. </h4>
                                        <p className="">Use your link everywhere, online and offline, to promote yourself.</p>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-lg-0 mt-4 col-md-6">
                                    {/* <img src={domains} className="img-fluid" alt="" /> */}
                                    <div className="features-info">
                                        <h4 className="mb-3">Get Professional domains.</h4>
                                        <p className="">Add a secure, custon domain to your page. Or, map one you already own.</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Row>

                
            </Container>


        </section>
    )
}

export default Features;