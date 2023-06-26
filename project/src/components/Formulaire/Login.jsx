import React from 'react';

/* Ajouter une méthode pour récupérer dans JSON et vérifier si la personne existe
-> authoriser la connexion et rediriger vers l'application (Bicicle ou Bagnole) si la personne est connue */

function Login() {
  return (
    <div>
      <h1>Connexion</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
