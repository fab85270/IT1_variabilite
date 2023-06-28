import React,{useContext} from 'react';
import {Link } from "react-router-dom";
import logoLigneProduit from '../../Images/logoImage.jpg';
import {UserContext} from '../../Context/UserContext';
import {ConnectionContext} from '../../Context/ConnectionContext';
import './Navbar.css';

const NavBar = () => {

    /* Récupération de la méthode changeContexteUser du context UserContext */
    const{nom,prenom,changeContexteUser} = useContext(UserContext);
    const{isConnected,setIsConnected} = useContext(ConnectionContext);

    const handleClick = () => { // fonction appelée quand on clique sur le lien
        changeContexteUser("","","","","");
        if(isConnected == true){
            setIsConnected(false);
        }
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
                        <Link to="/car/inscription" className="btn" onClick={handleClick}>
                            RunYourCar
                        </Link>
                        <Link to="/bike/inscription"  className="btn" onClick={handleClick}>
                            RunYourBycicle
                        </Link> 
                        {
                            isConnected && (
                                <Link to="/"  className="btn">
                                    Manage Profil
                                </Link> 
                            )
                        }
                        {   isConnected && (
                            <span style={{ color: 'white' }}>
                                Welcome {nom} {prenom}
                            </span> 
                        )
                            
                        }
                    </ul>
                </nav>
            </div>
        );
    }
export default NavBar;

