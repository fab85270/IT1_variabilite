import React, { useState,useContext, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { PermisContext } from '../../Context/PermisContext';
import './verificationPermis.css'

const VerificationPermis = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const{permis,setPermis} = useContext(PermisContext);
  console.log("dans permis",permis);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setLoading(true);
    if (file) {
        setLoading(true);
        setText("Permis validé")
        setPermis(true);
        console.log("hbafiueahbfdiauzhb",permis);
        setLoading(false);
        // try{
        //     //const { data } = await Tesseract.recognize(file, 'eng');
        //     //rajouter fonctionnalité lorsque permis est validé rajouter une ligne dans profil
        //     //Si on ne trouve pas de vrai IA "Simulation de permis validé"
        //     //setText(data.text);
        //     setText("Permis validé")
        //     setPermis(true);
        //     console.log("hbafiueahbfdiauzhb",permis);
        //     setLoading(false);
        // }catch(error){
        //     setText('Erreur')
        //     setError('Erreur lors de la reconnaissance de l\'image. Veuillez réessayer avec une autre image.')
        //     setLoading(false);
        //     setPermis(false);
        //     alert("viens pas ici")
        // }
    }
    alert('Permis => '+permis);
  };

  useEffect(() => {
    // This code will execute after the state update
    console.log("permis:", permis);
  }, [permis])
  return (
    <div id='box'>
        <div id='verifPermis'>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div id='etat'>
            {loading && <div id='chargement'>Chargement...</div>}
            {error && <div className="error">{error}</div>}
            {permis && <div id='permisValide'>{text}<br/><img src="https://cdn2.iconfinder.com/data/icons/happy-running-errands-3/512/happy_running_errands_drive-512.png"></img></div>}
        </div>
    </div>
    
  );
};

export default VerificationPermis;
