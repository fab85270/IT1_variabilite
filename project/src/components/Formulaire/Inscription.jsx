import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


/* Ajouter un bouton en mode "Vous êtes déhà authentifié et qui redirige vers la page de connexion" */

const Inscription = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification des champs obligatoires
    if (!nom || !prenom || !email || !telephone || !motDePasse) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    alert("Inscription réussie !");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="telephone">
          <Form.Label>Numéro de téléphone</Form.Label>
          <Form.Control
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="motDePasse">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
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