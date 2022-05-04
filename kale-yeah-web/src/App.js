import './index.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      {/* <Header /> */}
      <Welcome />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
