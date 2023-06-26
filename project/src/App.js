import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import PageConnect from './pages/PageConnect';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<PageConnect/>} />
      </Routes>
    </Router>
  );
}



export default App; // Ceci permet d'avoir le composant app dans toute l'application.
