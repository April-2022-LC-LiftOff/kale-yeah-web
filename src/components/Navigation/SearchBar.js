import { React, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder, data}) => {
  
  const [state, setState] = useState(true);
  // need to tie state to the data set that's being searched
  // {state ? ingredientData : recipeData}
  // must import data sets here then?
  // perhaps need a prop then that triggers setState
  // This will also need an onSubmit handler that takes you
  // to a search results page.

  const [filteredData, setFilteredData] = useState([]);
  //this will be used to show dropdown of results

  const [wordEntered, setWordEntered] = useState("");
  // this is used to change the search icon to a close icon

  const handleFilter = (e) => {
      const searchWord = e.target.value;
      const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
          setFilteredData([])
      } else {
        setFilteredData(newFilter)
      }
  }

  const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
  }




    return (
    <div className='search'>
        <div className='searchInputs'>
            <input 
              type="text" 
              placeholder={placeholder} 
              value={wordEntered}
              onChange={handleFilter}/>
            {/* <div className='searchIcon'>

            </div> */}
        </div>
        
        {filteredData.length != 0 && (
        <div className='dataResult'>
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                    <a className='dataItem' href={value.link} target="_blank">
                        <p>{value.title}</p>
                    </a>
                );
            })
          })
        </div>
        )}
        
        <div className='checkboxes'>
            <label>
                <input type='checkbox' />
                Ingredients
            </label>
            <label>
                <input type='checkbox' />
                Recipes
            </label>
        </div>

      
    </div>
  );
}

export default SearchBar