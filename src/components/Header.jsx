import React from 'react';
import TypingEffect from 'react-typing-effect';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
return (
<header class="navbar navbar-dark bg-dark shadow-sm">
  <div class="container">
  <span class="navbar-brand mb-0 h1"><TypingEffect
         text="Projet Symfony/React 2023 - Séismes"
         speed={20}
         eraseDelay={1000}
         eraseSpeed={50}
       /></span>
  </div>
</header>
);
}

export default Header;
