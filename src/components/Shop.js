import { useEffect, useState } from 'react';
import Card from './Card';

const Shop = () => {
  // inventory state
  const [items, setItems] = useState([]);

  // search input state
  const [searchInput, setSearchInput] = useState('');

  // search state
  const [searchState, setSearchState] = useState({ value: '' });

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
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchState({ value: searchInput });
    // setSearchInput('');
  }

  const viewInventory = () => {
    setSearchState({ value: '' });
    setSearchInput('');
  }

  return (
    <section>
      <article className="shop-container">
        <h1 id='shop-title-text'>The Good Stuff</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="items-search">
              Search Products: 
              <input
                placeholder='Search Products' 
                id="items-search"
                onChange={handleChange}
                // value={searchState.value}
                value={searchInput}
              />
            </label>
            <button className='search-btn'>Search</button>
          </form>
          <button
            className='view-all-inventory-btn'
            onClick={viewInventory}
          >
            View All Inventory
          </button>
      </article>
      <article className='card-container'>
        {searchState.value === '' ?
          items.map(item => {
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
          }) :
          items.map(item => {
            if (item.title === searchState.value) {
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
            }
          })
        }
      </article>
    </section>
  );
}
 
export default Shop;