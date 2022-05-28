import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Header from '../HeaderBar/Header'
import IngredientComponent from './IngredientComponent'
import Footer from '../Navigation/Footer'
import './IngredientPage.css'

const IngredientPage = () => {
  
  const search = useLocation().search;
  const ingredient = new URLSearchParams(search).get('name');

  const fetchNameUrl = (name) => `http://localhost:8080/ingredients/${name}`;
  const response = axios.get(fetchNameUrl(ingredient));
  console.log(response);
  
  return (
    <div className='ingredient-page'>
      <Header />
      <h1>Results: {ingredient}</h1>

      <div className='results-container'>
          <div className='results-box'>
          <IngredientComponent />
          </div>

          <div className='results-box'>
          <IngredientComponent />
          </div>

          <div className='results-box'>
          <IngredientComponent />
          </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default IngredientPage
