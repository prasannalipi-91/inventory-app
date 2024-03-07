import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'grey',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} varient="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
