import { useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from 'react-bootstrap/Button';
import Filter from "../components/Filter";
import { Mapheader } from "../components/globe/Mapheader";


function List({ source, link }) {
  const [filteredSeismes, setFilteredSeismes] = useState(source.seismes);

  const handleFilter = (country, magnitude) => {//depart null
    let newFilteredSeismes =source.seismes;
    console.log('Filtre de liste', country,",", magnitude)

    if (country && country!=-1) {
      newFilteredSeismes = newFilteredSeismes.filter((seisme) => seisme.pays === country);
    }

    if (magnitude && magnitude!=-1) {
      newFilteredSeismes = newFilteredSeismes.filter((seisme) => {
        return seisme.mag >= magnitude-1 && seisme.mag < magnitude 
        //console.log(seisme.mag, magnitude, seisme.mag >= magnitude && seisme.mag < magnitude + 1) 
      })
    }
    setFilteredSeismes(newFilteredSeismes);
  };

  React.useEffect(() => {
    console.log('LOAD SEISMES', filteredSeismes)
  }, [filteredSeismes])
  // console.log('Fait le return',filteredSeismes)
  if (filteredSeismes) {
    console.log('Les seismesfiltré existe', filteredSeismes)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Filter countries={['Alaska', 'Nevada']} onFilter={handleFilter} />
          {filteredSeismes && <Mapheader seismes={filteredSeismes}></Mapheader>}
          
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
              {filteredSeismes && filteredSeismes.map((seisme) => (
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
