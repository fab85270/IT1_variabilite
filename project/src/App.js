import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import VeloPage from './pages/VeloPage';
import VoiturePage from './pages/VoiturePage'

import LoginPage from './pages/LoginPage';
import InscriptionPage from './pages/InscriptionPage';
import PaymentPage from './pages/PaiementPage/PaiementPage';

import VerificationPermisPage from './pages/verificationPermis/verificationPermisPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from './Context/UserContext';
import { ConnectionContextProvider } from './Context/ConnectionContext';
import { PriceContextProvider } from './Context/PriceContext';
import { PermisContextProvider } from './Context/PermisContext';

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
                        <Route path="/*" element={<HomePage />} />
                        <Route path="/:category/login" element={<LoginPage />} />
                        <Route path="/:category/inscription" element={<InscriptionPage />} />
                        <Route path="/bike/location/" element={<VeloPage />} />
                        <Route path="/car/location/" element={<VoiturePage />} />
                        <Route path="/paymentPage" element={<PaymentPage />} />
                        <Route path="/verificationPermis" element={<VerificationPermisPage />} />

                    </Routes>
                </Router>
            </ConnectionContextProvider>
        </UserContextProvider>
    );
}
export default App; // Ceci permet d'avoir le composant app dans toute l'application.
