import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../HeaderBar/Header'
import RecipeComponent from './RecipeComponent'
import Footer from '../Navigation/Footer'
import './RecipeSearchPage.css'


const RecipePage = () => {
  
  const search = useLocation().search;
  const ingredient = new URLSearchParams(search).get('name');
  const [data, setData] = useState([]);
  const fetchNameUrl = (name) => `http://localhost:8080/recipes/${name}`;
  const components = [];
  // const navigate = useNavigate();

  useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(fetchNameUrl(ingredient));
        setData(result.data.results);
      };
      fetchData(); 
  }, []);

  const renderComponents = () => {
    let key = 1;
    data.map((item) => {
      const renderComponent = () => {
        return (
          <RecipeComponent key={key} name={item.title} image={item.image} id={item.id}/>
        )
      }
      components.push(renderComponent());
      key = key + 1;
    })
  }

  renderComponents();
  
    return (
      <div className='recipe-page'>
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

export default RecipePage
