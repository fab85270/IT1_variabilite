import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const VerificationPermis = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setText('');
    setLoading(true);
    if (file) {
        setLoading(true);
        setError('');
        try{
            const { data } = await Tesseract.recognize(file, 'eng');
            //rajouter fonctionnalité lorsque permis est validé rajouter une ligne dans profil

            //Si on ne trouve pas de vrai IA "Simulation de permis validé"
            //setText(data.text);
            setText("Permis validé")
            setLoading(false);
        }catch(error){
            setText('Erreur')
            setError('Erreur lors de la reconnaissance de l\'image. Veuillez réessayer avec une autre image.')
            setLoading(false);
        }
    }
  };

  return (
    <>
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            
            {loading && <div id='chargement'>Chargement...</div>}
            {error && <div className="error">{error}</div>}
            {!loading && !error && <div id='permisValide'>{text}</div>}
        </div>
    </>
    
  );
};

export default VerificationPermis;
