import React from 'react';
import './CreateModal.css';
import { useNavigate } from 'react-router';

function CreateModal({ closeModal }) {

  let navigate  = useNavigate();

  function handleClickGrocery() {
    navigate('/create-list')
  }

  return (
    <div className='modal-container'>
      <p>What would you like to create?</p>
      <div className='buttons'>
          <button onClick={handleClickGrocery} className='list-btn'>
            Grocery List
          </button>
          
          <button className='recipe-btn'>
            Recipe
          </button>        
      </div>
    </div>

  )
}

export default CreateModal
