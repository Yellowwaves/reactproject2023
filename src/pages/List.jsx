import { useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from 'react-bootstrap/Button';
import Filter from "../components/Filter";


function List({ source, link }) {
  const [filteredSeismes, setFilteredSeismes] = useState([]);

  const handleFilter = (country, magnitude) => {
    let filteredSeismes = source.seismes;

    if (country) {
      filteredSeismes = filteredSeismes.filter((seisme) => seisme.pays === country);
    }

    if (magnitude) {
      filteredSeismes = filteredSeismes.filter((seisme) => seisme.mag <= magnitude);
    }

    setFilteredSeismes(filteredSeismes);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Filter countries={['Alaska', 'Nevada']} onFilter={handleFilter} />
        </div>
        <div className="col-md-8">
          <h1>Liste des séismes</h1>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Pays</th>
                <th>Magnitude</th>
                <th>Profondeur</th>
              </tr>
            </thead>
            <tbody>
              {filteredSeismes.map((seisme) => (
                <tr key={seisme.id}>
                  <td>{seisme.id}</td>
                  <td>{seisme.instant}</td>
                  <td>{seisme.lat}</td>
                  <td>{seisme.lon}</td>
                  <td>{seisme.pays}</td>
                  <td>{seisme.mag}</td>
                  <td>{seisme.profondeur}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={() => link("map")}>
            Carte
          </button>
          <button className="btn btn-primary" onClick={() => link("list")}>
            Liste des séismes
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
