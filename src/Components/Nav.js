import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
  return (
    <Navbar sticky="top" bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand className='nav-text'>Razor Edge PC</Navbar.Brand>
        <div>
            {/* make button have onClick that toggles the search state */}
            <button
              className='search-btn'
              onClick={() => {
                props.setSearch(!props.search);
              }}
            > 
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-text' to="/">Home</Link>
            <Link className='nav-text' to="/shop">Shop</Link>
            <Link className='nav-text' to="/cart">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;