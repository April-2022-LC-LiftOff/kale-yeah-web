import { React, useState, useContext } from 'react'
import axios from 'axios'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import './CreateGroceryListPage.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'
const Image = require('../IngredientPage/placeholder-img.png')

const CreateGroceryListPage = () => {
  const [ingredient, setIngredient] = useState("");
  const [data, setData] = useState([]);
  const {name, setName} = useContext(Context)
  const {date, setDate} = useContext(Context)
  const redirect = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
      const result = await axios.get(`http://localhost:8080/ingredients/${ingredient}`,
         {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }});
      setData(result.data.results);
    };
    console.log(data)

    const handleRedirect = () => {
      redirect("/view-list")
    }
     console.log(name)

     const handleNameSubmit = () => {
       return name
     }

     const handleDateSubmit = () => {
      return date
    }
  
  return (
    <div className='create-list'>
      <Header />
      <h1>Create Grocery List</h1>

      <div className='list-inputs'>
        <form onSubmit={handleNameSubmit}>
          <div className='name'>
            <p>Name:</p>
            <input
            value={name} 
            onChange={(e) => setName(e.target.value)}
            type='text'/>
          </div>
        </form>

        <form onSubmit={handleDateSubmit}>
          <div className='date'>
            <p>Date:</p>
            <input 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type='text'/>
          </div>
        </form>
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
            <button onClick={handleRedirect}>
               Save List
            </button>
            </div>

        </div>
      </div>


      <h2>Search For Ingredients:</h2>
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
