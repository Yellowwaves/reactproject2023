import React from 'react';
import TypingEffect from 'react-typing-effect';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
return (
<Navbar bg="light" expand="lg" sticky="top">
<Container>
<Navbar.Brand>
<TypingEffect
         text="Projet Symfony/React 2023 - Séismes"
         speed={20}
         eraseDelay={1000}
         eraseSpeed={50}
       />
</Navbar.Brand>
</Container>
</Navbar>
);
}

export default Header;