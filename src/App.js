import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import IngredientSearchPage from './components/IngredientPage/IngredientSearchPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreateGroceryListPage from './components/CreateGroceryListPage/CreateGroceryListPage';
import ViewGroceryListPage from './components/ViewGroceryListPage/ViewGroceryListPage';
import React, { useContext } from "react";
import {Context} from './Context'

function App() {

  const {regUsername} = useContext(Context);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} exact/>
        <Route path='/ingredientsearch' element={<IngredientSearchPage />} exact/>
        <Route path= {`profile/${regUsername}`} element={<ProfilePage />} />
        <Route path='/create-list' element={<CreateGroceryListPage />} exact/>
        <Route path='/view-list' element={<ViewGroceryListPage />} exact/>
      </Routes>
  
    </div>
  );

}

export default App;
