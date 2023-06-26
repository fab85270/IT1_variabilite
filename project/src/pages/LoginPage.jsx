
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Login from '../components/Formulaire/Login';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function LoginPage(){ 
  
  
  return (      
    <LayoutGlobal children={
        <>      
          <Login/>
        </>       
    }></LayoutGlobal>
      )    
    } 
export default LoginPage;

  