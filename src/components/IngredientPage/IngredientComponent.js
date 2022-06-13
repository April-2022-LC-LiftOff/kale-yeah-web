import React from 'react';
import { useNavigate } from 'react-router-dom';
import IngredientButton from './IngredientButton';
import './IngredientComponent.css'
const Image = require('./placeholder-img.png');

const IngredientComponent = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className='ingredient-component'>
      <a className='link' 
        onClick={() => {
          navigate(`../ingredient/${props.id}`, {state: {name: props.name}});
        }}><h2>{props.name}</h2>
      <img className="ingredient-img" src={Image} alt={props.name}></img></a>
      <p>Price: ${Math.floor(Math.random()*10)}.{Math.floor(Math.random()*100)}</p>
      <p>Calories: {Math.floor(Math.random()*500)}</p>
      
      <IngredientButton />
    </div>
  )
}

export default IngredientComponent
