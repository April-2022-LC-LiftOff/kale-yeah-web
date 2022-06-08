import { React, useState } from 'react'
import axios from 'axios'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import './CreateGroceryListPage.css'
const Image = require('../IngredientPage/placeholder-img.png')


const CreateGroceryListPage = () => {
  const [ingredient, setIngredient] = useState("");
  const [data, setData] = useState([]);
  const components = [];
  const [items, setItems] = useState([]);

    const renderComponents = () => {
      let key = 1;
      data.map((item) => {
        const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        const renderComponent = () => {
          return (
            <div key={key} className='ingredient-component'>
              <h2>{name}</h2>
              <img className="ingredient-img" src={Image} alt={name}></img>
              <p>Price: ${Math.floor(Math.random()*10)}.{Math.floor(Math.random()*10)}{Math.floor(Math.random()*10)}</p>
              <p>Calories: {Math.floor(Math.random()*500)}</p>
      
              <div id='ing-btn'>
                <button 
                onClick={addItem({name})}
                value={name}>
                Add to List
                </button>
              </div>
            </div>          
          )
        }
        components.push(renderComponent());
        key = key + 1;
      })
    }

    const addItem = (item) => {
      setItems(items => [...items, item])
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
        const result = await axios.get(`http://localhost:8080/ingredients/${ingredient}`,
           {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }});
        setData(result.data.results);
    };

    renderComponents();
    console.log(items);
  
  
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

        {/* {(() => {
          if (items > 0) {
            items.map((item) => {
              return <label className='item-checks'>
              <input 
              type='checkbox'
               />
              {item}
          </label>
            })
          }
        })} */}

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


      <h2 className='h2'>Search For Ingredients:</h2>
      <div className='ingredient-search'>
        <form onSubmit={handleSubmit}>
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
            {components.map((comp) => {
              return (
                <div key={comp.key} className='ing-results'>{comp}</div>
              )
            })}
     
        </div>
          
          
          
      


    <Footer />
    </div>
  )
}

export default CreateGroceryListPage
