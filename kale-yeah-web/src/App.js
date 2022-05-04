import { Route, Routes } from 'react-router-dom';

import './index.css';
import LandingPage from './pages/Landing';

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
