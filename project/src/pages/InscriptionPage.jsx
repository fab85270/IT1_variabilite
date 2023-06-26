
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Inscription from '../components/Formulaire/Inscription';



function InscriptionPage(){ 
  
  
  return (      
    <LayoutGlobal children={
      <>
        <Inscription/>
        <p>test</p>
      </>
    }></LayoutGlobal>
      )    
    } 
export default InscriptionPage;

  