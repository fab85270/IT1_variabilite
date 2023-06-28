
import Card from 'react-bootstrap/Card'; 
import './LayoutGlobal.css';
import React from "react";
import NavBar from '../components/Navbar/Navbar';


const LayoutGlobal= ({children}) =>{


    return(
                <div className="layoutGlobal"> 
                <NavBar/>  
                    {children} 
                    <Card className='footer-container'>
                        <Card.Footer className="text-muted">
                            <div clasNames="text-center">
                                © 2023 Copyright: Projet MASTER 2 MIAGE - IT1 variabilité    
                            </div>
                        </Card.Footer>
                    </Card> 
                </div> 
    );
}
export default LayoutGlobal;