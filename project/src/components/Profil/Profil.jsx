import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext"
import { Form, Button } from 'react-bootstrap';


const UserInfoForm = () => {
    const { user } = useContext(UserContext);
    const { adresseMail, mdp, nom, prenom, numeroTel, setAdresseMail, setNom, setPrenom, setNumero, setMdp, changeContexteUser } = useContext(UserContext);
    // const { isConnected, setIsConnected } = useContext(ConnectionContext);
    const URL = "http://localhost:3001/"
    const category = location.pathname.split("/")[1];

    console.log(adresseMail)
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
        const userData = {
            nom: nom,
            prenom: prenom,
            numeroTel: numeroTel,
            mdp: mdp
        };

        console.log(URL + category + "/users/" + adresseMail)
        fetch(URL + category + "/users/" + adresseMail, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the user context with the modified user data
                changeContexteUser(adresseMail, mdp, nom, prenom, numeroTel)
                alert("User data updated successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to update user data. Please try again.");
            });
    };

    return (
        <div>
            <h2>User Information Form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nom">
                    <Form.Label>Nom </Form.Label>
                    <Form.Control
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="prenom">
                    <Form.Label>Prénom </Form.Label>
                    <Form.Control
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                        type="text"
                        value={adresseMail}
                        readOnly
                    />
                </Form.Group>

                <Form.Group controlId="numeroTel">
                    <Form.Label>Numéro Tel </Form.Label>
                    <Form.Control
                        type="text"
                        value={numeroTel}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="mdp">
                    <Form.Label>Mot de Passe </Form.Label>
                    <Form.Control
                        type="password"
                        value={mdp}
                        onChange={(e) => setMdp(e.target.value)}
                    />
                </Form.Group>

                {/* Additional form fields */}
                <Button type="submit">Modifier</Button>
            </Form>
        </div>
    );
};

export default UserInfoForm;
