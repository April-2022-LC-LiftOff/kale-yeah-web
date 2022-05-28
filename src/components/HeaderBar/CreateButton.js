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
  
  return (
    <div>
        <div id='create-btn'>
        <button  
        onClick={showModalHandler}>
            Create
        </button>
        </div>
      {showModal && <CreateModal onClose={showModalHandler}/>}
    </div>
  )
}

export default CreateButton
