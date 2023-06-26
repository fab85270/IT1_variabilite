
import React, {useContext, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import logoLigneProduit from '../../Images/logoImage.jpg';

import './Navbar.css';


const NavBar = () => {

        return (
            <div className="divNav">
                <nav>
                    <ul className="fonction">
                        <li>
                            <Link to="/" className="btn">
                                <img 
                                    alt="RentYourVehicle"
                                    src={logoLigneProduit}
                                    wight="45"
                                    height="45"
                                />   
                            </Link>  
                        </li>    
                        <Link to="/"  className="btn">
                           Home
                            
                        </Link>
                        <Link to="/inscription" className="btn">
                            RunYourCar
                        </Link>
                        <Link to="/inscription"  className="btn">
                            RunYourBycicle
                        </Link> 
                    </ul>
                </nav>
            </div>
        );
    }
export default NavBar;

