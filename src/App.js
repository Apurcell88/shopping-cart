import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Nav';
// import Shop from './Components/Shop';

function App(props) {
  return (
    <div>
      <Header />
      <div className="landing-container">
        <h1>Nvidia RTX 4070 Ti</h1>
        <h2>Available January 2023, preorder now.</h2>
      </div>
    </div>
  );
}

export default App;
