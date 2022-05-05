import { Route, Routes } from 'react-router-dom';

import './index.css';
import LandingPage from './pages/Landing';
import Login from './components/Login';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<LandingPage />} exact/>
      </Routes> */}
  
      <Login />
    </div>
  );

}

export default App;
