import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { colorPalet } from "../colors.js";

function FicheFiltre({ seisme }) {
    //console.log(seisme);
    return (
      <div className="card">
            <div className="card-body">
          <h5 className="card-title">Seisme {seisme.id}</h5>
          <p>
          <span
            className="float-end rounded-circle"
            style={{
              height: "20px",
              width: "20px",
              background: colorPalet[Math.round(seisme.mag)],
            }}
          ></span>
          <strong>Date:</strong> {seisme.instant}<br />
          <strong>Magnitude:</strong> {seisme.mag}<br />
          <strong>Location:</strong> {seisme.pays}<br />
          </p>
        </div>
      </div>
    );
  }
  
  export default FicheFiltre;