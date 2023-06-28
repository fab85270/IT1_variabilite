
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import './homePage.css'

function HomePage(){ 
  
  
  return (      
    <LayoutGlobal children={
        <>  
          <div id='global'>
            <div id='presentation'>
              <p> Bienvenue sur notre ligne de produit logiciel</p>
            </div>
            <div id='equipe'>
              <p> Projet réalisé par</p>
              <p>Maxence Bodo</p>
              <p>Faboen Countaceau</p>
              <p>Anxhela Joti</p>
              <p>Isuri Kariyawasam</p>
              <p>Sinda Abassi</p>
              <p>Karine Anouti</p>
              <p>Roberto Collantes</p>              
            </div>   
          </div>                 
        </>       
    }></LayoutGlobal>
      )    
    } 
export default HomePage;

  