import React, { useState } from 'react';
import boiteManuelle from '../../Images/voitureManuelle.png';
import boiteAuto from '../../Images/voitureAuto.png';
import { useNavigate } from 'react-router-dom';
import './ChoixVehicule.css';


function ChoixVehicule(){
    
  /* Definition des constantes */
  const [selectedImage, setSelectedImage] = useState(null); // pour savoir qu'elle image est séléctionnée
  const [isChecked, setIsChecked] = useState(false); // pour savoir si la case est cochée 

  /* Initialisation de la redirection sans rafraichissement */
  const navigate = useNavigate(); 

  /* Init variable price */

  var price = 0;
  
  /* Méthode utilisée pour gérer le le clic sur une image dans un formulaire */
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  /* Méthode utilisée pour le changement d'état de la case à cocher dans le formulaire */
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  /* Méthode appelée lorsque le formulaire sera soumit : permettra de définir qu'elle image à été séléctionée */
  const handleSubmit = (event) => {
    event.preventDefault();

    if(selectedImage == 'image1'){
      price = 100;
    } else if (selectedImage == 'image1' && isChecked){
      price = 150;
      console.log(2);
    } else if(selectedImage == 'image2'){
      price = 50;
      console.log(3);
    } else if(selectedImage == 'image2' && isChecked){
      price = 70;
      console.log(4);
    }
    
    /* Redirection vers la page de paiement */
    navigate(`/paymentPage?argument=${price}`)

  };
  return (
    <div className="containerBis">
      <div className="centered">
        <h1>Choisir un modèle de voiture : manuel ou automatique</h1>
        <form onSubmit={handleSubmit}>
          <div className="image-container">
            <div>
              <img
                src={boiteAuto}
                alt="Voiture Automatique"
                className={selectedImage === 'image1' ? 'selected' : 'image'}
                onClick={() => handleImageClick('image1')}
              />
              <p>Voiture automatique</p>
            </div>
            <div>
              <img
                src={boiteManuelle}
                alt="Voiture Manuelle"
                className={selectedImage === 'image2' ? 'selected' : 'image'}
                onClick={() => handleImageClick('image2')}
              />
              <p>Voiture manuelle</p>
            </div>
            <label>
              <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
              />
              Souscrire à une assurance complémentaire
            </label>
          </div>
          <button type="submit">Soumettre votre choix</button>
        </form>
      </div>
    </div>
  );
};


export default ChoixVehicule;
    