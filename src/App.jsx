import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const Calculator = () => <h1>Calculator</h1>
const Quote = () => <h1>Quote</h1>

function App() {
  return (
    <div className="App">
      <header className="Header-Container">
          <h1 className="Tittle"> Math Magicians</h1>
          <ul>
            <Link to="/"><li className="menu">Home</li></Link>
            <Link to="/calculator"><li className="menu">Calculator</li></Link>
            <Link to="/quote"><li className="menu">Quote</li></Link>
          </ul>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quote' element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
