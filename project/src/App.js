import './App.css';
import React from "react";
import HomePage from './pages/HomePage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}



export default App; // Ceci permet d'avoir le composant app dans toute l'application.
