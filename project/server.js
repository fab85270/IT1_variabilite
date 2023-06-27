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
app.post('/addUser', (req, res) => {

    const newUser = req.body;
    console.log(req.body)
    fs.readFile('./src/data/users.json', 'utf8', (err, data) => {
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

        fs.writeFile('./src/data/users.json', updatedUsers, 'utf8', (err) => {
            if (err) {
                console.error('Echec d\'écriture du fichier:', err);
                res.status(500).json({ error: 'Échec de l\'ajout de l\'utilisateur' });
                return;
            }

            res.json({ message: 'Utilisateur ajouté avec succès !' });
        });
    });
});

// Cette requete GET permet de recuperer un user, a partir de son email
//requete example: http://localhost:3001/getUserByEmail?adresseMail=email, a remplacer "email" par un email existant
app.get('/getUserByEmail', (req, res) => {
    // Get the email parameter from the query string
    const email = req.query.adresseMail;
    console.log(req.query)
        // Read the user data from the JSON file
    fs.readFile('./src/data/users.json', 'utf8', (err, data) => {
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
app.delete('/deleteUserByEmail', (req, res) => {
    // Get the email parameter from the query string
    const email = req.query.adresseMail;

    // Read the user data from the JSON file
    fs.readFile('./src/data/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Echec de lecture du fichier:', err);
            res.status(500).json({ error: 'Échec de la suppresion de l\'utilisateur' });
            return;
        }

        // Parse the JSON data into an array of users
        let users = JSON.parse(data);

        // Find the index of the user with the matching email
        const index = users.findIndex((user) => user.adresseMail === email);

        if (index !== -1) {
            // Remove the user from the array
            users.splice(index, 1);

            // Convert the updated array back to JSON
            const updatedUsers = JSON.stringify(users);

            // Write the updated JSON data to the file
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