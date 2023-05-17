import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Fiche from "../components/Card";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Mapheader } from "../components/globe/Mapheader";

function Map({ source, link }) {
  let seismes = source?.seismes || [];
  console.log(source?.seismes);
  return (
    <div className='App full-width'>
    <Header></Header>
    <div className="container full-height">
    {seismes && <Mapheader seismes={seismes}></Mapheader>}
      <div className="row">
        <div className="col-12">
          <h2>Derniers séismes</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              {seismes.slice(-10).map((seisme) => (
                <div className="col" key={seisme.id}>
                  <div className="card">
                    <img
                      alt="mapbox-by-lat-lon"
                      src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l+FF0000(${seisme.lon},${seisme.lat})/${seisme.lon},${seisme.lat},4,0.00,0.00/400x200@2x?access_token=pk.eyJ1IjoiamVvZnVuIiwiYSI6ImNrd3huZXZjMzAwMWkycXFtb29zeDMxdnMifQ.N0SyKbZ6Br7bCL0IPmUZIg`}
                    />
                    <Fiche key={seisme.id} seisme={seisme} />
                  </div>
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
      <div className="row">
        <div className="col-12">
          <p>Carte</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Map;
