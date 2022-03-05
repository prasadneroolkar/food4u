import React from 'react';
import bannerplate from './img/banner-plate.png';
import Navbar from './Navbar';

const Header = () => {
    return (<>
       
        <div className=" header-background">
        <Navbar />

            <div className="row">
                <div className="col-lg-12 ">
                <section className="header" id="header-id">

                  
                    <div className="container mt-5">
                        <div className="row">
                            <div className=" col-lg-6">
                                <div className="banner-text">
                                    <h1>are you hungry?</h1>
                                    <h2>dont wait!</h2>
                                    <span>let start to order food now</span>

                                    <div className="row mt-4 d-flex justify-content-center align-items-center">
                                        <div className=" col-7 mx-auto banner-p">
                                            <p className="happy-hr-text">this monday happy hours</p>
                                            <p className="offer-banner-text">1+1=3</p>
                                            {/* <div className="row">
                                                <div className="col-4"><p className="happy-hr-text">this monday happy hours</p></div>
                                                <div className="col-4"><p className="offer-banner-text">1+1=3</p></div>
                                                </div> */}

                                        </div>
                                        <div>
                                            <button className="btn btn-order">order now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-lg-6 text-center">
                                <div className="banner-img-left">
                                    <img src={bannerplate} alt="img" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        </div>
    </div>


    </>)
}

export default Header;
