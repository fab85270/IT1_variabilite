import React,{useContext} from 'react';
import {Link } from "react-router-dom";
import logoLigneProduit from '../../Images/logoImage.jpg';
import {UserContext} from '../../Context/UserContext';

import './Navbar.css';


const NavBar = () => {

    /* Récupération de la méthode changeContexteUser du context UserContext */
    const{changeContexteUser} = useContext(UserContext);

    const handleClick = () => { // fonction appelée quand on clique sur le lien
        
        changeContexteUser("","","","","");
      };

        return (
            <div className="divNav">
                <nav>
                    <ul className="fonction">
                        <li>
                            <Link to="/" className="btn" onClick={handleClick}>
                                <img 
                                    alt="RentYourVehicle"
                                    src={logoLigneProduit}
                                    wight="45"
                                    height="45"
                                />   
                            </Link>  
                        </li>    
                        <Link to="/" className="btn" onClick={handleClick}>
                           Home
                            
                        </Link>
                        <Link to="/inscription" className="btn" onClick={handleClick}>
                            RunYourCar
                        </Link>
                        <Link to="/inscription"  className="btn" onClick={handleClick}>
                            RunYourBycicle
                        </Link> 
                    </ul>
                </nav>
            </div>
        );
    }
export default NavBar;

