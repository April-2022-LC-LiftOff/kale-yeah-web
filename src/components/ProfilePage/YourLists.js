import React, { useContext } from 'react'
import { Context } from '../../Context'
import './YourLists.css'

const YourLists = () => {
  const {name} = useContext(Context)
  return (
    <div>
      <h2>Your Lists</h2>

      <ul className='list-lists'>
          <li><a href = {`/view-list/${name}`}>{name}</a></li>
          {window.localStorage.clear}

          <li></li>
          <li></li>
      </ul>

    </div>
  )
}

export default YourLists
