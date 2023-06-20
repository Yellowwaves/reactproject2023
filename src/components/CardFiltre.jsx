import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { colorPalet } from "../colors.js";

function FicheFiltre({ seisme }) {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fs-5">Seisme {seisme.id}</h5>
          <p className="fs-6">
          {new Date(seisme.instant).toLocaleDateString("fr")}<br />
            Magnitude: {seisme.mag}<br />
            Location: {seisme.pays}<br />
          </p>
        </div>
        <div className="text-end">
          <span
            className="rounded-circle d-inline-block"
            style={{
              height: "20px",
              width: "20px",
              background: colorPalet[Math.round(seisme.mag)],
            }}
          ></span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FicheFiltre;
