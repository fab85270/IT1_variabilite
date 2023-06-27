import React, { useState } from 'react';
import boiteManuelle from '../../Images/voitureManuelle.png';
import boiteAuto from '../../Images/voitureAuto.png';
import './ChoixVehicule.css';


function ChoixVehicule(){
    
  /* Definition des constantes */
  const [selectedImage, setSelectedImage] = useState(null);
  
  

  /* Méthode qui va selectionner l'image quand on aura cliqué dessus*/
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  /* Méthode appelée lorsque le formulaire sera soumit : permettra de définir qu'elle image à été séléctionée */
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO. 
    console.log('Image sélectionnée :', selectedImage);
  };

  return (
    <div className="container">
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
          </div>
          <button type="submit">Soumettre votre choix</button>
        </form>
      </div>
    </div>
  );
};


export default ChoixVehicule;
    