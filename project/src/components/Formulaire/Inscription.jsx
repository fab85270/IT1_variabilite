import React,{useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import {UserContext} from '../../Context/UserContext';


/* Il n'y aura pas de vérification d'homonymes lors de l'inscription d'un utilisateur */

const Inscription = () => {

  /* Récupération des valeurs et méthode du UserContext */

  const{adresseMail,mdp,nom,prenom,numeroTel,setAdresseMail,setNom,setPrenom,setNumero,setMdp} = useContext(UserContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification de la saisie des champs obligatoires
    if (!nom || !prenom || !adresseMail || !numeroTel || !mdp) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    /*TODOOOO ANXHELA  */
    /*
    1.  Inscrire dans un fichier JSON ou une base  de données les informations de l'utilisateur qui vient de s'enregistrer.
    2.  rediriger vers la page interessante avec navigate (il faut pas de rafraichissement de page sinon le context est perdu).  
    alert("Inscription réussie !");

*/  
  };

  return (
    <div>
      <h2>Inscription Utilisateur</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="prenom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control
            type="email"
            value={adresseMail}
            onChange={(e) => setAdresseMail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="telephone">
          <Form.Label>Numéro de téléphone</Form.Label>
          <Form.Control
            type="tel"
            value={numeroTel}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="motDePasse">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          S'inscrire
        </Button>
      </Form>
    </div>
  );
};

export default Inscription;