import { React, useState } from 'react';
import CreateModal from './CreateModal';
import './CreateButton.css'


const CreateButton = () => {
  
const [showModal, setShowModal] = useState(false);

// const [buttonText, setButtonText] = useState("Create");

// const changeText = (text) => setButtonText(text);

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
      {/* {showModal && <CreateModal onClose={showModalHandler}/>} */}
      {showModal && <CreateModal closeModal={setShowModal}/>}
    </div>
  )
}

export default CreateButton
