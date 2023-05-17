import React from 'react';
import Card from 'react-bootstrap/Card';

function Fiche({ seisme }) {
    //console.log(seisme);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{seisme.id}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {seisme.instant}<br/>
          <strong>Magnitude:</strong> {seisme.mag}<br/>
          <strong>Location:</strong> {seisme.pays}<br/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Fiche;
