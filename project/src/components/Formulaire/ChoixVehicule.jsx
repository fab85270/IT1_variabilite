import React, { useState } from 'react';
import boiteManuelle from '../../Images/boiteManuelle.jpg';
import boiteAuto from '../../Images/boiteAuto.jpg';

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
        <div>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={() => handleOptionClick('option1')}
            />
            <img src={boiteManuelle} alt="Boite manuelle" />
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={() => handleOptionClick('option2')}
            />
            <img src={boiteAuto} alt="Boite automatique" />
          </label>
        </div>
        <button type="submit">Soumettre</button>
      </form>
      );
    }

export default ChoixVehicule;
    