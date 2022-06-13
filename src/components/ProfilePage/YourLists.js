import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'
import './YourLists.css'

const YourLists = () => {
  const navigate = useNavigate();
  const {name} = useContext(Context)

  return (
    <div>
      <h2>Your Lists</h2>

      <ul className='list-lists'>
          <a onClick={() => {
          navigate(`../list/farmers-market`, {state: {name: "Farmer's Market for raw milk", date:'06-11-22', item1: 'Milk', item2: 'Carrots', item3: 'Radishes', item4: 'Steak', item5: 'Coffee'}});
        }}><li>Farmer's Market for raw milk</li></a>
          <a onClick={() => {
          navigate(`../list/fresh-thyme`, {state: {name: "Fresh Thyme for mangoes", date:'06-12-22', item1: 'Mango', item2: 'Coconut milk', item3: 'Ketchup', item4: 'Cake Pops', item5: 'Coffee'}});
        }}><li>Fresh Thyme for mangoes</li></a>

          <li><a href = {`/view-list/${name}`}>{name}</a></li>
          {window.localStorage.clear}
      </ul>

    </div>
  )
}

export default YourLists
