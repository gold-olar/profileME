import React from 'react';
import './footer.css'



const Footer = () => {
    return (
        <section>
            <div class="__footer">
                <div class="container">

                    <div class="__footer_grids">

                        <div class="__footer_grid">
                            <div class="col-md-5 __footer_grid_left">
                                <div class="__footer_grid_leftl">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div class="__footer_grid_leftr">
                                    <h4>Location</h4>
                                    <p>Obafemi Awolowo University, Ile-Ife</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            
                            <div class="col-md-5 __footer_grid_left">
                                <div class="__footer_grid_leftl">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div class="__footer_grid_leftr">
                                    <h4>Email</h4>
                                   <p> teamalphadevs@gmail.com </p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div class="__footer_pos">
                    <p>© {new Date().getFullYear()} ProfileMe. All Rights Reserved  </p>
                </div>
            </div>

        </section>
    )
}

export default Footer;