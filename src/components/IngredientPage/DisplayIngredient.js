import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourLists from '../ProfilePage/YourLists'
import './DisplayIngredient.css'
const Image = require('./placeholder-img.png');

const DisplayIngredient = (props) => {
  const location = useLocation();
  const aisles = ["Produce", "Meat", "Frozen", "Dairy"];

  return (
    <div className='display-ing'>
    <Header />
    <h1>{location.state.name}</h1>
    
    <div className='ing-container'>
      
      <div className='container-left'>
      <img className="ingredient-img-lg" src={Image} alt={props.name}></img>
      
      <div className='ing-specs'>
      <h2>Grocery Info:</h2>
      <p>Price: ${Math.floor(Math.random()*10)}.{Math.floor(Math.random()*100)}</p>
      <p>Aisle: {aisles[Math.floor(Math.random()*4)]}<br/></p>
      <h2>Nutritional Info:</h2>
      <p>Calories: {Math.floor(Math.random()*1000)} cal</p>
      <p>Fat: {Math.floor(Math.random()*20)}.{Math.floor(Math.random()*100)}g</p>
      <p>Saturated Fat: {Math.floor(Math.random()*20)}.{Math.floor(Math.random()*100)}g</p>
      <p>Carbohydrates: {Math.floor(Math.random()*200)}.{Math.floor(Math.random()*100)}g</p>
      <p>Sugar: {Math.floor(Math.random()*120)}.{Math.floor(Math.random()*100)}g</p>
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
