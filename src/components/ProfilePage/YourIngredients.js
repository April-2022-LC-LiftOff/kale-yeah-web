import React from 'react'
import './YourIngredients.css';
const Fridge = require('./fridge.jpg');
const Pantry = require('./pantry.jpg');

const YourPantry = () => {
  return (
    <div className='your-pantry'>
      <h2>Your Ingredients</h2>

      <div className='pantry-images'>
          <div className='fridge'>
            <img className="pantry-image" src={Fridge} alt="Your Fridge"></img>
            <p>Your Fridge</p>
          </div>

          <div className='pantry'>
            <img className="pantry-image" src={Pantry} alt="Your Pantry"></img>
            <p>Your Pantry</p>
          </div>
          
        </div>




    </div>
  )
}

export default YourPantry
