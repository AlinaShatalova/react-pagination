import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonsList from "./components/PokemonsList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/react-pagination?" element={<PokemonsList />} />
      </Routes>
    </Router>
  );
};

export default App;