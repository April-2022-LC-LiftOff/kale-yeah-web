import React from 'react';
import './CreateModal.css';

const CreateModal = (onClick, onClose) => {
  return (
    <div className='modal-container'>
        <p>What would you like to create?</p>
      <div classname='buttons'>
        <button className='list-btn'>
          Grocery List
        </button>
        <button className='recipe-btn'>
          Recipe
        </button>
        <button onClick={onClose}>
          Close
        </button>
      </div>
        
    
      {/* onClick needs to take user to /create path */}
    
    
    </div>
  )
}

export default CreateModal
