import { useEffect, useState } from 'react';
import Card from './Card';

const Shop = () => {
  // recipes state
  const [items, setItems] = useState([]);

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

  return (
    <section>
      <article className="shop-container">
        <h1 id='shop-title-text'>The Good Stuff</h1>
          <label htmlFor="items-search">
            Search Products: 
            <input
              placeholder='Search Products' 
              id="items-search"
              onChange={(e) => {
                setSearchState({ value: e.target.value })
                // console.log(searchState.value)
              }}
              value={searchState.value}
            />
          </label>
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