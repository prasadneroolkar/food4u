import React from 'react';
import Footerlogo from '../src/img/Footerlogo.png'
import locationimg from '../src/img/Location-Icon.png';
import emailimg from '../src/img/Email.png';

const Footer = () => {
    return (<>
        <footer>
            <div className="container-fluid footer_div_img">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="footer_div">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="img-section">
                                        <img src={Footerlogo} className="img-fluid" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>


                                    </div>
                                </div>
                                <div className="col-lg-6 contact-div">
                                    <div className="contact-section">
                                        <div><img src={locationimg} alt="locate" /><span>Main Road, Building Name, Country</span></div>
                                        <div><img src={emailimg} alt="locate" /><span>info@companyname.com</span></div>
                                    </div>

                                </div>
                                <p class="copy_right">
                                    Company Name 2020.All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>)
}

export default Footer;