import './App.css';
import Home from './Home';
import About from './About';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
