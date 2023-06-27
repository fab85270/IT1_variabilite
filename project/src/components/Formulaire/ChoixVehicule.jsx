import React, { useState } from 'react';
import boiteManuelle from '../../Images/voitureManuelle.png';
import boiteAuto from '../../Images/voitureAuto.png';


function ChoixVehicule(){
    
  /* Definition des constantes */
  const [selectedImage, setSelectedImage] = useState(null);
  const voitureManuelle = 'https://fr.freepik.com/https://img.freepik.com/vecteurs-premium/sourire-dessin-anime-voiture-rouge-blanc_29190-4845.jpg?w=2000photos-vecteurs-libre/voiture-dessin-anime';
  const voitureAuto = 'https://fr.vecteezy.com/art-vectoriel/3236135-dessin-anime-voiture-coulehttps://static.vecteezy.com/ti/vecteur-libre/p3/3236135-dessin-anime-voiture-couleur-brillante-illustration-pour-enfants-gratuit-vectoriel.jpgur-brillante-illustration-pour-enfants';
  

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
    <div>
      <h1>Choisir un des deux modèles de voiture : manuelle ou automatique</h1>
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          <img
            src={boiteAuto}
            alt="Voiture Automatique"
            className={selectedImage === 'image1' ? 'selected' : ''}
            onClick={() => handleImageClick('image1')}
          />
          <img
            src={boiteManuelle}
            alt="Voiture Manuelle"
            className={selectedImage === 'image2' ? 'selected' : ''}
            onClick={() => handleImageClick('image2')}
          />
        </div>
        <button type="submit">Soumettre votre choix</button>
      </form>
    </div>
  );
};


export default ChoixVehicule;
    