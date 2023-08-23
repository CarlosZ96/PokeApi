import './App.css';
import { Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const Searchpage = () => <h1>Searchpage</h1>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchpage' element={<Searchpage />} />
      </Routes>
    </div>
  );
}

export default App;
