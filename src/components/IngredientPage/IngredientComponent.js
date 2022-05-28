import React from 'react';
import IngredientButton from './IngredientButton';
import './IngredientComponent.css'
const Pizza = require('./pizza.jpg');

const IngredientComponent = (name, image, price) => {
  return (
    <div className='ingredient-component'>
      <h2>Pizza</h2>
      <img className="ingredient-img" src={Pizza} alt="pizza"></img>
      <p>Price: $9.99</p>
      <p>Calories: 2500</p>
      
      <IngredientButton type="Add to Grocery List" />
      <IngredientButton type="Add to Pantry" />

    </div>
  )
}

export default IngredientComponent
