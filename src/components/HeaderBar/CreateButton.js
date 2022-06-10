import { React, useState } from 'react';
import CreateModal from './CreateModal';
import './CreateButton.css'


const CreateButton = () => { 
const [showModal, setShowModal] = useState(false);

const showModalHandler = () => {
        if (showModal === false) {
            setShowModal(true)
        } else setShowModal(false)
    }
  
  if (showModal === false){
  return (
    <div>
        <div id='create-btn'>
          <button  
          onClick={showModalHandler}>
              Create
          </button>
        </div>
      {showModal && <CreateModal closeModal={setShowModal}/>}
    </div>
  )} else return (
    <div>
        <div id='close-btn'>
          <button  
          onClick={showModalHandler}>
              Close
          </button>
        </div>
      {showModal && <CreateModal closeModal={setShowModal}/>}
    </div>
  )
}

export default CreateButton
