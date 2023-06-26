
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import imageVelo from '../Images/velo.jpg';
import imageVoiture from '../Images/voiture.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function HomePage(){ 
  
  
  return (      
    <LayoutGlobal children={
        <>      
          <div>
            <p> Bienvenue sur notre site de réservation "donner un nom"
              + compléter avec les membres du groupes 
              + compléter avec les rôles de chacuns
              + voir si vous avez des idées  </p>
          </div>                    
        </>       
    }></LayoutGlobal>
      )    
    } 
export default HomePage;

  