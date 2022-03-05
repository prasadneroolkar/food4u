import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contact';
import Header from './Header';
import Home from '../src/Home/Home';
import Menu from './Menu';
import Navbar from './Navbar';
import Ourstory from './Ourstory';
import Footer from './Footer';

const App = () =>{
    return(<>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/menu" component={Menu}/>
        <Route exact path="/ourstory" component={Ourstory}/>
        <Route exact path="/contact" component={Contact}/> */}
        <Redirect to="/"/>
  </Switch>
<Footer/>
    </> )
}

export default App;
