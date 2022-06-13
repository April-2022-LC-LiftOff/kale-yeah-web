import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import IngredientSearchPage from './components/IngredientPage/IngredientSearchPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreateGroceryListPage from './components/CreateGroceryListPage/CreateGroceryListPage';
import ViewGroceryListPage from './components/ViewGroceryListPage/ViewGroceryListPage';
import React, { useContext } from "react";
import {Context} from './Context'
import IngredientSearchNR from './components/IngredientPage/IngredientSearchNR';
import RecipeSearchPage from './components/RecipePage/RecipeSearchPage';
import RecipeSearchNR from './components/RecipePage/RecipeSearchNR';
import DisplayIngredient from './components/IngredientPage/DisplayIngredient';
import DisplayRecipe from './components/RecipePage/DisplayRecipe';
import ViewGroceryListDummy from './components/ViewGroceryListPage/ViewGroceryListDummy';


function App() {

  const {regUsername} = useContext(Context);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} exact/>
        <Route path='/ingredientsearch' element={<IngredientSearchPage />} exact/>
        <Route path='/ingredientsearch404' element={<IngredientSearchNR />} exact/>
        <Route path='/ingredient/:id' element={<DisplayIngredient />} exact/>
        <Route path= {`profile/${regUsername}`} element={<ProfilePage />} />
        <Route path='/create-list' element={<CreateGroceryListPage />} exact/>
        <Route path='/view-list/' element={<ViewGroceryListPage />} exact/>
        <Route path='/recipesearch' element={<RecipeSearchPage />} exact/>
        <Route path='/recipesearch404' element={<RecipeSearchNR />} exact/>
        <Route path='/recipe/:id' element={<DisplayRecipe />} exact/>
        <Route path='/list/:name' element={<ViewGroceryListDummy />} exact/>      
      </Routes>
    </div>
  );

}

export default App;
