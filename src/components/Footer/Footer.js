import React from 'react';
import './footer.css'



const Footer = () => {
    return (
        <section>
            <div className="__footer">
                <footer className="py-5">
                    <div className="container">
                        <div className="_info-grids">
                            <div className="_-grid-left _-grid-right text-center">
                                <div className="social mb-4">
                                    <ul>
                                        <li><a href="http://facebook.com/profileme"><span className="fa mr-2 fa-facebook"></span></a></li>
                                        <li><a href="http://facebook.com/profileme"><span className="fa mr-2 fa-facebook"></span></a></li>
                                        <li><a href="http://facebook.com/profileme"><span className="fa mr-2 fa-facebook"></span></a></li>
                                        <li><a href="http://facebook.com/profileme"><span className="fa mr-2 fa-facebook"></span></a></li>
                                        <li><a href="http://facebook.com/profileme"><span className="fa mr-2 fa-facebook"></span></a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copyright text-center">
                            <p> © {new Date().getFullYear()} ProfileMe. All Rights Reserved  </p>
                        </div>
                    </div>
                </footer>
            </div>

        </section>
    )
}

export default Footer;
