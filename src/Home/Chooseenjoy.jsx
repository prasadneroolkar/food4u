import React from 'react';
import { NavLink } from 'react-router-dom';

const Chooseenjoy =(props)=>{
    return(<>
    
        <div className="col-lg-4 col-sm-12 gy-5">
    
                    <div className="choose_menu text-center">
                        <figure>
                            <img src={props.itemimg} alt="menus" className="img-fluid"/>
                        </figure>
                        <div className="menu_caption">
                            <h2>{props.itemcap}</h2>
                            <p>{props.itemdesc}</p>
                            <NavLink  to="#" className="btn btn-order color-btn">order now</NavLink> 
                        </div>
                    </div>
                    </div>
                    

    </>)
}

export default Chooseenjoy;