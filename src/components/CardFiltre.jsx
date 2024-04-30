import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { colorPalet } from "../colors.js";

function Fiche({ seisme }) {
  return (
    <Card className="custom-card h-100 d-inline-block">
    <div className="position-relative">
      <span
        className="position-absolute top-0 end-0 rounded-circle m-2"
        style={{
          height: "20px",
          width: "20px",
          background: colorPalet[Math.round(seisme.mag)],
        }}
      ></span>
    </div>
    <Card.Body className="d-flex flex-column justify-content-between">
      <div>
        <h5 className="card-title fs-5">Seisme {seisme.id}</h5>
        <p className="card-text fs-6">
          <strong>Date:</strong> {new Date(seisme.instant).toLocaleDateString("fr")}<br />
          <strong>Magnitude:</strong> {seisme.mag}<br />
          <strong>Location:</strong> {seisme.pays}<br />
        </p>
      </div>
    </Card.Body>
  </Card>
  );
}

export default Fiche;