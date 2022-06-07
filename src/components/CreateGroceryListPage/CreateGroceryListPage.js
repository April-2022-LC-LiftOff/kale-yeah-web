import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
const Image = require('../IngredientPage/placeholder-img.png')

import './CreateGroceryListPage.css'

const CreateGroceryListPage = () => {
  const [ingredient, setIngredient] = useState("");
  const [data, setData] = useState([]);
  const fetchNameUrl = (name) => `http://localhost:8080/ingredients/${name}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(fetchNameUrl(ingredient));
      setData(result.data.results);
    };
    fetchData(); 
}, []);
      
  
  
  return (
    <div className='create-list'>
      <Header />
      <h1>Create Grocery List</h1>

      <div className='list-inputs'>
          <div className='name'>
            <p>Name:</p>
            <input 
            type='text'/>
          </div>

          <div className='date'>
            <p>Date:</p>
            <input 
            type='text'/>
          </div>
      </div>

      <div className='list-items'>

        <div className='items'><p>Items:</p></div>

        {/* need a for each loop here that dynamically displays
        what items are currently in the Grocery List
        Should be checkboxes that allow for deletion */}

        <div className='list-btns'>

          <div id='delete'>
            <button>
               Delete Items
            </button>
            </div>

            <div id='save'>
            <button>
               Save List
            </button>
            </div>

        </div>
      </div>


      <h2>Search For Ingredients:</h2>
      <div className='ingredient-search'>
        <form onSubmit={console.log(data)}>
        <input 
              className='ing-search-box'
              type="text" 
              placeholder="Search"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              />
        </form>
        </div>

        <div className='ing-search-results'>
          {data != 0 ? () => {
            return data.map((item) => {
              return <div className='ing-component'>
              <h2>{item.name}</h2>
              <img className="ing-img" src={Image} alt={item.name}></img>
              <p>Price: $9.99</p>
              <p>Calories: 2500</p>
              
              <div id='save'>
                <button>
                 Add To List
                </button>
              </div>
        
            </div>
            })

          } : null}
        </div>
          
          
          
      


    <Footer />
    </div>
  )
}

export default CreateGroceryListPage
