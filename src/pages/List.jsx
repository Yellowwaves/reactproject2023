import { useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../components/Filter";
import FicheFiltre from "../components/CardFiltre";
import { Mapheader } from "../components/globe/Mapheader";

function List({ source, link }) {
  const [filteredSeismes, setFilteredSeismes] = useState(source.seismes);
  const [seismesToShow, setSeismesToShow] = useState(10);
  const [country, setCountry] = useState(null);

  const handleFilter = (country, magnitude) => {
    let newFilteredSeismes = source.seismes;
    console.log('Filtre de liste', country, ",", magnitude)

    if (country && country !== -1) {
      newFilteredSeismes = newFilteredSeismes.filter((seisme) => seisme.pays === country);
    }

    if (magnitude && magnitude !== -1) {
      newFilteredSeismes = newFilteredSeismes.filter((seisme) => {
        return seisme.mag >= magnitude - 1 && seisme.mag < magnitude
      })
    }
    setFilteredSeismes(newFilteredSeismes);
  };

  React.useEffect(() => {
    console.log('LOAD SEISMES', filteredSeismes)
  }, [filteredSeismes])

  if (filteredSeismes) {
    console.log('Les seismes filtré existent', filteredSeismes)
  }

  const countries = Array.from(new Set(source.seismes.map((seisme) => seisme.pays)));

  const handleSeeMore = () => {
    setSeismesToShow(seismesToShow + 10);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Filter countries={countries} onFilter={handleFilter} />
          {filteredSeismes && <Mapheader seismes={filteredSeismes}></Mapheader>}
        </div>
        <div className="col-md-8">
          <h1>Liste des séismes</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {filteredSeismes.slice(0, seismesToShow).map((seisme) => (
              <div className="col mb-4" key={seisme.id}>
                <FicheFiltre key={seisme.id} seisme={seisme} />
              </div>
            ))}
          </div>
          {seismesToShow < filteredSeismes.length && (
            <button className="btn btn-primary mt-3" onClick={handleSeeMore}>
              Voir plus
            </button>
          )}
          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={() => link("map")}>
              Carte
            </button>
            <button className="btn btn-primary" onClick={() => link("list")}>
              Liste des séismes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;