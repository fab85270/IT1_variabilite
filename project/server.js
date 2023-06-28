const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3001; // Server en porte 3001

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Cette requete POST permet d'ajouter un nouveau compte dans un fichier json
app.post('/:category/addUser', (req, res) => {

    const newUser = req.body;
    const category = req.params.category;

    fs.readFile('./src/data/users_' + category + '.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Echec de lecture du fichier:', err);
            res.status(500).json({ error: 'Échec de l\'ajout de l\'utilisateur' });
            return;
        }

        // Parser le json en array afin de faire un push
        let users = JSON.parse(data);

        users.push(newUser);

        // Convertir l'array en json
        const updatedUsers = JSON.stringify(users);

        fs.writeFile('./src/data/users_' + category + '.json', updatedUsers, 'utf8', (err) => {
            if (err) {
                console.error('Echec d\'écriture du fichier:', err);
                res.status(500).json({ error: 'Échec de l\'ajout de l\'utilisateur' });
                return;
            }

            res.json({ message: 'Utilisateur ajouté avec succès !' });
        });
    });
});

// Cette requete GET permet de recuperer un user, a partir de ses identifiants
app.post('/:category/login', (req, res) => {
    // Get the email parameter from the query string
    const email = req.body.adresseMail;
    const mdp = req.body.mdp
    const category = req.params.category;

    // Read the user data from the JSON file
    fs.readFile('./src/data/users_' + category + '.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Echec de lecture du fichier:', err);
            res.status(500).json({ error: 'Échec de connexion' });
            return;
        }

        // Parser le json en array afin de faire un push
        const users = JSON.parse(data);

        const user = users.find((u) => u.adresseMail === email && u.mdp === mdp);
        if (user) {
            res.json(user.adresseMail)
        } else {
            res.status(404).json({ error: 'Identifiants incorrets' });
        }

    });
});

// Cette requete GET permet de recuperer un user, a partir de son email
//requete example: http://localhost:3001/car/getUserByEmail?adresseMail=email, a remplacer "email" par un email existant
app.get('/:category/getUserByEmail', (req, res) => {
    // Get the email parameter from the query string
    const email = req.query.email;
    const category = req.params.category;

    // Read the user data from the JSON file
    fs.readFile('./src/data/users_' + category + '.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Echec de lecture du fichier:', err);
            res.status(500).json({ error: 'Échec de la récupération de l\'utilisateur' });
            return;
        }

        // Parser le json en array afin de faire un push
        const users = JSON.parse(data);

        const user = users.find((u) => u.adresseMail === email);

        if (user) {
            res.json(user); // Send the user data as the response
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    });
});


// Supprimer l'utilisateur en utilisant son mail 
// /deleteUserByEmail API endpoint
app.delete('/:category/deleteUserByEmail', (req, res) => {
    // Get the email parameter from the query string
    const email = req.query.adresseMail;
    const category = req.params.category;

    fs.readFile('./src/data/users_' + category + '.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Echec de lecture du fichier:', err);
            res.status(500).json({ error: 'Échec de la suppresion de l\'utilisateur' });
            return;
        }

        let users = JSON.parse(data);

        const index = users.findIndex((user) => user.adresseMail === email);

        if (index !== -1) {
            users.splice(index, 1);

            const updatedUsers = JSON.stringify(users);

            fs.writeFile('./src/data/users.json', updatedUsers, 'utf8', (err) => {
                if (err) {
                    console.error('Erreur d\'écriture du fichier:', err);
                    res.status(500).json({ error: 'Échec de la suppresion de l\'utilisateurr' });
                    return;
                }

                res.json({ message: 'vUtilisateur supprimé avec succès!' });
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});