import logo from './logo.svg';
import kale from './images/kale-cut.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kale} alt="Kale Yeah" />
        <p>
          Hello, World!
        </p>
        <a
          className="App-link"
          href="https://memegenerator.net/instance/75219242/the-most-interesting-man-in-the-world-i-dont-always-eat-kale-but-when-i-do-i-dont"
          target="_blank"
          rel="noopener noreferrer"
        >
          Is Kale Actually Good For You?
        </a>
      </header>
    </div>
  );
}

export default App;
