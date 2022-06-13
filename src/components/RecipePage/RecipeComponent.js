import React from 'react';
import { useNavigate } from 'react-router-dom';
import IngredientButton from '../IngredientPage/IngredientButton';
import './RecipeComponent.css'

const RecipeComponent = (props) => { 

  return (
    <div className='recipe-component'>
      <h2>{props.name}</h2>
      <img className="recipe-img" src={props.image} alt={props.name}></img>
      <p>Price: ${Math.floor(Math.random()*10)}.{Math.floor(Math.random()*100)}</p>
      <p>Calories: {Math.floor(Math.random()*500)}</p>
      
      <div id='ingredient-btn'>
        <button>
          Save Recipe
        </button>
      </div>
      <div id='ingredient-btn'>
        <button>
          Add to Calendar
        </button>
      </div>

    </div>
  )
}

export default RecipeComponent
