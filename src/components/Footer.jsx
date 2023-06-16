import Typing from 'react-typing-effect';
import React from 'react';
function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="align-items-center">
          <span className="text-body-secondary">© Projet Seismes 2023-React Elouan Teissere, Florian Chabreiron<Typing speed={50} cursor="_" /></span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
