import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = () => {
  
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get(`http://localhost:8080/ingredients/${ingredient}`,
        {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }});
    if (result.data.results.length === 0) {
        navigate('/ingredientsearch404', {state: {param: ingredient}});
        window.location.reload(false);
    } else {
        navigate(`/ingredientsearch?name=${ingredient}`);
        window.location.reload(false);
    }
  };

  
// we'll need to refactor above to link to recipe page when
// the time comes. I presume a simple if, then in handleSubmit()

  const [ingredientsChecked, setIngredientsChecked] = useState(false);
  const [recipesChecked, setRecipesChecked] = useState(false);
  const ingredientCheckHandler = () => {
        setIngredientsChecked(!ingredientsChecked);
        if (recipesChecked === true) {
            setRecipesChecked(false);
        }  
  };
  const recipeCheckHandler = () => {
        setRecipesChecked(!recipesChecked);
        if (ingredientsChecked === true) {
            setIngredientsChecked(false);
        }
  };

    return (
    <div className='search'>
        
        <div className='search-box'>
        <form onSubmit={handleSubmit}>
        <input 
              className='search-box'
              type="text" 
              placeholder="Search"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              />
        </form>
        </div>
        
        <div className='checkboxes' id='checkboxes'>
            <label className='check-input'>
                <input 
                type='checkbox'
                checked={ingredientsChecked}
                onChange={ingredientCheckHandler}
                 />
                Ingredients
            </label>
            <label className='check-input'>
                <input 
                type='checkbox'
                checked={recipesChecked}
                onChange={recipeCheckHandler}
                 />
                Recipes
            </label>
        </div>
        
    </div>
  );
}

export default SearchBar