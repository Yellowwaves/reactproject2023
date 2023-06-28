import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Fiche from "../components/Card";
import Footer from '../components/Footer';
import Header  from '../components/Header';
import { Mapheader } from "../components/globe/Mapheader";

function Map({ source, link }) {
  let seismes = source?.seismes || [];
  console.log(source?.seismes);
  return (
    <div className="container mt-4">
      {seismes && <Mapheader seismes={seismes}></Mapheader>}
      <div className="row">
        <div className="col-12">
          <h2>Derniers séismes</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {seismes.slice(-10).map((seisme) => (
              <div className="col" key={seisme.id}>
                <Fiche key={seisme.id} seisme={seisme} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-auto"> {/* Utilisation de la classe "mt-auto" pour pousser vers le bas */}
        <div className="col-12">
          <button className="btn btn-primary me-2" onClick={() => link("map")}>
            Carte
          </button>
          <button className="btn btn-primary" onClick={() => link("list")}>
            Liste des séismes
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Carte</p>
        </div>
      </div>
    </div>
  );
}

export default Map;
