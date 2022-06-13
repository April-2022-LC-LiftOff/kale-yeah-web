import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourLists from '../ProfilePage/YourLists'
import './DisplayRecipe.css'
const Image = require('../IngredientPage/placeholder-img.png');

const DisplayIngredient = (props) => {
  const location = useLocation();

  return (
    <div className='display-recipe'>
    <Header />
    <h1>{location.state.name}</h1>
    
    <div className='recipe-container'>
      
      <div className='container-left'>
      <img className="recipe-img-lg" src={location.state.image} alt={props.name}></img>
      
      <div className='recipe-specs'>
      <h2>Recipe Info:</h2>
      <p>Prep Time: {Math.floor(Math.random()*100)+1} mins</p>
      <p>Cook Time: {Math.floor(Math.random()*100)+1} mins</p>
      <p>Yield: {Math.floor(Math.random()*12)+1} servings</p>
      <h2>Ingredients:</h2>
      <p>Ingredient 1</p>
      <p>Ingredient 2</p>
      <p>Ingredient 3</p>
      <h2>Directions:</h2>
      <p>Step 1:</p>
      <p>Step 2:</p>
      <p>Step 3:</p>
      </div>
      
      </div>

      <div className='container-right'>
        <YourLists />
      </div>
    </div>
    
      
    <Footer />
    </div>
  )
}

export default DisplayIngredient
