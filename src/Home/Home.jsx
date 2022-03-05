import React from 'react';
import Carosel from './Carosel';
import Homechoosediv from '../Home/Homechoosediv';
import Homeupcoming from './Homeupcoming';
import Mostpopular from './Mostpopular';
import Booktable from './Booktable';

const Home = () => {
    return <>
            <Homechoosediv />
            <Homeupcoming/>
            <Mostpopular/>
            <Booktable/>
        
    </>
}


export default Home;
