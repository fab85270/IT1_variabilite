import React, {useContext,useState} from 'react';
import { useNavigate} from "react-router-dom";
import Form_Connect from "../components/Connexion/Connexion.jsx";
import { BoutonContext } from '../Context/BoutonContext';

const PageConnect = () => {
    
    /* Use context utile pour
        La connexion
        Le choix du profil de connexion
    */
    
    const {clicked,changeContexteBouton} = useContext(BoutonContext);
    const[selectedValue,setSelectedValue] = useState("1");
    let navigate = useNavigate(); 
 
    /* Méthode pour récupérer le compte de la personne selectionnée */
    const recupererPersonne = (event) => {
        setSelectedValue(event.target.value);
    }

     /* Méthode pour se connecter au compte choisit */
    const connexionCompte = async (event) =>{
        event.preventDefault();
         /* On récupère l AccessToken de l'API spotify pour le compte désiré */

            changeContexteBouton(); //Pour changer la valeur du contexte
            navigate("/spotiTherMe");
    }
    return( 
                <Form_Connect
                    value={selectedValue}
                    checkSub={connexionCompte}
                    checkChange={recupererPersonne}
                >     
                </Form_Connect>
        );
}
export default PageConnect;