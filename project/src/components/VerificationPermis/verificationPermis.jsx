import React, { useState,useContext, useEffect } from 'react';
import { PermisContext } from '../../Context/PermisContext';
import { useNavigate } from 'react-router-dom';
import './verificationPermis.css'

const VerificationPermis = () => {

  /* Definition des constantes */
  const [loading, setLoading] = useState(false);
  const{permis,setPermis} = useContext(PermisContext);

  /* Initialisation de la redirection sans rafraichissement */
  const navigate = useNavigate(); 

  const handleImageUpload = (e) => {

    setLoading(true); // La durée de chargement de l'image. 

    const file = e.target.files[0];

    if (file) { // Vérification que le peris a bien été importé 
        setPermis(true);

          setTimeout(() => { //permet de faire genre on a chargement de 3 secondes de l'image
          setLoading(false);  
        }, 3000); 

        setTimeout(() => { //permet de faire genre on a chargement de 5 secondes avant redirection
          setLoading(false);
          navigate('/car/location/');
        }, 8000); 
        } 
    }
  return (
    <div id='box'>
        <div id='verifPermis'>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div id='etat'>
            <div>{loading && <div id='chargement'>Chargement...</div>}</div>
            <div> {permis && !loading && <div id='permis'><br/>Votre permis est valide, vous allez être redirigé vers la page de location dans 5 secondes<img src="https://cdn2.iconfinder.com/data/icons/happy-running-errands-3/512/happy_running_errands_drive-512.png"></img></div>}</div>
        </div>
    </div>
    
  );
};

export default VerificationPermis;
