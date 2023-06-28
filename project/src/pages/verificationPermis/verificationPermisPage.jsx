import React from 'react';
import LayoutGlobal from '../../Layout/LayoutGlobal';
import VerificationPermis from '../../components/VerificationPermis/verificationPermis';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './verificationPermisPage.css'

function VerificationPermisPage(){ 
  
  
  return (      
    <LayoutGlobal children={
        <>      
          <div id='titre'><h1>Verification permis</h1></div>
          <VerificationPermis/>
        </>       
    }></LayoutGlobal>
      )    
    } 
export default VerificationPermisPage;

  