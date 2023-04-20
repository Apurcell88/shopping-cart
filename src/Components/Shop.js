import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Nav';

const Shop = () => {
  // state management
  const [powerSupplies, setPowerSupplies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f7772c35fcmshc2bdac112772643p1474b7jsna0cb7709afa1',
        'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
      }
    };

    const getPowerSupplies = async () => {
      const res = await fetch('https://computer-components-api.p.rapidapi.com/power_supply?limit=5&offset=0', options);
      const data = await res.json();
      // console.log(data);
      setPowerSupplies(data);
    }

    getPowerSupplies();
  }, []);
  console.log(powerSupplies)

  return (
    <div>
      <Header />
      <div className="shop-container">
        <div className="shop-categories-container">
          <ul className='shop-categories'>
            {/* onClick display the powerSupplies state. Write function for it? */}
            <li><button>Power Supplies</button></li>
            <li>Case Fans</li>
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

        </div>
      </div>
    </div>
  );
}
 
export default Shop;