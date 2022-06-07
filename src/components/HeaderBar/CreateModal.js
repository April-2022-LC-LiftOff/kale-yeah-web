import React from 'react';
import './CreateModal.css';
import { useNavigate } from 'react-router';

// const CreateModal = (onClick, onClose) => {
//   return (
//     <div className='modal-container'>
//         <p>What would you like to create?</p>
//       <div className='buttons'>
//         <button className='list-btn'>
//           Grocery List
//         </button>
//         <button className='recipe-btn'>
//           Recipe
//         </button>
//         <button onClick={onClose}>
//           Close
//         </button>
//       </div>
        
    
//       {/* onClick needs to take user to /create path */}
    
    
//     </div>
//   )
// }

function CreateModal({ closeModal }) {

  let navigate  = useNavigate();

  function handleClickGrocery() {
    navigate('/create-list')
  }

  function handleClickRecipe() {
    navigate
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
          <tr>
            <button onClick={() => closeModal(false)}>
              Close
            </button>
          </tr>
        </tbody>
        
        
      </div>
    </div>

  )
}

export default CreateModal
