import  './Features.css';

const Tomatoes = require('../../images/tomatoes.png');
const Recipe = require('../../images/recipe.jpg');
const List = require('../../images/list.png');

const Features = () => {
  return (
    <div className="featuresContainer">
      <div className="featuresBox">
          <h2>Search Ingredients</h2>
          <p>Find foods from your favorite grocery store.</p>
          <img src={Tomatoes} className="featuresImage" alt="tomatoes"></img>
      </div>

      <div className="featuresBox">
          <h2>Find Recipes</h2>
          <p>Discover new recipes your family will love.</p>
          <img src={Recipe} className="featuresImage" alt="recipe"></img>
      </div>

      <div className="featuresBox">
          <h2>Make Lists</h2>
          <p>Be prepared for your next grocery trip.</p>
          <img src={List} className="featuresImage" alt="grocery list"></img>
      </div>
      
      
    </div>
  )
}

export default Features
