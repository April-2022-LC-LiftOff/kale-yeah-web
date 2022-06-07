import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IngredientButton.css'

const IngredientButton = () => {

  const redirect = useNavigate()

  const handleCreateList = () => {
    redirect("/create-list")
  }

  return (
    <div>
      <div id='ingredient-btn'>
        <button onClick={handleCreateList}>
          Add to Grocery List
        </button>
        <button>
          Add to Pantry
        </button>
      </div>
    </div>
  )
}

export default IngredientButton
