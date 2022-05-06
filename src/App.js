import { Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage/Landing';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} exact/>
      </Routes>
  
    </div>
  );

}

export default App;
