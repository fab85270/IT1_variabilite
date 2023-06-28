import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import VeloPage from './pages/VeloPage';
import VoiturePage from './pages/VoiturePage'

import LoginPage from './pages/LoginPage';
import InscriptionPage from './pages/InscriptionPage';
import PaymentPage from './pages/PaiementPage/PaiementPage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { UserContextProvider } from './Context/UserContext';
import { ConnectionContextProvider } from './Context/ConnectionContext';
import PrivateRoute from './PrivateRoute';

function App() {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };

    return (
        <UserContextProvider>
            <ConnectionContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:category/login" element={<LoginPage />} />
                        <Route path="/:category/inscription" element={<InscriptionPage />} />
                        <Route path="/bike/location" element={<PrivateRoute path="/bike/location" element={<VeloPage />} />} />
                        <Route path="/car/location" element={<PrivateRoute path="/car/location" element={<VoiturePage />} />} />
                        <Route path="/paymentPage" element={<PrivateRoute path="/paymentPage" element={<PaymentPage />} />} />
                    </Routes>
                </Router>
            </ConnectionContextProvider>
        </UserContextProvider>
    );
}
export default App; // Ceci permet d'avoir le composant app dans toute l'application.
