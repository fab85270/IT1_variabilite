import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import ChoixVehicule from '../components/Formulaire/ChoixVehicule';


function VoiturePage(){ 
  
  return (      
    <LayoutGlobal children={
        <>   
             <ChoixVehicule/>
        </>       
    }></LayoutGlobal>
      )    
    } 
export default VoiturePage;

  