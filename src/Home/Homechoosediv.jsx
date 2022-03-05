import React from 'react';
import Cdata from '../Cdata';
import Chooseenjoy from '../Home/Chooseenjoy';
import spaghetti from '../img/Spaghetti.png';

const Homechoosediv = () => {
    return (<>
        <div className="ch_bg_image">
            <div className="container-fluid choose_div ">
                <div className="spa-img">
                    <img className="img-fluid" src={spaghetti} />
                </div>
                <div className="row">
                    <div className="col-lg-10 mx-auto">

                        <div className="choose_heading ">
                            <h1>Choose & enjoy</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="row ">
                            {
                                Cdata.map(function (value, id) {
                                    return (
                                        <Chooseenjoy key={id} itemimg={value.imgsrc} itemcap={value.imgcaption} itemdesc={value.imgdesc} />)

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Homechoosediv;