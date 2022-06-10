import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import './CreateGroceryListPage.css'
import { Context } from '../../Context'
const Image = require('../IngredientPage/placeholder-img.png')

const CreateGroceryListPage = () => {
  const [ingredient, setIngredient] = useState("");
  const [data, setData] = useState([]);
  const components = [];
  const [items, setItems] = useState([]);
  const [toBeDeleted, setToBeDeleted] = useState([]);

    const renderComponents = () => {
      data.map((item) => {
        const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        const id = item.id
        const renderComponent = () => {
          return (
            <div key={id} className='ingredient-component'>
              <h2>{name}</h2>
              <img className="ingredient-img" src={Image} alt={name}></img>
              <p>Price: ${Math.floor(Math.random()*10)}.{Math.floor(Math.random()*10)}{Math.floor(Math.random()*10)}</p>
              <p>Calories: {Math.floor(Math.random()*500)}</p>
      
              <div id='ing-btn'>
                <button 
                onClick={() => {
                  const newItem = {name: `${name}`, key: `${id}`};
                  setItems([...items, newItem])
                }}
                value={name}>
                Add to List
                </button>
              </div>
            </div>          
          )
        }
        components.push(renderComponent());
      })
    }

    const handleCheck = (key) => {
        if (!toBeDeleted.includes(key)){
          setToBeDeleted([...toBeDeleted, key])
        } else {
          const tempArray = [];
          toBeDeleted.map((i) => {
            if (i != key){
              tempArray.push(i)
            } return tempArray
          })
          setToBeDeleted(tempArray);
        }
    }

    const deleteItems = () => {
      const tempArray = [];
      items.map((i) => {
        if (!toBeDeleted.includes(i.key)){
          tempArray.push(i);
        }
      });
      setItems(tempArray);
      setToBeDeleted([]);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
        const result = await axios.get(`http://localhost:8080/ingredients/${ingredient}`,
           {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }});
        setData(result.data.results);
    };

    renderComponents();
    const {name, setName} = useContext(Context)
    const {date, setDate} = useContext(Context)
    const redirect = useNavigate();


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

      <div className='items'><p>Items:</p></div>
      
      <div className='list-items'>
        {items.map((item) => {
          return <label key={item.key} className='item-checks'>
          <input 
          type='checkbox'
          onChange={() => {handleCheck(item.key)}}
           />
          {item.name}
          </label>
        })}
      </div>

      <div className='list-btns'>
         <div className='save' id='save'>
            <button onClick={handleRedirect}>
               Save List
            </button>
         </div>
            
         <div className='delete' id='delete'>
            <button onClick={deleteItems}>
               Delete Items
            </button>
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
