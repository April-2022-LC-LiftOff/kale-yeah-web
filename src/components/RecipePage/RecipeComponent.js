import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeComponent.css'

const RecipeComponent = (props) => { 

  return (
    <div className='recipe-component'>
      <a className='link' 
        onClick={() => {
          navigate(`../recipe/${props.id}`, {state: {name: props.name, image: props.image}});
        }}><h2>{props.name}</h2>
      <img className="ingredient-img" src={props.image} alt={props.name}></img></a>
      <p>Prep Time: {Math.floor(Math.random()*100)+1} mins</p>
      <p>Cook Time: {Math.floor(Math.random()*100)+1} mins</p>
      <p>Yield: {Math.floor(Math.random()*12)+1} servings</p>
      
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
