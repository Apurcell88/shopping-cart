import './App.css';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {<Nav />}
      <article className='landing-container'>
        <h1 className='landing-text'>The World's Kitchen. Straight To Your Door.</h1>
        <Link to='./shop' style={{textDecoration: 'none'}}>
          <button className='shop-btn'>Shop Now</button>
        </Link>
      </article>
    </div>
  );
}

export default App;
