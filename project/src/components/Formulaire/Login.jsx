import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { ConnectionContext } from '../../Context/ConnectionContext';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {

    /* Récupérer méthodes de UserContext et ConnectionContext pour changer les valeurs du contexte */
    const { adresseMail, mdp, changeContexteUser, setAdresseMail, setMdp } = useContext(UserContext);
    const { isConnected, setIsConnected } = useContext(ConnectionContext);
    const URL = "http://localhost:3001/"
    const category = location.pathname.split("/")[1];

    /* Initialisation de la redirection sans rafraichissement */
    const navigate = useNavigate();
    // const handleNavigation = () => {
    // navigate("/paymentPage");
    // navigate("/paymentPage");
    // };


    /* Méthode pour vérifier que l'utilisateur est bien authentifié */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!adresseMail || !mdp) {
            alert("Veuillez remplir tous les champs obligatoires.");
            changeContexteUser("", "", "", "", "");
            return;
        }

        const newUser = {
            adresseMail: adresseMail,
            mdp: mdp
        };

        fetch(URL + category + '/getUserByEmail?email=' + `${adresseMail}`)
            .then(response => response.json())
            .then(data => {
                const userInfo = data;
                if (data.error) {
                    alert("Utilisateur non trouvé");
                } else {
                    fetch(URL + category + '/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.error) {
                                alert("Identifiants incorrets");
                            } else {
                                alert("Utilisateur connecté !")
                                setIsConnected(!isConnected)
                                changeContexteUser(adresseMail, mdp, userInfo.nom, userInfo.prenom, userInfo.numeroTel)
                                navigate("/" + category + "/location");
                                // navigate("/bike/inscription");
                                ;

                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        /* Les différentes étapes à réaliser (selon moi) 
        Etape 1 : Récupérer les données saisies dans le formulaire 
        Etape 2 : Regarder si le mec essaie de se connecter au produit Bicicle ou Bagnole vu que c'est le même formulaire 
        Etape 3 : Regarder si le couple email/mdp existe dans fichier JSON ou API BDD (API sera surement le plus simple)
        Etape 4 : Si il existe, recupérer les informations : nom, prénom, tel associé à ce couple mdp/adresse mail pour alimenter le 
        contexte user 
        Etape 5 : Si l'utilisateur n'existe pas, afficher une alert à l'écran (vous n'êtes pas autorisé à vous connecter */

        /*if le mec est bien dans fichier JSON ou BDD 
         1. on va chercher l'ensemble de ses infos (tel, nom, prenom) => pour tout avoir 
         2. on ajoute ces informations dans le contexte avec la méthode suivante : 
         3. changeContexteUser(adresseMail,mdp,nom,prenom,numeroTel)
         4. il faut aussi init le contexte de connection avec : 
            setIsConnected(!isConnected);
        else (le cas ou le cas n'est pas reconnu, on va supprimer les données adresse et mdp stockée dans le userContexte) avec : 
        5. changeContexteUser("","","","","")*/

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
