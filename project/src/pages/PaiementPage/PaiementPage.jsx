
import React from 'react';
import LayoutGlobal from '../../Layout/LayoutGlobal';
import Paypal from '../../components/Payment/paypal/paypal';
import GooglePayForm from '../../components/Payment/GooglePay/GooglePay';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PaiementPage.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function LoginPage(){ 
  
  
  return (      
    <LayoutGlobal children={
      <>      
        <h1 id='titrePage'>Page de Paiement</h1>
        <div id='paiement'>
          <PayPalScriptProvider>
            <Paypal/>
          </PayPalScriptProvider>

          <GooglePayForm/> 
        </div>
      </>       
    }></LayoutGlobal>
  )    
} 
export default LoginPage;

  