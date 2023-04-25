import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Nav';
import Card from './Card';

const Shop = () => {
  // -------- STATE MANAGEMENT --------

  // jewelry related states
  const [jewelry, setJewelry] = useState([]);
  const [displayJewelry, setDisplayJewelry] = useState(false);

  // electronics related states
  const [electronics, setElectronics] = useState([]);
  const [displayElectronics, setDisplayElectronics] = useState(false);

  // men's clothing related states
  const [menClothing, setMenClothing] = useState([]);
  const [displayMenClothing, setDisplayMenClothing] = useState(false);

  // women's clothing related states
  const [womenClothing, setWomenClothing] = useState([]);
  const [displayWomenClothing, setDisplayWomenClothing] = useState(false);


  // -------- API CALLS --------

  useEffect(() => {
    // fetch jewelry from API
    const getJewelry = async () => {
      const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
      const data = await res.json();
      // console.log(data);

      setJewelry(data);
    }

    // fetch electronics from API
    const getElectronics = async () => {
      const res = await fetch('https://fakestoreapi.com/products/category/electronics');
      const data = await res.json();
      // console.log(data);

      setElectronics(data);
    }

    // fetch men's clothing from API
    const getMenClothing = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const data = await res.json();
      console.log(data);

      setMenClothing(data);
    }

    getJewelry();
    getElectronics();
    getMenClothing();
  }, []);

  return (
    <div>
      <Header />
      <div className="shop-container">
        <div className="shop-categories-container">
          <ul className='shop-categories'>
            <li>
              <button onClick={() => {
                setDisplayJewelry(false);
                setDisplayMenClothing(false);
                setDisplayElectronics(!displayElectronics)}
              }>
                Electronics
              </button>
            </li>
            <li>
              <button onClick={() => {
                setDisplayElectronics(false);
                setDisplayMenClothing(false);
                setDisplayJewelry(!displayJewelry);
              }}>
                Jewelry
              </button>
            </li>
            <li>
              <button onClick={() => {
                setDisplayElectronics(false);
                setDisplayJewelry(false);
                setDisplayMenClothing(!displayMenClothing);
              }}>
                Men's Clothing
              </button>
            </li>
            <li>Women's Clothing</li>
          </ul>
        </div>
        <div className="shop-items-container">
          {displayElectronics ?
            electronics.map((item) => {
              return (
                <div className="power-supplies" key={item.id}>
                  <Card
                    title={item.title} 
                    image={item.image}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              )
            }) :
            ''
          }

          {displayJewelry ?
            jewelry.map((item) => {
              return (
                <div key={item.id}>
                  <Card
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              )
            }) :
            ''
          }

          {displayMenClothing ?
            menClothing.map((item) => {
              return (
                <div key={item.id}>
                  <Card
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                  />
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