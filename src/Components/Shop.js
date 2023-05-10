import React from 'react';
import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Header from './Nav';
import Card from './Card';
import Search from './Search';
import Cart from './Cart';

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

  // search related state
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // cart related state
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  // updated states to include quantity
  // update each state to include a quantity property
  // const [updatedJewelry, setUpdatedJewelry] = useState([]);

  // -------- API CALLS --------

  useEffect(() => {
    // fetch jewelry from API
    const getJewelry = async () => {
      const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
      const data = await res.json();
      // console.log(data);

      setJewelry(data);
      
      // move code below into Cart component? Having the state here is a problem
      // setUpdatedJewelry(jewelry.map(item => {
      //  return {...item, quantity: 0}
      // }));
      // console.log(updatedJewelry);
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

      setMenClothing(data);
    }

    // fetch women's clothing from API
    const getWomenClothing = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const data = await res.json();
      
      setWomenClothing(data);
    }

    getJewelry();
    getElectronics();
    getMenClothing();
    getWomenClothing();
  }, []);

  // -------- FUNCTIONS --------

  // add to cart function
  const handleCart = (arr, id) => {
    arr.map(item => {
      if (id === item.id) {
        setCart([...cart, item]);
      }
    });
    console.log(cart);
  }

  return (
    <div>
      <Header 
        search={search}
        setSearch={setSearch}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart} 
        // setDisplayElectronics={setDisplayElectronics}
        // setDisplayJewelry={setDisplayJewelry}
        // setDisplayMenClothing={setDisplayMenClothing}
        // setDisplayWomenClothing={setDisplayWomenClothing}
      />
      {search ?
        <Search
          setDisplayJewelry={setDisplayJewelry}
          setDisplayElectronics={setDisplayElectronics}
          setDisplayMenClothing={setDisplayMenClothing}
          setDisplayWomenClothing={setDisplayWomenClothing}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          search={search}
          setSearch={setSearch}
          jewelry={jewelry}
          electronics={electronics}
          menClothing={menClothing}
          womenClothing={womenClothing}
        /> :
        ''
      }

      {displayCart ?
        <Cart
          cart={cart}
          setCart={setCart}
          displayCart={displayCart}
        /> :
        ''
      }

      <div className="shop-container">
        <div className="shop-categories-container">
          <div className='shop-categories-list'>
            <ul>
              <li className='category' onClick={() => {
                setDisplayJewelry(false);
                setDisplayMenClothing(false);
                setDisplayWomenClothing(false);
                setDisplayElectronics(!displayElectronics);
              }}>
                Electronics
              </li>
              <li className='category' onClick={() => {
                setDisplayElectronics(false);
                setDisplayMenClothing(false);
                setDisplayWomenClothing(false);
                setDisplayJewelry(!displayJewelry);
              }}>
                Jewelry
              </li>
              <li className='category' onClick={() => {
                setDisplayElectronics(false);
                setDisplayJewelry(false);
               setDisplayWomenClothing(false);
                setDisplayMenClothing(!displayMenClothing)
              }}>
               Men's Clothing
              </li>
              <li className='category' onClick={() => {
                setDisplayElectronics(false);
                setDisplayJewelry(false);
                setDisplayMenClothing(false);
                setDisplayWomenClothing(!displayWomenClothing);
              }}>
                Women's Clothing
              </li>
            </ul>
          </div>
        </div>
        <div className="shop-items-container">
          {displayElectronics ?
            electronics.map((item) => {
                return (
                  <div className="shop-item" key={item.id}>
                    <Card
                      title={item.title} 
                      image={item.image}
                      description={item.description}
                      price={item.price}
                    />
                    <button
                      className='add-to-cart-btn'
                      onClick={() => {
                        handleCart(electronics, item.id);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                )
            }) :
            ''
          }

          {displayJewelry ?
            jewelry.map((item) => {
              return (
                <div className="shop-item" key={item.id}>
                  <Card
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                  />
                  <button
                    className='add-to-cart-btn'
                    onClick={() => {
                      handleCart(jewelry, item.id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              )
            }) :
            ''
          }

          {displayMenClothing ?
            menClothing.map((item) => {
                return (
                  <div className="shop-item" key={item.id}>
                    <Card
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      price={item.price}
                    />
                    <button
                      className='add-to-cart-btn'
                      onClick={() => {
                        handleCart(menClothing, item.id);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                )
            }) :
            ''
          }

          {displayWomenClothing ?
            womenClothing.map((item) => {
              return (
                <div className="shop-item" key={item.id}>
                  <Card
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                  />
                  <button
                    className='add-to-cart-btn'
                    onClick={() => {
                      handleCart(womenClothing, item.id);
                    }}
                  >
                    Add to cart
                  </button>
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