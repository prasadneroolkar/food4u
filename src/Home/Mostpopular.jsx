import React from 'react';
import pop1 from '../img/pop1.jpg';
import pop2 from '../img/pop2.jpg';
import pop3 from '../img/pop3.jpg';

const Mostpopular = () => {
    return (<>
        <div className="container-fluid choose_div ">
            <div className="row">
                <div className="col-lg-10  col-12 mx-auto">
                    <div className="row gx-4">
                        <div className="col-lg-6 col-12 mx-auto text-center">
                            <div>
                                <figure>
                                    <img src={pop1} className="img-fluid"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mx-auto text-center d-flex justify-content-center align-items-center flex-wrap">
                            <div> <figure>
                                <img src={pop2}  className="img-fluid"/>
                            </figure></div>
                            <div> <figure>
                                <img src={pop3} className="img-fluid"/>
                            </figure></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    </>)
}

export default Mostpopular;