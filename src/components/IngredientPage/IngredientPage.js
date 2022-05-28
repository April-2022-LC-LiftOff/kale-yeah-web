import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Header from '../HeaderBar/Header'
import IngredientComponent from './IngredientComponent'
import Footer from '../Navigation/Footer'
import './IngredientPage.css'

const IngredientPage = () => {
  
  const search = useLocation().search;
  const ingredient = new URLSearchParams(search).get('name');
  const [data, setData] = useState([]);

  const fetchNameUrl = (name) => `http://localhost:8080/ingredients/${name}`;
  // const data = axios.get(fetchNameUrl(ingredient)).then(response => response.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchNameUrl(ingredient));
        setData(response.data)
      } catch (error) {
        
      }
    }
    fetchData();
  }, [])
  
  


  // const data = response.then(response => response.data);
  console.log(data.results);
  
  // if (response.data.results.length === 0) {
  //   return (
  //     <div className='ingredient-page'>
  //     <Header />
  //     <h1>Results: {ingredient}</h1>
  //     <h2>No Results Found. Search Again</h2>
  //     <Footer />
  //     </div>
  //   )
  // }

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
