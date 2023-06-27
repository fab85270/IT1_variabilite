import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */

 export const UserContext = createContext({
    adresseMail: "",
    mdp: "",
    nom: "",
    prenom: "",
    numeroTel: "",
    setIdentifiant: () => {},
    setNom: () => {},
    setPrenom: () => {},
    setNumero: () => {},
    setMdp: () => {} // à compléter par numéro de téléphone, etc si besoin.   
})

export const UserContextProvider = ({children}) => { 
  
    //* Utilisation des hooks (context,états) */
    const [adresseMail,setAdresseMail] = useState("");
    const [mdp,setMdp] = useState("");
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [numeroTel,setNumero] = useState("");

    /* Fonction qui permet de changer le contexte */
    const changeContexteUser = (adresseMail,mdp,nom,prenom,numeroTel) => { // Méthode pour changer le contexte du user

        /* Le contexte sera mise à jour lors de l'inscription, connexion ou modification des informations utilisateurs 
         A noter que l'adresse mail, faisant office d'identifiant, ne pourra être modifié */
        
        setMdp(mdp);  
        setAdresseMail(adresseMail); //
        setNom(nom);
        setPrenom(prenom);
        setNumero(numeroTel);
        
    }
      return (<UserContext.Provider value={{adresseMail,mdp,nom,prenom,numeroTel,changeContexteUser}}> {children} </UserContext.Provider>)
  };
  
  