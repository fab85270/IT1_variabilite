
import React,{useContext} from 'react';
import {UserContext} from '../../Context/UserContext';
import { Form, Button } from 'react-bootstrap';




function Login() {

    /* Récupérer méthode de UserContext pour changer les valeurs du contexte */
    const{adresseMail,mdp,changeContexteUser,setAdresseMail,setMdp} = useContext(UserContext);

      /* Méthode pour vérifier que l'utilisateur est bien authentifié */
      const handleSubmit = () => {

        /* Les différentes étapes à réaliser (selon moi) 
        Etape 1 : Récupérer les données saisies dans le formulaire 
        Etape 2 : Regarder si le mec essaie de se connecter au produit Bicicle ou Bagnole vu que c'est le même formulaire 
        Etape 3 : Regarder si le couple email/mdp existe dans fichier JSON ou API BDD (API sera surement le plus simple)
        Etape 4 : Si il existe, recupérer les informations : nom, prénom, tel associé à ce couple mdp/adresse mail pour alimenter le 
        contexte user 
        Etape 5 : Si l'utilisateur n'existe pas, afficher une alert à l'écran (vous n'êtes pas autorisé à vous connecter */
          
        //if le mec est bien dans fichier JSON ou BDD 
        // on va chercher l'ensemble de ses infos (tel, nom, prenom) => pour tout avoir 
        // on ajouter ces informations dans le contexte avec la méthode suivante : 
        //changeContexteUser(adresseMail,mdp,nom,prenom,numeroTel)
        // else (le cas ou le cas n'est pas reconnu, on va supprimer les données adresse et mdp stockée dans le userContexte) avec : 
        //changeContexteUser("","","","","")

  };
  return (
    <div>
      <h1>Connexion</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nom">
          <Form.Label>Adresse Mail : identifiant </Form.Label>
          <Form.Control
            type="email"
            value={adresseMail}
            onChange={(e) => setAdresseMail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="prenom">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </div>
  );
}

export default Login;
