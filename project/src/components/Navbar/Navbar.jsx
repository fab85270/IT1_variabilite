
import React, {useContext, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { BoutonContext } from '../../Context/BoutonContext';
import ButtonC from '../Button/ButtonC';
import logoLigneProduit from '../../Images/logoImage.jpg';

import './Navbar.css';


const NavBar = () => {

    /* Utilisation des hooks(contexts,states) */
    
    const {clicked,changeContexteBouton} = useContext(BoutonContext);
    
    let navigate = useNavigate(); 

    /* Definition du mot clé de recherche */
    let search ="";
    if(clicked){
        search = "Disconnect";
    } else{
        search = "Connect";
    }

    /* Fonction des actions réalisées suite au click du bonton connexion/déconnection  */

    const click = async() => { //C'est bien de ne mettre que une fonction dans un "OnClick d'un boutton"

        /* Redirection vers la page du formulaire de connection */
        navigate("/connect");

        if(clicked){
            changeContexteBouton(); //Afin de changer la valeur du context du bouton (se Connecter/Deconnecter)
            navigate("/");
        }
    }
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
                        <Link to="/" className="btn">
                            RunYourCar
                        </Link>
                        
                        <Link to="/"  className="btn">
                            RunYourBycicle
                        </Link> 
                        <li><ButtonC clicked={clicked} text={search} clickChange={() => {click()}} className="connexion/decoButton">
                            </ButtonC>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        );
    }
export default NavBar;

