import { useEffect, useState } from 'react';
import Card from './Card';

const Shop = () => {
  // recipes state
  const [items, setItems] = useState([]);

  // search state
  const [searchState, setSearchState] = useState('');

  // make the api call
  useEffect(() => {
    async function getShopItems() {
      const res = await fetch('https://fakestoreapi.com/products?limit=10');
      const data = await res.json();

      setItems(data);
    };

    getShopItems();
  });

  const handleChange = (e) => {
    const value = e.target.value
    setSearchState(value);
    console.log(searchState);
  }

  const handleClick = () => {
    // match the searchState with the recipe contained in recipes
    
  }

  return (
    <section>
      <article className="shop-container">
        <h1 id='shop-title-text'>The Good Stuff</h1>
        <label htmlFor="items-search">
           Search Products: 
          <input 
            id="items-search"
            // value={searchState}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleClick}>Search</button>
      </article>
      <article className='card-container'>
        {items.map(item => {
          return (
            <Card
              key={item.id}
              items={items}
              item={item.title}
              itemImage={item.image}
              price={item.price}
              id={item.id}
            />
          )
        })}
      </article>
    </section>
  );
}
 
export default Shop;