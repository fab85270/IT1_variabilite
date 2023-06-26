
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Login from '../components/Formulaire/Login';

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

  