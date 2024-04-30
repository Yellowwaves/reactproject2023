import React, { useState, useEffect } from 'react';
import Map from "./pages/Map";
import List from "./pages/List";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [page, setPage] = useState("map");
  const [seismes, setSeismes] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Nouvel état pour l'indicateur de chargement

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/1000')
      .then(res => res.json())
      .then(json => {
        setSeismes(json);
        setIsLoading(false); // Met à jour l'état isLoading une fois les données chargées
      })
      .catch(error => console.error(error));
  }, []);

  const link = (page) => {
    window.location.href = "#";
    setPage(page);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-animation">
          <img src="https://i.gifer.com/7TZe.gif" alt="Loading" />
        </div>
      ) : (
        <>
          <Header />
          {page === 'map' ? (
            <Map source={seismes} link={link} />
          ) : (
            <List source={seismes} link={link} />
          )}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;