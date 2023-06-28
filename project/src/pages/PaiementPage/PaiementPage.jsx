
import {React, useContext} from 'react';
import LayoutGlobal from '../../Layout/LayoutGlobal';
import Paypal from '../../components/Payment/paypal/paypal';
import GooglePayForm from '../../components/Payment/GooglePay/GooglePay';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PaiementPage.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {PriceContext} from '../../Context/PriceContext';
import { useNavigate } from 'react-router-dom';
import { ConnectionContext } from '../../Context/ConnectionContext';
import { PermisContext } from '../../Context/PermisContext';
import { UserContext } from '../../Context/UserContext';

function PaiementPage(){ 
  
  const{price,setPrice} = useContext(PriceContext); //pour utiliser contexte Prix à payer
  const{isConnected,setIsConnected} = useContext(ConnectionContext); //pour utiliser contexte Prix à payer
  const{permis,setPermis} = useContext(PermisContext); //pour utiliser contexte Prix à payer
  const{changeContexteUser} = useContext(UserContext); //pour utiliser contexte Prix à payer

  /* Initialisation de la redirection sans rafraichissement */
  const navigate = useNavigate(); 

  const handleClick = () => {
    /* On part du principe que le montant sera remis à 0 lorsque ce bouton sera pressé => on ne vérifie pas si la personne à vraiment bien payé */
    setPrice(0);
    setIsConnected(false);
    setPermis(false);
    changeContexteUser("","","","","");

    /* L'utilisateur est redirigé vers le menu principal */
    navigate('/');
    
  };


  return (      
    <LayoutGlobal children={
      <>      
        <h1 id='titrePage'>Page de Paiement</h1>
        <div className="centered">
          <p><strong>Vous avez {price} $ à payer</strong></p>
          <p><u>Veuillez choisir votre mode de paiement :</u></p> 
          <div id='paiement'>
            <PayPalScriptProvider>
              <Paypal/>
            </PayPalScriptProvider>
            <GooglePayForm/> 
          </div>
          <button onClick={handleClick}>Finaliser le paiement</button>
        </div>
      </>       
    }></LayoutGlobal>
  )    
} 
export default PaiementPage;

  