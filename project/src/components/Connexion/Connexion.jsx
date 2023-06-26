import React, {useContext,useState} from 'react';
import { useNavigate} from "react-router-dom";
import './style.css';

const Connexion = ({value,checkSub,checkChange}) =>{

  /* Définition des valeurs dans le dropdown */
const data = [
      {value:1, name: 'Maxence'},
      {value:2, name: "Abel"},
      {value:3, name: "Fabien"},
      {}
   ];

    /* Afin de rediriger vers de nouvelles pages sans la rafraichir */
    let navigate = useNavigate(); 
    
    /* Méthode gestion annulation saisie formulaire de connexion */
    const annuler = () =>{
      navigate("/");
    }
    return (
        <form class="connect" onSubmit={(event)=> checkSub(event)}>
          <div>
            <label>
                Please choose your login account
                <div>
                    <select value={value} onChange={(event)=> checkChange(event)}>
                      {data.map((item,idx) => <option key ={idx} value={item.value}>{item.name}</option>)}
                    </select>
                </div>
                <br/>
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
            <button onClick={() => annuler()} className="AnnulerConnection">     
                 Cancel
            </button>   
          </div>     
        </form>
      );
}
export default Connexion;