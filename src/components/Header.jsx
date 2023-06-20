import React from 'react';
import TypingEffect from 'react-typing-effect';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
return (
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><TypingEffect
         text="Projet Symfony/React 2023 - Séismes"
         speed={20}
         eraseDelay={1000}
         eraseSpeed={50}
       /></span>
</nav>
);
}

export default Header;
