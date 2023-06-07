import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase-setup/firebase';

const Header = (props) => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch(err){
      console.error(err);
    }
  }

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
            <div className='links-container'>
              <Link
                className='nav-text'
                onClick={signInWithGoogle}
              >
                Sign In
              </Link>
              <Link className='nav-text' to="/">Home</Link>
              <Link
                className='nav-text'
                to="/shop"
              >
                Shop
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;