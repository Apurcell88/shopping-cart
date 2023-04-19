import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Nav';
// import landingImg from './computer-landing-page.jpg';

function App() {
  return (
    <div>
      <Header />
      <div className="landing-container">
        <h1>Nvidia RTX 4070 Ti</h1>
        <h2>Available January 2023, preorder now.</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default App;
