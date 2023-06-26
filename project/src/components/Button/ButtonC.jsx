
import {Button} from 'react-bootstrap';




function ButtonC({text,clickChange}){
   
    return (
        /* Incrémentation du compteur "clicked" avec +1 lorsque on effectue un click sur ce bouton */
        /* Lorsque de l'incrementation, on peut pas faire clicked++ car c'est une constante */
        <>
           <Button variant="outline-secondary" onClick={(event)=> clickChange(event)}>
                    {text}
            </Button>
        </>     
    )
}

export default ButtonC;