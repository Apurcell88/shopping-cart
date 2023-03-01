import { useEffect, useState } from 'react';
import Card from './Card';

const Shop = () => {
  const [recipes, setRecipes] = useState([]);

  // make the api call
  useEffect(() => {
    async function getShopItems() {
      const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=f30de92dacbc42659e6655da8dca76e9');
      const dishes = await res.json();

      // save the data into recipes state
      dishes.results.map(dish => {
        return setRecipes((prev) => [...prev, { title: dish.title, img: dish.image }]);
      });
    };

    getShopItems();
  }, []);

  // console.log(recipes);

  return (
    <section>
      <article className="shop-container">
        <h1 id='shop-title-text'>The Good Stuff</h1>
        <label htmlFor="dishes-search">
          Search Dishes: 
          <input id="dishes-search" />
        </label>
      </article>
      <article className='card-container'>
        {recipes.map(recipe => {
          return (
            <Card
              recipes={recipes}
              dish={recipe.title}
              dishImage={recipe.img}
            />
          )
        })}
      </article>
    </section>
  );
}
 
export default Shop;