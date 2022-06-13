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
          <li>Fresh Thyme for mangoes, etc</li>
          <li>Taco Bell, shhh don't tell the wife</li>
      </ul>

    </div>
  )
}

export default YourLists
