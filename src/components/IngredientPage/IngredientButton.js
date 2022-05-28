import React from 'react';
import './IngredientButton.css'

const IngredientButton = (props) => {
  return (
    <div>
        <div id='ingredient-btn'>
        <button>
            {props.type}
        </button>
        </div>
    </div>
  )
}

export default IngredientButton
