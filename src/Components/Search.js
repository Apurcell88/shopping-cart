import Card from "./Card";

const Search = (props) => {
  // if props.search is true, display the search-container.
  // if props.search is false, check if the searchInput matches any of the category state titles, display that card
  if (props.search) { // can't set props.search as false inside since this runs when true
    return (
      <div className="search-container">
        <input
          className="search-input"
          onChange={(e) => {
            props.setSearchInput(e.target.value);
          }}
        />
        <button onClick={() => {
          props.setSearchInput(props.searchInput)
          props.setSearch(!props.search); // this is always displaying as true, problem
          console.log(props.search)
          props.setDisplayJewelry(false);
          props.setDisplayElectronics(false);
          props.setDisplayMenClothing(false);
          props.setDisplayWomenClothing(false);
        }}>
          Search
         </button>
      </div>
    );
  } else {
    props.electronics.map(item => {
      if (item.title == props.searchInput) {
        return (
          <div className="shop-item">
            <Card
              title={item.title} 
              image={item.image}
              description={item.description}
              price={item.price}
            />
          </div>
        )
      }
    })

    props.menClothing.map(item => {
      if (item.title == props.searchInput) {
        return (
          <div className="shop-item">
            <Card
              title={item.title} 
              image={item.image}
              description={item.description}
              price={item.price}
            />
          </div>
        )
      }
    })
  }
}
 
export default Search;