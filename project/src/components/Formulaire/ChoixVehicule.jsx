import React, { useState } from 'react';
import boiteManuelle from '../../Images/voitureManuelle.png';
import boiteAuto from '../../Images/voitureAuto.jpg';

function ChoixVehicule(){
    
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
      };

      const handleSubmit = (event) => { // fonction appeler lorsqu'il y a soumission du formulaire
        event.preventDefault();
        
        // Le formulaire ne peut être envoyé vide 
        if (selectedOption == ''){
            alert("Veuillez saisir une des deux options (manuelle/automatique");
        }else {
            //TODO 
            // Inscrire la location dans un fichier JSON pour sauvegarde (voir ce que Anxhela a fait)
            // Dans ce fichier JSON, sera indiqué les informations propre de la personne, une date de début, état = (en cours/terminée)
            // ainsi qu'une date de fin (qui sera renseignée quand la location sera terminée)
            //+ ajouter la gestion de l'assurance (optionnel -)
        }
  
      };

      return (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <img src={boiteManuelle} alt="Image 1" style={{ width: '100%', height: 'auto' }} />
                <p>Description de l'image 1</p>
            </div>
            <div>
              <img src={boiteAuto} alt="Image 2" style={{ width: '20%', height: 'auto' }}/>
                <p>Description de l'image 2</p>
            </div>
          </div>
        <button type="submit">Soumettre</button>
      </form>
      );
    }

export default ChoixVehicule;
    