import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import firestore from "../firebase-setup/firebase";

const Header = (props) => {
  return (
    <Navbar sticky="top" bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand className='nav-text'>Razor Edge PC</Navbar.Brand>
        <div>
            <button
              className='search-btn'
              onClick={() => {
                props.setSearch(!props.search);
              }}
            > 
              <FontAwesomeIcon className='nav-icon' icon={faMagnifyingGlass} />
            </button>
            <button
              className='search-btn'
              onClick={() => {
                props.setDisplayCart(!props.displayCart);
                props.setDisplayShop(!props.displayShop);
              }}
            > 
              <FontAwesomeIcon className='nav-icon' icon={faCartShopping} />
            </button>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-text' to="/">Home</Link>
            <Link
              className='nav-text'
              to="/shop"
              onClick={() => {
                console.log(firestore);
              }}
            >
              Shop
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;