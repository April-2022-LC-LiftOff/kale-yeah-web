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
        <tbody>
          <tr>
            <button onClick={handleClickGrocery} className='list-btn'>
              Grocery List
            </button>
          </tr>
          <tr>
            <button className='recipe-btn'>
              Recipe
            </button>
          </tr>
          {/* <tr>
            <button onClick={() => closeModal(false)} className='close-btn'>
              Close
            </button>
          </tr> */}
        </tbody>
        
        
      </div>
    </div>

  )
}

export default CreateModal
