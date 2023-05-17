import Typing from 'react-typing-effect';
import React from 'react';
function Footer() {
    return (
      <footer>
        <div className="container">
            <div>
            Projet Seismes 2023 - React
            </div>
          <div>
              Elouan Teissere et Florian Chabreiron<Typing speed={50} cursor="_" />
              </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;