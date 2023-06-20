import { useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from 'react-bootstrap/Button';
import Filter from "../components/Filter";
import FicheFiltre from "../components/CardFiltre";
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              {filteredSeismes.map((seisme) => (
                <div className="col" key={seisme.id}>
                    <FicheFiltre key={seisme.id} seisme={seisme} />
                </div>
              ))}
            </div>
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
