import react from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './img/Logo.png';

const Navbar = () => {
    return (<>
        
                    <nav className="navbar navbar-expand-lg navbar-light padding-cl">
                        <div className="container-fluid ">
                            <a className="navbar-brand" href="#"><img src={Logo} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-ul">
                                    <li className="nav-item">
                                        <NavLink exact to="/" className="nav-link"  >Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact to="/menu" className="nav-link" >Menu</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact to="/ourstory" className="nav-link" >Our Story </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact to="/contact" className="nav-link">Contact Us </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
              


    </>)
}


export default Navbar;