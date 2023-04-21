import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Nav';

const Shop = () => {
  // -------- STATE MANAGEMENT --------

  // power supplies related states
  const [powerSupplies, setPowerSupplies] = useState([]);
  const [displayPowerSupplies, setDisplayPowerSupplies] = useState(false);

  // case fans related states
  const [caseFans, setCaseFans] = useState([]);
  const [displayCaseFans, setDisplayCaseFans] = useState(false);


  // -------- API CALLS --------

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f7772c35fcmshc2bdac112772643p1474b7jsna0cb7709afa1',
        'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
      }
    };

    // fetch power supplies from API
    const getPowerSupplies = async () => {
      const res = await fetch('https://computer-components-api.p.rapidapi.com/power_supply?limit=5&offset=0', options);
      const data = await res.json();

      setPowerSupplies(data);
    }

    // fetch case fans from API
    const getCaseFans = async () => {
      const res = await fetch('https://computer-components-api.p.rapidapi.com/case_fan?limit=5&offset=0', options);
      const data = await res.json();

      setCaseFans(data);
    }

    getPowerSupplies();
    getCaseFans();
  }, []);
  // console.log(powerSupplies)

  // fetch case fans from API

  return (
    <div>
      <Header />
      <div className="shop-container">
        <div className="shop-categories-container">
          <ul className='shop-categories'>
            {/* onClick display the powerSupplies state. Write function for it? */}
            <li>
              <button onClick={() => {
                setDisplayCaseFans(false);
                setDisplayPowerSupplies(!displayPowerSupplies)}
              }>
                Power Supplies
              </button>
            </li>
            <li>
              <button onClick={() => {
                setDisplayPowerSupplies(false);
                setDisplayCaseFans(!displayCaseFans);
              }}>
                Case Fans
              </button>
            </li>
            <li>Ram</li>
            <li>Mouses</li>
            <li>Keyboards</li>
            <li>CPU Fans</li>
            <li>Cases</li>
            <li>Storage</li>
            <li>Processors</li>
            <li>GPUs</li>
            <li>Motherboards</li>
          </ul>
        </div>
        <div className="shop-items-container">
          {displayPowerSupplies ?
            powerSupplies.map((supply) => {
              return (
                <div className="power-supplies" key={supply.id}>
                  <h3>{supply.title}</h3>
                </div>
              )
            }) :
            ''
          }

          {displayCaseFans ?
            caseFans.map((fan) => {
              return (
                <div key={fan.id}>
                  <h3>{fan.title}</h3>
                </div>
              )
            }) :
            ''
          }
        </div>
      </div>
    </div>
  );
}
 
export default Shop;