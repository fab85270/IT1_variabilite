
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import VerificationPermis from '../components/VerificationPermis/verificationPermis';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function VerificationPermisPage(){ 
  
  
  return (      
    <LayoutGlobal children={
        <>      
          <VerificationPermis/>
        </>       
    }></LayoutGlobal>
      )    
    } 
export default VerificationPermisPage;

  