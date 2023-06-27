
import React from 'react';
import LayoutGlobal from '../../Layout/LayoutGlobal';
import Payment from '../../components/Payment/Payment';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PaiementPage.css'

function LoginPage(){ 
  
  
  return (      
    <LayoutGlobal children={
      <>      
        <h1 id='titrePage'>Page de Paiement</h1>
        <div id='paiement'>
          <Payment/>
        </div>
      </>       
    }></LayoutGlobal>
  )    
} 
export default LoginPage;

  