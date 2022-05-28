import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import IngredientPage from './components/IngredientPage/IngredientPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreateGroceryListPage from './components/CreateGroceryListPage/CreateGroceryListPage';
import ViewGroceryListPage from './components/ViewGroceryListPage/ViewGroceryListPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} exact/>
        <Route path='/ingredient' element={<IngredientPage />} exact/>
        <Route path='/profile' element={<ProfilePage />} exact/>
        <Route path='/create-list' element={<CreateGroceryListPage />} exact/>
        <Route path='/view-list' element={<ViewGroceryListPage />} exact/>
      </Routes>
  
    </div>
  );

}

export default App;
