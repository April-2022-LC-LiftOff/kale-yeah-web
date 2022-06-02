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
  const components= [];

  useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(fetchNameUrl(ingredient),);
        setData(result.data.results);
      };
      fetchData(); 
  }, []);
  

  const renderComponents = () => {
    let key = 1;
    data.map((item) => {
      const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      const renderComponent = () => {
        return (
          <IngredientComponent key={key} name={name} image={item.image} />
        )
      }
      components.push(renderComponent());
      key = key + 1;
    })
  }

  renderComponents();

  
  if (data.length === 0) {
    return (
      <div className='ingredient-page'>
      <Header />
      <h1>Results: </h1>
      <h2>No Results Found. Search Again</h2>
      <Footer />
      </div>
    )
  } else return (
    <div className='ingredient-page'>
      <Header />
      <h1>Results: {ingredient}</h1>

      <div className='results-container'>
          
         {components.map((comp) => {
           return (
             <div key={comp.key} className='results-box'>{comp}</div>
           )
         })}
        
      </div>
      <Footer />
    </div>
  )
}

export default IngredientPage
