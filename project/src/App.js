import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import VeloPage from './pages/VeloPage';
import LoginPage from './pages/LoginPage';
import InscriptionPage from './pages/InscriptionPage';
import PaymentPage from './pages/PaiementPage/PaiementPage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/velolocation" element={<VeloPage />} />
        <Route path="/voitureLocation" element="" />
        <Route path ="/paymentPage" element = {<PaymentPage/>}/>
      </Routes>
    </Router>
  );
}
export default App; // Ceci permet d'avoir le composant app dans toute l'application.
