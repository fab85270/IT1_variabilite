
import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Velo from '../components/Velo/Velo';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


function VeloPage(){ 
  
  
  return (      
    <LayoutGlobal children={
        <>      
            <Velo/>
        </>       
    }></LayoutGlobal>
      )    
    } 
export default VeloPage;

  