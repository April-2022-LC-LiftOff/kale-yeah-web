import React from 'react';
import IngredientButton from './IngredientButton';
import './IngredientComponent.css'
const Image = require('./placeholder-img.png');

const IngredientComponent = (props) => {
  return (
    <div className='ingredient-component'>
      <h2>{props.name}</h2>
      <img className="ingredient-img" src={Image} alt={props.name}></img>
      <p>Price: ${Math.floor(Math.random()*10)}.{Math.floor(Math.random()*100)}</p>
      <p>Calories: {Math.floor(Math.random()*500)}</p>
      
      <IngredientButton type="Add to Grocery List" />
      {/* <IngredientButton type="Add to Pantry" /> */}

    </div>
  )
}

export default IngredientComponent
