import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'

const IngredientPageNR = () => {
    const location = useLocation();

    return (
        <div className='ingredient-search-page'>
          <Header />
          <h1>Results: {location.state.param}</h1>
          <h2>No Results Found. Search Again</h2>
          <Footer />
          </div>
  )
}

export default IngredientPageNR