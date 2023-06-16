import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

function FicheFiltre({ seisme }) {
    //console.log(seisme);
    return (
      <div className="card">
        <img
          alt="mapbox-by-lat-lon"
          src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l+FF0000(${seisme.lon},${seisme.lat})/${seisme.lon},${seisme.lat},4,0.00,0.00/400x200@2x?access_token=pk.eyJ1IjoiamVvZnVuIiwiYSI6ImNrd3huZXZjMzAwMWkycXFtb29zeDMxdnMifQ.N0SyKbZ6Br7bCL0IPmUZIg`}
        />  <div className="card-body">
          <h5 className="card-title">Seisme {seisme.id}</h5>
          <p>
          <strong>Date:</strong> {seisme.instant}<br />
          <strong>Magnitude:</strong> {seisme.mag}<br />
          <strong>Location:</strong> {seisme.pays}<br />
          </p>
        </div>
      </div>
    );
  }
  
  export default FicheFiltre;