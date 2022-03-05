import React from 'react';
import Slider from 'react-slick';
import Sliderslick from '../Sliderslick';
import Sdata from '../Sdata';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';


const Homeupcoming = () => {

    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        speed:200,

    };
    return (<>
        <div className="container-fluid choose_div ">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="choose_heading ">
                        <p>Discover</p>
                        <h1>upcoming events</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="container-slick">
                        <Slider {...settings}>
                            {
                        Sdata.map((val,id)=>{
                            return(
                            <Sliderslick  imgname={val.imgSrc} key={id}/>
                        )

                    })

                    }
                        </Slider>
                    </div>

                </div>
            </div>

        </div>
    </>);
}

export default Homeupcoming;