
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Inscription from '../components/Formulaire/Inscription';
import { useNavigate } from 'react-router-dom';



function InscriptionPage(){ 
  
  const navigate = useNavigate(); 
  const category = location.pathname.split("/")[1];

  const handleButtonClick = () => {
    navigate('/' + category + '/login');
  };
  
  return (      
    <LayoutGlobal children={
      <>
        <Inscription/>
        <button onClick={handleButtonClick}> Vous possédez déjà un compte ? </button>
      </>
    }></LayoutGlobal>
      )    
    } 
export default InscriptionPage;

  

